# Portfolio Detail-Panel Content Spec for Local Agent

Prepared for: **Amit Gross**  
Purpose: Tell the local website agent what text to place in the clickable card/detail panels across the website.

## Rules for the local agent

1. Do not invent missing details.
2. Keep anything marked `[placeholder]` as placeholder text.
3. Keep the existing dark scientific/editorial design.
4. Keep the homepage wheel.
5. Do not add **Against All Odds** to the homepage wheel.
6. Keep **Against All Odds** under **Selected Projects** only.
7. Use the same detail-panel structure everywhere:
   - Title
   - Category label
   - Short summary
   - Longer description
   - Context
   - What I did
   - Methods / tools
   - Outputs / evidence
   - Image/result placeholder
8. Do not commit changes until Amit reviews.

## Global links

Use these everywhere:

- Email: `mailto:amitgrock101@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/amit-gross-34438114b/`
- GitHub: `https://github.com/AmitGross`

---

# Homepage

## Hero

**Name:** Amit Gross

**Tagline:** Computational neuroscience, data science, and scientific operations.

**Short description:**  
I work across biological research, computational analysis, scientific workflows, operations, and teaching. This portfolio organizes my work by the main areas I contribute to: data science and computing, life sciences, operations, teaching, selected projects, and bio.

**Wheel instruction:**  
Click a section in the wheel or scroll below.

---

# Homepage Wheel and Scroll Cards

Use the same text in the wheel info card and in the scrollable cards below the wheel.

## 01 - Data Science & Computing

**Wheel label:** Data  
**Heading:** Analytical systems, models, and computational research  
**Description:** Work involving data analysis, statistical modeling, machine learning, graph-based analysis, scientific computing, and large-scale research workflows. This area includes computational neuroscience, predictive modeling, statistical analysis projects, and tools built to process and interpret complex datasets.  
**Tags:** Analysis · ML · Graphs · Pipelines  
**Link:** `data-science.html`

## 02 - Life Sciences

**Wheel label:** Life Sci  
**Heading:** Biological research, experimental methods, and neuroscience  
**Description:** Research and methodological experience across neurobiology, connectomics, microscopy, immunofluorescence, molecular methods, animal models, and biological experimentation. This section focuses on scientific questions, biological systems, and research methods.  
**Tags:** Neuroscience · Imaging · Methods · Research  
**Link:** `life-sciences.html`

## 03 - Operations

**Wheel label:** Ops  
**Heading:** Scientific operations, coordination, and systems support  
**Description:** Experience supporting research environments and data-driven operations, including scientific infrastructure, lab logistics, researcher support, KPI tracking, systems coordination, documentation, and cross-functional communication.  
**Tags:** Systems · Coordination · KPIs · Support  
**Link:** `operations.html`

## 04 - Teaching & Communication

**Wheel label:** Teaching  
**Heading:** Teaching, training, and scientific communication  
**Description:** Experience teaching, mentoring, training, and communicating scientific and computational ideas to different audiences, including students, researchers, and the public.  
**Tags:** Teaching · Training · Workshops · Communication  
**Link:** `teaching.html`

## 05 - Selected Projects

**Wheel label:** Projects  
**Heading:** Selected builds, case studies, and independent explorations  
**Description:** A focused collection of selected projects, including computational case studies, optimization work, algorithmic explorations, and independent tools or prototypes.  
**Tags:** Case Studies · Builds · Analysis · Tools  
**Link:** `projects.html`

## 06 - Bio

**Wheel label:** Bio  
**Heading:** Background, education, timeline, and contact  
**Description:** A concise overview of my background, education, technical and scientific experience, selected courses, CV, and contact information.  
**Tags:** Background · Timeline · CV · Contact  
**Link:** `bio.html`

---

# Data Science & Computing Page

## Page intro

**Title:** Data Science & Computing  
**Subtitle:** Analytical work, computational methods, and selected data-driven systems.

**Intro:**  
This section presents my computational and analytical work across scientific research, data science, statistical analysis, machine learning, graph analysis, and pipeline development. Much of my work has involved transforming complex data into interpretable structures, building workflows for repeated analysis, and producing visual or statistical outputs that support interpretation and decision making.

