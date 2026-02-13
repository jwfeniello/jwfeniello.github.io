// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== MOBILE NAV =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== SCROLL ANIMATIONS =====
const fadeEls = document.querySelectorAll(
  '.threat-content, .threat-stat-card, .step-card, .scanner-card, .pricing-card, .about-content, .about-map-card, .cta-card'
);
fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);
fadeEls.forEach(el => observer.observe(el));

// ===== SCANNER LOGIC =====
const scanBtn = document.getElementById('scanBtn');
const scanAgainBtn = document.getElementById('scanAgainBtn');
const urlInput = document.getElementById('urlInput');
const scannerInput = document.getElementById('scannerInput');
const scannerLoading = document.getElementById('scannerLoading');
const scannerResult = document.getElementById('scannerResult');
const terminalBody = document.getElementById('terminalBody');
const progressBar = document.getElementById('progressBar');
const loadingStatus = document.getElementById('loadingStatus');
const resultUrl = document.getElementById('resultUrl');

const scanSteps = [
  { text: '> Initializing SVDD Hunter v2.1...', cls: '', delay: 400 },
  { text: '> Resolving DNS for target domain...', cls: '', delay: 600 },
  { text: '> Connection established. Starting deep scan...', cls: 'success', delay: 800 },
  { text: '> Scanning for tracking pixels...', cls: '', delay: 1000, status: 'Scanning for Pixel Trackers...' },
  { text: '  [!] Meta (Facebook) Pixel detected', cls: 'warning', delay: 700 },
  { text: '  [!] Google Analytics GA4 tag found', cls: 'warning', delay: 500 },
  { text: '> Scanning for third-party cookies...', cls: '', delay: 800, status: 'Detecting Third-Party Cookies...' },
  { text: '  [!] 3 third-party cookies identified', cls: 'warning', delay: 600 },
  { text: '> Checking cookie consent mechanism...', cls: '', delay: 700, status: 'Checking Consent Mechanisms...' },
  { text: '  [✗] No cookie consent banner found', cls: 'error', delay: 500 },
  { text: '> Cross-referencing Privacy Policy...', cls: '', delay: 1000, status: 'Checking PA Law Compliance...' },
  { text: '  [✗] Policy does not disclose all active trackers', cls: 'error', delay: 600 },
  { text: '> Evaluating PA HB 78 compliance status...', cls: '', delay: 800, status: 'Generating Compliance Report...' },
  { text: '> ⚠ POTENTIAL COMPLIANCE RISK DETECTED', cls: 'error', delay: 500 },
  { text: '> Scan complete. Report generated.', cls: 'success', delay: 300 },
];

function runScan() {
  let url = urlInput.value.trim();
  if (!url) {
    urlInput.focus();
    urlInput.style.boxShadow = '0 0 0 2px rgba(255, 140, 0, 0.5)';
    setTimeout(() => (urlInput.style.boxShadow = ''), 1500);
    return;
  }

  // Clean URL
  if (!url.startsWith('http')) url = 'https://' + url;
  resultUrl.textContent = url;

  // Switch states
  scannerInput.classList.add('hidden');
  scannerLoading.classList.remove('hidden');
  scannerResult.classList.add('hidden');
  terminalBody.innerHTML = '';
  progressBar.style.width = '0%';

  let currentStep = 0;
  const totalSteps = scanSteps.length;

  function nextStep() {
    if (currentStep >= totalSteps) {
      // Show result
      setTimeout(() => {
        scannerLoading.classList.add('hidden');
        scannerResult.classList.remove('hidden');
      }, 600);
      return;
    }

    const step = scanSteps[currentStep];
    const line = document.createElement('div');
    line.className = 'line ' + (step.cls || '');
    line.innerHTML = step.text;

    // Add cursor to last line
    const existingCursors = terminalBody.querySelectorAll('.cursor');
    existingCursors.forEach(c => c.remove());
    line.innerHTML += '<span class="cursor"></span>';

    terminalBody.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight;

    // Update progress
    const pct = Math.round(((currentStep + 1) / totalSteps) * 100);
    progressBar.style.width = pct + '%';

    // Update status text
    if (step.status) {
      loadingStatus.textContent = step.status;
    }

    currentStep++;
    setTimeout(nextStep, step.delay);
  }

  setTimeout(nextStep, 500);
}

scanBtn.addEventListener('click', runScan);
urlInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') runScan();
});

scanAgainBtn.addEventListener('click', () => {
  scannerResult.classList.add('hidden');
  scannerInput.classList.remove('hidden');
  urlInput.value = '';
  urlInput.focus();
});

// ===== STAT RING ANIMATION =====
const statRing = document.querySelector('.stat-ring-fill');
if (statRing) {
  const ringObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statRing.style.transition = 'stroke-dashoffset 1.5s ease-out';
        statRing.style.strokeDashoffset = '39.6';
        ringObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  ringObserver.observe(statRing.closest('.threat-stat-card'));
}
