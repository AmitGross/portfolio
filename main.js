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
        tags: ['Python','NetworkX','Graphs'], href: 'data-science.html' },
      { title: 'Statistical Analysis & Simulation', id: 'ds-02',
        desc: 'Statistical analysis of experimental data including hypothesis testing, ANOVA, regression modeling, simulations, and bootstrapping to evaluate patterns in biological and tabular datasets.',
        tags: ['R','Simulation','Statistics'], href: 'data-science.html' },
      { title: 'AI Geopositioning System',           id: 'ds-03',
        desc: 'Deep learning project predicting outdoor geographic position from WiFi signal fingerprints supervised by GPS data. The project involved model development, evaluation, and optimization of predictive performance.',
        tags: ['Scikit-learn','ML','Python'], href: 'data-science.html' },
      { title: 'Network & Graph Analysis',           id: 'ds-04',
        desc: 'Graph-based analysis of biological structures using NetworkX: tree representations, adjacency matrices, graph features, clustering, and neuron skeleton analysis for connectome research.',
        tags: ['Python','NetworkX','Networks'], href: 'data-science.html' }
    ]},
    { label: 'Life Sciences', href: 'life-sciences.html', items: [
      { title: 'Connectome Research',                id: 'ls-01',
        desc: 'Research focused on synaptic organization and neuronal structure in the Drosophila connectome, combining biological questions with computational analysis of neuron morphology, synapses, and connectivity.',
        tags: ['Connectomics','EM'], href: 'life-sciences.html' },
      { title: 'Weizmann Core Facility Support',     id: 'ls-02',
        desc: 'Research and imaging support at the Weizmann Institute core facility, including confocal microscopy, immunofluorescence, researcher training, consultation, and scientific project support.',
        tags: ['Imaging','Confocal'], href: 'life-sciences.html' },
      { title: 'Animal Models & Behaviour',          id: 'ls-03',
        desc: 'Experience with behavioral research methods in neurobiology contexts, including experimental design and interpretation of behaviour-linked data.',
        tags: ['Behaviour','Neurobiology'], href: 'life-sciences.html' },
      { title: 'Histology & Optical Imaging',        id: 'ls-04',
        desc: 'Tissue preparation, immunohistochemical staining, and optical imaging methods including confocal and fluorescence microscopy for neuronal and cellular visualization.',
        tags: ['Histology','Staining'], href: 'life-sciences.html' }
    ]},
    { label: 'Operations', href: 'operations.html', items: [
      { title: 'Weizmann Institute Core Facility',   id: 'ops-01',
        desc: 'Research and imaging support at the Weizmann Institute of Science core facility, including microscopy, immunofluorescence, researcher training, consultation, and scientific project support.',
        tags: ['Core Facility','Management'], href: 'operations.html' },
      { title: 'IQVIA / Moderna EMEA Operations',    id: 'ops-02',
        desc: 'Industry operations experience supporting Moderna\'s EMEA call center through IQVIA: data and information systems, KPI monitoring, process documentation, and operational reporting.',
        tags: ['Pharma','GxP'], href: 'operations.html' },
      { title: 'Cross-Team Coordination',            id: 'ops-03',
        desc: 'Coordination across research groups, departments, and external partners in scientific and industry environments to deliver shared outcomes and manage workflows.',
        tags: ['Coordination','Strategy'], href: 'operations.html' }
    ]},
    { label: 'Teaching & Communication', href: 'teaching.html', items: [
      { title: 'Neurohistology Lab',                 id: 'teach-01',
        desc: 'Teaching assistant in a neurohistology course covering tissue preparation, immunofluorescence staining, and microscopy methods for graduate researchers at Weizmann Institute of Science.',
        tags: ['Lab','Graduate'], href: 'teaching.html' },
      { title: 'Python for Researchers (TA)',        id: 'teach-02',
        desc: 'Teaching assistant for a Python programming course for graduate students: data handling, visualisation, computational thinking, and analysis workflows.',
        tags: ['Python','TA'], href: 'teaching.html' },
      { title: 'Research Methods (TA)',              id: 'teach-03',
        desc: 'Teaching assistant in advanced research methods and correlational research, covering statistical reasoning, experimental design, and interpretation of behavioral data.',
        tags: ['Methods','Undergraduate'], href: 'teaching.html' },
      { title: 'Science Communication (MUC)',        id: 'teach-04',
        desc: 'Public-facing science communication and educational content, bridging research findings and broader audiences through accessible writing and presentation.',
        tags: ['Public','Communication'], href: 'teaching.html' }
    ]},
    { label: 'Selected Projects', href: 'projects.html', items: [
      { title: 'Against All Odds',                   id: 'proj-01',
        desc: 'A large-scale scientific computing and connectome analysis project built under complex data, workflow, and implementation constraints — a case study in data-intensive research and pipeline development.',
        tags: ['Analysis','Case Study','Data'], href: 'projects.html' },
      { title: 'AI Geopositioning System',           id: 'proj-02',
        desc: 'Deep learning project using WiFi signal fingerprinting and GPS-supervised data to predict outdoor geographic position from signal strength data.',
        tags: ['Python','ML'], href: 'projects.html' },
      { title: 'Connectome Optimisation',            id: 'proj-03',
        desc: 'Computational optimisation of connectome analysis workflows, including geodesic matrix methods for synapse distance calculations.',
        tags: ['R','Statistics'], href: 'projects.html' },
      { title: 'Genetic Algorithm Work',             id: 'proj-04',
        desc: 'Algorithmic exploration using genetic algorithm concepts for optimisation and search problems.',
        tags: ['Visualisation'], href: 'projects.html' }
    ]},
    { label: 'Bio', href: 'bio.html', items: [
      { title: 'M.Sc. \u2014 Computational Neuroscience', id: null,
        desc: 'Computational and graph-based analysis of Drosophila connectome data, neuron skeleton processing, synaptic analysis, and large-scale data pipelines. University of Haifa, 2024\u2013.',
        tags: ['University of Haifa','2024\u2013'], href: 'bio.html' },
      { title: 'Scientific Operations',              id: null,
        desc: 'Research and imaging support at Weizmann Institute of Science, including core facility management, microscopy, researcher training, and cross-team project coordination. 2020\u20132024.',
        tags: ['Weizmann Institute','2020\u201324'], href: 'bio.html' },
      { title: 'Data & Information Systems',         id: null,
        desc: 'Data operations and information systems support for Moderna\'s EMEA call center through IQVIA, including KPI monitoring, reporting, and process documentation. 2017\u20132020.',
        tags: ['IQVIA / Moderna','2017\u201320'], href: 'bio.html' }
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
        return `<a class="map-sub" href="${url}">` +
          `<h3 class="map-sub__title">${item.title}</h3>` +
          `<p class="map-sub__desc">${item.desc}</p>` +
          `<div class="map-sub__tags">${item.tags.map(t => `<span class="map-sub__tag">${t}</span>`).join('')}</div>` +
          `<span class="map-sub__cta">Click for more info &#x2192;</span>` +
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

    // Render subsections immediately on load (no animation)
    updateSubs(0, false);
    activate('0');

    labels.forEach(label => {
      label.addEventListener('click', () => {
        activate(label.dataset.card);
        updateSubs(parseInt(label.dataset.card, 10), true);
      });
      label.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate(label.dataset.card);
          updateSubs(parseInt(label.dataset.card, 10), true);
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
