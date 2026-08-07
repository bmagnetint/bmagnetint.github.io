const loginForm = document.getElementById('loginForm');
const googleSignInBtn = document.getElementById('googleSignInBtn');
const appleSignInBtn = document.getElementById('appleSignInBtn');
const togglePasswordBtn = document.getElementById('togglePasswordBtn');
const passwordInput = document.getElementById('password');

const VALID_EMAIL = "test@bmgnetint.com";
const VALID_PASS = "bmagnet@123";

// Password Show/Hide Eye Toggle Handler
if (togglePasswordBtn && passwordInput) {
  togglePasswordBtn.addEventListener('click', () => {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
    
    togglePasswordBtn.innerHTML = isPassword ? `
      <svg class="eye-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      </svg>
    ` : `
      <svg class="eye-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    `;
  });
}

if (googleSignInBtn) {
  googleSignInBtn.addEventListener('click', () => {
    document.getElementById('email').value = VALID_EMAIL;
    document.getElementById('password').value = VALID_PASS;
    
    googleSignInBtn.style.opacity = '0.7';
    googleSignInBtn.style.transform = 'scale(0.92)';

    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 400);
  });
}

if (appleSignInBtn) {
  appleSignInBtn.addEventListener('click', () => {
    document.getElementById('email').value = VALID_EMAIL;
    document.getElementById('password').value = VALID_PASS;

    appleSignInBtn.style.opacity = '0.7';
    appleSignInBtn.style.transform = 'scale(0.92)';

    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 400);
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = document.getElementById('email').value.trim();
    const passwordInputVal = document.getElementById('password').value.trim();

    if (emailInput.toLowerCase() === VALID_EMAIL.toLowerCase() && passwordInputVal === VALID_PASS) {
      const submitBtn = loginForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'Authenticating...';
      }
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 500);
    } else {
      alert(`Access Denied: Invalid credentials.\n\nRequired Investor Email: ${VALID_EMAIL}\nRequired Password: ${VALID_PASS}`);
    }
  });
}
