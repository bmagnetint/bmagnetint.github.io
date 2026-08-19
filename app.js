/**
 * B-Magnet PRO Official Company Website JavaScript Engine (Port 8080)
 * Features Interactive 3D Mouse Gravity Physics & Default Light Theme
 */

// Default theme is Light Mode
let isDarkMode = false;

function toggleOfficialTheme() {
  const body = document.body;
  const icon = document.getElementById('themePillIcon');
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
    if (icon) icon.textContent = '☀️';
  } else {
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');
    if (icon) icon.textContent = '🌙';
  }
}

let currentLang = 'en';

function toggleOfficialLang() {
  const btn = document.getElementById('langPillBtn');
  const title = document.getElementById('txtHeroTitle');
  const sub = document.getElementById('txtHeroSubtitle');

  if (currentLang === 'en') {
    currentLang = 'ar';
    if (btn) btn.innerHTML = '<span>🇦🇪 العربية</span>';
    document.body.dir = 'rtl';
    if (title) title.innerHTML = 'خوارزمية التداول الآلي للذهب على MT5<br><span>B-Magnet Gold Hunter EA</span>';
    if (sub) sub.textContent = 'خوارزمية كمية عالية الدقة مصممة خصيصاً لتداول الذهب (XAUUSD) على MetaTrader 5 مع التحقق الرقمي المفرط وتنفيد أقل من 15 ملي ثانية.';
  } else {
    currentLang = 'en';
    if (btn) btn.innerHTML = '<span>🇬🇧 EN</span>';
    document.body.dir = 'ltr';
    if (title) title.innerHTML = 'Institutional MT5 Gold Algorithm<br><span>B-Magnet Gold Hunter EA</span>';
    if (sub) sub.textContent = 'High-precision quantitative trading algorithm engineered for Gold (XAUUSD) on MetaTrader 5. Features multi-timeframe order-flow magnetics, SHA-256 license verification, and sub-15ms execution.';
  }
}

function openOfficialAuthModal(tab) {
  const modal = document.getElementById('officialAuthModal');
  if (modal) modal.classList.add('active');
  switchAuthTab(tab || 'signin');
}

function closeOfficialAuthModal() {
  const modal = document.getElementById('officialAuthModal');
  if (modal) modal.classList.remove('active');
}

function switchAuthTab(tab) {
  const btnSignIn = document.getElementById('btnTabSignIn');
  const btnSignUp = document.getElementById('btnTabSignUp');
  const panelSignIn = document.getElementById('panelSignIn');
  const panelSignUp = document.getElementById('panelSignUp');

  if (tab === 'signin') {
    if (btnSignIn) btnSignIn.classList.add('active');
    if (btnSignUp) btnSignUp.classList.remove('active');
    if (panelSignIn) panelSignIn.classList.add('active');
    if (panelSignUp) panelSignUp.classList.remove('active');
  } else {
    if (btnSignUp) btnSignUp.classList.add('active');
    if (btnSignIn) btnSignIn.classList.remove('active');
    if (panelSignUp) panelSignUp.classList.add('active');
    if (panelSignIn) panelSignIn.classList.remove('active');
  }
}

function handleOfficialSignIn() {
  const input = document.getElementById('signInAccountInput');
  const account = input ? input.value : 'trader@bmagnet.pro';
  alert('🔑 Official Access Passcode Sent to: ' + account + '\n\nWelcome to B-Magnet PRO Official Portal (Port 8080)!');
  closeOfficialAuthModal();
}

function handleOfficialSignUp() {
  const name = document.getElementById('signUpNameInput')?.value || 'Trader';
  const email = document.getElementById('signUpEmailInput')?.value || 'trader@bmagnet.pro';
  alert('✨ Account Created for ' + name + ' (' + email + ')!\n\nAccess Passcode Sent to your email.');
  closeOfficialAuthModal();
}

// -------------------------------------------------------------
// INTERACTIVE 3D MOUSE GRAVITY LOGO PHYSICS ENGINE
// -------------------------------------------------------------
function initHeroMouseGravityPhysics() {
  const pivot = document.getElementById('tbphBigLogo');
  if (!pivot) return;

  let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let time = 0;

  window.addEventListener('mousemove', (e) => {
    const w = window.innerWidth || 1200;
    const h = window.innerHeight || 800;
    const x = e.clientX - w / 2;
    const y = e.clientY - h / 2;
    mouse.targetX = Math.max(-1.4, Math.min(1.4, x / (w / 2)));
    mouse.targetY = Math.max(-1.4, Math.min(1.4, y / (h / 2)));
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      const w = window.innerWidth || 1200;
      const h = window.innerHeight || 800;
      const x = e.touches[0].clientX - w / 2;
      const y = e.touches[0].clientY - h / 2;
      mouse.targetX = Math.max(-1.4, Math.min(1.4, x / (w / 2)));
      mouse.targetY = Math.max(-1.4, Math.min(1.4, y / (h / 2)));
    }
  }, { passive: true });

  function renderLoop() {
    time += 0.025;
    const idleX = Math.sin(time * 0.7) * 0.12;
    const idleY = Math.cos(time * 0.9) * 0.12;

    mouse.x += (mouse.targetX + idleX - mouse.x) * 0.075;
    mouse.y += (mouse.targetY + idleY - mouse.y) * 0.075;

    const rotY = mouse.x * 22;
    const rotX = -mouse.y * 18;
    const rotZ = mouse.x * mouse.y * 8;
    const transX = mouse.x * 20;
    const transY = mouse.y * 14;

    pivot.style.transform = `translate3d(${transX.toFixed(2)}px, ${transY.toFixed(2)}px, 0) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) rotateZ(${rotZ.toFixed(2)}deg)`;

    requestAnimationFrame(renderLoop);
  }

  requestAnimationFrame(renderLoop);
}

document.addEventListener('DOMContentLoaded', () => {
  initHeroMouseGravityPhysics();
});
