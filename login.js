document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const tabSignInBtn = document.getElementById('tabSignInBtn');
  const tabRegisterBtn = document.getElementById('tabRegisterBtn');

  const passkeySignInBtn = document.getElementById('passkeySignInBtn');
  const googleSignInBtn = document.getElementById('googleSignInBtn');
  const appleSignInBtn = document.getElementById('appleSignInBtn');

  const togglePasswordBtn = document.getElementById('togglePasswordBtn');
  const emailInputEl = document.getElementById('email');
  const passwordInputEl = document.getElementById('password');

  const VALID_EMAIL = "test@bmagnetint.com";
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
  if (togglePasswordBtn && passwordInputEl) {
    togglePasswordBtn.addEventListener('click', () => {
      const isPassword = passwordInputEl.getAttribute('type') === 'password';
      passwordInputEl.setAttribute('type', isPassword ? 'text' : 'password');
      
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

  // Check stored registered accounts
  function getRegisteredUsers() {
    try {
      return JSON.parse(localStorage.getItem('bmagnet_registered_users') || '[]');
    } catch (e) {
      return [];
    }
  }

  function isValidCredential(email, pass) {
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPass = (pass || '').trim();

    if (!cleanEmail || !cleanPass) return false;

    if (cleanEmail === VALID_EMAIL.toLowerCase() && cleanPass === VALID_PASS) {
      return true;
    }

    const regUsers = getRegisteredUsers();
    return regUsers.some(u => u.email.toLowerCase() === cleanEmail && u.password === cleanPass);
  }

  // Social & Passkey buttons MUST NOT navigate to dashboard - force registration
  function requireRegistrationPrompt(e, providerName) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    alert(`📝 Registration Required!\n\nYou cannot log in directly with ${providerName}.\n\nPlease click the "Register Account" tab to create your investor account first.`);
    if (tabRegisterBtn) {
      tabRegisterBtn.click();
    }
  }

  if (passkeySignInBtn) {
    passkeySignInBtn.addEventListener('click', (e) => requireRegistrationPrompt(e, 'Passkey (Face ID / Touch ID)'));
  }

  if (googleSignInBtn) {
    googleSignInBtn.addEventListener('click', (e) => requireRegistrationPrompt(e, 'Google'));
  }

  if (appleSignInBtn) {
    appleSignInBtn.addEventListener('click', (e) => requireRegistrationPrompt(e, 'Apple'));
  }

  // Sign In Form Submission Handler
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const emailInput = emailInputEl ? emailInputEl.value.trim() : '';
      const passwordInputVal = passwordInputEl ? passwordInputEl.value.trim() : '';

      if (isValidCredential(emailInput, passwordInputVal)) {
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.textContent = 'Authenticating Vault Access...';
        }
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 400);
      } else {
        alert(`❌ Access Denied: Invalid Credentials!\n\nYou cannot enter the dashboard without registering an account first or entering authorized credentials.`);
      }
    });
  }

  // Registration Form Submission Handler
  if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const nameVal = document.getElementById('regName').value.trim();
      const emailVal = document.getElementById('regEmail').value.trim();
      const passVal = document.getElementById('regPassword').value.trim();

      if (!nameVal || !emailVal || !passVal) {
        alert('Please fill in all registration fields.');
        return;
      }

      const users = getRegisteredUsers();
      users.push({ name: nameVal, email: emailVal, password: passVal, createdAt: new Date().toISOString() });
      localStorage.setItem('bmagnet_registered_users', JSON.stringify(users));

      alert(`🎉 Registration Complete!\n\nWelcome ${nameVal}!\nYour account (${emailVal}) is now registered.\n\nYou can now log in with your email and password to access the dashboard.`);

      // Switch back to Sign In tab and fill registered credentials
      if (emailInputEl) emailInputEl.value = emailVal;
      if (passwordInputEl) passwordInputEl.value = passVal;

      if (tabSignInBtn) tabSignInBtn.click();
    });
  }
});
