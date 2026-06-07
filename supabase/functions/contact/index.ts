// Supabase Edge Function: contact form handler

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

Deno.serve(async (req) => {
  const headers = corsHeaders();

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  }

  const { name, email, phone, message, honeypot } = body;

  // Honeypot: bots fill this — silently reject
  if (honeypot) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  }

  // Validate required fields
  const errors: string[] = [];
  if (!name || name.trim().length < 1) errors.push('Name is required.');
  if (!message || message.trim().length < 5) errors.push('Message must be at least 5 characters.');
  const hasEmail = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const hasPhone = phone && phone.trim().length > 0;
  if (!hasEmail && !hasPhone) errors.push('Please provide at least an email address or phone number.');
  if (email && !hasEmail) errors.push('Email address format is invalid.');

  if (errors.length > 0) {
    return new Response(JSON.stringify({ error: errors.join(' ') }), {
      status: 422,
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  }

  // Store in Supabase via direct PostgREST call (avoids supabase-js auth quirks)
  const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? 'https://zvltjtrxtqwbzrclpnpk.supabase.co';
  const serviceRoleKey = Deno.env.get('SERVICE_ROLE_KEY')!;

  const insertRes = await fetch(`${supabaseUrl}/rest/v1/contact_messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': serviceRoleKey,
      'Authorization': `Bearer ${serviceRoleKey}`,
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      message: message.trim(),
    }),
  });

  if (!insertRes.ok) {
    const errText = await insertRes.text();
    console.error('DB insert error:', errText);
    return new Response(JSON.stringify({ error: 'Failed to save message. Please try again.', detail: errText }), {
      status: 500,
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  }

  // Send email notification via Resend
  const resendKey = Deno.env.get('RESEND_API_KEY');
  if (resendKey) {
    const emailBody = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      phone ? `Phone: ${phone.trim()}` : null,
      ``,
      `Message:`,
      message.trim(),
    ]
      .filter((l) => l !== null)
      .join('\n');

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['amitgrock101@gmail.com'],
        subject: `Portfolio contact from ${name.trim()}`,
        text: emailBody,
      }),
    });

    if (!resendRes.ok) {
      const resendErr = await resendRes.text();
      console.error('Resend error:', resendErr);
      // Still return ok — message was saved, only email failed
      return new Response(JSON.stringify({ ok: true, emailWarning: resendErr }), {
        status: 200,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { ...headers, 'Content-Type': 'application/json' },
  });
});
