-- Contact messages table
create table if not exists contact_messages (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  email         text not null,
  phone         text,
  message       text not null,
  submitted_at  timestamptz not null default now()
);

-- Enable RLS (edge function uses service role key which bypasses RLS)
alter table contact_messages enable row level security;

-- Explicit grants so service_role can insert
grant usage on schema public to service_role;
grant insert on contact_messages to service_role;

-- No public read/write policy -- only the edge function writes via service role
