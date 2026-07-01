// AUTO-GENERATED from the original index.html <body> shell. Do not hand-edit.
// This is injected verbatim so the ported engine finds the exact DOM nodes it expects
// (#login, #layout, .sidebar, #nav, .topbar, #view, #modal-root).

export const SHELL_HTML = `

  
  <div id="login">
    <div class="lcard">
      <div class="llogo">
        <svg width="56" height="56" viewBox="0 0 34 34" fill="none">
          <defs>
            <filter id="login-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.8" result="blur" />
            </filter>
            <linearGradient id="login-bg" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0f172a" />
              <stop offset="1" stop-color="#1e293b" />
            </linearGradient>
            <linearGradient id="login-left-glow" x1="11" y1="6.5" x2="17" y2="24.2" gradientUnits="userSpaceOnUse">
              <stop stop-color="#3b82f6" />
              <stop offset="1" stop-color="#1d4ed8" />
            </linearGradient>
            <linearGradient id="login-right-glow" x1="23" y1="6.5" x2="17" y2="24.2" gradientUnits="userSpaceOnUse">
              <stop stop-color="#06b6d4" />
              <stop offset="1" stop-color="#0e7490" />
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="32" height="32" rx="9" fill="url(#login-bg)" stroke="rgba(255,255,255,0.06)" stroke-width="1.2" />
          <circle cx="17" cy="15" r="8" fill="#06b6d4" opacity="0.15" filter="url(#login-blur)" />
          <path d="M17 6.5 C17 6.5 13.5 7.5 11 8.5 V15.5 C11 19.5 13.5 22.8 17 24.2" stroke="url(#login-left-glow)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17 6.5 C17 6.5 20.5 7.5 23 8.5 V15.5 C23 19.5 20.5 22.8 17 24.2" stroke="url(#login-right-glow)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="17" cy="12.5" r="1.5" fill="#ffffff" opacity="0.9" />
          <circle cx="17" cy="12.5" r="3.5" stroke="#06b6d4" stroke-width="0.8" opacity="0.5" />
          <path class="dpdpx-logo-check" d="M13.4 16.3l2.5 2.5 4.8-5" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div class="lname">DPDPA<b>X</b><span>by J<b>o</b>det<b class="bx">x</b></span></div>
      </div>
      <div class="lsub">Privacy &amp; Consent Management · Admin Portal</div>
      <form id="lform" autocomplete="off">
        <div class="lf"><label>Work Email</label><input id="lemail" type="email" value="admin@jodetx.com"
            placeholder="you@company.com" /></div>
        <div class="lf"><label>Password</label><input id="lpass" type="password" value="dpdpx-demo"
            placeholder="Enter your password" /></div>
        <div class="lrow"><label><input type="checkbox" checked /> Remember me</label><a id="lforgot">Forgot
            password?</a></div>
        <button class="lbtn" type="submit">Sign in to Admin Panel</button>
        <button class="lsso" type="button" id="lsso">Continue with SSO (SAML)</button>
        <div class="lerr" id="lerr"></div>
      </form>
      <div class="lhint">Demo access — use the pre-filled credentials or any valid email + password.</div>
      <div class="lfoot">DPDPA Act 2023 Compliant · Secure demo build · v1.0</div>
    </div>
  </div>
  <div id='layout'>
    <aside class='sidebar'>
      <div class='sb-logo' style='display:flex; align-items:center; gap:10px;'>
        <svg class='lmk' width='34' height='34' viewBox='0 0 34 34' fill='none'>
          <defs>
            <filter id="sb-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.8" result="blur" />
            </filter>
            <linearGradient id="sb-bg" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0f172a" />
              <stop offset="1" stop-color="#1e293b" />
            </linearGradient>
            <linearGradient id="sb-left-glow" x1="11" y1="6.5" x2="17" y2="24.2" gradientUnits="userSpaceOnUse">
              <stop stop-color="#3b82f6" />
              <stop offset="1" stop-color="#1d4ed8" />
            </linearGradient>
            <linearGradient id="sb-right-glow" x1="23" y1="6.5" x2="17" y2="24.2" gradientUnits="userSpaceOnUse">
              <stop stop-color="#06b6d4" />
              <stop offset="1" stop-color="#0e7490" />
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="32" height="32" rx="9" fill="url(#sb-bg)" stroke="rgba(255,255,255,0.06)" stroke-width="1.2" />
          <circle cx="17" cy="15" r="8" fill="#06b6d4" opacity="0.15" filter="url(#sb-blur)" />
          <path d="M17 6.5 C17 6.5 13.5 7.5 11 8.5 V15.5 C11 19.5 13.5 22.8 17 24.2" stroke="url(#sb-left-glow)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17 6.5 C17 6.5 20.5 7.5 23 8.5 V15.5 C23 19.5 20.5 22.8 17 24.2" stroke="url(#sb-right-glow)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="17" cy="12.5" r="1.5" fill="#ffffff" opacity="0.9" />
          <circle cx="17" cy="12.5" r="3.5" stroke="#06b6d4" stroke-width="0.8" opacity="0.5" />
          <path class="dpdpx-logo-check" d="M13.4 16.3l2.5 2.5 4.8-5" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class='lword'>
          <span class='lw-main'>DPDPA<b>X</b></span>
          <span class='lw-sub'>by J<b>o</b>det<b class="bx">x</b></span>
        </span>
      </div>
      <div class='sb-admin'><span class='lock'><svg width='13' height='13' viewBox='0 0 24 24' fill='none'
            stroke='currentColor' stroke-width='2.2'>
            <rect x='4' y='11' width='16' height='9' rx='2' />
            <path d='M8 11V8a4 4 0 0 1 8 0v3' />
          </svg></span> Admin Panel <span class='ap'>AP</span></div>
      <nav class='nav' id='nav'></nav>
      <div id="sidebar-resizer" class="sidebar-resizer"
        style="position: absolute; top: 0; right: 0; bottom: 0; width: 4px; cursor: col-resize; z-index: 9999;"></div>
    </aside>
    <div class='main'>
      <header class='topbar'>
        <button class='menu'><svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor'
            stroke-width='2'>
            <path d='M4 7h16M4 12h13M4 17h16' />
          </svg></button>
        <div class='title' style='display:flex;align-items:center;gap:8px'>
          <svg width='26' height='26' viewBox='0 0 34 34' fill='none'>
            <defs>
              <filter id="tb-blur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.8" result="blur" />
              </filter>
              <linearGradient id="tb-bg" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0f172a" />
                <stop offset="1" stop-color="#1e293b" />
              </linearGradient>
              <linearGradient id="tb-left-glow" x1="11" y1="6.5" x2="17" y2="24.2" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3b82f6" />
                <stop offset="1" stop-color="#1d4ed8" />
              </linearGradient>
              <linearGradient id="tb-right-glow" x1="23" y1="6.5" x2="17" y2="24.2" gradientUnits="userSpaceOnUse">
                <stop stop-color="#06b6d4" />
                <stop offset="1" stop-color="#0e7490" />
              </linearGradient>
            </defs>
            <rect x="1" y="1" width="32" height="32" rx="9" fill="url(#tb-bg)" stroke="rgba(255,255,255,0.06)" stroke-width="1.2" />
            <circle cx="17" cy="15" r="8" fill="#06b6d4" opacity="0.15" filter="url(#tb-blur)" />
            <path d="M17 6.5 C17 6.5 13.5 7.5 11 8.5 V15.5 C11 19.5 13.5 22.8 17 24.2" stroke="url(#tb-left-glow)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 6.5 C17 6.5 20.5 7.5 23 8.5 V15.5 C23 19.5 20.5 22.8 17 24.2" stroke="url(#tb-right-glow)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="17" cy="12.5" r="1.5" fill="#ffffff" opacity="0.9" />
            <circle cx="17" cy="12.5" r="3.5" stroke="#06b6d4" stroke-width="0.8" opacity="0.5" />
            <path class="dpdpx-logo-check" d="M13.4 16.3l2.5 2.5 4.8-5" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span class='tb-brand'>
            <span class='tb-name'>DPDPA<b>X</b></span>
            <span class='tb-sub'>by J<b>o</b>det<b class="bx">x</b></span>
          </span>
        </div>
        <div class='right'>
          <button class='iconbtn'><svg width='19' height='19' viewBox='0 0 24 24' fill='none' stroke='currentColor'
              stroke-width='1.8'>
              <path d='M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9' />
              <path d='M13.7 21a2 2 0 0 1-3.4 0' />
            </svg></button>
          <div class='user'><span class='av'><svg width='15' height='15' viewBox='0 0 24 24' fill='none'
                stroke='currentColor' stroke-width='1.8'>
                <circle cx='12' cy='8' r='4' />
                <path d='M4 21c0-4 4-6 8-6s8 2 8 6' />
              </svg></span> admin@jodetx.com</div>
          <button class='iconbtn'><svg width='19' height='19' viewBox='0 0 24 24' fill='none' stroke='currentColor'
              stroke-width='1.8'>
              <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
              <path d='M16 17l5-5-5-5' />
              <path d='M21 12H9' />
            </svg></button>
        </div>
      </header>
      <main class='view' id='view'></main>
    </div>
  </div>
  <div id='modal-root'></div>
  `;
