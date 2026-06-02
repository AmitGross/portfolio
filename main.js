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

  // ── Portfolio map wheel (homepage only) ───────────────────
  const segs  = document.querySelectorAll('.map-seg');
  const cards = document.querySelectorAll('.map-card');

  if (segs.length && cards.length) {
    function activate(id) {
      segs.forEach(seg => {
        seg.setAttribute('aria-pressed', seg.dataset.seg === id ? 'true' : 'false');
      });
      cards.forEach(card => {
        card.classList.toggle('active', card.dataset.card === id);
      });
    }

    activate('0');

    segs.forEach(seg => {
      seg.addEventListener('mouseenter', () => activate(seg.dataset.seg));
      seg.addEventListener('focus',      () => activate(seg.dataset.seg));
      seg.addEventListener('click',      () => activate(seg.dataset.seg));
      seg.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate(seg.dataset.seg);
        }
      });
    });
  }

})();
