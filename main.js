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

  // ── Portfolio map wheel (click / Enter / Space to select) ────────────
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
      // Click persists the selection
      label.addEventListener('click', () => activate(label.dataset.card));
      // Keyboard Enter or Space also selects
      label.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate(label.dataset.card);
        }
      });
      // Hover: no card switch, CSS handles subtle visual hint
    });
  }

  // ── Hamburger menu ───────────────────────────────────────────
  const hamburger = document.getElementById('nav-hamburger');
  const navMenu   = document.getElementById('nav-menu');
  const navScrim  = document.getElementById('nav-scrim');

  if (hamburger && navMenu && navScrim) {
    function toggleMenu(open) {
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
      navMenu.classList.toggle('open', open);
      navMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
      navScrim.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    }

    hamburger.addEventListener('click', () => {
      toggleMenu(hamburger.getAttribute('aria-expanded') !== 'true');
    });

    navScrim.addEventListener('click', () => toggleMenu(false));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
        toggleMenu(false);
        hamburger.focus();
      }
    });
  }

})();
