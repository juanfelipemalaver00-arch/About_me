/**
 * Juan Felipe Malaver O. - Personal Landing Page
 * Interactive Logic: Periodic Table Engine, Sky Blue Canvas Constellation, Timeline Accordion
 */

(function () {
  'use strict';

  // --- 1. PERIODIC TABLE CAPABILITIES DATA REGISTRY ---
  const capabilitiesData = {
    'aa-1': {
      number: '01',
      symbol: 'Pm',
      name: 'Predictive Modeling',
      family: 'Advanced Analytics',
      catClass: 'cat-aa',
      app: 'Building supervised forecasting frameworks that predict transaction propensities, customer churn, and commercial adoption across banking portfolios.',
      impact: 'Built commercial projection and predictive models in Python, R, and SQL to optimize high-impact campaigns across Latin American banking clients.'
    },
    'aa-2': {
      number: '02',
      symbol: 'Ml',
      name: 'Machine Learning',
      family: 'Advanced Analytics',
      catClass: 'cat-aa',
      app: 'Deploying robust ensemble algorithms (Random Forest, XGBoost) and deep pipelines for structured tabular banking and commercial data.',
      impact: 'Constructed ensemble classification models flagging client purchase propensity, translated into targeted marketing archetypes for campaign optimization.'
    },
    'aa-3': {
      number: '03',
      symbol: 'Cs',
      name: 'Customer Segmentation',
      family: 'Advanced Analytics',
      catClass: 'cat-aa',
      app: 'Partitioning high-dimensional customer bases into homogeneous behavioral groups to personalize product offerings and loyalty incentives.',
      impact: 'Designed segmentation and scoring methodologies based on RFM models, increasing the monetary effectiveness of loyalty programs by 23%.'
    },
    'aa-4': {
      number: '04',
      symbol: 'Pf',
      name: 'Profitability Modeling',
      family: 'Advanced Analytics',
      catClass: 'cat-aa',
      app: 'Evaluating acquiring revenue, interchange margins, and merchant commercial tiering to identify untapped margin opportunities.',
      impact: 'Designed machine learning solutions and optimization models to segment merchants, generating over COP 5,000 million in annual profitability post-deployment.'
    },
    'aa-5': {
      number: '05',
      symbol: 'Ec',
      name: 'Econometrics',
      family: 'Advanced Analytics',
      catClass: 'cat-aa',
      app: 'Rigorous empirical identification, panel data analysis, instrumental variables, and hypothesis testing grounded in economic theory.',
      impact: 'Awarded Best Final Project in Applied Microeconomics (Universidad del Rosario) and 4th place in the National Economics Competition (CANE).'
    },
    'aa-6': {
      number: '06',
      symbol: 'Ci',
      name: 'Causal Inference',
      family: 'Advanced Analytics',
      catClass: 'cat-aa',
      app: 'Isolating genuine program lift from organic customer trends using quasi-experimental methods (DiD, PSM, synthetic controls).',
      impact: 'Applied Propensity Score Matching & Difference-in-Differences in Python to evaluate personalization campaigns, achieving +3% average spend lift per iteration. Implemented Callaway-Sant’Anna DiD in international research.'
    },
    'aa-7': {
      number: '07',
      symbol: 'Cl',
      name: 'Clustering',
      family: 'Advanced Analytics',
      catClass: 'cat-aa',
      app: 'Unsupervised partitioning with customized distance metrics capable of handling mixed continuous and categorical business attributes.',
      impact: 'Implemented K-Medoids Clustering with Gower Distance for merchant segmentation at Mastercard, leading to >COP 5,000M in annual commercial profitability.'
    },
    'aa-8': {
      number: '08',
      symbol: 'Dr',
      name: 'PCA / MCA',
      family: 'Advanced Analytics',
      catClass: 'cat-aa',
      app: 'Dimensionality reduction via Principal Component Analysis and Multiple Correspondence Analysis to synthesize hundreds of transactional features.',
      impact: 'Extracts orthogonal latent customer behaviors to feed downstream propensity and scoring algorithms with minimal multicollinearity.'
    },
    'bs-1': {
      number: '09',
      symbol: 'Rg',
      name: 'Revenue Growth',
      family: 'Business Strategy',
      catClass: 'cat-bs',
      app: 'Diagnosing revenue leakage in card acquiring, conversion drop-offs, and under-monetized merchant segments.',
      impact: 'Directly supported commercial leadership at Mastercard and partner banks in identifying high-margin retail merchant opportunities across LATAM.'
    },
    'bs-2': {
      number: '10',
      symbol: 'Co',
      name: 'Campaign Optimization',
      family: 'Business Strategy',
      catClass: 'cat-bs',
      app: 'Optimizing audience selection, communication timing, and offer value to maximize marketing ROI while curbing customer fatigue.',
      impact: 'Streamlined mass banking campaigns across Latin America, boosting monetary efficiency by 23% and spend lift by 3% per iteration.'
    },
    'bs-3': {
      number: '11',
      symbol: 'Cx',
      name: 'Customer Experience',
      family: 'Business Strategy',
      catClass: 'cat-bs',
      app: 'Analyzing friction points in transaction approvals, reducing false declines, and refining merchant acceptance journeys.',
      impact: 'Designed Innova (Mastercard Global Innovation Challenge Finalist), an AI tool offering personalized budgeting and vendor recommendations to boost card adoption.'
    },
    'bs-4': {
      number: '12',
      symbol: 'St',
      name: 'Commercial Strategy',
      family: 'Business Strategy',
      catClass: 'cat-bs',
      app: 'Formulating commercial go-to-market plans backed by rigorous data evidence rather than subjective intuition.',
      impact: 'Advised enterprise clients (such as Pavco) and solved competitive corporate business cases proposed by BCG as a national consulting semifinalist.'
    },
    'bs-5': {
      number: '13',
      symbol: 'Di',
      name: 'Decision Intelligence',
      family: 'Business Strategy',
      catClass: 'cat-bs',
      app: 'Creating interactive scenario simulation studios where executives test the financial impact of strategic business rule changes.',
      impact: 'Engineered TreeStrat and ClusterLab, custom web tools allowing stakeholders to simulate tree-based business rules and dynamic clustering in real time.'
    },
    'de-1': {
      number: '14',
      symbol: 'Py',
      name: 'Python',
      family: 'Data Engineering',
      catClass: 'cat-de',
      app: 'Primary engineering language for high-performance ETL, statistical modeling, machine learning, and automation workflows.',
      impact: 'Advanced proficiency in Scikit-Learn, Pandas, NumPy, PyTorch, PySpark, and production ETL pipeline automation in enterprise environments.'
    },
    'de-2': {
      number: '15',
      symbol: 'Sq',
      name: 'SQL',
      family: 'Data Engineering',
      catClass: 'cat-de',
      app: 'Complex analytical querying, window functions, and partitioning over multi-terabyte transactional databases.',
      impact: 'Engineered scalable data extraction queries and automated views across enterprise big data clusters (Hadoop, Impala, MySQL, SQLite).'
    },
    'de-3': {
      number: '16',
      symbol: 'R',
      name: 'R Language',
      family: 'Data Engineering',
      catClass: 'cat-de',
      app: 'Specialized statistical modeling, advanced econometrics, spatial data packages, and synthetic dataset creation.',
      impact: 'Authored ML_for_ALL educational repository and university teaching curriculum covering sampling designs, panel regressions, and DiD algorithms.'
    },
    'de-4': {
      number: '17',
      symbol: 'Et',
      name: 'ETL Automation',
      family: 'Data Engineering',
      catClass: 'cat-de',
      app: 'End-to-end data pipeline orchestration that moves raw transactional data into clean, analysis-ready feature stores.',
      impact: 'Developed robust ETL pipelines in Python and SQL to automate ingestion of large-scale transactional data under strict PII and GDPR standards at Mastercard.'
    },
    'de-5': {
      number: '18',
      symbol: 'Dq',
      name: 'Data Quality',
      family: 'Data Engineering',
      catClass: 'cat-de',
      app: 'Automated data validation rules, schema verification, outlier detection, and data governance frameworks.',
      impact: 'Implemented automated feature engineering and data quality protocols ensuring zero data drift in banking campaign projection models.'
    },
    'de-6': {
      number: '19',
      symbol: 'Gs',
      name: 'Geospatial Analytics',
      family: 'Data Engineering',
      catClass: 'cat-de',
      app: 'Processing spatial vector geometries and satellite raster datasets for location-based economic intelligence.',
      impact: 'Processed geospatial databases and satellite imagery in Python and R for joint academic research with Princeton, Penn State, and UChicago.'
    },
    'lc-1': {
      number: '20',
      symbol: 'Es',
      name: 'Executive Storytelling',
      family: 'Leadership & Communication',
      catClass: 'cat-lc',
      app: 'Distilling high-dimensional machine learning outputs into crisp, executive-ready presentations that drive strategic consensus.',
      impact: 'Translated predictive models and data science metrics into board-level dashboards for bank directors, facilitating data-driven strategic decisions.'
    },
    'lc-2': {
      number: '21',
      symbol: 'Sm',
      name: 'Stakeholder Management',
      family: 'Leadership & Communication',
      catClass: 'cat-lc',
      app: 'Aligning business priorities across technical engineers, marketing directors, finance officers, and executive sponsors.',
      impact: 'Selected as Best Intern of the Year 2025 across Mastercard and Universidad del Rosario for exceptional client relationship and delivery evaluation.'
    },
    'lc-3': {
      number: '22',
      symbol: 'Xl',
      name: 'Cross-functional Lead',
      family: 'Leadership & Communication',
      catClass: 'cat-lc',
      app: 'Guiding cross-disciplinary teams to execute complex analytics deliverables under tight competitive deadlines.',
      impact: 'Led regional consulting division team to 1st place in Colombia and 3rd in Latin America & Caribbean; global finalist in innovation competition.'
    },
    'lc-4': {
      number: '23',
      symbol: 'Bt',
      name: 'Business Translation',
      family: 'Leadership & Communication',
      catClass: 'cat-lc',
      app: 'The vital bridge between mathematical formulations (loss functions, Gower distance, p-values) and commercial P&L impact.',
      impact: 'Selected to deliver the Graduation Speech at Universidad del Rosario; Student Voice Champion at the London School of Economics (LSE).'
    }
  };

  // --- 2. PERIODIC TABLE INTERACTIONS ---
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

    cells.forEach(cell => {
      const id = cell.getAttribute('data-id');
      cell.addEventListener('mouseenter', () => updateInspector(id));
      cell.addEventListener('click', () => updateInspector(id));
      cell.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          updateInspector(id);
        }
      });
    });

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

    // Default active item: Causal Inference (aa-6)
    updateInspector('aa-6');
  }

  // --- 3. TIMELINE EXPANSION (ACCORDION) ---
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

  // --- 4. SUBTLE SKY-BLUE CANVAS CONSTELLATION ON WHITE ---
  function initCanvas() {
    const canvas = document.getElementById('analytical-canvas');
    if (!canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const particleCount = 40;
    const maxDistance = 135;

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
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
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
        // Sky Blue particle on white background
        ctx.fillStyle = 'rgba(14, 165, 233, 0.45)';
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
            const alpha = (1 - dist / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Subtle sky blue connecting lines
            ctx.strokeStyle = `rgba(2, 132, 199, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const mdx = particles[i].x - mouse.x;
          const mdy = particles[i].y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < mouse.maxRadius) {
            const malpha = (1 - mdist / mouse.maxRadius) * 0.35;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${malpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  // --- 5. MOBILE MENU & ACTIVE NAV SPY ---
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

  // --- 6. TOAST NOTIFICATIONS ---
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

  document.addEventListener('DOMContentLoaded', () => {
    initPeriodicTable();
    initTimeline();
    initCanvas();
    initNavigation();
    initToast();
  });
})();