## Card: Connectome computational analysis

**Short summary:** Large-scale computational analysis of Drosophila connectome data, combining graph structures, synapse data, neuron morphology, statistical analysis, and visualization.

**Longer description:** Computational work on Drosophila connectome data, including extraction, processing, graph-based representation, statistical analysis, feature generation, and visualization of neuronal and synaptic data. The work involved handling large scientific datasets, building reusable Python workflows, and creating figures and summaries to support biological interpretation.

**Context:** The connectome project required working with complex neuronal structures, synaptic information, and large tabular datasets. The goal was to transform raw or semi-structured neural data into organized analytical outputs.

**What I did:**
- Built and modified Python workflows for connectome analysis.
- Represented neuron structures as graph/tree objects.
- Processed synapse and neuron data into tables and features.
- Created visualizations and statistical summaries.
- Organized the workflow into a reusable analysis pipeline.

**Methods / tools:** Python · Pandas · NumPy · NetworkX · Navis · NGLUI · statistical analysis · data visualization · graph analysis

**Outputs / evidence:** Pipeline diagrams · neuron/synapse visualizations · connectivity matrices · graph-based summaries · statistical plots · thesis/project figures

**Image/result placeholder:** `[Add connectome pipeline image, neuron visualization, matrix, graph, or statistical figure]`

**Missing details:** `[Confirm which figures can be shown publicly before publication]`

## Card: Statistical analysis project

**Short summary:** Applied statistical analysis for a Technion research project, including data interpretation, statistical testing, and communication of results.

**Longer description:** A statistical analysis project performed in the Technion context. The work involved analyzing project data, applying statistical or modeling approaches, and communicating results in a way that supported interpretation and decision making.

**Context:** `[placeholder - add project topic, research question, and dataset type]`

**What I did:**
- Analyzed project data.
- Applied statistical reasoning and tests.
- Created plots, summaries, or reports.
- Communicated findings to collaborators or stakeholders.

**Methods / tools:** Python · Pandas · NumPy · SciPy · statistical testing · visualization

**Outputs / evidence:** `[placeholder - add plots, tables, report screenshots, or summary figures]`

**Image/result placeholder:** `[Add statistical figure or analysis summary]`

## Card: AI geopositioning project

**Short summary:** Deep learning project predicting outdoor geographic position from WiFi signal fingerprints supervised by GPS data.

**Longer description:** A deep learning project using WiFi signal fingerprinting and GPS-labeled data to predict outdoor geographic location from wireless signal patterns. The project involved model development, evaluation, and optimization of predictive performance.

**Context:** The project connected signal data from different WiFi routers with GPS supervision, aiming to estimate geographic position from signal patterns.

**What I did:**
- Worked with tabular WiFi/GPS data.
- Built or supported deep neural network modeling.
- Used cross-validation and model evaluation.
- Applied hyperparameter optimization methods.

**Methods / tools:** TensorFlow · Keras · Scikit-learn · Pandas · NumPy · cross-validation · Optuna · Hyperopt · GPS-labeled data

**Outputs / evidence:** Training curves · error distributions · predicted vs. actual plots · model evaluation summaries

**Image/result placeholder:** `[Add model architecture, error plot, training curve, or predicted vs. actual plot]`

## Card: Machine learning

**Short summary:** Machine learning methods applied to tabular, graph-derived, and scientific data.

**Longer description:** Application of machine learning methods to scientific and tabular data, including classification, prediction, feature extraction, model evaluation, and interpretation.

**What I did:**
- Prepared features from biological or tabular data.
- Applied supervised learning methods.
- Evaluated model performance.
- Interpreted results through plots and metrics.

**Methods / tools:** Random Forest · regression · classification · Scikit-learn · cross-validation · feature extraction · confusion matrices

**Outputs / evidence:** Confusion matrices · predicted vs. actual plots · feature importance plots · cross-validation summaries

**Image/result placeholder:** `[Add confusion matrix, feature importance, or prediction plot]`

## Card: Deep learning

**Short summary:** Deep neural network modeling for WiFi/GPS geopositioning and tabular prediction.

