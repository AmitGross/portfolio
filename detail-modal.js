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
      desc: 'Deep computational investigation within the rapidly advancing field of EM-based connectomics, selected by Nature Methods as Method of the Year 2025. The project analyzed full-brain Drosophila connectome data, including 130K neuronal morphologies, large-scale synaptic connectivity, and high-dimensional graph-based features. The work involved processing 40GB+ datasets, building neuronal and synaptic graph representations, characterizing population-level interaction patterns, and generating statistical and visual outputs from complex connectome data. The project was presented nationally and internationally, including at a workshop abroad at TUM. · Manuscript in preparation.',
      context: 'The connectome project required working with complex neuronal structures, synaptic information, and large tabular datasets. The goal was to transform raw or semi-structured neural data into organized analytical outputs.',
      did: 'Built and modified Python workflows for connectome analysis \u00b7 Represented neuron structures as graph/tree objects \u00b7 Processed synapse and neuron data into tables and features \u00b7 Created visualizations and statistical summaries \u00b7 Organized the workflow into a reusable analysis pipeline.',
      methods: 'Python \u00b7 Pandas \u00b7 NumPy \u00b7 NetworkX \u00b7 Navis \u00b7 NGLUI \u00b7 statistical analysis \u00b7 data visualization \u00b7 graph analysis',
      output: 'Pipeline diagrams \u00b7 neuron/synapse visualizations \u00b7 connectivity matrices \u00b7 graph-based summaries \u00b7 statistical plots \u00b7 thesis/project figures',
      roadmap: {
        img: 'data/connectome/core_pipeline_map.svg',
        text: 'End-to-end map of the connectome analysis workflow. The pipeline begins with raw morphology and synapse data, moves through graph construction and compartmentalization (SFC-based axon/dendrite split), and proceeds to feature extraction, statistical analysis, and figure generation. Each stage is modular and reusable across different neuron datasets.'
      },
      figures: {
        featured: { src: 'data/connectome/article_fig1.png', caption: 'Figure 1 — Mixed polarity in dendrites and axons. 2D neuron views, SFC-based axon/dendrite compartmentalization, and SI distribution across 117,570 intrinsic neurons.' },
        gallery: [
          { src: 'data/connectome/article_fig2.png',       caption: 'Figure 2 — Mixed polarity across the fly brain. SI distributions by superclass, neurotransmitter type, and predictive modelling of SI from neuronal features.' },
          { src: 'data/connectome/article_fig3.png',       caption: 'Figure 3 — Connection types across FlyWire. Synaptic type distributions (AD, AA, DD, DA) by neuropil, cell type, and neurotransmitter.' },
          { src: 'data/connectome/article_fig5.png',       caption: 'Figure 5 — Mixed polarity underlies reciprocal connectivity. Reciprocal fraction, synapse counts, and synaptic-type compositions of reciprocal connections.' },
          { src: 'data/connectome/acticle_fig4.png',       caption: 'Figure 4 — Synaptic-type prediction models. Confusion matrices and decision surfaces using PC1 as a predictor of connection type.' },
          { src: 'data/connectome/article_fig1_supp1.png', caption: 'Supp 1-S1 — Synaptic compartmentalization and canonicality. SFC schematic, Neuroglancer renderings, and canonical synapse percentages per compartment.' },
          { src: 'data/connectome/article_fig2_supp1.png', caption: 'Supp 2-S1 — SI comparison across all detected vs. skeleton-assigned synapses and across two independent detection pipelines (Princeton vs. Buhmann; r = 0.91).' },
          { src: 'data/connectome/article_fig2_supp2.png', caption: 'Supp 2-S2 — SI values of homologous left-right neuron pairs (n = 3,554 pairs; Pearson r = 0.92), with example sources of SI divergence and concordance.' },
          { src: 'data/connectome/article_fig2_supp3.png', caption: 'Supp 2-S3 — SI distributions across non-intrinsic superclasses. Descending neurons show high SI despite missing outputs.' },
          { src: 'data/connectome/article_fig2_supp4.png', caption: 'Supp 2-S4 — Feature correlations, Random Forest importance for SI prediction, and PC1–SI relationships in optic and visual-centrifugal neurons.' },
          { src: 'data/connectome/article_fig3_supp1.png', caption: 'Supp 3-S1 — Canonicality thresholds and connection-type schematics (Princeton and Buhmann pipelines). Axonal compartments in purple, dendritic in orange.' },
          { src: 'data/connectome/article_fig3_supp2.png', caption: 'Supp 3-S2 — Synaptic type proportions across superclasses and neuropils using the Buhmann detection dataset (44,342,339 synapses).' },
          { src: 'data/connectome/article_fig5_supp1.png', caption: 'Supp 5-S1 — Reciprocal vs. non-reciprocal synapse counts by type, same-type proportions, and Random Forest regression of reciprocal fraction (r² = 0.79).' },
          { src: 'data/connectome/article_fig5_supp2.png', caption: 'Supp 5-S2 — Additional analysis of reciprocal connection properties.' }
        ]
      }
    },
    'ds-02': {
      num: '02', category: 'Data Science & Computing',
      title: 'Pre/Post Program Statistical Analysis & Behavioral Mapping',
      tags: ['Python', 'Statistics', 'OpenStreetMap', 'Overpass Turbo', 'GIS'],
      desc: 'Statistical analysis of pre/post program data, integrating behavioral outcomes with geographic and environmental mapping using OpenStreetMap and Overpass Turbo. The project linked program-related behavioral measures with spatial context to support interpretation of intervention effects.',
      context: '[placeholder \u2014 add project topic, research question, and dataset type]',
      did: 'Analyzed project data \u00b7 Applied statistical reasoning and tests \u00b7 Created plots, summaries, or reports \u00b7 Communicated findings to collaborators or stakeholders.',
      methods: 'Python \u00b7 Pandas \u00b7 NumPy \u00b7 SciPy \u00b7 Wilcoxon signed-rank test \u00b7 Mann-Whitney U \u00b7 OpenStreetMap \u00b7 Overpass Turbo \u00b7 data visualization',
      output: 'Pre/post statistical plots \u00b7 spatial mapping of crossing features \u00b7 school-level environmental survey \u00b7 behavioral outcome summaries',
      figures: {
        featured: { src: 'data/tech/mapping_screenshot.jpg', caption: 'Pedestrian crossing features mapped per school area using OpenStreetMap and Overpass Turbo.' },
        gallery: [
          { src: 'data/tech/slides/slide_01.png', caption: 'Geo-orientation (spatial literacy) pre/post program. Wilcoxon signed-rank test, W=2775, p<0.001, N=170. Before: mean 63.6 \u2192 After: 72.9.' },
          { src: 'data/tech/slides/slide_02.png', caption: 'Skill (66.6\u219270.1, p<0.005) and Knowledge (61.6\u219277.6, p<0.001) scores pre/post program, N=170.' },
          { src: 'data/tech/slides/slide_03.png', caption: 'Content knowledge (63.0\u219281.4, p<0.001) and declarative knowledge (59.9\u219274.2, p<0.001) pre/post program, N=170.' },
          { src: 'data/tech/slides/slide_04.png', caption: 'Spatial thinking and declarative knowledge by gender (Mann-Whitney U). Pre-program gender gap in spatial thinking (p=0.033) closed post-program.' },
          { src: 'data/tech/slides/slide_05.png', caption: 'Participant satisfaction, perceived program contribution, and willingness to recommend \u2014 response distributions (1\u20135 scale).' },
          { src: 'data/tech/slides/slide_06.png', caption: 'Scientific/geographic thinking in the context of accessible urban planning: pre/post distribution of correct responses.' },
          { src: 'data/tech/table_behavior.png', caption: 'Environmental features mapped per school area (OpenStreetMap \u00b7 Overpass Turbo) \u2014 raw counts and normalized scores.' }
        ]
      }
    },
    'ds-03': {
      num: '03', category: 'Data Science & Computing',
      title: 'AI Geopositioning System',
      tags: ['Scikit-learn', 'ML', 'Python', 'Deep Learning'],
      github: 'https://github.com/AmitGross/DNN-geopositioning-with-hyperspace-optimization',
      desc: 'Deep learning project using WiFi signal fingerprinting and GPS-labeled data to predict outdoor geographic location from wireless signal patterns. Hyperparameter search was applied across multiple frameworks (Optuna, Hyperopt, skopt, TPE), achieving a best result of 11 m error at the 80th percentile.',
      context: 'Signal data from WiFi routers was paired with GPS-supervised location labels, aiming to estimate geographic position from signal patterns using neural networks.',
      did: 'Worked with tabular WiFi/GPS data \u00b7 Built and tuned deep neural network models \u00b7 Applied systematic hyperparameter optimization using Optuna, Hyperopt, skopt, and TPE \u00b7 Evaluated model accuracy with percentile-based distance error metrics.',
      methods: 'Python \u00b7 TensorFlow \u00b7 Keras \u00b7 Scikit-learn \u00b7 Optuna \u00b7 Hyperopt \u00b7 scikit-optimize (skopt) \u00b7 TPE \u00b7 cross-validation \u00b7 GPS-labeled WiFi fingerprinting',
      output: 'Best model: 11 m error at 80th percentile \u00b7 predicted vs. actual location plots \u00b7 hyperparameter search convergence results \u00b7 error distribution summaries',
      figures: {
        featured: { src: 'data/geopos/both.png', caption: 'Actual GPS locations (blue) vs. DNN-predicted positions (red) overlaid \u2014 combined view of model accuracy across the test area.' },
        gallery: []
      }
    },
    'ds-04': {
      num: '04', category: 'Data Science & Computing',
      title: 'Simplifying Neuron Morphology into an Analytical Tree',
      tags: ['SWC', 'NetworkX', 'Synapses', 'Tree Graph', 'SFC', 'SI'],
      desc: 'This pipeline transforms a raw neuron morphology file into a simplified NetworkX tree that supports synapse-based analysis, axon/dendrite splitting, graph compression, node filtering, and Segregation Index calculation.',
      context: 'The starting point is an SWC morphology file \u2014 a directed tree where each node has an ID, parent ID, XYZ coordinates, and radius. Synaptic sites are attached using a synapse table of pre- and post-synaptic sites. Synapse Flow Centrality then splits the neuron into axonal and dendritic compartments, from which separate NetworkX graph objects are generated preserving parent-child relationships, node coordinates, and synaptic information.',
      did: 'Parsed SWC morphology files into directed tree structures \u00b7 Attached pre/post-synaptic site tables to graph nodes \u00b7 Applied Synapse Flow Centrality to split axon and dendrite compartments \u00b7 Compressed graphs by pruning leaves and collapsing linear chains \u00b7 Filtered problematic nodes and ambiguous synaptic configurations \u00b7 Aggregated synaptic information backwards through the tree \u00b7 Calculated Segregation Index values based on entropy of synapse distributions across child branches.',
      methods: 'Python \u00b7 NetworkX \u00b7 SWC morphology \u00b7 Synapse Flow Centrality \u00b7 Segregation Index \u00b7 graph compression \u00b7 entropy-based analysis \u00b7 tree traversal',
      output: 'Simplified analytical trees preserving branching and synaptic organization \u00b7 per-node Segregation Index values \u00b7 compressed graph representations \u00b7 axon/dendrite compartment objects',
      figures: {
        featured: {
          src: 'data/connectome/pipeline_docv.png',
          caption: 'Pipeline diagram: from SWC morphology and synapse attachment \u2192 axon/dendrite split \u2192 NetworkX tree generation \u2192 graph compression \u2192 node filtration \u2192 Segregation Index calculation \u2192 final remodeled analytical tree.',
          pdf: 'data/connectome/pipeline_docv.pdf'
        },
        gallery: []
      }
    },

    /* LIFE SCIENCES ─────────────────────────────────────── */
    'ls-01': {
      num: '01', category: 'Life Sciences',
      title: 'Connectome Research',
      tags: ['Connectomics', 'EM', 'Neuroscience', 'Synapses'],
      desc: 'Research on synaptic organization and neuronal polarity in the Drosophila connectome, investigating how axons and dendrites are structurally and functionally distinguished across the fly brain. The work combined large-scale EM-derived connectivity data with biological interpretation of mixed-polarity neurons and synaptic type distributions.',
      context: 'The FlyWire connectome provides electron-microscopy reconstructions of the entire adult Drosophila brain. This project examined the structural basis of synaptic polarity — asking how neurons distribute their input and output synapses, and what this reveals about circuit organization, neurotransmitter identity, and reciprocal connectivity.',
      did: 'Analyzed synaptic organization across 117,570 intrinsic neurons \u00b7 Investigated axon/dendrite compartmentalization using Synapse Flow Centrality \u00b7 Quantified Segregation Index (SI) values across superclasses, neurotransmitter types, and neuropils \u00b7 Studied reciprocal connectivity patterns and their synaptic-type compositions \u00b7 Produced figures for publication supporting biological interpretation.',
      methods: 'Connectomics \u00b7 FlyWire EM data \u00b7 synapse analysis \u00b7 axon/dendrite compartmentalization \u00b7 Segregation Index \u00b7 Neuroglancer / NGLUI \u00b7 Navis \u00b7 neurotransmitter mapping \u00b7 statistical analysis',
      output: 'Publication figures \u00b7 neuron/synapse visualizations \u00b7 SI distributions by cell type \u00b7 synaptic-type composition analyses \u00b7 reciprocal connectivity summaries',
      figures: {
        featured: { src: 'data/connectome/article_fig1.png', caption: 'Figure 1 \u2014 Mixed polarity in dendrites and axons. 2D neuron views, SFC-based axon/dendrite compartmentalization, and SI distribution across 117,570 intrinsic neurons.' },
        gallery: [
          { src: 'data/connectome/article_fig2.png',       caption: 'Figure 2 \u2014 Mixed polarity across the fly brain. SI distributions by superclass, neurotransmitter type, and predictive modelling of SI from neuronal features.' },
          { src: 'data/connectome/article_fig3.png',       caption: 'Figure 3 \u2014 Connection types across FlyWire. Synaptic type distributions (AD, AA, DD, DA) by neuropil, cell type, and neurotransmitter.' },
          { src: 'data/connectome/article_fig5.png',       caption: 'Figure 5 \u2014 Mixed polarity underlies reciprocal connectivity. Reciprocal fraction, synapse counts, and synaptic-type compositions of reciprocal connections.' },
          { src: 'data/connectome/acticle_fig4.png',       caption: 'Figure 4 \u2014 Synaptic-type prediction models. Confusion matrices and decision surfaces using PC1 as a predictor of connection type.' },
          { src: 'data/connectome/article_fig1_supp1.png', caption: 'Supp 1-S1 \u2014 Synaptic compartmentalization and canonicality. SFC schematic, Neuroglancer renderings, and canonical synapse percentages per compartment.' },
          { src: 'data/connectome/article_fig2_supp1.png', caption: 'Supp 2-S1 \u2014 SI comparison across all detected vs. skeleton-assigned synapses and across two independent detection pipelines (Princeton vs. Buhmann; r\u00a0=\u00a00.91).' },
          { src: 'data/connectome/article_fig2_supp2.png', caption: 'Supp 2-S2 \u2014 SI values of homologous left-right neuron pairs (n\u00a0=\u00a03,554 pairs; Pearson r\u00a0=\u00a00.92), with example sources of SI divergence and concordance.' },
          { src: 'data/connectome/article_fig2_supp3.png', caption: 'Supp 2-S3 \u2014 SI distributions across non-intrinsic superclasses. Descending neurons show high SI despite missing outputs.' },
          { src: 'data/connectome/article_fig2_supp4.png', caption: 'Supp 2-S4 \u2014 Feature correlations, Random Forest importance for SI prediction, and PC1\u2013SI relationships in optic and visual-centrifugal neurons.' },
          { src: 'data/connectome/article_fig3_supp1.png', caption: 'Supp 3-S1 \u2014 Canonicality thresholds and connection-type schematics (Princeton and Buhmann pipelines). Axonal compartments in purple, dendritic in orange.' },
          { src: 'data/connectome/article_fig3_supp2.png', caption: 'Supp 3-S2 \u2014 Synaptic type proportions across superclasses and neuropils using the Buhmann detection dataset (44,342,339 synapses).' },
          { src: 'data/connectome/article_fig5_supp1.png', caption: 'Supp 5-S1 \u2014 Reciprocal vs. non-reciprocal synapse counts by type, same-type proportions, and Random Forest regression of reciprocal fraction (r\u00b2\u00a0=\u00a00.79).' },
          { src: 'data/connectome/article_fig5_supp2.png', caption: 'Supp 5-S2 \u2014 Additional analysis of reciprocal connection properties.' }
        ]
      }
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
      tags: ['Behaviour', 'Animal Models', 'Mouse', 'Neuroscience', 'Published'],
      desc: 'Behavioral neuroscience research using transgenic and pharmacological mouse models to investigate glutamatergic signaling, memory, and dopamine-related pathology. Two studies completed at the Gaisler-Salomon lab, University of Haifa.',
      context: 'University of Haifa, Gaisler-Salomon Lab (2017\u20132018). Research focused on how disruptions in glutamate metabolism affect cognitive and behavioral outcomes in rodents.',
      did: 'Performed behavioral experiments including novel object recognition and fear conditioning \u00b7 Assisted with pharmacological intervention protocols \u00b7 Contributed to data collection, analysis, and figure preparation \u00b7 Co-authored two peer-reviewed outputs.',
      methods: 'Conditional knockout mouse model \u00b7 novel object recognition \u00b7 fear conditioning \u00b7 locomotor activity \u00b7 amphetamine sensitization \u00b7 immunofluorescence \u00b7 Western blot \u00b7 behavioral scoring',
      output: 'Two outputs \u2014 see projects below.',
      subprojects: [
        {
          title: 'GDH Deficiency & Recognition Memory',
          badge: 'Published \u00b7 Genes, Brain and Behavior 2020',
          figures: {
            featured: { src: 'life%20science/neuroscience/GDH%20map.jpg', caption: 'GDH pathway map \u2014 glutamate dehydrogenase role in glutamate\u2013glutamine cycling between neurons and astrocytes.' },
            gallery: [
              { src: 'life%20science/neuroscience/ifc_freezing_bar.jpg', caption: 'Freezing behavior (fear conditioning) \u2014 GDH-deficient vs. control mice across contextual and cued memory tests.' }
            ]
          },
          citation: 'Lander, S. S., Chornyy, S., Safory, H., Gross, A., Wolosker, H., & Gaisler\u2011Salomon, I. (2020). Glutamate dehydrogenase deficiency disrupts glutamate homeostasis in hippocampus and prefrontal cortex and impairs recognition memory. Genes, Brain and Behavior, 19(6), e12636.'
        },
        {
          title: 'Ebselen & Amphetamine Sensitization',
          badge: 'Conference Poster \u00b7 SIRS 2018',
          figures: {
            featured: { src: 'data/lifesci/ebselen_poster.png', caption: 'Conference poster \u2014 effects of the glutaminase inhibitor ebselen on dopamine receptors and locomotion in amphetamine-sensitized mice.' },
            gallery: []
          },
          posterDownload: 'data/lifesci/ebselen_poster.pptx',
          citation: 'Heffetz-Giterman, L., Lander, S. S., Cohen, R., Gross, A., & Gaisler-Salomon, I. (2018). Ebselen prevents amphetamine sensitization via glutaminase inhibition. Schizophrenia Bulletin, 44(Suppl 1), S202.'
        }
      ]
    },
    'ls-04': {
      num: '04', category: 'Life Sciences',
      title: 'Histology & Optical Imaging',
      tags: ['Histology', 'Staining', 'Confocal', 'Fluorescence'],
      desc: 'Tissue preparation, immunohistochemical staining, and optical imaging methods including confocal and fluorescence microscopy for anatomical and molecular characterization.',
      context: 'Work spanning two research labs and the Weizmann Institute Core Facility, involving confocal, two-photon, and immunofluorescence imaging across multiple tissue types and disease models.',
      did: 'Prepared tissue samples for imaging \u00b7 Applied immunofluorescence staining protocols \u00b7 Operated confocal and two-photon microscopy systems \u00b7 Interpreted and processed imaging results \u00b7 Supported researchers with imaging workflows.',
      methods: 'Confocal microscopy \u00b7 two-photon microscopy \u00b7 fluorescence imaging \u00b7 immunofluorescence \u00b7 tissue preparation \u00b7 staining \u00b7 image interpretation',
      output: 'Three outputs \u2014 see projects below.',
      subprojects: [
        {
          title: 'Fear Conditioning — IFC Imaging',
          badge: 'Experimental Work · Placeholder',
          figures: {
            featured: { src: 'life%20science/histology/ifc_butterfly.jpg', caption: 'Immunofluorescence image from the immediate fear conditioning (IFC) paradigm \u2014 placeholder for additional context.' },
            gallery: []
          },
          citation: '[Placeholder \u2014 add citation, publication, or experimental context for the IFC immunofluorescence work.]'
        },
        {
          title: 'Two-Photon Microscopy System',
          badge: 'Technical Imaging · Core Facility',
          figures: {
            featured: { src: 'life%20science/histology/2psystem.jpg', caption: 'Two-photon microscopy system \u2014 used for deep-tissue in vivo optical imaging.' },
            gallery: []
          },
          citation: '[Placeholder \u2014 add context for two-photon system use: facility, research application, or imaging protocol.]'
        },
        {
          title: 'Innate Immunity in Neuronopathic Gaucher Disease',
          badge: 'Published \u00b7 Acta Neuropathologica Communications 2020',
          figures: {
            featured: { src: 'life%20science/histology/ifc_article.webp', caption: 'Histological imaging from Melamed et al. (2020) \u2014 innate immune response in neuronopathic Gaucher disease confers resistance against viral encephalitis.' },
            gallery: []
          },
          citation: 'Melamed, S., Avraham, R., Rothbard, D. E., Erez, N., Israely, T., Klausner, Z., \u2026 & Vitner, E. B. (2020). Innate immune response in neuronopathic forms of Gaucher disease confers resistance against viral-induced encephalitis. Acta Neuropathologica Communications, 8(1), 144.'
        }
      ]
    },

    /* OPERATIONS ────────────────────────────────────────── */
    'ops-01': {
      num: '01', category: 'Operations',
      title: 'Weizmann Institute Core Facility',
      tags: ['Core Facility', 'Microscopy', 'Research Support', 'Training'],
      desc: 'Supported confocal and two-photon microscopy projects at the Weizmann Institute Core Facility, including imaging setup, protocol optimization, sample preparation, immunofluorescence and tissue staining workflows, and practical troubleshooting for research users.',
      context: 'Weizmann Institute of Science — biological sciences core facility supporting multiple research laboratories. Work spanned both direct researcher support and operational management of shared infrastructure.',
      did: 'Supported confocal and two-photon microscopy projects · Assisted with imaging setup and protocol optimization · Guided sample preparation and immunofluorescence/staining workflows · Provided hands-on troubleshooting for research users · Coordinated facility operations across laboratories · Handled equipment coordination, user training, and vendor communication · Supported purchasing processes and budget-related administrative tasks.',
      methods: 'Confocal microscopy · two-photon microscopy · immunofluorescence · tissue staining · protocol optimization · researcher training · vendor coordination · equipment management · facility administration',
      output: 'Optimized imaging protocols · trained research users · coordinated multi-lab equipment access · streamlined purchasing and vendor workflows',
      figures: {
        featured: { src: 'ops/2psystem.jpg', caption: 'Two-photon microscopy system at the Weizmann Institute Core Facility.' },
        gallery: []
      }
    },
    'ops-02': {
      num: '02', category: 'Operations',
      title: 'Data & Information Systems Lead',
      tags: ['KPI', 'Power BI', 'Data Operations', 'Healthcare'],
      desc: 'Led KPI reporting and data-workflow improvements for a regional healthcare operations program at IQVIA (2021, EMEA), standardizing reporting logic, calculations, and performance tracking across a large operational team.',
      context: 'IQVIA — Data & Information Systems Lead, EMEA (Remote), 2021. Role embedded within healthcare operations program infrastructure, bridging data quality, reporting systems, and stakeholder communication in a compliance-sensitive environment.',
      did: 'Led KPI reporting and data-workflow improvements across a large EMEA operational team · Standardized reporting logic, calculations, and performance-tracking procedures · Coordinated reporting between senior stakeholders, operational managers, and frontline teams · Improved data consistency, issue resolution, training alignment, and operational visibility · Translated recurring reporting and data-quality issues into clearer procedures, documentation, and escalation workflows · Operated within a GxP-adjacent, compliance-sensitive healthcare program environment.',
      methods: 'KPI reporting · data workflow design · Excel · Power BI · DAX · stakeholder communication · process documentation · escalation workflow design · cross-functional coordination',
      output: 'Standardized KPI reporting framework · improved data consistency across teams · documented escalation and issue-resolution procedures · operational visibility improvements',
      figures: {
        featured: { src: 'ops/iqvia.png', caption: 'IQVIA — Data & Information Systems Lead, EMEA Operations, 2021.' },
        gallery: []
      }
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
      title: 'Practical Neuroanatomy (TA)',
      tags: ['Neuroanatomy', 'Graduate', 'Weizmann', 'TA'],
      desc: 'Teaching assistant in a practical neuroanatomy course at the Weizmann Institute (2019), covering tissue preparation, immunofluorescence staining, and microscopy methods for graduate researchers.',
      context: 'Weizmann Institute of Science, 2019. Graduate-level practical neuroanatomy course. Teaching assistant role supporting hands-on lab sessions.',
      did: 'Supported hands-on lab instruction in neuroanatomy methods · Guided tissue preparation and immunofluorescence workflows · Assisted graduate researchers with microscopy and staining techniques · Answered technical and conceptual questions during practical sessions.',
      methods: 'Neuroanatomy · tissue preparation · immunofluorescence · histology · microscopy · graduate teaching · practical lab instruction',
      output: 'Hands-on lab support · protocol guidance · student skill development in neuroanatomy methods',
      figLabel: '[Add neuroanatomy lab diagram or tissue preparation workflow]',
      figures: {
        featured: { src: 'teaching/weizmann.png', caption: 'Weizmann Institute of Science — Practical Neuroanatomy, 2019.' },
        gallery: []
      }
    },
    'teach-02': {
      num: '02', category: 'Teaching & Communication',
      title: 'University of Haifa (TA)',
      tags: ['Python', 'Statistics', 'Research Methods', 'University of Haifa', 'Graduate'],
      desc: 'Teaching assistant at the University of Haifa (2023–2024) across two graduate courses: Python programming and Advanced Statistics, supporting data analysis, statistical reasoning, and applied scientific workflows.',
      context: 'University of Haifa, 2023–2024. Two graduate-level TA roles: Python for researchers and Advanced Statistics / Research Methods.',
      did: 'Supported graduate students across Python and statistics courses · Explained data handling, visualization, and coding · Guided statistical reasoning, experimental design, and interpretation · Two courses — see below.',
      methods: 'Python · Pandas · NumPy · SciPy · data visualization · statistical inference · advanced statistics · research methods · graduate teaching',
      output: 'Two TA roles — see courses below.',
      subprojects: [
        {
          title: 'Python for Researchers',
          badge: 'TA · University of Haifa · 2023–2024',
          figures: {
            featured: { src: 'teaching/haifa.png', caption: 'University of Haifa — Python for Researchers, TA role, 2023–2024.' },
            gallery: []
          },
          citation: 'Teaching assistant in a Python programming course for graduate researchers. Supported students in data handling, visualization, debugging, and applied computational workflows.'
        },
        {
          title: 'Advanced Statistics & Research Methods',
          badge: 'TA · University of Haifa · 2023–2024',
          figures: {
            featured: { src: 'teaching/haifa.png', caption: 'University of Haifa — Advanced Statistics & Research Methods, TA role, 2023–2024.' },
            gallery: []
          },
          citation: 'Teaching assistant in Advanced Statistics and Research Methods for graduate students. Covered statistical inference, experimental design, correlation, and scientific reasoning.'
        }
      ]
    },
    'teach-03': {
      num: '03', category: 'Teaching & Communication',
      title: 'Technology & Mapping Education',
      tags: ['Technion', 'Ministry of Education', 'Curriculum Design', 'GIS', 'Mapping'],
      desc: 'Created and delivered educational content on mapping technologies for hundreds of students and educators, developed in collaboration with the Israeli Ministry of Education and the Technion.',
      context: 'Technion — Israel Institute of Technology, in collaboration with the Israeli Ministry of Education. Educational program focused on mapping and spatial technology, reaching hundreds of students and educators.',
      did: 'Designed and developed educational curriculum on mapping technologies · Created learning materials for students and educators · Delivered content across a wide audience of hundreds of participants · Collaborated with the Ministry of Education on program development · Bridged technical mapping concepts with accessible, structured pedagogy.',
      methods: 'Curriculum design · educational content development · mapping technologies · GIS concepts · teacher training · student instruction · large-scale program delivery',
      output: 'Educational curriculum · learning materials for students and educators · program delivery to hundreds of participants · see materials below.',
      figures: {
        featured: { src: 'teaching/p1.png', caption: 'Educational material — mapping technology curriculum developed for the Technion / Ministry of Education program.' },
        gallery: [
          { src: 'teaching/p2.png', caption: 'Educational material — second module of the mapping technology curriculum.' }
        ]
      }
    },
    'teach-04': {
      num: '04', category: 'Teaching & Communication',
      title: 'Computational Brain Mapping Workshop',
      tags: ['Invited', 'Workshop', 'Connectome', 'TUM'],
      desc: 'Invited instructor for a 2-day hands-on workshop in computational brain mapping at the Technical University of Munich (TUM), 2026, covering connectome data analysis and visualization.',
      context: 'Technical University of Munich (TUM), 2026. Invited instructor role. 2-day hands-on workshop format, focused on computational brain mapping with connectome data.',
      did: 'Designed and delivered a 2-day hands-on workshop in computational brain mapping · Covered connectome data access, processing, graph-based analysis, and visualization · Guided participants through applied exercises with real connectome datasets · Communicated complex neuroscience and computational concepts to an academic workshop audience.',
      methods: 'Computational neuroanatomy · connectome analysis · Python · graph analysis · data visualization · hands-on workshop instruction · scientific communication',
      output: 'Workshop curriculum · hands-on exercises · connectome analysis walkthroughs · participant skill development in brain mapping methods',
      figLabel: '[Add workshop materials, connectome visualization, or TUM event details]',
      figures: {
        featured: { src: 'teaching/TUM.png', caption: 'Technical University of Munich (TUM) — Computational Brain Mapping Workshop, 2026.' },
        gallery: []
      }
    },

    /* PROJECTS ──────────────────────────────────────────── */
    'proj-01': {
      num: '01', category: 'Selected Projects',
      title: 'Against All Odds',
      tags: ['Next.js', 'TypeScript', 'Python', 'ML', 'Supabase', 'FastAPI', 'Football'],
      desc: 'Full-stack WC 2026 prediction game backed by a custom ML model. The app (Next.js 15 + Supabase) lets users predict match scores, group winners, and the full knockout bracket, compete on a leaderboard, and join private rooms. The ML engine (Python, RF + XGBoost ensemble, 68 features) predicts match scores via a Poisson grid and simulates the complete tournament. Evaluated retrospectively: 54.7% outcome accuracy on WC 2022 (walk-forward mode). Predicted WC 2026 champion: France.',
      context: 'Against All Odds app (Next.js 15, Supabase, TypeScript) — WC 2026 prediction game with private rooms, leaderboard, match questions, and collaborative drawing board. Backed by football-prediction: a Python ML pipeline (RF + XGBoost + Dixon-Coles + Isotonic calibrator) with a FastAPI endpoint serving live predictions.',
      did: 'Built the full-stack Next.js 15 prediction app with Supabase PostgreSQL, RLS, and Auth \u00b7 Designed and implemented private prediction rooms with leaderboards, match questions, and shared drawing canvas \u00b7 Developed the ML pipeline: feature engineering (68 features), ensemble training, Poisson score grid, probability calibration \u00b7 Ran ablation studies and walk-forward evaluation across WC 2018, 2022, and 2026 \u00b7 Built FastAPI /predict, /result, /health endpoints \u00b7 Simulated full WC 2026 bracket (pre-tournament, April 2026).',
      methods: 'Next.js 15 \u00b7 React 19 \u00b7 TypeScript \u00b7 Tailwind CSS \u00b7 Supabase (PostgreSQL, RLS, Auth) \u00b7 Python \u00b7 scikit-learn \u00b7 XGBoost \u00b7 Pandas \u00b7 NumPy \u00b7 FastAPI \u00b7 Optuna \u00b7 Dixon-Coles \u00b7 Poisson score grid \u00b7 isotonic calibration',
      output: 'Live WC 2026 prediction app \u00b7 ML model v1.6 (54.7% WC 2022 accuracy) \u00b7 full tournament bracket simulation \u00b7 FastAPI prediction endpoint \u00b7 feature importance analysis \u00b7 model vs. market comparison',
      github: 'https://github.com/AmitGross/Against-All-Odds',
      website: 'https://againstallodds.app/',
      subprojects: [
        {
          title: 'Predict Every Match',
          badge: 'App',
          figures: {
            featured: { src: 'projects/wc-homepage.png', caption: 'Landing page — users predict exact scores for all 72 group-stage matches before kick-off.' },
            gallery: []
          }
        },
        {
          title: 'Private Rooms & Leaderboard',
          badge: 'App',
          figures: {
            featured: { src: 'projects/wc-room.png', caption: 'Create private rooms, invite friends, and track rankings on a live leaderboard.' },
            gallery: []
          }
        },
        {
          title: 'Full Knockout Bracket',
          badge: 'App',
          figures: {
            featured: { src: 'projects/wc-knockouts.png', caption: 'Live bracket from Round of 32 to the Final — updates automatically as results come in.' },
            gallery: []
          }
        }
      ]
    },
    'proj-04': {
      num: '04', category: 'Selected Projects',
      title: 'Genetic Algorithm Simulation',
      tags: ['Python', 'Genetic Algorithms', 'Simulation', 'Evolutionary ML'],
      desc: 'A 2D evolutionary simulation where agents (mice) learn to find food by evolving across generations using genetic algorithm principles. Each agent carries a list of random movement vectors as its \u201cgenetic data\u201d; the two best-performing agents in each generation reproduce, exchanging and mutating vector segments to produce the next generation.',
      context: 'A standalone Python simulation project. Demonstrates how evolutionary selection, recombination, and mutation can produce emergent goal-directed behaviour without explicit programming of the target behaviour.',
      did: 'Implemented a generation-based evolutionary loop \u00b7 Encoded agent behaviour as lists of random movement vectors (\u201cchromosomes\u201d) \u00b7 Implemented selection (top-2 by score), recombination (segment exchange between parent vectors), and mutation (random vector modification) \u00b7 Parametrised mutation rate, segment length, and population size \u00b7 Added support for multiple food sources \u00b7 Visualised agent movement and evolutionary progress in 2D space.',
      methods: 'Python \u00b7 genetic algorithms \u00b7 evolutionary simulation \u00b7 selection \u00b7 genetic recombination \u00b7 mutation \u00b7 2D agent simulation \u00b7 fitness scoring',
      output: 'Generation-by-generation improvement in food-finding behaviour \u00b7 configurable evolutionary dynamics \u00b7 2D simulation visualization',
      github: 'https://github.com/AmitGross/Genetic-Algorithms-Machine-Learning',
      figures: { featured: { src: 'projects/ga.jpg', caption: '2D simulation — agents (mice) evolve across generations to locate food sources.' }, gallery: [] }
    },
    'proj-05': {
      num: '05', category: 'Selected Projects',
      title: 'AltPiano',
      tags: ['Python', 'Pygame', 'Music', 'Education', 'Interactive'],
      desc: 'A Pygame-based interactive piano learning app built around an alternative keyboard layout. Teaches scales and chords by highlighting the active scale in real time, marking which notes within the scale are in position A or B, and accepting both mouse-click and keyboard input.',
      context: 'A standalone Python + Pygame project. Designed to make piano scale and chord learning more visual and interactive through an alternative key layout and real-time scale context.',
      did: 'Built an interactive piano interface using Pygame \u00b7 Designed an alternative visual keyboard layout \u00b7 Implemented real-time scale highlighting (yellow rectangle for active scale) \u00b7 Added A/B note labelling within the current scale \u00b7 Supported both mouse-click and keyboard input (A=C, S=D \u2026 J=A) \u00b7 Built a tutorial flow for new users.',
      methods: 'Python \u00b7 Pygame \u00b7 music theory (scales, chords) \u00b7 interactive UI design \u00b7 keyboard/mouse event handling',
      output: 'Interactive piano app \u00b7 real-time scale visualization \u00b7 note-within-scale marking \u00b7 tutorial mode',
      github: 'https://github.com/AmitGross/AltPiano'
    },
    'proj-06': {
      num: '06', category: 'Selected Projects',
      title: 'Lab Protocol Manager',
      tags: ['Python', 'Lab Tools', 'Immunohistochemistry', 'Desktop App'],
      desc: 'A desktop application for organizing, calculating, and documenting immunohistochemistry lab protocols. Features a protocol search engine (find protocols using similar reagents), built-in calculators for concentrations and dilutions, automatic ratio calculations, and a virtual lab notebook with date-stamped entries.',
      context: 'A standalone Python desktop app built for practical lab use in an immunohistochemistry setting. Designed to reduce manual calculation errors, enable protocol reuse by similarity search, and keep a digital record of experimental work.',
      did: 'Built a desktop app for immunohistochemistry protocol management \u00b7 Implemented protocol documentation with virtual notebook and auto-dating \u00b7 Developed protocol similarity search (find protocols sharing components) \u00b7 Built calculators for solution concentration, dilution, and substance ratios \u00b7 Generated organized protocol output with calculated substance amounts from user inputs.',
      methods: 'Python \u00b7 desktop app development \u00b7 protocol management \u00b7 concentration and dilution calculators \u00b7 search by component similarity \u00b7 virtual lab notebook',
      output: 'Organized protocol output with calculated amounts \u00b7 protocol similarity search \u00b7 virtual notebook with date-stamped entries \u00b7 packaged .exe application',
      github: 'https://github.com/AmitGross/Application-for-Lab-use'
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

          '<span class="di-category" id="di-category"></span>' +
        '</div>' +
        '<button class="di-close" id="di-close" type="button" aria-label="Collapse detail panel">' +
          '<span aria-hidden="true">\u2191</span> Collapse' +
        '</button>' +
      '</div>' +
      '<div class="di-body">' +
        '<h2 class="di-title" id="di-title" tabindex="-1"></h2>' +
        '<div class="di-github" id="di-github"></div>' +
        '<div class="di-tags" id="di-tags"></div>' +
        '<div class="di-content">' +
          '<div class="di-main">' +
            '<p class="di-desc" id="di-desc"></p>' +
            '<div class="di-figure">' +
              '<div class="fig-placeholder" aria-label="Figure placeholder">' +
                '<span class="fig-placeholder__label">Figure \u2014 placeholder</span>' +
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

  /* ── Lightbox ───────────────────────────────────────────── */
  var lb = document.createElement('div');
  lb.className = 'di-lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Image enlarged view');
  lb.hidden = true;
  lb.innerHTML =
    '<div class="di-lightbox__backdrop"></div>' +
    '<button class="di-lightbox__close" aria-label="Close enlarged view">\u00d7</button>' +
    '<div class="di-lightbox__img-wrap">' +
      '<img class="di-lightbox__img" src="" alt="">' +
    '</div>';
  document.body.appendChild(lb);

  var lbImg = lb.querySelector('.di-lightbox__img');

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    lb.querySelector('.di-lightbox__close').focus();
  }

  function closeLightbox() {
    lb.hidden = true;
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  lb.querySelector('.di-lightbox__close').addEventListener('click', closeLightbox);
  lb.querySelector('.di-lightbox__backdrop').addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lb.hidden) { closeLightbox(); }
  });

  /* Delegate clicks on any image inside the panel */
  panel.addEventListener('click', function (e) {
    var img = e.target.closest('img');
    if (!img) return;
    /* Skip tiny thumbnails — only images inside figure-frame or di-roadmap */
    if (img.closest('.figure-frame') || img.closest('.di-roadmap')) {
      openLightbox(img.src, img.alt);
    }
  });

  /* ── Subproject carousel ───────────────────────────────── */
  function initSubprojectCarousel(container, total) {
    var track   = container.querySelector('.di-carousel__track');
    var dots    = container.querySelectorAll('.di-carousel__dot');
    var btnPrev = container.querySelector('.di-carousel__btn--prev');
    var btnNext = container.querySelector('.di-carousel__btn--next');
    var counter = container.querySelector('.di-carousel__counter');
    var current = 0;

    function go(idx) {
      current = (idx + total) % total;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === current); });
      if (counter) counter.textContent = (current + 1) + ' / ' + total;
    }

    btnPrev.addEventListener('click', function () { go(current - 1); });
    btnNext.addEventListener('click', function () { go(current + 1); });
    dots.forEach(function (d, i) { d.addEventListener('click', function () { go(i); }); });

    /* Swipe support */
    var startX = 0;
    track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) go(dx < 0 ? current + 1 : current - 1);
    }, { passive: true });
  }

  /* ── Populate panel from data ───────────────────────────── */
  var SECTIONS = [
    { key: 'context', label: 'Context' },
    { key: 'did',     label: 'What I did' },
    { key: 'methods', label: 'Methods \u00b7 Tools' },
    { key: 'output',  label: 'Outputs \u00b7 Evidence' }
  ];

  function populate(data) {

    document.getElementById('di-category').textContent  = data.category || '';
    document.getElementById('di-title').textContent     = data.title    || '';
    document.getElementById('di-desc').textContent      = data.desc     || '';

    /* GitHub + website links */
    var ghEl = document.getElementById('di-github');
    var links = [];
    if (data.website) {
      links.push('<a class="di-github__link" href="' + esc(data.website) + '" target="_blank" rel="noopener noreferrer">&#x2197; Visit Site</a>');
    }
    if (data.github) {
      links.push('<a class="di-github__link" href="' + esc(data.github) + '" target="_blank" rel="noopener noreferrer">&#xe000; View on GitHub</a>');
    }
    ghEl.innerHTML = links.join('');

    /* Render figure area: real gallery if data.figures exists, subprojects, else placeholder */
    var figureEl = panel.querySelector('.di-figure');
    if (data.subprojects) {
      var slidesHTML = data.subprojects.map(function (sp, idx) {
        var figHTML = '';
        if (sp.figures) {
          var f = sp.figures;
          figHTML =
            '<figure class="connectome-feature">' +
              '<div class="figure-frame"><img src="' + esc(f.featured.src) + '" alt="' + esc(f.featured.caption) + '" loading="lazy"></div>' +
              '<figcaption>' + esc(f.featured.caption) + '</figcaption>' +
            '</figure>' +
            (f.gallery.length
              ? '<div class="connectome-gallery">' +
                  f.gallery.map(function (img) {
                    return '<figure><div class="figure-frame"><img src="' + esc(img.src) + '" alt="' + esc(img.caption) + '" loading="lazy"></div><figcaption>' + esc(img.caption) + '</figcaption></figure>';
                  }).join('') +
                '</div>'
              : '');
        } else {
          figHTML =
            '<div class="fig-placeholder">' +
              '<span class="fig-placeholder__label">' + esc(sp.figLabel || 'Figure \u2014 placeholder') + '</span>' +
            '</div>';
        }
        return (
          '<div class="di-carousel__slide">' +
            '<div class="di-subproject__header">' +
              '<h4 class="di-subproject__title">' + esc(sp.title) + '</h4>' +
              '<span class="di-subproject__badge">' + esc(sp.badge) + '</span>' +
            '</div>' +
            '<div class="di-subproject__figures">' + figHTML + '</div>' +
            (sp.posterDownload ? '<a class="di-roadmap__download" href="' + esc(sp.posterDownload) + '" download target="_blank" rel="noopener noreferrer">Download poster \u2193</a>' : '') +
            '<p class="di-subproject__citation">' + esc(sp.citation) + '</p>' +
          '</div>'
        );
      }).join('');
      var dotsHTML = data.subprojects.map(function (_, i) {
        return '<button class="di-carousel__dot' + (i === 0 ? ' is-active' : '') + '" aria-label="Project ' + (i + 1) + '"></button>';
      }).join('');
      figureEl.innerHTML =
        '<div class="di-subproject-carousel">' +
          '<div class="di-carousel__header">' +
            '<span class="di-carousel__counter">1 / ' + data.subprojects.length + '</span>' +
            '<div class="di-carousel__nav">' +
              '<button class="di-carousel__btn di-carousel__btn--prev" aria-label="Previous project">\u2190</button>' +
              '<button class="di-carousel__btn di-carousel__btn--next" aria-label="Next project">\u2192</button>' +
            '</div>' +
          '</div>' +
          '<div class="di-carousel__viewport">' +
            '<div class="di-carousel__track">' + slidesHTML + '</div>' +
          '</div>' +
          '<div class="di-carousel__dots">' + dotsHTML + '</div>' +
        '</div>';
      initSubprojectCarousel(figureEl, data.subprojects.length);
    } else if (data.figures) {
      var f = data.figures;
      var galleryHTML =
        '<div class="di-gallery">' +
          '<figure class="connectome-feature">' +
            '<div class="figure-frame">' +
              '<img src="' + esc(f.featured.src) + '" alt="' + esc(f.featured.caption) + '" loading="lazy">' +
            '</div>' +
            '<figcaption>' + esc(f.featured.caption) +
              (f.featured.pdf
                ? ' <a class="di-pdf-link" href="' + esc(f.featured.pdf) + '" target="_blank" rel="noopener noreferrer">View full PDF \u2197</a>'
                : '') +
            '</figcaption>' +
          '</figure>' +
          '<div class="connectome-gallery">' +
            f.gallery.map(function (img) {
              return (
                '<figure>' +
                  '<div class="figure-frame">' +
                    '<img src="' + esc(img.src) + '" alt="' + esc(img.caption) + '" loading="lazy">' +
                  '</div>' +
                  '<figcaption>' + esc(img.caption) + '</figcaption>' +
                '</figure>'
              );
            }).join('') +
          '</div>' +
        '</div>';
      figureEl.innerHTML = galleryHTML;
      if (data.posterDownload) {
        figureEl.innerHTML += '<a class="di-roadmap__download" href="' + esc(data.posterDownload) + '" download target="_blank" rel="noopener noreferrer">Download poster \u2193</a>';
      }
    } else {
      var placeholderLabel = esc(data.figLabel || 'Figure \u2014 placeholder');
      var downloadBtn = data.posterDownload
        ? '<a class="di-roadmap__download" href="' + esc(data.posterDownload) + '" download target="_blank" rel="noopener noreferrer">Download poster \u2193</a>'
        : '';
      figureEl.innerHTML =
        '<div class="fig-placeholder" aria-label="Figure placeholder">' +
          '<span class="fig-placeholder__label" id="di-fig-label">' + placeholderLabel + '</span>' +
          downloadBtn +
        '</div>';
    }

    document.getElementById('di-tags').innerHTML = (data.tags || []).map(function (t) {
      return '<span class="di-tag">' + esc(t) + '</span>';
    }).join('');

    var sectionsEl = document.getElementById('di-sections');
    sectionsEl.innerHTML = SECTIONS.map(function (s) {
      var val = data[s.key] || '[placeholder]';
      var cls = isPlaceholder(val) ? ' is-placeholder' : '';
      return (
        '<div class="di-section">' +
          '<span class="di-section__label">' + esc(s.label) + '</span>' +
          '<p class="di-section__text' + cls + '">' + esc(val) + '</p>' +
        '</div>'
      );
    }).join('');

    /* Optional roadmap section — image + download link */
    if (data.roadmap) {
      var rm = data.roadmap;
      sectionsEl.innerHTML +=
        '<div class="di-section di-section--roadmap">' +
          '<span class="di-section__label">Pipeline Roadmap</span>' +
          '<div class="di-roadmap">' +
            '<img src="' + esc(rm.img) + '" alt="Pipeline roadmap diagram" class="di-roadmap__img" loading="lazy">' +
            '<p class="di-section__text">' + esc(rm.text) + '</p>' +
            '<a class="di-roadmap__download" href="' + esc(rm.img) + '" download target="_blank" rel="noopener noreferrer">Download map \u2193</a>' +
          '</div>' +
        '</div>';
    }
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

  /* ── Auto-open card from URL hash (e.g. #ds-02) ─────────── */
  var hash = window.location.hash.slice(1);
  if (hash) {
    var target = document.querySelector('[data-detail-id="' + hash + '"]');
    if (target) {
      /* Small delay so layout is fully painted before scrolling */
      setTimeout(function () { target.click(); }, 80);
    }
  }

})();
