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

  // ── Subsection strip data ─────────────────────────────────
  const SUBS_ACCENTS = ['sage','sky','gold','amber','warm','teal'];
  const SUBS_DATA = [
    { label: 'Data Science & Computing', href: 'data-science.html', items: [
      { title: 'Connectome Analysis Pipeline',      id: 'ds-01',
        desc: 'Computational work on Drosophila connectome data, including extraction, processing, graph-based representation, statistical analysis, feature generation, and visualization of neuronal and synaptic data.',
        tags: ['Python','NetworkX','Graphs'], href: 'data-science.html',
        thumb: 'data/connectome/acticle_fig4.png', thumbStyle: 'object-fit:contain;' },
      { title: 'Pre/Post Program Statistical Analysis & Behavioral Mapping', id: 'ds-02',
        desc: 'Statistical analysis of pre/post program data, integrating behavioral outcomes with geographic and environmental mapping using OpenStreetMap and Overpass Turbo. The project linked program-related behavioral measures with spatial context to support interpretation of intervention effects.',
        tags: ['R','Simulation','Statistics'], href: 'data-science.html',
        thumb: 'data/tech/mapping_screenshot.jpg', thumbStyle: 'object-position:80% 80%;' },
      { title: 'AI Geopositioning System',           id: 'ds-03',
        desc: 'Deep learning project predicting outdoor geographic position from WiFi signal fingerprints supervised by GPS data. The project involved model development, evaluation, and optimization of predictive performance.',
        tags: ['Scikit-learn','ML','Python'], href: 'data-science.html',
        thumb: 'data/geopos/both.png', thumbStyle: 'object-fit:cover;object-position:center 95%;transform:scale(2.5);transform-origin:center 90%;' },
      { title: 'Network & Graph Analysis',           id: 'ds-04',
        desc: 'Graph-based analysis of biological structures using NetworkX: tree representations, adjacency matrices, graph features, clustering, and neuron skeleton analysis for connectome research.',
        tags: ['Python','NetworkX','Networks'], href: 'data-science.html',
        thumb: 'data/connectome/pipeline_docv.png' }
    ]},
    // life-sciences.html cards — exact match (order: ls-03, ls-04, ls-01 as rendered on page)
    { label: 'Life Sciences', href: 'life-sciences.html', items: [
      { title: 'Animal Models & Behaviour',
        id: 'ls-03', href: 'life-sciences.html',
        desc: 'Behavioral neuroscience research using transgenic and pharmacological mouse models to investigate glutamatergic signaling, memory, and dopamine-related pathology.',
        tags: ['Behaviour','Neurobiology'],
        thumb: 'life%20science/neuroscience/GDH%20map.jpg' },
      { title: 'Histology & Optical Imaging',
        id: 'ls-04', href: 'life-sciences.html',
        desc: 'Specializing, providing training and consultation on, immunohistochemical staining, and optical imaging methods including 2p, confocal and fluorescence microscopy.',
        tags: ['Histology','Staining'],
        thumb: 'life%20science/histology/ifc_butterfly.jpg' },
      { title: 'Connectome Research',
        id: 'ls-01', href: 'life-sciences.html',
        desc: 'Research focused on synaptic organization and neuronal structure in the Drosophila connectome, combining biological questions with computational analysis of neuron morphology, synapses, and connectivity.',
        tags: ['Connectomics','EM'],
        thumb: 'data/connectome/article_fig1.png' }
    ]},
    // operations.html cards — exact match (ops-01, ops-02 only; no ops-03 on that page)
    { label: 'Operations', href: 'operations.html', items: [
      { title: 'Weizmann Institute Core Facility',
        id: 'ops-01', href: 'operations.html',
        desc: 'Confocal and two-photon microscopy support, protocol optimization, immunofluorescence workflows, researcher training, and facility operations across multiple laboratories.',
        tags: ['Microscopy','Research Support'],
        thumb: 'ops/2psystem.jpg' },
      { title: 'Data & Information Systems Lead',
        id: 'ops-02', href: 'operations.html',
        desc: 'Led KPI reporting and data-workflow improvements for a regional healthcare operations program, standardizing reporting logic and performance tracking across a large operational team.',
        tags: ['KPI','Power BI','Healthcare Ops'],
        thumb: 'ops/iqvia.png' }
    ]},
    // teaching.html cards — exact match (teach-01 through teach-04)
    { label: 'Teaching & Communication', href: 'teaching.html', items: [
      { title: 'Practical Neuroanatomy (TA)',
        id: 'teach-01', href: 'teaching.html',
        desc: 'Teaching assistant in a practical neuroanatomy course at the Weizmann Institute, covering tissue preparation, immunofluorescence, and microscopy for graduate researchers.',
        tags: ['Neuroanatomy','Graduate','Weizmann'],
        thumb: 'teaching/weizmann.png' },
      { title: 'University of Haifa (TA)',
        id: 'teach-02', href: 'teaching.html',
        desc: 'Teaching assistant in Python programming and Advanced Statistics and Research Methods for graduate students, supporting data analysis, statistical reasoning, and applied scientific workflows.',
        tags: ['Python','Statistics','Graduate'],
        thumb: 'teaching/haifa.png' },
      { title: 'Technology & Mapping Education',
        id: 'teach-03', href: 'teaching.html',
        desc: 'Created and delivered educational content on mapping technologies for hundreds of students and educators, in collaboration with the Israeli Ministry of Education.',
        tags: ['Technion','Ministry of Education','Curriculum'],
        thumb: 'teaching/technion.png' },
      { title: 'Computational Brain Mapping Workshop',
        id: 'teach-04', href: 'teaching.html',
        desc: 'Invited instructor for a 2-day hands-on workshop in computational brain mapping at TUM, covering connectome data analysis and visualization.',
        tags: ['Invited','Workshop','Connectome'],
        thumb: 'teaching/TUM.png' }
    ]},
    // projects.html cards — exact match (proj-01, proj-04, proj-05, proj-06)
    { label: 'Selected Projects', href: 'projects.html', items: [
      { title: 'Against All Odds',
        id: 'proj-01', href: 'projects.html',
        desc: 'Full-stack WC 2026 prediction game built with Next.js 15 and Supabase, backed by a custom ML model (Random Forest + XGBoost ensemble, 68 features) that predicts match scores and simulates the full tournament bracket. Evaluated on WC 2022: 54.7% accuracy (walk-forward).',
        tags: ['Featured','Next.js','Python ML','Supabase'],
        thumb: 'projects/wc-homepage.png' },
      { title: 'Genetic Algorithm Simulation',
        id: 'proj-04', href: 'projects.html',
        desc: '2D evolutionary simulation where agents learn to find food using genetic algorithms \u2014 selection, recombination, and mutation over generations. Demonstrates emergent learning from random vector-based \u201cgenetic\u201d data.',
        tags: ['Python','Genetic Algorithms'],
        thumb: 'projects/ga.jpg' },
      { title: 'AltPiano',
        id: 'proj-05', href: 'projects.html',
        desc: 'Pygame-based piano learning app featuring an alternative keyboard layout optimised for learning. Highlights active scales in real time, marks in-scale vs. out-of-scale notes (A/B), and supports both keyboard and mouse input.',
        tags: ['Python','Pygame'] },
      { title: 'Lab Protocol Manager',
        id: 'proj-06', href: 'projects.html',
        desc: 'Desktop app for documenting, calculating, and managing immunohistochemistry lab protocols. Includes protocol search by shared components, concentration calculators, and an auto-dated virtual lab notebook.',
        tags: ['Python','Lab Tools'] }
    ]},
    // bio.html has no card grid — items below are timeline entries used as preview only
    { label: 'Bio', href: 'bio.html', items: [
      { title: 'M.Sc. \u2014 Computational Neuroscience',
        id: null, href: 'bio.html',
        desc: 'Computational and graph-based analysis of Drosophila connectome data, neuron skeleton processing, synaptic analysis, and large-scale data pipelines. University of Haifa, 2024\u2013.',
        tags: ['University of Haifa','2024\u2013'],
        thumb: 'data/connectome/article_fig1.png' },
      { title: 'Scientific Operations',
        id: null, href: 'bio.html',
        desc: 'Research and imaging support at Weizmann Institute of Science, including core facility management, microscopy, researcher training, and cross-team project coordination. 2020\u20132024.',
        tags: ['Weizmann Institute','2020\u201324'],
        thumb: 'ops/2psystem.jpg' },
      { title: 'Data & Information Systems',
        id: null, href: 'bio.html',
        desc: 'Data operations and information systems support for Moderna\u2019s EMEA call center through IQVIA, including KPI monitoring, reporting, and process documentation. 2017\u20132020.',
        tags: ['IQVIA / Moderna','2017\u201320'],
        thumb: 'ops/iqvia.png' }
    ]}
  ];

  const subsRow     = document.getElementById('map-subs-row');
  const subsLabel   = document.getElementById('map-subs-label');
  const subsViewAll = document.getElementById('map-subs-viewall');

  function updateSubs(idx, animate) {
    const d = SUBS_DATA[idx];
    if (!d || !subsRow) return;
    const subsContainer = document.getElementById('map-subs');
    if (subsContainer) subsContainer.style.setProperty('--subs-accent', 'var(--' + SUBS_ACCENTS[idx] + ')');
    function render() {
      if (subsLabel)   subsLabel.textContent = d.label;
      if (subsViewAll) subsViewAll.href = d.href;
      subsRow.innerHTML = d.items.map(item => {
        const url = item.id ? item.href + '#' + item.id : item.href;
        const thumbHTML = item.thumb
          ? `<div class="map-sub__thumb"><img src="${item.thumb}" alt="" loading="lazy"${item.thumbStyle ? ` style="${item.thumbStyle}"` : ''}></div>`
          : '';
        return `<a class="map-sub" href="${url}">` +
          `<h3 class="map-sub__title">${item.title}</h3>` +
          `<div class="map-sub__tags">${item.tags.map(t => `<span class="map-sub__tag">${t}</span>`).join('')}</div>` +
          `<p class="map-sub__desc">${item.desc}</p>` +
          `<span class="map-sub__cta">Click for more info &#x2192;</span>` +
          thumbHTML +
          `</a>`;
      }).join('');
      subsRow.classList.remove('is-updating');
    }
    if (animate) {
      subsRow.classList.add('is-updating');
      setTimeout(render, 180);
    } else {
      render();
    }
  }

  if (labels.length && cards.length) {
    function activate(id) {
      const idx = parseInt(id, 10);
      labels.forEach(label => {
        const on = label.dataset.card === id;
        label.classList.toggle('active', on);
        label.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      cards.forEach(card => {
        card.classList.toggle('active', card.dataset.card === id);
      });
    }

    // No default selection — wait for user to pick a section
    const wheelHint  = document.getElementById('map-wheel-hint');
    const wheelRotor = document.getElementById('map-wheel-rotor');
    const mapSubsEl  = document.getElementById('map-subs');

    // Fixed rotation values: move selected subject to 3 o'clock (right side)
    const WHEEL_ROTATIONS   = ['90deg', '30deg', '-30deg', '-90deg', '-150deg', '150deg'];
    const COUNTER_ROTATIONS = ['-90deg', '-30deg', '30deg', '90deg', '150deg', '-150deg'];

    function rotateWheel(idx) {
      if (wheelRotor) {
        wheelRotor.style.setProperty('--wheel-rotation', WHEEL_ROTATIONS[idx]);
        wheelRotor.style.setProperty('--label-counter-rotation', COUNTER_ROTATIONS[idx]);
      }
    }

    function revealSelection() {
      if (wheelHint) wheelHint.classList.add('hidden');
      if (mapSubsEl && mapSubsEl.classList.contains('is-hidden')) {
        mapSubsEl.classList.remove('is-hidden');
        setTimeout(() => {
          const ratio = window.innerWidth <= 900 ? 1.18 : 0.88;
          window.scrollTo({ top: mapSubsEl.offsetTop * ratio, behavior: 'smooth' });
        }, 200);
      }
    }

    labels.forEach(label => {
      label.addEventListener('click', () => {
        const idx = parseInt(label.dataset.card, 10);
        activate(label.dataset.card);
        updateSubs(idx, true);
        rotateWheel(idx);
        revealSelection();
      });
      label.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const idx = parseInt(label.dataset.card, 10);
          activate(label.dataset.card);
          updateSubs(idx, true);
          rotateWheel(idx);
          revealSelection();
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

  // ── All Sections collapse toggle ──────────────────────────
  var sectionsToggle = document.getElementById('sections-toggle');
  var sectionsSection = document.getElementById('sections');
  if (sectionsToggle && sectionsSection) {
    sectionsToggle.addEventListener('click', function () {
      var collapsed = sectionsSection.classList.toggle('section-cards--collapsed');
      sectionsToggle.setAttribute('aria-expanded', String(!collapsed));
      sectionsToggle.innerHTML = collapsed ? 'Expand &#x2193;' : 'Collapse &#x2191;';
    });
  }

})();