**Longer description:** Deep learning work focused on supervised prediction using structured/tabular signal data. The main confirmed example is WiFi signal fingerprinting for geopositioning using GPS-labeled targets.

**Methods / tools:** TensorFlow · Keras · DNN · cross-validation · Optuna · Hyperopt

**Outputs / evidence:** Learning curves · model architecture diagram · error analysis

**Image/result placeholder:** `[Add training curve or architecture figure]`

## Card: Statistical testing and simulations

**Short summary:** Statistical testing, simulations, and quantitative comparisons used to evaluate patterns in research data.

**Longer description:** Use of statistical testing, hypothesis testing, simulations, and analytical comparisons to evaluate patterns in biological and tabular data.

**Methods / tools:** ANOVA · t-tests · Fisher's exact test · chi-square test · regression · SciPy · Pandas · visualization

**Outputs / evidence:** Box plots · violin plots · distribution plots · simulation curves · statistical result summaries

**Image/result placeholder:** `[Add statistical testing plot or simulation result]`

## Card: Graph analysis

**Short summary:** Graph-based analysis of neuronal structures, skeletons, adjacency matrices, and connectivity patterns.

**Longer description:** Graph-based analysis of biological structures and networks using Python tools. This includes tree representations of neuron skeletons, graph-derived features, adjacency matrices, clustering, and connectivity analysis.

**Methods / tools:** NetworkX · graph theory · tree structures · adjacency matrices · hierarchical clustering · dendrograms

**Outputs / evidence:** Network diagrams · dendrograms · heatmaps · graph feature plots

**Image/result placeholder:** `[Add graph diagram, heatmap, or dendrogram]`

---

# Life Sciences Page

## Page intro

**Title:** Life Sciences  
**Subtitle:** Biological research, neuroscience, experimental methods, and connectomics.

**Intro:**  
This section focuses on my biological and experimental background, including neurobiology research, connectomics, microscopy, immunofluorescence, animal models, behavior, molecular methods, and scientific methodology.

## Card: Connectome research

**Short summary:** Research on synaptic organization, neuronal structure, and connectivity patterns in the Drosophila connectome.

**Longer description:** Research focused on synaptic organization and neuronal structure in the Drosophila connectome, combining biological questions with computational analysis of neuron morphology, synapses, and connectivity patterns.

**What I did:**
- Worked with connectome data and neuron skeletons.
- Analyzed synaptic organization and structural features.
- Developed biological interpretations from computational outputs.
- Created figures and visualizations for research discussions.

**Methods / tools:** Connectomics · neuron skeletons · synapse analysis · axon/dendrite analysis · Neuroglancer/NGLUI · Navis

**Image/result placeholder:** `[Add neuron/synapse figure or connectome visualization]`

## Card: Neurobiology research

**Short summary:** Previous neurobiology research experience involving experimental work, biological methods, and research interpretation.

**Longer description:** Previous neurobiology research experience involving biological experiments, animal models, behavioral work, and molecular or cellular methods.

**Context:** `[placeholder - add specific project names and research questions]`

**What I did:** Participated in neurobiology research projects, used or supported biological methods, interpreted experimental results, and contributed to research workflows and outputs.

**Methods / tools:** Behavior · animal models · molecular methods · microscopy · immunofluorescence

**Image/result placeholder:** `[Add publication, poster, microscopy figure, behavioral plot, or experimental diagram]`

## Card: Weizmann research projects

**Short summary:** Research involvement and support in a scientific environment with microscopy, immunofluorescence, consultation, and multiple research projects.

**Longer description:** Research involvement at the Weizmann Institute, including work in a scientific environment with microscopy, immunofluorescence, researcher training, consultation, and support for multiple projects.

**What I did:**
- Supported research projects using microscopy and immunofluorescence.
- Consulted with researchers on methods and workflows.
- Helped train users in scientific techniques.
- Participated in a research-intensive environment.

**Methods / tools:** Confocal microscopy · 2-photon microscopy exposure/support · immunofluorescence · researcher training · scientific consultation

**Image/result placeholder:** `[Add microscopy image or facility/method workflow]`

