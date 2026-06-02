(function () {
  'use strict';

  // ── Nav scroll border ─────────────────────────────────────
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.style.borderBottomColor = window.scrollY > 8
        ? 'var(--border)'
        : 'var(--border-light)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Scroll reveal ─────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  }

  // ── Portfolio map (homepage only) ────────────────────────
  const labels = document.querySelectorAll('.map-label');
  const cards  = document.querySelectorAll('.map-card');

  if (labels.length && cards.length) {
    function activate(id) {
      labels.forEach(label => {
        const on = label.dataset.card === id;
        label.classList.toggle('active', on);
        label.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      cards.forEach(card => {
        card.classList.toggle('active', card.dataset.card === id);
      });
    }

    activate('0');

    labels.forEach(label => {
      label.addEventListener('mouseenter', () => activate(label.dataset.card));
      label.addEventListener('focus',      () => activate(label.dataset.card));
      label.addEventListener('click',      () => activate(label.dataset.card));
    });
  }

})();
