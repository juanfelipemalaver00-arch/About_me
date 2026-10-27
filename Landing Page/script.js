/**
 * Juan Felipe Malaver O. - Personal Landing Page
 * Interactive 3D Physics Engine, 3D Futuristic Modular Keys, & Capabilities Registry
 */

(function () {
  'use strict';

  // --- 1. FULL 27 CAPABILITIES DATA REGISTRY (Strictly in English) ---
  const capabilitiesData = {
    // Category 1: Analytics & Data (12 elements)
    'ad-1': {
      number: '01',
      symbol: 'Arm',
      name: 'Association Rule Mining (ARM)',
      family: 'Analytics & Data',
      catClass: 'cat-ad',
      app: 'Discovering hidden co-occurrence relationships, consumer purchase synergies, and high-affinity product bundles across massive transactional banking datasets.',
      impact: 'Applied pattern extraction algorithms to evaluate merchant transactional co-dependencies and optimize portfolio cross-sell potential.'
    },
    'ad-2': {
      number: '02',
      symbol: 'Apr',
      name: 'Apriori Algorithm',
      family: 'Analytics & Data',
      catClass: 'cat-ad',
      app: 'Computing support, confidence, and lift thresholds on combinatorial transaction sets to synthesize actionable commercial recommendations.',
      impact: 'Identified actionable product associations and basket pairings to curate data-driven bundle strategies for retail acquiring.'
    },
    'ad-3': {
      number: '03',
      symbol: 'Ssa',
      name: 'Sequential Pattern Analysis (SSA)',
      family: 'Analytics & Data',
      catClass: 'cat-ad',
      app: 'Modeling time-ordered transaction journeys and multi-stage customer lifecycles to detect churn risks and transition probabilities.',
      impact: 'Anticipated client transaction sequences and flagged drop-off patterns to inform banking personalization pipelines.'
    },
    'ad-4': {
      number: '04',
      symbol: 'Pm',
      name: 'Predictive Modeling',
      family: 'Analytics & Data',
      catClass: 'cat-ad',
      app: 'Formulating supervised projection frameworks to forecast client propensity, portfolio growth, and market adoption curves.',
      impact: 'Built commercial projection and predictive models in Python, R, and SQL to optimize high-impact campaigns across Latin American banking clients.'
    },
    'ad-5': {
      number: '05',
      symbol: 'Cl',
      name: 'Clustering (K-Medoids / Gower)',
      family: 'Analytics & Data',
      catClass: 'cat-ad',
      app: 'Partitioning high-dimensional commercial portfolios using custom distance metrics capable of seamlessly handling mixed continuous and categorical data.',
      impact: 'Implemented K-Medoids Clustering with Gower Distance for merchant segmentation at Mastercard, generating <strong>over COP 5,000 million</strong> in annual profitability post-deployment.'
    },
    'ad-6': {
      number: '06',
      symbol: 'Ml',
      name: 'Applied Machine Learning',
      family: 'Analytics & Data',
      catClass: 'cat-ad',
      app: 'Deploying robust ensemble algorithms (Random Forest, XGBoost) and feature engineering pipelines for tabular banking ecosystems.',
      impact: 'Constructed ensemble classification models flagging client purchase propensity, translated into targeted marketing archetypes for campaign optimization.'
    },
    'ad-7': {
      number: '07',
      symbol: 'Ec',
      name: 'Advanced Econometrics',
      family: 'Analytics & Data',
      catClass: 'cat-ad',
      app: 'Microeconometric modeling, instrumental variables, panel data regression, and rigorous hypothesis testing grounded in theoretical economics.',
      impact: 'Awarded Best Final Project in Applied Microeconomics (Universidad del Rosario) and 4th place nationwide in the National Academic Economics Competition (CANE).'
    },
    'ad-8': {
      number: '08',
      symbol: 'Py',
      name: 'Python (Data Science & ML)',
      family: 'Analytics & Data',
      catClass: 'cat-ad',
      app: 'Core analytical programming utilizing Scikit-Learn, Pandas, NumPy, PyTorch, PySpark, and TensorFlow for end-to-end data pipelines.',
      impact: 'Engineered automated statistical workflows, large-scale ETL pipelines, and scalable modeling modules in production enterprise environments.'
    },
    'ad-9': {
      number: '09',
      symbol: 'R',
      name: 'R (Spatial & Time Series)',
      family: 'Analytics & Data',
      catClass: 'cat-ad',
      app: 'Specialized statistical modeling, longitudinal panel time series, spatial vector packages, and reproducible synthetic dataset generation.',
      impact: 'Authored ML_for_ALL educational repository and university teaching curriculum for econometrics, statistical inference, and spatial models.'
    },
    'ad-10': {
      number: '10',
      symbol: 'Ci',
      name: 'Causal Inference (PSM & DiD)',
      family: 'Analytics & Data',
      catClass: 'cat-ad',
      app: 'Quasi-experimental impact evaluation to isolate true incremental commercial lift from organic macroeconomic drift.',
      impact: 'Applied Propensity Score Matching (PSM) & Difference-in-Differences (DiD) at Mastercard (+3% spend lift per iteration); implemented Callaway-Sant’Anna multi-period DiD for global academic research.'
    },
    'ad-11': {
      number: '11',
      symbol: 'Rfm',
      name: 'RFM Customer Models',
      family: 'Analytics & Data',
      catClass: 'cat-ad',
      app: 'Recency, Frequency, and Monetary transaction scoring methodologies to categorize client lifetime engagement and margin contribution.',
      impact: 'Designed customer segmentation and scoring based on RFM models, increasing the <strong>monetary effectiveness of loyalty programs by 23%</strong>.'
    },
    'ad-12': {
      number: '12',
      symbol: 'Bi',
      name: 'Business Intelligence (Tableau / Power BI)',
      family: 'Analytics & Data',
      catClass: 'cat-ad',
      app: 'Designing intuitive executive scorecards, interactive KPI monitors, and exploratory business dashboards for C-level governance.',
      impact: 'Translated complex machine learning outputs and predictive projections into executive dashboards for bank boards of directors to guide strategic decisions.'
    },

    // Category 2: Business Strategy & Consulting (5 elements)
    'bc-1': {
      number: '13',
      symbol: 'Cs',
      name: 'Strategic Consulting',
      family: 'Business Strategy & Consulting',
      catClass: 'cat-bc',
      app: 'Diagnosing operational friction, evaluating competitive acquiring landscapes, and defining evidence-based commercial roadmaps.',
      impact: 'Advised corporate clients and financial institutions across Latin America on revenue monetization, card acceptance, and market expansion.'
    },
    'bc-2': {
      number: '14',
      symbol: 'Bt',
      name: 'Analytics Business Translation',
      family: 'Business Strategy & Consulting',
      catClass: 'cat-bc',
      app: 'The vital bridge connecting loss functions, high-dimensional clustering, and p-values directly to commercial P&L expansion.',
      impact: 'Selected to deliver the Graduation Speech at Universidad del Rosario; Student Voice Champion at the London School of Economics (LSE).'
    },
    'bc-3': {
      number: '15',
      symbol: 'Co',
      name: 'Campaign & Margin Optimization',
      family: 'Business Strategy & Consulting',
      catClass: 'cat-bc',
      app: 'Calibrating marketing spend allocation, customer tiering, and commercial pricing structures to maximize net portfolio ROI.',
      impact: 'Streamlined mass banking campaigns across LATAM, lifting spend lift by 3% per iteration and reducing client communication fatigue.'
    },
    'bc-4': {
      number: '16',
      symbol: 'Di',
      name: 'Interactive Business Studios',
      family: 'Business Strategy & Consulting',
      catClass: 'cat-bc',
      app: 'Engineering accessible web simulation tools that allow non-technical executives to test commercial scenarios in real time.',
      impact: 'Developed TreeStrat (Streamlit decision tree studio) and ClusterLab (Vercel adaptive clustering tool) for dynamic stakeholder scenario testing.'
    },
    'bc-5': {
      number: '17',
      symbol: 'Cc',
      name: 'Case Resolution (Mastercard & BCG)',
      family: 'Business Strategy & Consulting',
      catClass: 'cat-bc',
      app: 'Structured problem solving under rigorous corporate case competition frameworks, prioritizing feasibility, unit economics, and impact.',
      impact: 'Placed 1st in Colombia and 3rd in LAC in Mastercard Case Competition; Semifinalist in the National Consulting Competition solving cases proposed by BCG.'
    },

    // Category 3: Data Engineering (5 elements)
    'de-1': {
      number: '18',
      symbol: 'Etl',
      name: 'ETL Pipelines (Python / SQL)',
      family: 'Data Engineering',
      catClass: 'cat-de',
      app: 'Designing high-throughput, automated ingestion pipelines transforming raw financial transaction logs into clean feature stores.',
      impact: 'Engineered automated pipelines for large-scale transactional data, optimizing throughput while ensuring full compliance with GDPR and PII norms.'
    },
    'de-2': {
      number: '19',
      symbol: 'Sql',
      name: 'Advanced SQL & Big Data',
      family: 'Data Engineering',
      catClass: 'cat-de',
      app: 'Complex analytical window functions, recursive CTEs, and distributed querying across enterprise big data clusters.',
      impact: 'Formulated high-performance queries across Hadoop, Impala, SQLite, and MySQL enterprise banking databases.'
    },
    'de-3': {
      number: '20',
      symbol: 'Aws',
      name: 'Cloud Computing & AWS',
      family: 'Data Engineering',
      catClass: 'cat-de',
      app: 'Data preparation, design, and deployment of cloud ML workflows across Amazon SageMaker, S3, Athena, DataWrangler, and AWS Glue.',
      impact: 'Preparing for AWS MLA-C01 (Machine Learning Associate Engineer) certification with hands-on enterprise cloud pipeline implementations.'
    },
    'de-4': {
      number: '21',
      symbol: 'Ing',
      name: 'Ingestion Platforms',
      family: 'Data Engineering',
      catClass: 'cat-de',
      app: 'Enterprise ETL orchestration, collaborative data science workflows, and automated pipeline scheduling.',
      impact: 'Proficient in data analysis, business intelligence, and enterprise ETL pipelines using Databricks, Dataiku, and Knime.'
    },
    'de-5': {
      number: '22',
      symbol: 'Dq',
      name: 'Data Governance & Quality',
      family: 'Data Engineering',
      catClass: 'cat-de',
      app: 'Establishing automated data validation rules, schema drift monitors, outlier controls, and reproducibility protocols.',
      impact: 'Standardized feature engineering and data validation workflows ensuring robust reproducibility across banking campaign models.'
    },

    // Category 4: Leadership & EQ (5 elements)
    'le-1': {
      number: '23',
      symbol: 'Lp',
      name: 'High-Impact Project Leadership',
      family: 'Leadership & EQ',
      catClass: 'cat-le',
      app: 'End-to-end orchestration of analytics initiatives from client scoping to technical modeling and executive boardroom adoption.',
      impact: 'Led high-impact analytics consulting deliverables at Mastercard, directly generating multi-million COP profitability for clients.'
    },
    'le-2': {
      number: '24',
      symbol: 'Li',
      name: 'Institutional Leadership (LSE)',
      family: 'Leadership & EQ',
      catClass: 'cat-le',
      app: 'Representing student and institutional interests, mediating academic governance dialogues, and driving community consensus.',
      impact: 'Elected Student Voice Group Champion at the London School of Economics (LSE) for the 2022–2023 academic year.'
    },
    'le-3': {
      number: '25',
      symbol: 'Me',
      name: 'Mentorship & Communication',
      family: 'Leadership & EQ',
      catClass: 'cat-le',
      app: 'Pedagogical communication of complex statistical distributions, inference methods, and econometric coding to undergraduate students.',
      impact: 'Taught 6 weekly hours of university lectures and labs for Economics, Applied Math, and CS students; received Award of Excellence (Univ. del Rosario).'
    },
    'le-4': {
      number: '26',
      symbol: 'Cr',
      name: 'Global Research Coordination',
      family: 'Leadership & EQ',
      catClass: 'cat-le',
      app: 'Collaborating with international research faculty and doctoral scholars on empirical econometric identification strategies.',
      impact: 'Contributed to collaborative research projects with faculty from Princeton University, Penn State, and the University of Chicago.'
    },
    'le-5': {
      number: '27',
      symbol: 'Gt',
      name: 'High-Pressure Team Management',
      family: 'Leadership & EQ',
      catClass: 'cat-le',
      app: 'Fostering cross-disciplinary alignment, rapid consensus, and high delivery standards under strict competitive deadlines.',
      impact: 'Global Finalist in Mastercard Global Innovation Challenge (leading the Innova AI team) and awarded Best Intern of the Year 2025.'
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

      // 3D tilt tracking cursor
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

    // Category Filters
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

    // Default selection: Causal Inference (ad-10)
    updateInspector('ad-10');
  }

  // --- 3. 3D INTERACTIVE ANALYTICAL PHYSICS SCULPTURE (THREE.JS) ---
  function initThreeJsPhysics() {
    const container = document.getElementById('three-canvas-container');
    if (!container || typeof THREE === 'undefined') return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const width = container.clientWidth || 340;
    const height = container.clientHeight || 240;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000);
    camera.position.z = 8.5;

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

    // Group for entire interactive sculpture
    const sculptureGroup = new THREE.Group();
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
    let angularVelY = 0.004; // Gentle default spin

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

  // Run initializers on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    initPeriodicTable();
    initThreeJsPhysics();
    initTimeline();
    initCanvas();
    initNavigation();
    initToast();
  });
})();