## Card: Behavior

**Short summary:** Behavioral research methods used in neurobiology contexts.

**Longer description:** Experience with behavioral research methods in neurobiology contexts, including experimental design and interpretation of behavioral outcomes.

**Missing details:** `[placeholder - add specific behavioral assays and exact role]`

**Image/result placeholder:** `[Add behavior setup or result plot]`

## Card: Animal models

**Short summary:** Experience working with animal models in biological and neurobiology research contexts.

**Longer description:** Experience working with animal models in neurobiology research contexts.

**Missing details:** `[placeholder - confirm species/models and techniques]`

**Image/result placeholder:** `[Add schematic or protocol diagram, not sensitive images]`

## Card: Genetics, molecular methods, and pharmacology

**Short summary:** Molecular biology and genetics-related methods, including PCR, RT-PCR, and RNA workflows.

**Longer description:** Experience with genetics and molecular biology methods, including PCR, RT-PCR, RNA extraction, and related biological workflows. Pharmacology/drug-related work should be described only where confirmed.

**Methods / tools:** PCR · RT-PCR · RNA extraction · molecular biology · genetics

**Image/result placeholder:** `[Add molecular workflow or result image]`

**Missing details:** Exact pharmacology/drug examples: `[placeholder]`

## Card: Immunology

**Short summary:** Immunological and immunofluorescence-related methods for biological labeling and microscopy.

**Longer description:** Experience related to immunological methods and immunofluorescence-based labeling in biological samples.

**Methods / tools:** Immunofluorescence · staining · microscopy · biological labeling

**Image/result placeholder:** `[Add staining workflow or microscopy example]`

## Card: Optical imaging

**Short summary:** Microscopy and imaging experience, including confocal microscopy and 2-photon microscopy exposure/support.

**Longer description:** Experience with microscopy and imaging approaches, including confocal microscopy and 2-photon microscopy exposure/training/support in a research facility context.

**Methods / tools:** Confocal microscopy · 2-photon microscopy · fluorescence imaging · image interpretation

**Image/result placeholder:** `[Add microscopy image or imaging workflow]`

## Card: Connectomics methods

**Short summary:** Methods for working with connectome data, neuron skeletons, synapses, and neural visualization tools.

**Longer description:** Methods for working with connectome data, neuron skeletons, synapses, axon/dendrite compartments, graph structures, and visual links for neural data exploration.

**What I did:** Used and modified methods in Navis and NGLUI, generated Neuroglancer links, worked with skeletons and synapses, and built workflows for neural data exploration.

**Methods / tools:** Navis · NGLUI · Neuroglancer · skeleton analysis · synapse analysis · graph representation

**Image/result placeholder:** `[Add Neuroglancer screenshot, skeleton visualization, or synapse map]`

---

# Operations Page

## Page intro

**Title:** Operations  
**Subtitle:** Scientific operations, lab coordination, data operations, and systems support.

**Intro:**  
This section highlights operational work in scientific and industry contexts, including research support, lab logistics, facility work, KPI reporting, system coordination, documentation, and cross-functional communication.

## Card: Weizmann Institute Core Facility

**Short summary:** Research and imaging support at a Weizmann Institute core facility, including microscopy, immunofluorescence, researcher training, consultation, and scientific project support.

**Longer description:** Worked in a core facility environment supporting researchers with microscopy, immunofluorescence, consultation, training, and research project support.

**What I did:**
- Supported researchers using microscopy and immunofluorescence methods.
- Provided training and consultation.
- Helped users troubleshoot scientific and technical workflows.
- Supported multiple research projects in a shared infrastructure environment.

**Methods / tools:** Microscopy · immunofluorescence · researcher training · scientific consultation · facility support

**Image/result placeholder:** `[Add workflow diagram or microscopy-support visual]`

## Card: Lab logistics

**Short summary:** Support for laboratory workflows, research continuity, and operational coordination in scientific environments.

**Longer description:** Experience coordinating laboratory workflows, supporting research processes, maintaining operational continuity, and helping researchers carry out technical work effectively.

**Missing details:** `[placeholder - add exact logistical responsibilities]`

