/**
 * Juan Felipe Malaver O. - Personal Landing Page
 * Interactive 3D Physics Engine, 3D Futuristic Modular Keys, & Capabilities Registry
 */

(function () {
  'use strict';

    // --- 1. FULL 52 CAPABILITIES DATA REGISTRY (Grounded in Skills_Clasificadas.docx & CV) ---
  const capabilitiesData = {
    'prog-1': {
      number: '01',
      symbol: 'Py',
      name: 'Python',
      family: 'Programming Languages',
      catClass: 'cat-prog',
      app: 'Primary language for advanced machine learning, causal econometrics, and production data pipelines.',
      impact: 'Engineered end-to-end econometric estimation models, automated feature engineering, and scalable ML modules across enterprise banking clients.'
    },
    'prog-2': {
      number: '02',
      symbol: 'Sql',
      name: 'SQL - MySQL',
      family: 'Programming Languages',
      catClass: 'cat-prog',
      app: 'Complex relational querying, transactional aggregation, window analytical functions, and schema optimization.',
      impact: 'Queried and processed multi-million financial cardholder transaction databases; optimized query execution runtimes on enterprise data warehouses.'
    },
    'prog-3': {
      number: '03',
      symbol: 'R',
      name: 'R',
      family: 'Programming Languages',
      catClass: 'cat-prog',
      app: 'Rigorous statistical inference, longitudinal panel econometrics, spatial vector mapping, and reproducible research.',
      impact: 'Created the open-source ML_for_ALL curriculum and taught applied microeconometrics, statistical inference, and spatial models at Universidad del Rosario.'
    },
    'prog-4': {
      number: '04',
      symbol: 'Tex',
      name: 'LaTeX',
      family: 'Programming Languages',
      catClass: 'cat-prog',
      app: 'Technical scientific typesetting, mathematical formalisms, academic documentation, and publication-ready econometric reports.',
      impact: 'Authored mathematical research proofs, econometric working papers, and technical institutional documentation with full academic rigor.'
    },
    'lang-1': {
      number: '05',
      symbol: 'Es',
      name: 'Spanish (Native)',
      family: 'Languages',
      catClass: 'cat-lang',
      app: 'Native bilingual executive communication, C-suite presentation delivery, and stakeholder engagement in LATAM markets.',
      impact: 'Delivered keynote graduation address at Universidad del Rosario and conducted bilingual consulting deliverables across LATAM financial entities.'
    },
    'lang-2': {
      number: '06',
      symbol: 'En',
      name: 'English C1 (IELTS 2020)',
      family: 'Languages',
      catClass: 'cat-lang',
      app: 'Full professional and academic working proficiency for international consulting, quantitative modeling, and institutional governance.',
      impact: 'Completed dual economics undergraduate training in London at LSE; elected Student Voice Group Champion; IELTS C1 certified.'
    },
    'lang-3': {
      number: '07',
      symbol: 'Fr',
      name: 'French (Basic)',
      family: 'Languages',
      catClass: 'cat-lang',
      app: 'Fundamental working comprehension for international correspondence, multilateral collaboration, and global literacy.',
      impact: 'Broadens cultural adaptability and foundational communication in European and multinational institutional contexts.'
    },
    'lang-4': {
      number: '08',
      symbol: 'It',
      name: 'Italian (Basic)',
      family: 'Languages',
      catClass: 'cat-lang',
      app: 'Foundational conversational and technical reading comprehension in European cultural and economic environments.',
      impact: 'Expands cross-border linguistic versatility alongside international academic and empirical research initiatives.'
    },
    'gda-1': {
      number: '09',
      symbol: 'Dg',
      name: 'Data Governance',
      family: 'General Data Analysis',
      catClass: 'cat-gda',
      app: 'Establishing enterprise data policies, metadata standards, lineage mapping, and data stewardship across analytical environments.',
      impact: 'Designed structured governance protocols and standardized pipeline schemas ensuring auditability and compliance for institutional stakeholders.'
    },
    'gda-2': {
      number: '10',
      symbol: 'Gdp',
      name: 'GDPR (PII Protection)',
      family: 'General Data Analysis',
      catClass: 'cat-gda',
      app: 'Implementing privacy-by-design, data masking, pseudonymization, and strict compliance with European and international privacy frameworks.',
      impact: 'Ensured strict GDPR compliance when engineering analytics and data features handling sensitive financial and cardholder PII.'
    },
    'gda-3': {
      number: '11',
      symbol: 'Ci',
      name: 'Causal Inference (PSM & DiD)',
      family: 'General Data Analysis',
      catClass: 'cat-gda',
      app: 'Quasi-experimental impact evaluation to isolate true incremental commercial lift from organic macroeconomic drift.',
      impact: 'Applied Propensity Score Matching (PSM) & Difference-in-Differences (DiD) at Mastercard (+3% spend lift per iteration); implemented Callaway-Sant’Anna multi-period DiD for global academic research.'
    },
    'gda-4': {
      number: '12',
      symbol: 'Ab',
      name: 'A/B Testing & RCTs',
      family: 'General Data Analysis',
      catClass: 'cat-gda',
      app: 'Randomized controlled trial (RCT) design, sample size power calculations, variance reduction, and minimum detectable effect (MDE) analysis.',
      impact: 'Designed statistical experimentation frameworks for merchant offers and user engagement tests, driving statistically significant conversion increases.'
    },
    'gda-5': {
      number: '13',
      symbol: 'Ecm',
      name: 'Advanced Econometrics & Impact Measurement',
      family: 'General Data Analysis',
      catClass: 'cat-gda',
      app: 'Microeconometric modeling, instrumental variables, panel data regression, and rigorous hypothesis testing grounded in economic theory.',
      impact: 'Awarded Best Final Project in Applied Microeconomics (Universidad del Rosario) and 4th place nationwide in the National Academic Economics Competition (CANE).'
    },
    'gda-6': {
      number: '14',
      symbol: 'Psm',
      name: 'Propensity Score Matching (PSM)',
      family: 'General Data Analysis',
      catClass: 'cat-gda',
      app: 'Balancing multi-dimensional covariates between treated and control cohorts in observational commercial datasets.',
      impact: 'Constructed logistic propensity matching algorithms at Mastercard to isolate clean baseline counterfactuals for loyalty program evaluations.'
    },
    'gda-7': {
      number: '15',
      symbol: 'Exp',
      name: 'Experiments Design',
      family: 'General Data Analysis',
      catClass: 'cat-gda',
      app: 'Formulating robust hypothesis testing structures, multi-arm setups, stratified randomization, and pre-post intervention analysis.',
      impact: 'Architected clean experimental testbeds across commercial portfolios to validate revenue mechanics prior to broad market rollout.'
    },
    'gda-8': {
      number: '16',
      symbol: 'Did',
      name: "Difference in Differences (Callaway & Sant'Anna)",
      family: 'General Data Analysis',
      catClass: 'cat-gda',
      app: 'Modern staggered adoption DiD modeling avoiding two-way fixed effects (TWFE) negative weighting biases.',
      impact: 'Applied Callaway-Sant’Anna multi-period DiD models for academic research with faculty from Princeton, Penn State, and University of Chicago.'
    },
    'gda-9': {
      number: '17',
      symbol: 'Seq',
      name: 'Sequential Pattern Analysis (Cross-Sale)',
      family: 'General Data Analysis',
      catClass: 'cat-gda',
      app: 'Modeling time-ordered transaction sequences to uncover cross-sell paths and multi-stage client purchase trajectories.',
      impact: 'Identified high-conversion sequential buying pathways to recommend tailored product sequences across commercial cardholder segments.'
    },
    'gda-10': {
      number: '18',
      symbol: 'Rfm',
      name: 'RFM Customer Models',
      family: 'General Data Analysis',
      catClass: 'cat-gda',
      app: 'Recency, Frequency, and Monetary transaction scoring methodologies to categorize client lifetime engagement and margin contribution.',
      impact: 'Designed customer segmentation and scoring based on RFM models, increasing the <strong>monetary effectiveness of loyalty programs by 23%</strong>.'
    },
    'gda-11': {
      number: '19',
      symbol: 'Gis',
      name: 'Spatial Analysis (Shapefiles & Rasters)',
      family: 'General Data Analysis',
      catClass: 'cat-gda',
      app: 'Geospatial vector processing, polygon intersections, raster map algebra, and spatial econometric modeling.',
      impact: 'Engineered spatial analysis workflows in R analyzing regional economic disparities, public policy impacts, and territorial trends.'
    },
    'gda-12': {
      number: '20',
      symbol: 'Ts',
      name: 'Time Series Analysis',
      family: 'General Data Analysis',
      catClass: 'cat-gda',
      app: 'ARIMA, exponential smoothing, vector autoregression (VAR), stationarity testing, and cointegration modeling.',
      impact: 'Projected client transactional volume and seasonal payment fluctuations to inform treasury liquidity and promotional scheduling.'
    },
    'gda-13': {
      number: '21',
      symbol: 'Pca',
      name: 'PCA (Principal Component Analysis)',
      family: 'General Data Analysis',
      catClass: 'cat-gda',
      app: 'Dimensionality reduction, orthogonal factor extraction, and feature decorrelation for high-dimensional financial datasets.',
      impact: 'Synthesized multidimensional merchant behavior signals into interpretable principal components to eliminate multicollinearity in risk models.'
    },
    'gda-14': {
      number: '22',
      symbol: 'Sps',
      name: 'SPSS (Statistical Package)',
      family: 'General Data Analysis',
      catClass: 'cat-gda',
      app: 'Multivariate statistical hypothesis testing, ANOVA, descriptive analytics, factor analysis, and cross-sectional survey processing.',
      impact: 'Conducted rigorous statistical processing and survey data analysis in applied economics and empirical institutional research.'
    },
    'mlds-1': {
      number: '23',
      symbol: 'Mls',
      name: 'Python (Scikit-Learn, PyTorch, PySpark, TF)',
      family: 'Machine Learning & Data Science',
      catClass: 'cat-mlds',
      app: 'End-to-end predictive modeling, neural architectures, distributed big data transformations, and feature engineering.',
      impact: 'Engineered automated statistical workflows, large-scale ETL pipelines, and scalable modeling modules in production enterprise environments.'
    },
    'mlds-2': {
      number: '24',
      symbol: 'Etl',
      name: 'ETL Pipelines',
      family: 'Machine Learning & Data Science',
      catClass: 'cat-mlds',
      app: 'Automating extract, transform, and load workflows with automated data cleansing, schema validation, and incremental refreshes.',
      impact: 'Streamlined transactional ingestion into structured analytical feature stores, cutting manual preparation overhead significantly.'
    },
    'mlds-3': {
      number: '25',
      symbol: 'Mla',
      name: 'Machine Learning (Clustering, Ensembles, Trees)',
      family: 'Machine Learning & Data Science',
      catClass: 'cat-mlds',
      app: 'Supervised and unsupervised models utilizing Euclidean/Gower distances, ElasticNet, Random Forest, XGBoost, and LightGBM.',
      impact: 'Implemented K-Medoids Clustering with Gower Distance for merchant segmentation at Mastercard, generating <strong>over COP 5,000 million</strong> in annual profitability.'
    },
    'mlds-4': {
      number: '26',
      symbol: 'Arm',
      name: 'ARM & Apriori Algorithm',
      family: 'Machine Learning & Data Science',
      catClass: 'cat-mlds',
      app: 'Combinatorial market basket analysis, itemset support/confidence mining, and affinity graph modeling.',
      impact: 'Uncovered hidden cross-selling product associations in banking cardholder transactions to optimize merchant co-marketing initiatives.'
    },
    'mlds-5': {
      number: '27',
      symbol: 'Mcp',
      name: 'Model Context Protocol (MCP)',
      family: 'Machine Learning & Data Science',
      catClass: 'cat-mlds',
      app: 'Standardized client-server protocol enabling LLMs to securely query databases, run code, and interface with external tool ecosystems.',
      impact: 'Architected custom MCP tool integrations connecting enterprise models with structured financial data stores and analytical APIs.'
    },
    'mlds-6': {
      number: '28',
      symbol: 'Agy',
      name: 'Claude Code, Codex & Antigravity',
      family: 'Machine Learning & Data Science',
      catClass: 'cat-mlds',
      app: 'State-of-the-art autonomous coding agents, agentic workflows, repository synthesis, and interactive CLI development.',
      impact: 'Leveraged advanced AI coding environments to accelerate data software development, test automation, and full-stack prototyping.'
    },
    'mlds-7': {
      number: '29',
      symbol: 'Agt',
      name: 'Skills & Multi-Agent Teams',
      family: 'Machine Learning & Data Science',
      catClass: 'cat-mlds',
      app: 'Designing modular custom skills, role-based agent hierarchies, and cooperative multi-agent orchestration for complex workflows.',
      impact: 'Built modular agent configurations with specialized roles (Data Analyst, QA, Researcher, Orchestrator) to solve complex analytical tasks.'
    },
    'mlds-8': {
      number: '30',
      symbol: 'Prm',
      name: 'Prompt Engineering',
      family: 'Machine Learning & Data Science',
      catClass: 'cat-mlds',
      app: 'Few-shot prompting, chain-of-thought, structured output constraints, and system prompt optimization for high-reliability outputs.',
      impact: 'Engineered deterministic prompting frameworks producing structured JSON outputs for enterprise data classification and summary generation.'
    },
    'mlds-9': {
      number: '31',
      symbol: 'Crw',
      name: 'CrewAI',
      family: 'Machine Learning & Data Science',
      catClass: 'cat-mlds',
      app: 'Autonomous multi-agent orchestration frameworks assigning role-based tasks, memory, and tool usage to collaborate on end-to-end goals.',
      impact: 'Built collaborative multi-agent pipelines for automated market research, competitive benchmarking, and structured data synthesis.'
    },
    'tool-1': {
      number: '32',
      symbol: 'Aws',
      name: 'AWS (Cloud Ecosystem)',
      family: 'Stack & Tools',
      catClass: 'cat-tool',
      app: 'Enterprise cloud infrastructure for scalable analytics, distributed storage, and compute environments.',
      impact: 'Architected cloud solutions utilizing Amazon Web Services for data processing, secure querying, and client deliverable pipelines.'
    },
    'tool-2': {
      number: '33',
      symbol: 'Glu',
      name: 'AWS Glue',
      family: 'Stack & Tools',
      catClass: 'cat-tool',
      app: 'Serverless data integration service for cataloging, ETL jobs, and automated data discovery.',
      impact: 'Configured metadata crawlers and serverless ETL jobs to transform raw financial logs into optimized parquet schemas.'
    },
    'tool-3': {
      number: '34',
      symbol: 'Wrn',
      name: 'AWS Data Wrangler',
      family: 'Stack & Tools',
      catClass: 'cat-tool',
      app: 'Accelerating Python pandas integration with AWS services (Athena, S3, Redshift) via high-performance vectorized I/O.',
      impact: 'Integrated awswrangler into statistical scripts for seamless data extraction and high-speed data lake transfers.'
    },
    'tool-4': {
      number: '35',
      symbol: 'Stp',
      name: 'AWS Step Functions',
      family: 'Stack & Tools',
      catClass: 'cat-tool',
      app: 'Visual workflow orchestrator coordinating multi-step distributed analytical pipelines and event-driven automation.',
      impact: 'Designed resilient state machines coordinating data ingestion, validation checks, and ML model scoring runs.'
    },
    'tool-5': {
      number: '36',
      symbol: 'S3',
      name: 'AWS S3 (Data Lake)',
      family: 'Stack & Tools',
      catClass: 'cat-tool',
      app: 'Object storage architecture, bucket policy security, lifecycle rules, and partitioning strategies for analytical data lakes.',
      impact: 'Organized enterprise data lakes in S3 with partitioned directory layouts to minimize Athena query scan costs.'
    },
    'tool-6': {
      number: '37',
      symbol: 'Put',
      name: 'PuTTY & WinSCP',
      family: 'Stack & Tools',
      catClass: 'cat-tool',
      app: 'SSH tunneling, remote server administration, secure key authentication, and SFTP data transfer.',
      impact: 'Administered secure remote analytics servers, automated file transfers, and managed production compute jobs via terminal.'
    },
    'tool-7': {
      number: '38',
      symbol: 'Dbr',
      name: 'Databricks',
      family: 'Stack & Tools',
      catClass: 'cat-tool',
      app: 'Unified lakehouse platform for collaborative Apache Spark computing, MLflow tracking, and big data transformations.',
      impact: 'Executed large-scale data science notebooks and distributed transformations across multi-node Spark clusters.'
    },
    'tool-8': {
      number: '39',
      symbol: 'Dku',
      name: 'Dataiku DSS',
      family: 'Stack & Tools',
      catClass: 'cat-tool',
      app: 'Collaborative enterprise data science platform for visual recipes, flow governance, and automated deployment.',
      impact: 'Constructed end-to-end data preparation flows and production scoring recipes in client enterprise deployments.'
    },
    'tool-9': {
      number: '40',
      symbol: 'Knm',
      name: 'KNIME Analytics',
      family: 'Stack & Tools',
      catClass: 'cat-tool',
      app: 'Visual workflow design for data mining, modular analytics, and auditable pipeline construction.',
      impact: 'Built automated statistical transformation nodes and data audit workflows for rapid prototyping without code sprawl.'
    },
    'tool-10': {
      number: '41',
      symbol: 'Pbi',
      name: 'Power BI',
      family: 'Stack & Tools',
      catClass: 'cat-tool',
      app: 'Interactive business intelligence dashboards, DAX measures, data modeling, and automated executive reporting.',
      impact: 'Developed comprehensive commercial dashboards displaying client segment KPI trajectories and campaign performance metrics.'
    },
    'tool-11': {
      number: '42',
      symbol: 'Tab',
      name: 'Tableau',
      family: 'Stack & Tools',
      catClass: 'cat-tool',
      app: 'Advanced visual analytics, parameter-driven forecasting, geographical maps, and C-suite KPI monitoring.',
      impact: 'Built executive scorecards translating machine learning segmentations into actionable visual stories for banking directors.'
    },
    'tool-12': {
      number: '43',
      symbol: 'Spk',
      name: 'Hadoop & Apache Spark',
      family: 'Stack & Tools',
      catClass: 'cat-tool',
      app: 'Distributed computing, MapReduce concepts, resilient distributed datasets (RDDs), and Spark SQL on large-scale clusters.',
      impact: 'Processed massive transaction logs in distributed memory, reducing data aggregation times from hours to minutes.'
    },
    'tool-13': {
      number: '44',
      symbol: 'Stl',
      name: 'Streamlit (Web Apps)',
      family: 'Stack & Tools',
      catClass: 'cat-tool',
      app: 'Rapidly prototyping and deploying interactive data applications, simulation widgets, and machine learning dashboards in pure Python.',
      impact: 'Built interactive web applications allowing commercial stakeholders to dynamically simulate marketing budget allocations and ROI.'
    },
    'tool-14': {
      number: '45',
      symbol: 'Vrc',
      name: 'Vercel (Deployment)',
      family: 'Stack & Tools',
      catClass: 'cat-tool',
      app: 'Edge cloud hosting, modern web deployment, automated CI/CD git workflows, and high-performance CDN distribution.',
      impact: 'Deployed responsive web tools and client-facing portals with instant global performance and automated version control.'
    },
    'tool-15': {
      number: '46',
      symbol: 'Xls',
      name: 'Excel (Macros & Advanced Modeling)',
      family: 'Stack & Tools',
      catClass: 'cat-tool',
      app: 'VBA scripting, financial sensitivity modeling, Monte Carlo simulations, and automated workbook data flows.',
      impact: 'Engineered high-complexity financial models and automated reporting macros used in boardroom presentations and consulting deliverables.'
    },
    'tool-16': {
      number: '47',
      symbol: 'Pqw',
      name: 'Power Query & Power Pivot',
      family: 'Stack & Tools',
      catClass: 'cat-tool',
      app: 'M-code transformations, star-schema data modeling, relational dimension tables, and in-memory DAX calculations.',
      impact: 'Unified multi-source spreadsheets into structured data models, automating recurring monthly reporting cycles.'
    },
    'tool-17': {
      number: '48',
      symbol: 'Ide',
      name: 'VS Code & Jupyter',
      family: 'Stack & Tools',
      catClass: 'cat-tool',
      app: 'Modern developer IDE environments, interactive computational exploration, remote SSH debugging, and git version control.',
      impact: 'Primary daily coding environment for rapid statistical experimentation, reproducible markdown reporting, and production Python scripts.'
    },
    'tool-18': {
      number: '49',
      symbol: 'Imp',
      name: 'Apache Impala',
      family: 'Stack & Tools',
      catClass: 'cat-tool',
      app: 'Low-latency massively parallel processing (MPP) SQL query engine on Apache Hadoop datasets.',
      impact: 'Conducted high-speed interactive ad-hoc analytical queries directly on petabyte-scale Hadoop data lakes without batch lag.'
    },
    'biz-1': {
      number: '50',
      symbol: 'Cst',
      name: 'Strategic Consulting',
      family: 'Consulting & Business',
      catClass: 'cat-biz',
      app: 'Diagnosing operational friction, evaluating competitive acquiring landscapes, and defining evidence-based commercial roadmaps.',
      impact: 'Advised corporate clients and financial institutions across Latin America on revenue monetization, card acceptance, and market expansion.'
    },
    'biz-2': {
      number: '51',
      symbol: 'Exc',
      name: 'Executive Communication',
      family: 'Consulting & Business',
      catClass: 'cat-biz',
      app: 'Synthesizing complex econometric findings and model loss metrics into crisp C-suite recommendations and board presentations.',
      impact: 'Delivered graduation speech at Universidad del Rosario; presented strategic recommendations to bank vice-presidents across LATAM.'
    },
    'biz-3': {
      number: '52',
      symbol: 'Skm',
      name: 'Stakeholders Management',
      family: 'Consulting & Business',
      catClass: 'cat-biz',
      app: 'Aligning technical data teams, commercial product owners, and executive leadership toward unified delivery goals.',
      impact: 'Successfully coordinated multi-disciplinary initiatives across international banking partners, ensuring on-time adoption and buy-in.'
    },
    'biz-4': {
      number: '53',
      symbol: 'Aig',
      name: 'AI Governance, Risk & Ethics',
      family: 'Consulting & Business',
      catClass: 'cat-biz',
      app: 'Assessing algorithmic bias, model fairness, regulatory compliance (EU AI Act), transparency, and responsible AI guardrails.',
      impact: 'Standardized ethical evaluation protocols and bias mitigations for proprietary predictive models handling consumer credit decisions.'
    },
    'biz-5': {
      number: '54',
      symbol: 'Lss',
      name: 'Lean Six Sigma',
      family: 'Consulting & Business',
      catClass: 'cat-biz',
      app: 'DMAIC methodology, root-cause analysis, variance reduction, and process cycle time optimization.',
      impact: 'Applied Lean Six Sigma principles to streamline data validation procedures, cutting analytical turnaround cycles and errors.'
    },
    'biz-6': {
      number: '55',
      symbol: 'Bdi',
      name: 'Big Data & BI Strategy',
      family: 'Consulting & Business',
      catClass: 'cat-biz',
      app: 'Translating raw transactional data architectures into strategic enterprise decision systems and commercial competitive advantages.',
      impact: 'Formulated commercial intelligence roadmaps for acquirers and retail banking entities, directly unlocking untapped revenue streams.'
    },
    'biz-7': {
      number: '56',
      symbol: 'Pjm',
      name: 'Project Management',
      family: 'Consulting & Business',
      catClass: 'cat-biz',
      app: 'Agile/Scrum ceremonies, milestone scoping, risk mitigation matrices, and cross-functional project tracking.',
      impact: 'Led high-impact analytics consulting deliverables at Mastercard, delivering multi-million COP profitability within tight deadlines.'
    },
    'biz-8': {
      number: '57',
      symbol: 'Ldr',
      name: 'Leadership & Mentorship',
      family: 'Consulting & Business',
      catClass: 'cat-biz',
      app: 'Pedagogical mentoring, cross-functional team coordination, and student representation in international institutions.',
      impact: 'Awarded Best Intern of the Year 2025 at Mastercard; Global Finalist in Mastercard Innovation Challenge; Student Voice Champion at LSE.'
    }
  };

  // --- 2. PERIODIC TABLE INTERACTIONS & 3D TACTILE BUTTONS ---
  function initPeriodicTable() {
    const tableContainer = document.getElementById('periodic-table');
    const filterTabs = document.querySelectorAll('.filter-tab');
    const inspectorNumber = document.getElementById('inspector-number');
    const inspectorSymbol = document.getElementById('inspector-symbol');
    const inspectorFamily = document.getElementById('inspector-family');
    const inspectorName = document.getElementById('inspector-name');
    const inspectorApp = document.getElementById('inspector-app');
    const inspectorImpact = document.getElementById('inspector-impact');

    if (!tableContainer) return;

    const cells = tableContainer.querySelectorAll('.pt-cell');

    function updateInspector(id) {
      const data = capabilitiesData[id];
      if (!data) return;

      inspectorNumber.textContent = data.number;
      inspectorSymbol.textContent = data.symbol;
      inspectorFamily.textContent = data.family;
      inspectorName.textContent = data.name;
      inspectorApp.textContent = data.app;
      inspectorImpact.innerHTML = data.impact;

      cells.forEach(c => {
        if (c.getAttribute('data-id') === id) {
          c.classList.add('is-active');
          c.setAttribute('aria-selected', 'true');
        } else {
          c.classList.remove('is-active');
          c.removeAttribute('aria-selected');
        }
      });
    }

    // 3D Parallax Tilt & Tactile Press Effects on cells
    cells.forEach(cell => {
      const id = cell.getAttribute('data-id');

      cell.addEventListener('mousemove', (e) => {
        const rect = cell.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -((y - centerY) / centerY) * 12;
        const rotateY = ((x - centerX) / centerX) * 12;

        cell.style.transform = `perspective(1000px) translateY(-4px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
        cell.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
        cell.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
      });

      cell.addEventListener('mouseleave', () => {
        cell.style.transform = '';
      });

      cell.addEventListener('mousedown', () => {
        cell.classList.add('is-pressed');
      });

      cell.addEventListener('mouseup', () => {
        cell.classList.remove('is-pressed');
      });

      cell.addEventListener('mouseenter', () => updateInspector(id));
      cell.addEventListener('click', () => updateInspector(id));

      cell.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          updateInspector(id);
        }
      });
    });

    // Category Filters for the 5 Families: lang, gda, mlds, tool, biz
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const filter = tab.getAttribute('data-filter');

        filterTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        let firstMatch = null;
        cells.forEach(cell => {
          const cat = cell.getAttribute('data-cat');
          if (filter === 'all' || cat === filter) {
            cell.style.display = 'flex';
            if (!firstMatch) firstMatch = cell.getAttribute('data-id');
          } else {
            cell.style.display = 'none';
          }
        });

        if (firstMatch) {
          updateInspector(firstMatch);
        }
      });
    });

    // Default selection: Causal Inference (gda-3)
    updateInspector('gda-3');
  }

  // --- 2.1 FLOATING SKILLS CLOUD ON 3D INTRO STAGE (HORIZONTAL, VARIED OPACITIES, CONCURRENCY LIMIT) ---
  function initFloatingSkillsCloud() {
    const container = document.getElementById('intro-floating-skills');
    if (!container) return;

    // Rich pool of authentic skills from Skills_Clasificadas.docx
    const skillsPool = [
      'Python',
      'Machine Learning',
      'Causal Inference',
      'SQL - MySQL',
      'SPSS Statistics',
      'English C1 (IELTS)',
      'A/B Testing & RCTs',
      'Advanced Econometrics',
      'AWS Cloud Ecosystem',
      'Propensity Score Matching',
      'Tableau Visual Analytics',
      'Diff-in-Differences (DiD)',
      'Prompt Engineering',
      'CrewAI Multi-Agents',
      'Data Governance & Quality',
      'Power BI Dashboards',
      'Databricks Spark',
      'Streamlit Web Apps',
      'Sub-Agent Teams',
      'PCA Analysis',
      'Spatial Econometrics',
      'Time Series Forecasting',
      'ETL Pipelines',
      'Random Forest & XGBoost',
      'K-Medoids (Gower)',
      'Model Context Protocol',
      'Executive Communication',
      'Lean Six Sigma',
      'Hadoop & Spark',
      'Power Query & Pivot',
      'Dataiku DSS',
      'GDPR & PII Protection'
    ];

    // Strictly controlled slots: 7 visible at any one time to prevent visual clutter
    // Fixed non-overlapping coordinates in perimeter zones surrounding the central 3D core
    const slots = [
      { x: 16, y: 22, opacity: 0.85, drift: 0 },
      { x: 82, y: 24, opacity: 0.50, drift: 1 },
      { x: 14, y: 52, opacity: 0.65, drift: 2 },
      { x: 84, y: 54, opacity: 0.80, drift: 0 },
      { x: 22, y: 78, opacity: 0.45, drift: 1 },
      { x: 78, y: 80, opacity: 0.75, drift: 2 },
      { x: 50, y: 15, opacity: 0.60, drift: 0 }
    ];

    // Responsive position adjustments for mobile/tablet screens
    function getSlotCoords(slot) {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        // Bring closer to corners / edges with tighter margins
        return {
          x: slot.x < 50 ? Math.max(slot.x, 20) : Math.min(slot.x, 80),
          y: slot.y
        };
      }
      return { x: slot.x, y: slot.y };
    }

    let activeSkills = new Set();

    function getRandomUnusedSkill() {
      const available = skillsPool.filter(s => !activeSkills.has(s));
      if (available.length === 0) {
        activeSkills.clear();
        return skillsPool[Math.floor(Math.random() * skillsPool.length)];
      }
      const chosen = available[Math.floor(Math.random() * available.length)];
      activeSkills.add(chosen);
      return chosen;
    }

    slots.forEach((slot, index) => {
      const pill = document.createElement('div');
      pill.className = 'floating-skill-pill';
      pill.setAttribute('aria-hidden', 'true');
      pill.style.animationDelay = `${(slot.drift * 1.5).toFixed(1)}s`;

      const dot = document.createElement('span');
      dot.className = 'skill-dot';

      const label = document.createElement('span');
      label.className = 'skill-text';

      pill.appendChild(dot);
      pill.appendChild(label);
      container.appendChild(pill);

      function cycleWord() {
        // Step 1: Smooth fade out
        pill.style.opacity = '0';
        pill.style.transform = 'translate(-50%, -50%) translateY(6px)';

        setTimeout(() => {
          // Step 2: Pick new skill
          const skill = getRandomUnusedSkill();
          label.textContent = skill;

          // Position in slot
          const coords = getSlotCoords(slot);
          pill.style.left = `${coords.x}%`;
          pill.style.top = `${coords.y}%`;

          // Step 3: Smooth fade in with assigned opacity
          requestAnimationFrame(() => {
            pill.style.opacity = slot.opacity.toString();
            pill.style.transform = 'translate(-50%, -50%) translateY(0)';
          });

          // Next cycle in 6.5s to 9s with slight variation
          const duration = 6500 + Math.random() * 2500;
          setTimeout(cycleWord, duration);
        }, 750);
      }

      // Staggered initial entrance for a cool, organic boot-up experience
      const initialDelay = 350 + index * 420;
      setTimeout(cycleWord, initialDelay);
    });
  }

// --- 3. 3D INTERACTIVE ANALYTICAL PHYSICS SCULPTURE (THREE.JS) ---
  function initThreeJsPhysics() {
    const container = document.getElementById('intro-three-container');
    if (!container || typeof THREE === 'undefined') return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, width / height, 0.1, 1000);
    camera.position.z = 8.8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x0EA5E9, 1.4);
    dirLight1.position.set(5, 8, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x1E3A8A, 0.8);
    dirLight2.position.set(-5, -5, 4);
    scene.add(dirLight2);

    // Group for entire interactive sculpture with entrance scale-in
    const sculptureGroup = new THREE.Group();
    sculptureGroup.scale.set(0.68, 0.68, 0.68);
    scene.add(sculptureGroup);

    // 1. Central Geodesic Icosahedron Core (Frosted Wireframe + Inner Glass Sphere)
    const coreGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const coreWireMesh = new THREE.Mesh(coreGeo, coreWireMat);
    sculptureGroup.add(coreWireMesh);

    const innerSphereGeo = new THREE.SphereGeometry(1.15, 24, 24);
    const innerSphereMat = new THREE.MeshPhongMaterial({
      color: 0x0EA5E9,
      emissive: 0x0284C7,
      emissiveIntensity: 0.25,
      shininess: 90,
      transparent: true,
      opacity: 0.75
    });
    const innerSphereMesh = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    sculptureGroup.add(innerSphereMesh);

    // 2. Floating Data Nodes with Elastic Spring Physics
    const nodeCount = 24;
    const nodes = [];
    const nodeGeo = new THREE.SphereGeometry(0.16, 16, 16);

    const whiteMat = new THREE.MeshPhongMaterial({
      color: 0xFFFFFF,
      shininess: 100,
      specular: 0xBAE6FD
    });

    const skyMat = new THREE.MeshPhongMaterial({
      color: 0x0EA5E9,
      emissive: 0x38BDF8,
      emissiveIntensity: 0.3,
      shininess: 80
    });

    for (let i = 0; i < nodeCount; i++) {
      // Golden spiral distribution on sphere surface
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 2.8 + (Math.random() - 0.5) * 0.8;

      const originX = radius * Math.cos(theta) * Math.sin(phi);
      const originY = radius * Math.sin(theta) * Math.sin(phi);
      const originZ = radius * Math.cos(phi);

      const mat = (i % 3 === 0) ? skyMat : whiteMat;
      const mesh = new THREE.Mesh(nodeGeo, mat);
      mesh.position.set(originX, originY, originZ);
      sculptureGroup.add(mesh);

      nodes.push({
        mesh: mesh,
        origin: new THREE.Vector3(originX, originY, originZ),
        position: mesh.position,
        velocity: new THREE.Vector3(0, 0, 0),
        mass: 1.0 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2
      });
    }

    // 3. Dynamic Connecting Lines
    const maxLineConnections = 36;
    const linePositions = new Float32Array(maxLineConnections * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x0EA5E9,
      transparent: true,
      opacity: 0.28,
      linewidth: 1
    });
    const lineMesh = new THREE.LineSegments(lineGeo, lineMat);
    sculptureGroup.add(lineMesh);

    // 4. Mouse Raycaster for Interactive Repel & Displacement Physics
    const raycaster = new THREE.Raycaster();
    const mouse2D = new THREE.Vector2(-999, -999);
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const mouseWorld = new THREE.Vector3();
    let isMouseOver = false;

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      mouse2D.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse2D.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      isMouseOver = true;
    });

    container.addEventListener('mouseleave', () => {
      isMouseOver = false;
      mouse2D.set(-999, -999);
    });

    // 5. Interactive Drag-to-Rotate with Rotational Momentum & Inertia
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let angularVelX = 0;
    let angularVelY = 0.016; // Dynamic entrance spin that settles into smooth idle

    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      angularVelY = deltaX * 0.005;
      angularVelX = deltaY * 0.005;
    });

    // Touch support for drag
    container.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    container.addEventListener('touchmove', (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;

      angularVelY = deltaX * 0.006;
      angularVelX = deltaY * 0.006;
    }, { passive: true });

    // Click Shockwave Physics
    container.addEventListener('click', () => {
      nodes.forEach(node => {
        const dir = node.position.clone().normalize();
        node.velocity.add(dir.multiplyScalar(0.45));
      });
    });

    // Resize Handler
    function onResize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener('resize', onResize);

    // 6. Physics Animation Loop
    let clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth entrance zoom-in expansion
      if (sculptureGroup.scale.x < 0.998) {
        sculptureGroup.scale.lerp(new THREE.Vector3(1, 1, 1), 0.04);
      }

      // Apply drag momentum with smooth damping
      sculptureGroup.rotation.y += angularVelY;
      sculptureGroup.rotation.x += angularVelX;
      angularVelX *= 0.94;
      angularVelY = angularVelY * 0.94 + 0.002 * 0.06; // Returns to smooth idle spin

      coreWireMesh.rotation.y += 0.003;
      coreWireMesh.rotation.x -= 0.002;

      // Calculate mouse in 3D world space
      if (isMouseOver) {
        raycaster.setFromCamera(mouse2D, camera);
        raycaster.ray.intersectPlane(plane, mouseWorld);
      }

      // Update Node Spring Physics
      const springConstant = 0.085;
      const damping = 0.91;

      nodes.forEach(node => {
        // Natural idle floating breathing wave
        const idleWave = Math.sin(elapsedTime * 2.0 + node.phase) * 0.05;
        const currentTarget = node.origin.clone().multiplyScalar(1 + idleWave);

        // Repel force from cursor if near
        if (isMouseOver) {
          const sculptureWorldMatrix = sculptureGroup.matrixWorld.clone();
          const nodeWorldPos = node.position.clone().applyMatrix4(sculptureWorldMatrix);
          const distToMouse = nodeWorldPos.distanceTo(mouseWorld);

          if (distToMouse < 2.5) {
            const repelStrength = (2.5 - distToMouse) * 0.07;
            const repelDir = nodeWorldPos.clone().sub(mouseWorld).normalize();
            // Project repelDir into sculpture local coordinates
            const invMatrix = new THREE.Matrix4().copy(sculptureGroup.matrixWorld).invert();
            const localRepel = repelDir.transformDirection(invMatrix);
            node.velocity.add(localRepel.multiplyScalar(repelStrength));
          }
        }

        // Spring force: F = -k * (x - origin)
        const springForce = currentTarget.sub(node.position).multiplyScalar(springConstant);
        node.velocity.add(springForce);

        // Apply friction damping
        node.velocity.multiplyScalar(damping);

        // Apply velocity to position
        node.position.add(node.velocity);
      });

      // Update connecting line vertices between proximity nodes
      let lineVertexIdx = 0;
      const positions = lineGeo.attributes.position.array;
      const lineThreshold = 2.0;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (lineVertexIdx >= maxLineConnections * 6) break;

          const dist = nodes[i].position.distanceTo(nodes[j].position);
          if (dist < lineThreshold) {
            positions[lineVertexIdx++] = nodes[i].position.x;
            positions[lineVertexIdx++] = nodes[i].position.y;
            positions[lineVertexIdx++] = nodes[i].position.z;

            positions[lineVertexIdx++] = nodes[j].position.x;
            positions[lineVertexIdx++] = nodes[j].position.y;
            positions[lineVertexIdx++] = nodes[j].position.z;
          }
        }
      }

      // Zero-out remaining line segments
      for (let k = lineVertexIdx; k < maxLineConnections * 6; k++) {
        positions[k] = 0;
      }
      lineGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    }

    animate();
  }

  // --- 4. TIMELINE ACCORDION EXPANSION ---
  function initTimeline() {
    const expandButtons = document.querySelectorAll('.timeline-expand-btn');

    expandButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        const targetId = btn.getAttribute('aria-controls');
        const detailsEl = document.getElementById(targetId);

        if (!detailsEl) return;

        if (isExpanded) {
          btn.setAttribute('aria-expanded', 'false');
          btn.querySelector('.btn-text').textContent = 'View Detailed Deliverables & Impact';
          detailsEl.hidden = true;
        } else {
          btn.setAttribute('aria-expanded', 'true');
          btn.querySelector('.btn-text').textContent = 'Hide Details';
          detailsEl.hidden = false;
        }
      });
    });
  }

  // --- 5. SUBTLE CANVAS BACKGROUND CONSTELLATION ---
  function initCanvas() {
    const canvas = document.getElementById('analytical-canvas');
    if (!canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const particleCount = 38;
    const maxDistance = 140;
    let mouse = { x: null, y: null, maxRadius: 110 };

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 1.5 + 1.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0) this.x = width;
        else if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        else if (this.y > height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(14, 165, 233, 0.42)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.16;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(2, 132, 199, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  // --- 6. NAVIGATION & SCROLL OBSERVER ---
  function initNavigation() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && mainNav) {
      mobileToggle.addEventListener('click', () => {
        const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        mobileToggle.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('is-open');
      });

      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          mainNav.classList.remove('is-open');
          mobileToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    const sections = document.querySelectorAll('section[id], footer[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
  }

  // --- 7. TOAST FEEDBACK ---
  function initToast() {
    const toast = document.getElementById('toast');
    if (!toast) return;

    let timeout;
    function showToast(message) {
      toast.textContent = message;
      toast.classList.add('show');
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        toast.classList.remove('show');
      }, 3500);
    }

    const cvButtons = document.querySelectorAll('a[download]');
    cvButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        showToast('Initiating download of Juan Felipe Malaver CV (PDF)...');
      });
    });
  }

  // --- 8. INTRO SCROLL EXPERIENCE (GRADUAL INTRO) ---
  function initIntroScroll() {
    const stage = document.getElementById('intro-stage');
    const overlayText = document.getElementById('intro-overlay-text');
    const scrollHint = document.getElementById('intro-scroll-hint');
    const viewport = document.getElementById('intro-viewport');
    const header = document.getElementById('site-header') || document.getElementById('header');
    const mainContent = document.getElementById('main-content');

    if (!stage || !overlayText || !viewport) return;

    function onScroll() {
      const rect = stage.getBoundingClientRect();
      const scrollDist = stage.offsetHeight - window.innerHeight;
      if (scrollDist <= 0) return;

      // Progress: 0.0 at very top, 1.0 when exiting intro stage
      const progress = Math.min(Math.max(-rect.top / scrollDist, 0), 1);

      // 1. Scroll hint prompt fades out rapidly once user initiates scroll
      if (scrollHint) {
        scrollHint.style.opacity = progress > 0.04 ? '0' : '1';
      }

      // 2. Floating skills cloud cross-fade:
      // Highly visible in Phase 1 (0.0 to 0.20), smoothly cross-fades out during Phase 2 (0.20 to 0.45)
      // so the typographic name overlay emerges with pristine legibility
      const floatingSkillsContainer = document.getElementById('intro-floating-skills');
      if (floatingSkillsContainer) {
        if (progress <= 0.18) {
          floatingSkillsContainer.style.opacity = '1';
        } else if (progress <= 0.42) {
          const p = (progress - 0.18) / 0.24;
          floatingSkillsContainer.style.opacity = Math.max(1 - p, 0).toFixed(3);
        } else {
          floatingSkillsContainer.style.opacity = '0';
        }
      }

      // 3. Phased Text Overlay:
      // Phase 1 (0.0 - 0.20): Invisible (focus on 3D sculpture + floating skills cloud)
      // Phase 2 (0.20 - 0.60): Silky fade-in and smooth ascent of "Juan Felipe Malaver O." & "Thanks for your interest"
      // Phase 2 Peak (0.60 - 0.76): Crisp full presence
      // Phase 3 (0.76 - 1.00): Elegant fade-out and subtle upward dissolve as main landing content emerges
      if (progress < 0.20) {
        overlayText.style.opacity = '0';
        overlayText.style.transform = 'translateY(28px)';
      } else if (progress <= 0.60) {
        const p = (progress - 0.20) / 0.40;
        const clampedP = Math.min(Math.max(p, 0), 1);
        overlayText.style.opacity = clampedP.toFixed(3);
        overlayText.style.transform = `translateY(${(28 * (1 - clampedP)).toFixed(1)}px)`;
      } else if (progress <= 0.76) {
        overlayText.style.opacity = '1';
        overlayText.style.transform = 'translateY(0px)';
      } else {
        const pOut = (progress - 0.76) / 0.24;
        overlayText.style.opacity = Math.max(1 - pOut, 0).toFixed(3);
        overlayText.style.transform = `translateY(${(-18 * pOut).toFixed(1)}px)`;
      }

      // 4. Stage Viewport Cross-Dissolve & Main Content Fade-in
      if (progress > 0.70) {
        const pTransition = (progress - 0.70) / 0.30;
        viewport.style.opacity = Math.max(1 - pTransition, 0).toFixed(3);
        if (mainContent) {
          mainContent.style.opacity = Math.min(pTransition * 1.3, 1).toFixed(3);
        }
      } else {
        viewport.style.opacity = '1';
        if (mainContent) {
          mainContent.style.opacity = '0';
        }
      }

      // 5. Sticky Header visibility with smooth slide
      if (header) {
        if (progress >= 0.80) {
          header.classList.add('header-visible');
          header.classList.remove('header-intro-hidden');
        } else {
          header.classList.remove('header-visible');
          header.classList.add('header-intro-hidden');
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
  }

  // --- 9. TIMELINE SCROLL ANIMATION (RIGHT-TO-LEFT SLIDE-IN) ---
  function initExperienceScrollObserver() {
    const items = document.querySelectorAll('.timeline-item');
    if (!items.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(item => item.classList.add('is-inview'));
      return;
    }

    // Trigger when the item's centre crosses the viewport's centre
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    items.forEach((item, index) => {
      item.style.transitionDelay = `${(index % 3) * 0.1}s`;
      observer.observe(item);
    });
  }

  // --- 10. FADE-SECTION OBSERVER (medium-speed fade between page phases) ---
  function initFadeSectionObserver() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.fade-section').forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.fade-section').forEach(el => observer.observe(el));
  }

  // Run initializers on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    initPeriodicTable();
    initFloatingSkillsCloud();
    initThreeJsPhysics();
    initIntroScroll();
    initExperienceScrollObserver();
    initFadeSectionObserver();
    initTimeline();
    initCanvas();
    initNavigation();
    initToast();
  });
})();
