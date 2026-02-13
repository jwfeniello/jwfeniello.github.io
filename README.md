<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Steel Valley Digital Defense — PA Data Privacy Compliance Monitoring</title>
  <meta name="description" content="Automated compliance monitoring for small businesses under the 2026 Pennsylvania Consumer Data Privacy Act. Weekly scans, tracker detection, and compliance reports for $29/mo.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- ====== NAVIGATION ====== -->
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#" class="nav-logo">
        <svg class="nav-logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2L4 10V20C4 30 20 38 20 38C20 38 36 30 36 20V10L20 2Z" fill="url(#shieldGrad)" stroke="#4682B4" stroke-width="1.5"/>
          <path d="M20 8L10 13V20C10 26.5 20 32 20 32C20 32 30 26.5 30 20V13L20 8Z" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
          <path d="M15 20L18.5 23.5L26 16" stroke="#4682B4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
            <linearGradient id="shieldGrad" x1="4" y1="2" x2="36" y2="38">
              <stop offset="0%" stop-color="#2F4F4F"/>
              <stop offset="100%" stop-color="#1a2f2f"/>
            </linearGradient>
          </defs>
        </svg>
        <span>Steel Valley<br><small>Digital Defense</small></span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="navLinks">
        <li><a href="#threat">The Threat</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#scanner" class="nav-cta">Free Scan</a></li>
      </ul>
    </div>
  </nav>

  <!-- ====== HERO SECTION ====== -->
  <section class="hero" id="hero">
    <div class="hero-bg">
      <div class="grid-overlay"></div>
      <div class="scan-line"></div>
    </div>
    <div class="hero-content">
      <div class="hero-text">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          2026 PA Data Privacy Act Now Active
        </div>
        <h1>Is Your Website <span class="text-gradient">Legal</span> Under the 2026 PA Data Act?</h1>
        <p class="hero-sub">We monitor your site 24/7 to catch hidden tracking scripts and compliance gaps <strong>before the Attorney General does.</strong></p>
        <div class="hero-actions">
          <a href="#scanner" class="btn btn-primary btn-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            Scan My Site for Free
          </a>
          <a href="#how-it-works" class="btn btn-ghost btn-lg">Learn How It Works</a>
        </div>
        <div class="hero-trust">
          <div class="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4682B4" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            No Credit Card Required
          </div>
          <div class="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4682B4" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Results in 60 Seconds
          </div>
          <div class="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4682B4" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            100% Confidential
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="shield-container">
          <div class="shield-glow"></div>
          <svg class="shield-icon" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="heroShieldGrad" x1="20" y1="10" x2="180" y2="230">
                <stop offset="0%" stop-color="#4682B4"/>
                <stop offset="50%" stop-color="#2F4F4F"/>
                <stop offset="100%" stop-color="#1a2f2f"/>
              </linearGradient>
              <filter id="shieldShadow">
                <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#4682B4" flood-opacity="0.3"/>
              </filter>
            </defs>
            <path d="M100 10L15 55V120C15 175 100 225 100 225C100 225 185 175 185 120V55L100 10Z" fill="url(#heroShieldGrad)" filter="url(#shieldShadow)" stroke="#4682B4" stroke-width="2"/>
            <path d="M100 30L35 65V120C35 165 100 205 100 205C100 205 165 165 165 120V65L100 30Z" fill="none" stroke="rgba(70,130,180,0.3)" stroke-width="1.5"/>
            <!-- PA State outline stylized -->
            <rect x="60" y="85" width="80" height="55" rx="4" fill="none" stroke="rgba(70,130,180,0.5)" stroke-width="1" stroke-dasharray="3 3"/>
            <text x="100" y="117" text-anchor="middle" fill="#4682B4" font-family="Inter" font-size="14" font-weight="700">PA</text>
            <!-- Check mark -->
            <path d="M75 145L92 162L130 124" stroke="#FF8C00" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="shield-pulse"></div>
          <div class="shield-pulse shield-pulse-2"></div>
        </div>
        <!-- Floating data points -->
        <div class="data-point dp-1"><span>🍪</span> Cookie Detected</div>
        <div class="data-point dp-2"><span>📊</span> GA4 Active</div>
        <div class="data-point dp-3"><span>⚠️</span> No Disclosure</div>
      </div>
    </div>
  </section>

  <!-- ====== FEAR / THREAT SECTION ====== -->
  <section class="threat-section" id="threat">
    <div class="container">
      <div class="threat-grid">
        <div class="threat-content">
          <div class="section-label">Compliance Alert</div>
          <h2>The Law Has <span class="text-orange">Changed.</span></h2>
          <p>As of 2026, Pennsylvania law requires <strong>strict transparency</strong> about how you collect data. If your marketing team adds a "Review Widget" or a "TikTok Pixel" and you don't update your legal policy, you are liable for fines up to <strong class="text-orange">$7,500 per violation.</strong></p>
          <div class="threat-details">
            <div class="threat-detail">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span>HB 78 — Pennsylvania Consumer Data Privacy Act</span>
            </div>
            <div class="threat-detail">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span>Enforceable by the PA Attorney General's Office</span>
            </div>
            <div class="threat-detail">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span>Applies to ANY website serving PA residents</span>
            </div>
          </div>
        </div>
        <div class="threat-stat-card">
          <div class="stat-ring">
            <svg viewBox="0 0 160 160">
              <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,140,0,0.15)" stroke-width="12"/>
              <circle cx="80" cy="80" r="70" fill="none" stroke="#FF8C00" stroke-width="12" stroke-dasharray="396" stroke-dashoffset="39.6" stroke-linecap="round" transform="rotate(-90 80 80)" class="stat-ring-fill"/>
            </svg>
            <div class="stat-number">90<span>%</span></div>
          </div>
          <p class="stat-label">of local business websites <strong>currently fail</strong> this requirement</p>
          <p class="stat-sub">Don't be one of them.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ====== HOW IT WORKS ====== -->
  <section class="how-section" id="how-it-works">
    <div class="container">
      <div class="section-header">
        <div class="section-label">Our Process</div>
        <h2>Set It and <span class="text-gradient">Forget It.</span></h2>
        <p>Three steps. Full protection. Zero headaches.</p>
      </div>
      <div class="steps-grid">
        <div class="step-card" data-step="01">
          <div class="step-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              <path d="M11 8v6"/><path d="M8 11h6"/>
            </svg>
          </div>
          <h3>We Scan</h3>
          <p>Our <strong>"Hunter"</strong> script crawls your site weekly to identify every 3rd-party tracker — Google Analytics, Meta Pixels, Hotjar, TikTok, and more.</p>
          <div class="step-tech">
            <span>Cookies</span><span>Pixels</span><span>Tags</span><span>Scripts</span>
          </div>
        </div>
        <div class="step-connector">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4682B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
        </div>
        <div class="step-card" data-step="02">
          <div class="step-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
            </svg>
          </div>
          <h3>We Verify</h3>
          <p>We cross-reference your <strong>active trackers</strong> against your visible Privacy Policy to check for compliance gaps and missing disclosures.</p>
          <div class="step-tech">
            <span>Policy Audit</span><span>Legal Check</span><span>Gap Analysis</span>
          </div>
        </div>
        <div class="step-connector">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4682B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
        </div>
        <div class="step-card" data-step="03">
          <div class="step-icon step-icon-alert">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              <circle cx="18" cy="4" r="3" fill="#FF8C00" stroke="none"/>
            </svg>
          </div>
          <h3>We Protect</h3>
          <p>If we find a mismatch — like a new tracker with no disclosure — we send you an immediate <strong class="text-orange">"Red Alert"</strong> with the exact fix you need.</p>
          <div class="step-tech">
            <span>Instant Alerts</span><span>Fix Instructions</span><span>Compliance PDF</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ====== SCANNER SECTION ====== -->
  <section class="scanner-section" id="scanner">
    <div class="container">
      <div class="scanner-card">
        <div class="scanner-header">
          <h2>Free Compliance Scan</h2>
          <p>Enter your website URL below. We'll check for tracking scripts and PA privacy law compliance in seconds.</p>
        </div>

        <!-- Input State -->
        <div class="scanner-input-wrap" id="scannerInput">
          <div class="input-group">
            <div class="input-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4682B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>
            </div>
            <input type="text" id="urlInput" placeholder="e.g. joespizza.com" autocomplete="off">
            <button class="btn btn-primary btn-scan" id="scanBtn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              Scan Now
            </button>
          </div>
          <p class="input-hint">We never store your URL or share it with third parties.</p>
        </div>

        <!-- Loading State -->
        <div class="scanner-loading hidden" id="scannerLoading">
          <div class="loading-terminal">
            <div class="terminal-header">
              <span class="terminal-dot red"></span>
              <span class="terminal-dot yellow"></span>
              <span class="terminal-dot green"></span>
              <span class="terminal-title">SVDD Scanner v2.1</span>
            </div>
            <div class="terminal-body" id="terminalBody">
              <!-- Lines will be injected by JS -->
            </div>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar" id="progressBar"></div>
          </div>
          <p class="loading-status" id="loadingStatus">Initializing scan...</p>
        </div>

        <!-- Result State -->
        <div class="scanner-result hidden" id="scannerResult">
          <div class="result-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <h3 class="result-title">⚠️ Potential Compliance Risk Detected</h3>
          <p class="result-url" id="resultUrl"></p>
          <div class="result-findings">
            <div class="finding">
              <span class="finding-status risk">RISK</span>
              <span>Third-party tracking scripts detected</span>
            </div>
            <div class="finding">
              <span class="finding-status risk">RISK</span>
              <span>Privacy policy may not disclose all data collection</span>
            </div>
            <div class="finding">
              <span class="finding-status warn">WARN</span>
              <span>Cookie consent mechanism not detected</span>
            </div>
          </div>
          <p class="result-cta-text">Want the full report and remediation steps? Sign up or contact us below.</p>
          <div class="result-actions">
            <a href="#pricing" class="btn btn-primary">Get Full Protection — $29/mo</a>
            <button class="btn btn-ghost" id="scanAgainBtn">Scan Another Site</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ====== PRICING SECTION ====== -->
  <section class="pricing-section" id="pricing">
    <div class="container">
      <div class="section-header">
        <div class="section-label">Simple Pricing</div>
        <h2>One Plan. <span class="text-gradient">Total Protection.</span></h2>
        <p>No tiers. No upsells. No hidden fees. Cancel anytime.</p>
      </div>
      <div class="pricing-card">
        <div class="pricing-badge">Most Popular</div>
        <div class="pricing-header">
          <h3>The Ironclad Standard</h3>
          <div class="pricing-amount">
            <span class="price-dollar">$</span>
            <span class="price-value">29</span>
            <span class="price-period">/month</span>
          </div>
          <p class="pricing-cancel">Cancel anytime. No contracts.</p>
        </div>
        <ul class="pricing-features">
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4682B4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Weekly "Deep Scans" of all site pages
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4682B4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Tracker Detection — Cookies, Pixels, &amp; Tags
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4682B4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Monthly "Proof of Compliance" PDF Report
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4682B4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Instant "Red Alert" Notifications
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4682B4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            "Protected by Steel Valley" Badge for your footer
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4682B4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Priority Email Support
          </li>
        </ul>
        <a href="#scanner" class="btn btn-primary btn-lg btn-full">Start My Free Scan</a>
      </div>
    </div>
  </section>

  <!-- ====== ABOUT SECTION ====== -->
  <section class="about-section" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-content">
          <div class="section-label">Who We Are</div>
          <h2>Local Security Research,<br><span class="text-gradient">Not a Faceless App.</span></h2>
          <p>Founded by a security researcher in <strong>Ambridge, PA</strong>. We aren't a Silicon Valley startup. We are a local defense lab dedicated to protecting Pittsburgh-area businesses from digital liability.</p>
          <p>We understand the unique challenges small businesses face — from the corner pizza shop to the local law office. You shouldn't need a legal team to comply with data privacy laws. That's what we're here for.</p>
          <div class="about-values">
            <div class="value-item">
              <div class="value-icon">🏭</div>
              <div>
                <strong>Built in Steel Country</strong>
                <span>Ambridge, PA — Beaver County</span>
              </div>
            </div>
            <div class="value-item">
              <div class="value-icon">🔒</div>
              <div>
                <strong>Security-First</strong>
                <span>Your data never leaves our local servers</span>
              </div>
            </div>
            <div class="value-item">
              <div class="value-icon">🤝</div>
              <div>
                <strong>Real People</strong>
                <span>Talk to a human, not a chatbot</span>
              </div>
            </div>
          </div>
        </div>
        <div class="about-visual">
          <div class="about-map-card">
            <div class="map-pin">📍</div>
            <h4>Ambridge, PA</h4>
            <p>Beaver County, Western PA</p>
            <div class="map-detail">Protecting Pittsburgh-area businesses since 2026</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ====== CTA SECTION ====== -->
  <section class="cta-section">
    <div class="container">
      <div class="cta-card">
        <h2>Don't Wait for a $7,500 Fine<br>to Find Out You're Non-Compliant.</h2>
        <p>Run your free scan today and see exactly what trackers are hiding on your website.</p>
        <a href="#scanner" class="btn btn-primary btn-lg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Scan My Site for Free
        </a>
      </div>
    </div>
  </section>

  <!-- ====== FOOTER ====== -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
              <path d="M20 2L4 10V20C4 30 20 38 20 38C20 38 36 30 36 20V10L20 2Z" fill="#2F4F4F" stroke="#4682B4" stroke-width="1.5"/>
              <path d="M15 20L18.5 23.5L26 16" stroke="#4682B4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Steel Valley Digital Defense</span>
          </div>
          <p>Automated compliance monitoring for small businesses under the 2026 PA Consumer Data Privacy Act.</p>
        </div>
        <div class="footer-links">
          <h4>Quick Links</h4>
          <a href="#threat">The Threat</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About Us</a>
          <a href="#scanner">Free Scan</a>
        </div>
        <div class="footer-contact">
          <h4>Contact</h4>
          <p>📍 Ambridge, PA 15003</p>
          <p>📧 hello@steelvalleydefense.com</p>
          <p>📞 (724) 555-0199</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Steel Valley Digital Defense. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