**Image/result placeholder:** `[Add process map or workflow diagram]`

## Card: IQVIA / Moderna EMEA Operations

**Short summary:** Industry operations experience supporting Moderna's EMEA call center through IQVIA: data and information systems, KPI monitoring, system coordination, documentation, and reporting.

**Longer description:** Industry operations experience connected to Moderna's call center in EMEA through IQVIA, involving data and information systems, KPI monitoring, system coordination, reporting, and operational support.

**What I did:**
- Managed or supported data and information systems.
- Worked with KPI reporting and operational metrics.
- Helped coordinate system changes, issues, and updates.
- Supported cross-functional operational communication.
- Contributed to operational processes in a large call-center environment.

**Methods / tools:** KPI reporting · data operations · system coordination · DAX support · Excel · Power BI · stakeholder communication

**Image/result placeholder:** `[Add anonymized dashboard-style mockup or process diagram]`

**Missing details:** Exact public role title, exact dates, and which KPIs/systems can be mentioned publicly.

## Card: KPI reporting

**Short summary:** Tracking, summarizing, and communicating operational performance indicators.

**Longer description:** Work involving performance indicators, operational metrics, reporting changes, and communicating process or system performance to stakeholders.

**Methods / tools:** KPIs · Excel · Power BI · DAX support · reporting · stakeholder communication

**Image/result placeholder:** `[Add anonymized KPI/reporting mockup]`

## Card: Systems coordination

**Short summary:** Coordination between tools, data workflows, teams, and stakeholders to support operational execution.

**Longer description:** Coordination between systems, data workflows, teams, and stakeholders to support operational execution and improve information flow.

**Methods / tools:** Systems coordination · documentation · issue reporting · cross-functional communication

**Image/result placeholder:** `[Add systems/process diagram]`

## Card: Cross-team coordination

**Short summary:** Coordination across research groups, departments, and external partners in scientific and industry environments.

**Longer description:** Coordination across research groups, departments, and external partners to deliver shared infrastructure and operational goals.

**Methods / tools:** Communication · coordination · documentation · stakeholder support

**Image/result placeholder:** `[Add coordination/workflow diagram]`

---

# Teaching & Communication Page

## Page intro

**Title:** Teaching & Communication  
**Subtitle:** Teaching, training, workshops, technical mentoring, and scientific communication.

**Intro:**  
This section presents teaching and communication work across life sciences, computational methods, research methods, public engagement, and technical training.

## Card: Neurohistology Lab

**Short summary:** Teaching assistant in a neurohistology course covering tissue preparation, immunofluorescence staining, and microscopy methods for graduate researchers.

**Longer description:** Teaching assistant experience in a neurohistology course at the Weizmann Institute, including topics such as tissue preparation, immunofluorescence, and microscopy.

**What I did:** Supported instruction in neurohistology methods, helped explain immunofluorescence and microscopy workflows, and assisted students/researchers with technical and conceptual questions.

**Methods / tools:** Neurohistology · immunofluorescence · microscopy · graduate teaching · practical instruction

**Image/result placeholder:** `[Add teaching diagram or method workflow]`

## Card: Python for Researchers (TA)

**Short summary:** Teaching assistant for a graduate Python course, supporting data handling, visualization, computational thinking, and applied scientific workflows.

**Longer description:** Teaching assistant experience in a Python course for graduate students, supporting students in computational thinking, coding, debugging, data handling, visualization, and applied programming.

**What I did:** Supported students learning Python, helped with debugging and code structure, explained data handling and visualization concepts, and guided applied programming exercises.

**Methods / tools:** Python · Pandas · data handling · visualization · debugging · Jupyter/Spyder-style workflows

**Image/result placeholder:** `[Add course/exercise diagram or teaching material screenshot]`

## Card: Research Methods (TA)

**Short summary:** Teaching assistant in advanced research methods and correlational research, covering statistical reasoning, experimental design, and scientific writing.

**Longer description:** Teaching assistant experience in advanced research methods and correlational research, involving statistical reasoning, experimental design, methodology, and student support.

**What I did:** Supported students in research methods, explained statistical and methodological concepts, helped with experimental design and scientific reasoning, and assisted in course-related teaching and evaluation.

