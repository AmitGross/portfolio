/* detail-modal.js — Inline expandable detail panel (no modal, no overlay) */
(function () {
  'use strict';

  /* ── Real content from portfolio spec ──────────────────── */
  var CARD_DATA = {

    /* DATA SCIENCE ──────────────────────────────────────── */
    'ds-01': {
      num: '01', category: 'Data Science & Computing',
      title: 'Connectome Analysis Pipeline',
      tags: ['Python', 'NetworkX', 'Graphs', 'Connectomics'],
      desc: 'Computational work on Drosophila connectome data, including extraction, processing, graph-based representation, statistical analysis, feature generation, and visualization of neuronal and synaptic data. The work involved handling large scientific datasets, building reusable Python workflows, and creating figures and summaries to support biological interpretation.',
      context: 'The connectome project required working with complex neuronal structures, synaptic information, and large tabular datasets. The goal was to transform raw or semi-structured neural data into organized analytical outputs.',
      did: 'Built and modified Python workflows for connectome analysis \u00b7 Represented neuron structures as graph/tree objects \u00b7 Processed synapse and neuron data into tables and features \u00b7 Created visualizations and statistical summaries \u00b7 Organized the workflow into a reusable analysis pipeline.',
      methods: 'Python \u00b7 Pandas \u00b7 NumPy \u00b7 NetworkX \u00b7 Navis \u00b7 NGLUI \u00b7 statistical analysis \u00b7 data visualization \u00b7 graph analysis',
      output: 'Pipeline diagrams \u00b7 neuron/synapse visualizations \u00b7 connectivity matrices \u00b7 graph-based summaries \u00b7 statistical plots \u00b7 thesis/project figures',
      figLabel: '[Add connectome pipeline image, neuron visualization, matrix, graph, or statistical figure]'
    },
    'ds-02': {
      num: '02', category: 'Data Science & Computing',
      title: 'Statistical Analysis & Simulation',
      tags: ['R', 'Simulation', 'Statistics', 'ANOVA'],
      desc: 'Statistical analysis of experimental data including hypothesis testing, ANOVA, regression modeling, simulations, and bootstrapping to evaluate patterns in biological and tabular datasets.',
      context: '[placeholder \u2014 add project topic, research question, and dataset type]',
      did: 'Analyzed project data \u00b7 Applied statistical reasoning and tests \u00b7 Created plots, summaries, or reports \u00b7 Communicated findings to collaborators or stakeholders.',
      methods: 'Python \u00b7 R \u00b7 Pandas \u00b7 NumPy \u00b7 SciPy \u00b7 ANOVA \u00b7 t-tests \u00b7 regression \u00b7 statistical testing \u00b7 visualization',
      output: '[placeholder \u2014 add plots, tables, report screenshots, or summary figures]',
      figLabel: '[Add statistical figure or analysis summary]'
    },
    'ds-03': {
      num: '03', category: 'Data Science & Computing',
      title: 'ML & Deep Learning Projects',
      tags: ['Scikit-learn', 'ML', 'Python', 'Deep Learning'],
      desc: 'Deep learning project using WiFi signal fingerprinting and GPS-labeled data to predict outdoor geographic location from wireless signal patterns. The project involved model development, evaluation, and optimization of predictive performance.',
      context: 'Signal data from WiFi routers was paired with GPS-supervised location labels, aiming to estimate geographic position from signal patterns using neural networks.',
      did: 'Worked with tabular WiFi/GPS data \u00b7 Built or supported deep neural network modeling \u00b7 Used cross-validation and model evaluation \u00b7 Applied hyperparameter optimization methods.',
      methods: 'TensorFlow \u00b7 Keras \u00b7 Scikit-learn \u00b7 Pandas \u00b7 NumPy \u00b7 cross-validation \u00b7 Optuna \u00b7 Hyperopt \u00b7 GPS-labeled data',
      output: 'Training curves \u00b7 error distributions \u00b7 predicted vs. actual plots \u00b7 model evaluation summaries',
      figLabel: '[Add model architecture, error plot, training curve, or predicted vs. actual plot]'
    },
    'ds-04': {
      num: '04', category: 'Data Science & Computing',
      title: 'Network & Graph Analysis',
      tags: ['Python', 'NetworkX', 'Networks', 'Graphs'],
      desc: 'Graph-based analysis of biological structures and networks using Python tools. This includes tree representations of neuron skeletons, graph-derived features, adjacency matrices, clustering, and connectivity analysis.',
      context: 'Neuron skeletons and synaptic connectivity data were analyzed using graph-theoretic methods to extract structural and functional features from biological networks.',
      did: 'Represented neuron skeletons as graph/tree objects \u00b7 Computed graph-derived features \u00b7 Built adjacency matrices and connectivity summaries \u00b7 Applied clustering and dendrogram methods.',
      methods: 'NetworkX \u00b7 graph theory \u00b7 tree structures \u00b7 adjacency matrices \u00b7 hierarchical clustering \u00b7 dendrograms \u00b7 Python',
      output: 'Network diagrams \u00b7 dendrograms \u00b7 heatmaps \u00b7 graph feature plots',
      figLabel: '[Add graph diagram, heatmap, or dendrogram]'
    },

    /* LIFE SCIENCES ─────────────────────────────────────── */
    'ls-01': {
      num: '01', category: 'Life Sciences',
      title: 'Connectome Research',
      tags: ['Connectomics', 'EM', 'Neuroscience', 'Synapses'],
      desc: 'Research focused on synaptic organization and neuronal structure in the Drosophila connectome, combining biological questions with computational analysis of neuron morphology, synapses, and connectivity patterns.',
      context: '[placeholder \u2014 add specific research context, lab, and timeline]',
      did: 'Worked with connectome data and neuron skeletons \u00b7 Analyzed synaptic organization and structural features \u00b7 Developed biological interpretations from computational outputs \u00b7 Created figures and visualizations for research discussions.',
      methods: 'Connectomics \u00b7 neuron skeletons \u00b7 synapse analysis \u00b7 axon/dendrite analysis \u00b7 Neuroglancer / NGLUI \u00b7 Navis',
      output: '[placeholder \u2014 add figures, publications, or poster visuals]',
      figLabel: '[Add neuron/synapse figure or connectome visualization]'
    },
    'ls-02': {
      num: '02', category: 'Life Sciences',
      title: 'Weizmann Core Facility Support',
      tags: ['Imaging', 'Confocal', 'Immunofluorescence', 'Training'],
      desc: 'Research involvement at the Weizmann Institute, including work in a scientific environment with microscopy, immunofluorescence, researcher training, consultation, and support for multiple research projects.',
      context: '[placeholder \u2014 add dates and facility details]',
      did: 'Supported research projects using microscopy and immunofluorescence \u00b7 Consulted with researchers on methods and workflows \u00b7 Helped train users in scientific techniques \u00b7 Participated in a research-intensive environment.',
      methods: 'Confocal microscopy \u00b7 2-photon microscopy exposure/support \u00b7 immunofluorescence \u00b7 researcher training \u00b7 scientific consultation',
      output: '[placeholder \u2014 add images, training materials, or method documentation]',
      figLabel: '[Add microscopy image or facility/method workflow]'
    },
    'ls-03': {
      num: '03', category: 'Life Sciences',
      title: 'Animal Models & Behaviour',
      tags: ['Behaviour', 'Animal Models', 'Neurobiology'],
      desc: 'Experience with behavioral research methods in neurobiology contexts, including experimental design and interpretation of behavioral outcomes.',
      context: '[placeholder \u2014 add specific behavioral assays and exact role]',
      did: 'Participated in neurobiology research \u00b7 Used or supported biological methods \u00b7 Interpreted experimental results \u00b7 Contributed to research workflows and outputs.',
      methods: 'Behaviour \u00b7 animal models \u00b7 molecular methods \u00b7 microscopy \u00b7 immunofluorescence',
      output: '[placeholder \u2014 add behavioral data, plots, or experimental summaries]',
      figLabel: '[Add behavior setup or result plot]'
    },
    'ls-04': {
      num: '04', category: 'Life Sciences',
      title: 'Histology & Optical Imaging',
      tags: ['Histology', 'Staining', 'Confocal', 'Fluorescence'],
      desc: 'Tissue preparation, immunohistochemical staining, and optical imaging methods including confocal and fluorescence microscopy for anatomical and molecular characterization.',
      context: '[placeholder \u2014 add tissue types, organisms, and specific imaging applications]',
      did: 'Prepared tissue samples for imaging \u00b7 Applied immunofluorescence staining protocols \u00b7 Operated or supported confocal and fluorescence microscopy \u00b7 Interpreted imaging results.',
      methods: 'Confocal microscopy \u00b7 2-photon microscopy \u00b7 fluorescence imaging \u00b7 immunofluorescence \u00b7 tissue preparation \u00b7 staining \u00b7 image interpretation',
      output: '[placeholder \u2014 add microscopy images, staining examples, or protocol documentation]',
      figLabel: '[Add microscopy image or imaging workflow]'
    },

    /* OPERATIONS ────────────────────────────────────────── */
    'ops-01': {
      num: '01', category: 'Operations',
      title: 'Weizmann Institute Core Facility',
      tags: ['Core Facility', 'Management', 'Research Support', 'Training'],
      desc: 'Worked in a core facility environment supporting researchers with microscopy, immunofluorescence, consultation, training, and research project support.',
      context: '[placeholder \u2014 add facility name, dates, and scope of work]',
      did: 'Supported researchers using microscopy and immunofluorescence methods \u00b7 Provided training and consultation \u00b7 Helped users troubleshoot scientific and technical workflows \u00b7 Supported multiple research projects in a shared infrastructure environment.',
      methods: 'Microscopy \u00b7 immunofluorescence \u00b7 researcher training \u00b7 scientific consultation \u00b7 facility support',
      output: '[placeholder \u2014 add workflow diagram, training materials, or project support examples]',
      figLabel: '[Add workflow diagram or microscopy-support visual]'
    },
    'ops-02': {
      num: '02', category: 'Operations',
      title: 'IQVIA / Moderna EMEA Operations',
      tags: ['Pharma', 'GxP', 'KPI', 'Power BI'],
      desc: "Industry operations experience connected to Moderna's call center in EMEA through IQVIA, involving data and information systems, KPI monitoring, system coordination, reporting, and operational support.",
      context: '[placeholder \u2014 confirm exact public role title, dates, and which KPIs/systems can be mentioned publicly]',
      did: 'Managed or supported data and information systems \u00b7 Worked with KPI reporting and operational metrics \u00b7 Helped coordinate system changes, issues, and updates \u00b7 Supported cross-functional operational communication.',
      methods: 'KPI reporting \u00b7 data operations \u00b7 system coordination \u00b7 DAX support \u00b7 Excel \u00b7 Power BI \u00b7 stakeholder communication',
      output: '[placeholder \u2014 add anonymized dashboard-style mockup or process diagram]',
      figLabel: '[Add anonymized dashboard-style mockup or process diagram]'
    },
    'ops-03': {
      num: '03', category: 'Operations',
      title: 'Cross-Team Coordination',
      tags: ['Coordination', 'Strategy', 'Communication', 'Documentation'],
      desc: 'Coordination across research groups, departments, and external partners to deliver shared infrastructure and operational goals.',
      context: '[placeholder \u2014 add specific coordination contexts and stakeholder groups]',
      did: 'Coordinated between research groups and departments \u00b7 Communicated across functional boundaries \u00b7 Documented processes and outcomes \u00b7 Supported stakeholder communication.',
      methods: 'Communication \u00b7 coordination \u00b7 documentation \u00b7 stakeholder support \u00b7 cross-functional teamwork',
      output: '[placeholder \u2014 add coordination/workflow diagram or process documentation]',
      figLabel: '[Add coordination/workflow diagram]'
    },

    /* TEACHING ──────────────────────────────────────────── */
    'teach-01': {
      num: '01', category: 'Teaching & Communication',
      title: 'Neurohistology Lab',
      tags: ['Lab', 'Graduate', 'Weizmann', 'TA'],
      desc: 'Teaching assistant experience in a neurohistology course at the Weizmann Institute, including topics such as tissue preparation, immunofluorescence, and microscopy for graduate researchers.',
      context: 'Weizmann Institute of Science. Graduate-level course. Teaching assistant role.',
      did: 'Supported instruction in neurohistology methods \u00b7 Helped explain immunofluorescence and microscopy workflows \u00b7 Assisted students/researchers with technical and conceptual questions.',
      methods: 'Neurohistology \u00b7 immunofluorescence \u00b7 microscopy \u00b7 graduate teaching \u00b7 practical instruction',
      output: '[placeholder \u2014 add teaching diagram or method workflow]',
      figLabel: '[Add teaching diagram or method workflow]'
    },
    'teach-02': {
      num: '02', category: 'Teaching & Communication',
      title: 'Python for Researchers (TA)',
      tags: ['Python', 'TA', 'Technion', 'Graduate'],
      desc: 'Teaching assistant experience in a Python course for graduate students, supporting students in computational thinking, coding, debugging, data handling, visualization, and applied programming.',
      context: 'Technion \u2014 Israel Institute of Technology. Graduate-level Python course for researchers.',
      did: 'Supported students learning Python \u00b7 Helped with debugging and code structure \u00b7 Explained data handling and visualization concepts \u00b7 Guided applied programming exercises.',
      methods: 'Python \u00b7 Pandas \u00b7 data handling \u00b7 visualization \u00b7 debugging \u00b7 Jupyter/Spyder-style workflows',
      output: '[placeholder \u2014 add course/exercise diagram or teaching material screenshot]',
      figLabel: '[Add course/exercise diagram or teaching material screenshot]'
    },
    'teach-03': {
      num: '03', category: 'Teaching & Communication',
      title: 'Research Methods (TA)',
      tags: ['Methods', 'Undergraduate', 'Technion', 'Statistics'],
      desc: 'Teaching assistant experience in advanced research methods and correlational research, involving statistical reasoning, experimental design, methodology, and student support.',
      context: 'Technion \u2014 Israel Institute of Technology. Undergraduate-level advanced research methods course.',
      did: 'Supported students in research methods \u00b7 Explained statistical and methodological concepts \u00b7 Helped with experimental design and scientific reasoning \u00b7 Assisted in course-related teaching and evaluation.',
      methods: 'Research methods \u00b7 correlation \u00b7 statistics \u00b7 experimental design \u00b7 scientific writing',
      output: '[placeholder \u2014 add method/teaching diagram or course materials]',
      figLabel: '[Add method/teaching diagram]'
    },
    'teach-04': {
      num: '04', category: 'Teaching & Communication',
      title: 'Science Communication (MUC)',
      tags: ['Public', 'Communication', 'Outreach', 'Education'],
      desc: 'Public-facing science communication and educational content work, bridging research findings and broader audiences through accessible scientific storytelling.',
      context: '[placeholder \u2014 confirm what MUC stands for, the audience, the exact activity, and what materials can be shown]',
      did: 'Created or contributed to public-facing science content \u00b7 Bridged research ideas with accessible explanations \u00b7 Engaged audiences across different knowledge backgrounds.',
      methods: 'Science communication \u00b7 workshops \u00b7 public engagement \u00b7 educational content',
      output: '[placeholder \u2014 add workshop or outreach visual, materials, or activity description]',
      figLabel: '[Add workshop or outreach visual]'
    },

    /* PROJECTS ──────────────────────────────────────────── */
    'proj-01': {
      num: '01', category: 'Selected Projects',
      title: 'Against All Odds',
      tags: ['Analysis', 'Case Study', 'Data', 'Python'],
      desc: 'A flagship project connected to connectome work: building a large, organized, scalable analysis pipeline under difficult data, workflow, and implementation constraints. A case study in data-intensive research and computational problem-solving.',
      context: 'The project required managing large scientific datasets, custom computational workflows, complex biological questions, and repeated analysis and visualization needs.',
      did: 'Built and organized analysis workflows \u00b7 Processed large-scale connectome data \u00b7 Integrated graph, tabular, and visualization methods \u00b7 Created figures and summaries for interpretation \u00b7 Managed technical complexity over a long project timeline.',
      methods: 'Python \u00b7 Pandas \u00b7 NumPy \u00b7 NetworkX \u00b7 Navis \u00b7 NGLUI \u00b7 graph analysis \u00b7 statistical analysis \u00b7 visualization \u00b7 workflow organization',
      output: 'Pipeline diagram \u00b7 data flow diagram \u00b7 neuron/synapse visualizations \u00b7 graph/network outputs \u00b7 statistical figures',
      figLabel: '[Add strongest connectome/pipeline image \u2014 confirm publication/manuscript status first]'
    },
    'proj-02': {
      num: '02', category: 'Selected Projects',
      title: 'AI Geopositioning System',
      tags: ['Python', 'ML', 'Deep Learning', 'TensorFlow'],
      desc: 'Deep learning project using WiFi signal fingerprinting and GPS-supervised data to predict outdoor geographic position from wireless signal patterns using TensorFlow/Keras.',
      context: 'Signal data from WiFi routers was paired with GPS-supervised location labels. The goal was to estimate geographic position from signal patterns alone.',
      did: 'Worked with tabular WiFi/GPS data \u00b7 Built or supported deep neural network modeling \u00b7 Used cross-validation and model evaluation \u00b7 Applied hyperparameter optimization.',
      methods: 'TensorFlow \u00b7 Keras \u00b7 Scikit-learn \u00b7 Pandas \u00b7 NumPy \u00b7 cross-validation \u00b7 Optuna \u00b7 Hyperopt \u00b7 GPS-labeled data',
      output: 'Training curves \u00b7 error distributions \u00b7 predicted vs. actual plots \u00b7 model evaluation summaries',
      figLabel: '[Add model architecture, error plot, training curve, or predicted vs. actual plot]'
    },
    'proj-03': {
      num: '03', category: 'Selected Projects',
      title: 'Connectome Optimisation',
      tags: ['R', 'Statistics', 'Python', 'Optuna'],
      desc: 'Computational optimisation of connectome analysis workflows, including geodesic matrix methods for synapse distance calculations and hyperparameter tuning using Optuna.',
      context: '[placeholder \u2014 add specific project name and final quantitative results]',
      did: 'Optimised code for synapse distance calculations using geodesic matrices \u00b7 Evaluated time and space complexity trade-offs \u00b7 Applied hyperparameter optimisation in deep learning projects.',
      methods: 'Python \u00b7 algorithmic optimisation \u00b7 time complexity \u00b7 space complexity \u00b7 Optuna \u00b7 Hyperopt',
      output: '[placeholder \u2014 add optimisation plot or workflow comparison]',
      figLabel: '[Add optimisation plot or workflow comparison]'
    },
    'proj-04': {
      num: '04', category: 'Selected Projects',
      title: 'Genetic Algorithm Work',
      tags: ['Algorithms', 'Optimisation', 'Visualisation'],
      desc: '[placeholder \u2014 fill only after confirming the specific genetic algorithm project details]',
      context: '[placeholder]',
      did: '[placeholder \u2014 add specific contributions after confirming project details]',
      methods: 'Genetic algorithms \u00b7 optimisation \u00b7 fitness functions \u00b7 selection \u00b7 mutation \u00b7 crossover',
      output: '[placeholder \u2014 add genetic algorithm figure if available]',
      figLabel: '[Add genetic algorithm figure if available]'
    },
    'proj-05': {
      num: '05', category: 'Selected Projects',
      title: 'AltKeyboard Layout Tool',
      tags: ['Tool', 'Independent Build', 'Analysis'],
      desc: '[placeholder \u2014 fill only after confirming what the AltKeyboard app does, why it was built, and what can be shown]',
      context: '[placeholder]',
      did: '[placeholder \u2014 add specific contributions after confirming project details]',
      methods: '[placeholder \u2014 add framework/language/tools]',
      output: '[placeholder \u2014 add app screenshot or UI flow]',
      figLabel: '[Add app screenshot or UI flow]'
    }
  };

  /* ── Helpers ────────────────────────────────────────────── */
  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function isPlaceholder(str) {
    return typeof str === 'string' && str.charAt(0) === '[';
  }

  /* ── Find card grid on this page ───────────────────────── */
  var firstCard = document.querySelector('[data-detail]');
  if (!firstCard) { return; }

  var grid = firstCard.closest('.card-grid, .course-grid, .bento-grid');
  if (!grid) { return; }

  /* ── Build and insert the inline panel ─────────────────── */
  var panel = document.createElement('div');
  panel.className = 'detail-inline';
  panel.id = 'detail-inline';
  panel.hidden = true;
  panel.setAttribute('role', 'region');
  panel.setAttribute('aria-label', 'Item details');

  panel.innerHTML =
    '<div class="di-inner">' +
      '<div class="di-head">' +
        '<div class="di-meta">' +
          '<span class="di-num" id="di-num"></span>' +
          '<span class="di-sep" aria-hidden="true">\u00B7</span>' +
          '<span class="di-category" id="di-category"></span>' +
        '</div>' +
        '<button class="di-close" id="di-close" type="button" aria-label="Collapse detail panel">' +
          '<span aria-hidden="true">\u2191</span> Collapse' +
        '</button>' +
      '</div>' +
      '<div class="di-body">' +
        '<h2 class="di-title" id="di-title" tabindex="-1"></h2>' +
        '<div class="di-tags" id="di-tags"></div>' +
        '<div class="di-content">' +
          '<div class="di-main">' +
            '<p class="di-desc" id="di-desc"></p>' +
            '<div class="di-figure">' +
              '<div class="fig-placeholder" aria-label="Figure placeholder">' +
                '<span class="fig-placeholder__label" id="di-fig-label">Figure \u2014 placeholder</span>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="di-sections" id="di-sections"></div>' +
        '</div>' +
      '</div>' +
    '</div>';

  /* Insert immediately after the card grid */
  grid.parentNode.insertBefore(panel, grid.nextSibling);

  /* ── Close logic ────────────────────────────────────────── */
  var activeCard = null;

  function closePanel() {
    panel.hidden = true;
    if (activeCard) {
      activeCard.classList.remove('detail-active');
      activeCard.setAttribute('aria-expanded', 'false');
      activeCard.focus();
    }
    activeCard = null;
  }

  document.getElementById('di-close').addEventListener('click', closePanel);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) { closePanel(); }
  });

  /* ── Populate panel from data ───────────────────────────── */
  var SECTIONS = [
    { key: 'context', label: 'Context' },
    { key: 'did',     label: 'What I did' },
    { key: 'methods', label: 'Methods \u00b7 Tools' },
    { key: 'output',  label: 'Outputs \u00b7 Evidence' }
  ];

  function populate(data) {
    document.getElementById('di-num').textContent       = data.num      || '';
    document.getElementById('di-category').textContent  = data.category || '';
    document.getElementById('di-title').textContent     = data.title    || '';
    document.getElementById('di-desc').textContent      = data.desc     || '';
    document.getElementById('di-fig-label').textContent = data.figLabel || 'Figure \u2014 placeholder';

    document.getElementById('di-tags').innerHTML = (data.tags || []).map(function (t) {
      return '<span class="di-tag">' + esc(t) + '</span>';
    }).join('');

    document.getElementById('di-sections').innerHTML = SECTIONS.map(function (s) {
      var val = data[s.key] || '[placeholder]';
      var cls = isPlaceholder(val) ? ' is-placeholder' : '';
      return (
        '<div class="di-section">' +
          '<span class="di-section__label">' + esc(s.label) + '</span>' +
          '<p class="di-section__text' + cls + '">' + esc(val) + '</p>' +
        '</div>'
      );
    }).join('');
  }

  /* ── Wire up cards ──────────────────────────────────────── */
  var cards = document.querySelectorAll('[data-detail]');
  cards.forEach(function (card) {
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-expanded', 'false');

    var titleEl = card.querySelector('[class*="__title"]');
    card.setAttribute(
      'aria-label',
      titleEl ? 'View details: ' + titleEl.textContent.trim() : 'View details'
    );

    function activate() {
      /* Toggle off if clicking the already-open card */
      if (activeCard === card) {
        closePanel();
        return;
      }

      /* Deactivate previous */
      if (activeCard) {
        activeCard.classList.remove('detail-active');
        activeCard.setAttribute('aria-expanded', 'false');
      }
      activeCard = card;
      card.classList.add('detail-active');
      card.setAttribute('aria-expanded', 'true');

      /* Resolve content: CARD_DATA first, fallback to card DOM */
      var id   = card.dataset.detailId;
      var data = id ? CARD_DATA[id] : null;

      if (!data) {
        var numEl  = card.querySelector('[class*="__num"]');
        var descEl = card.querySelector('[class*="__desc"]');
        var tagEls = card.querySelectorAll(
          '.work-card__tag, .course-card__tag, .bento-card__chip'
        );
        data = {
          num:      numEl   ? numEl.textContent.trim()   : '',
          category: card.dataset.detailCategory          || '',
          title:    titleEl ? titleEl.textContent.trim() : '',
          desc:     descEl  ? descEl.textContent.trim()  : '',
          tags:     Array.from(tagEls).map(function (t) { return t.textContent.trim(); }),
          context: '[placeholder]', did: '[placeholder]',
          methods: '[placeholder]', output: '[placeholder]',
          figLabel: 'Figure \u2014 placeholder'
        };
      }

      populate(data);
      panel.hidden = false;

      /* Scroll to panel top, then focus heading */
      requestAnimationFrame(function () {
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        var heading = document.getElementById('di-title');
        if (heading) { heading.focus(); }
      });
    }

    card.addEventListener('click', function (e) {
      /* Let real navigation links inside a card pass through */
      var link = e.target.closest('a[href]');
      if (link && link.getAttribute('href') && link.getAttribute('href') !== '#') {
        return;
      }
      activate();
    });

    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activate();
      }
    });
  });

})();
