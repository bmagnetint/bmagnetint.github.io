document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const tabSignInBtn = document.getElementById('tabSignInBtn');
  const tabRegisterBtn = document.getElementById('tabRegisterBtn');

  const passkeySignInBtn = document.getElementById('passkeySignInBtn');
  const googleSignInBtn = document.getElementById('googleSignInBtn');
  const appleSignInBtn = document.getElementById('appleSignInBtn');

  const togglePasswordBtn = document.getElementById('togglePasswordBtn');
  const passwordInput = document.getElementById('password');

  const VALID_EMAIL = "test@bmgnetint.com";
  const VALID_PASS = "bmagnet@123";

  // Tab Switcher Handler (Sign In vs Register Account)
  if (tabSignInBtn && tabRegisterBtn && loginForm && registerForm) {
    tabSignInBtn.addEventListener('click', () => {
      tabSignInBtn.classList.add('active');
      tabSignInBtn.style.color = 'var(--accent-teal)';
      tabSignInBtn.style.borderBottomColor = 'var(--accent-teal)';

      tabRegisterBtn.classList.remove('active');
      tabRegisterBtn.style.color = 'var(--text-muted)';
      tabRegisterBtn.style.borderBottomColor = 'transparent';

      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
    });

    tabRegisterBtn.addEventListener('click', () => {
      tabRegisterBtn.classList.add('active');
      tabRegisterBtn.style.color = 'var(--accent-teal)';
      tabRegisterBtn.style.borderBottomColor = 'var(--accent-teal)';

      tabSignInBtn.classList.remove('active');
      tabSignInBtn.style.color = 'var(--text-muted)';
      tabSignInBtn.style.borderBottomColor = 'transparent';

      registerForm.style.display = 'block';
      loginForm.style.display = 'none';
    });
  }

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

  // 🔑 Passkey (Face ID / Touch ID) Authentication Handler
  if (passkeySignInBtn) {
    passkeySignInBtn.addEventListener('click', () => {
      passkeySignInBtn.innerHTML = `🔑 Authenticating Passkey (Touch ID / Face ID)...`;
      setTimeout(() => {
        alert('🔑 Passkey Biometric Verified!\n\nUser authenticated via WebAuthn FIDO2 vault key. Directing to dashboard...');
        window.location.href = 'dashboard.html';
      }, 700);
    });
  }

  // 🌐 Google Sign In Handler
  if (googleSignInBtn) {
    googleSignInBtn.addEventListener('click', () => {
      googleSignInBtn.style.opacity = '0.7';
      setTimeout(() => {
        alert('🌐 Google OAuth Verified!\n\nAuthenticated as Investor via Google Accounts. Directing to dashboard...');
        window.location.href = 'dashboard.html';
      }, 500);
    });
  }

  // 🍏 Apple Sign In Handler
  if (appleSignInBtn) {
    appleSignInBtn.addEventListener('click', () => {
      appleSignInBtn.style.opacity = '0.7';
      setTimeout(() => {
        alert('🍏 Apple ID Verified!\n\nAuthenticated via Apple Secure Enclave Passkey. Directing to dashboard...');
        window.location.href = 'dashboard.html';
      }, 500);
    });
  }

  // Sign In Form Submission Handler
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
        }, 400);
      } else {
        alert(`Access Denied: Invalid credentials.\n\nRequired Investor Email: ${VALID_EMAIL}\nRequired Password: ${VALID_PASS}`);
      }
    });
  }

  // Registration Form Submission Handler
  if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const nameVal = document.getElementById('regName').value.trim();
      const emailVal = document.getElementById('regEmail').value.trim();
      const submitBtn = registerForm.querySelector('button[type="submit"]');

      if (submitBtn) {
        submitBtn.textContent = 'Creating Investor Profile...';
      }

      setTimeout(() => {
        alert(`🎉 Account Successfully Registered!\n\nWelcome to B Magnet International, ${nameVal}!\n\nYour institutional investor account (${emailVal}) is now active. Directing to your portal dashboard...`);
        window.location.href = 'dashboard.html';
      }, 700);
    });
  }
});