**Methods / tools:** Research methods · correlation · statistics · experimental design · scientific writing

**Image/result placeholder:** `[Add method/teaching diagram]`

## Card: Science Communication (MUC)

**Short summary:** Public-facing science communication and educational content bridging research ideas with accessible explanations.

**Longer description:** Public-facing science communication and educational content work. This should be filled with the confirmed MUC context and examples.

**Missing details:** `[placeholder - confirm what MUC stands for, the audience, the exact activity, and what materials can be shown]`

**Methods / tools:** Science communication · workshops · public engagement · educational content

**Image/result placeholder:** `[Add workshop or outreach visual]`

---

# Selected Projects Page

## Page intro

**Title:** Selected Projects  
**Subtitle:** Case studies, builds, computational explorations, and independent tools.

**Intro:**  
This section presents selected projects that demonstrate analytical, computational, creative, and problem-solving work. Some are larger case studies, while others are focused builds or explorations.

## Card: Against All Odds

**Short summary:** A large-scale scientific computing and connectome analysis project built under complex data, workflow, and implementation constraints.

**Longer description:** A flagship selected project connected to the connectome work and broader effort of building a large, organized, scalable analysis pipeline under difficult constraints.

**Context:** The project required managing large scientific datasets, custom computational workflows, complex biological questions, and repeated analysis/visualization needs.

**What I did:**
- Built and organized analysis workflows.
- Processed large-scale connectome data.
- Integrated graph, tabular, and visualization methods.
- Created figures and summaries for interpretation.
- Managed technical complexity over a long project timeline.

**Methods / tools:** Python · Pandas · NumPy · NetworkX · Navis · NGLUI · graph analysis · statistical analysis · visualization · workflow organization

**Outputs / evidence:** Pipeline diagram · data flow diagram · neuron/synapse visualizations · graph/network outputs · statistical figures

**Image/result placeholder:** `[Add strongest connectome/pipeline image]`

**Missing details:** Final public title, allowed figures, publication/manuscript status.

## Card: Optimization

**Short summary:** Optimization work involving computational workflows, algorithmic efficiency, and model tuning.

**Longer description:** Work involving optimization of computational workflows, algorithms, or model parameters.

**Known examples:** Optimizing code for synapse distance calculations using geodesic matrices; evaluating time and space complexity; hyperparameter optimization in deep learning projects using Optuna and/or Hyperopt.

**Methods / tools:** Python · algorithmic optimization · time complexity · space complexity · Optuna · Hyperopt

**Image/result placeholder:** `[Add optimization plot or workflow comparison]`

**Missing details:** Specific project name and final quantitative results.

## Card: Genetic algorithms

**Short summary:** Algorithmic exploration using genetic algorithm concepts. Details to be confirmed.

**Longer description:** `[placeholder - fill only after Amit confirms the specific genetic algorithm project]`

**Methods / tools:** Genetic algorithms · optimization · fitness functions · selection · mutation · crossover

**Image/result placeholder:** `[Add genetic algorithm figure if available]`

## Card: AltKeyboard app

**Short summary:** Independent app/tool project. Details to be confirmed.

**Longer description:** `[placeholder - fill only after Amit confirms what the AltKeyboard app does, why it was built, and what can be shown]`

**Methods / tools:** `[placeholder - add framework/language/tools]`

**Image/result placeholder:** `[Add app screenshot or UI flow]`

---

# Bio Page

## Page intro

**Title:** Bio  
**Subtitle:** Background, education, timeline, CV, and contact.

**Short bio:**  
Amit Gross is a life sciences and data-oriented researcher with a background in neurobiology, bioinformatics, computational neuroscience, scientific operations, and teaching. His work spans experimental biology, connectomics, large-scale data analysis, Python-based computational workflows, machine learning, researcher support, and education.

**Longer bio:**  
I have a multidisciplinary background across biology, psychology, neurobiology, bioinformatics, data analysis, and scientific operations. My recent work has focused on computational analysis of Drosophila connectome data, including large-scale processing, graph-based analysis, synaptic organization, and visual/statistical interpretation of neural data.

Alongside research, I have worked in scientific support and operations environments, including a core facility at the Weizmann Institute and data/information systems work connected to Moderna's EMEA call center through IQVIA. I have also taught and supported students and researchers in Python, research methods, neurohistology, microscopy, and scientific workflows.

My portfolio reflects this mixed profile: scientific research, computational analysis, operational execution, and teaching.

## Bio card: Education

**Short summary:** Formal background in neurobiology, bioinformatics, biology, and psychology.

**Details:**
- M.Sc. Neurobiology & Bioinformatics - University of Haifa - `[placeholder - confirm official year/status]`
- B.Sc. Biology and Psychology - University of Haifa - `[placeholder - confirm years if displayed]`
- Selected coursework - `[placeholder - add selected courses]`

## Bio card: Timeline

**Short summary:** A professional timeline across research, computation, operations, and teaching.

**Suggested timeline items:**
- University of Haifa - M.Sc. connectome and computational neurobiology work
- Weizmann Institute - research support, core facility, microscopy, immunofluorescence, training
- Technion - statistical analysis, AI geopositioning, content/delivery work
- IQVIA / Moderna - data and information systems, KPI reporting, systems coordination
- Teaching - Python, research methods, neurohistology, science communication

**Missing details:** Exact years/dates for each timeline item.

## Bio card: CV

**Short summary:** Downloadable CV and professional summary.

**Button:** Download CV  
**Target:** `[placeholder - add final CV PDF path]`

## Bio card: Contact

**Short summary:** Ways to contact Amit and leave a message.

**Details:**
- Email: `amitgrock101@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/amit-gross-34438114b/`
- GitHub: `https://github.com/AmitGross`
- Location: Israel

**Contact form fields:** Name · Email · Phone · Message

**Static form message:** Thank you. The contact form is a placeholder for now and will be connected later.

---

# Other / Ideas / Hobbies Page

This page can appear in the hamburger menu, but it should not be part of the homepage wheel for now.

## Page intro

**Title:** Other / Ideas / Hobbies  
**Subtitle:** Side ideas, creative work, and exploratory concepts.

**Intro:**  
A place for selected side ideas, creative experiments, independent concepts, and non-standard projects that do not fit neatly into the main professional sections.

## Card: Magnetic navigation idea

**Short summary:** A conceptual research direction involving magnetic field maps, GPS data, and AI modeling for navigation.

**Longer description:** A conceptual research direction involving magnetic field maps, GPS data, and AI modeling to explore how magnetic field variation may relate to animal navigation and bio-inspired navigation systems.

**Possible applications:** Bird migration research · magnetic anomaly analysis · bio-inspired navigation · GPS-limited navigation · conservation-oriented tracking ideas

**Missing details:** Current status and whether this is a proposal, concept, or active project.

**Image/result placeholder:** `[Add concept diagram, map mockup, or magnetic-field visualization]`

## Card: Artwork

**Short summary:** Creative visual work and object-based artwork.

**Longer description:** Creative visual work and object-based artwork. This can be included as a side section if Amit wants the portfolio to show a more personal or creative dimension.

**What to show:** Finished artwork photos · process photos · materials · short captions

**Image/result placeholder:** `[Add artwork images]`

---

# Prompt for the Local Agent

```text
Read portfolio_detail_panel_content_spec.md.

Use it to fill the website's cards and detail panels.

Rules:
1. Do not invent missing details.
2. Keep anything marked [placeholder] as placeholder text.
3. Keep the existing visual design.
4. Keep the homepage wheel.
5. Do not add Against All Odds to the homepage wheel.
6. Keep Against All Odds under Selected Projects only.
7. Add or update detail-panel content using the exact section/card structure in the file.
8. Add image/result placeholder blocks where specified.
9. Fix contact links everywhere:
   - Email: mailto:amitgrock101@gmail.com
   - LinkedIn: https://www.linkedin.com/in/amit-gross-34438114b/
   - GitHub: https://github.com/AmitGross
10. Do not commit until I review.

After updating, show:
- files changed
- which cards/detail panels were updated
- which [placeholder] items remain
- how to preview locally
```
