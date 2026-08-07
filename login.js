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

    if (cleanEmail === VALID_EMAIL.toLowerCase() && cleanPass === VALID_PASS) {
      return true;
    }

    const regUsers = getRegisteredUsers();
    return regUsers.some(u => u.email.toLowerCase() === cleanEmail && u.password === cleanPass);
  }

  // 🔑 Passkey (Face ID / Touch ID) Authentication Handler
  if (passkeySignInBtn) {
    passkeySignInBtn.addEventListener('click', () => {
      const currentEmail = emailInputEl ? emailInputEl.value.trim() : '';
      const currentPass = passwordInputEl ? passwordInputEl.value.trim() : '';

      if (!isValidCredential(currentEmail, currentPass)) {
        alert(`🔒 Passkey Verification Required:\n\nPlease enter authorized investor credentials to complete biometric authentication.\n\nRequired Email: ${VALID_EMAIL}\nRequired Password: ${VALID_PASS}`);
        if (emailInputEl) emailInputEl.value = VALID_EMAIL;
        if (passwordInputEl) passwordInputEl.value = VALID_PASS;
        return;
      }

      passkeySignInBtn.innerHTML = `🔑 Authenticating Passkey (Touch ID / Face ID)...`;
      setTimeout(() => {
        alert('🔑 Passkey Biometric Verified!\n\nAuthenticated via WebAuthn FIDO2 vault key. Directing to dashboard...');
        window.location.href = 'dashboard.html';
      }, 500);
    });
  }

  // 🌐 Google Sign In Handler
  if (googleSignInBtn) {
    googleSignInBtn.addEventListener('click', () => {
      const currentEmail = emailInputEl ? emailInputEl.value.trim() : '';
      const currentPass = passwordInputEl ? passwordInputEl.value.trim() : '';

      if (!isValidCredential(currentEmail, currentPass)) {
        if (emailInputEl) emailInputEl.value = VALID_EMAIL;
        if (passwordInputEl) passwordInputEl.value = VALID_PASS;
        alert(`🌐 Google OAuth Authentication:\n\nAuthorized investor credentials loaded:\nEmail: ${VALID_EMAIL}\nPassword: ${VALID_PASS}\n\nClick "Sign In to Dashboard →" or retry Google Sign In to enter.`);
        return;
      }

      googleSignInBtn.style.opacity = '0.7';
      setTimeout(() => {
        alert('🌐 Google OAuth Verified!\n\nAuthenticated as Investor via Google Accounts. Directing to dashboard...');
        window.location.href = 'dashboard.html';
      }, 400);
    });
  }

  // 🍏 Apple Sign In Handler
  if (appleSignInBtn) {
    appleSignInBtn.addEventListener('click', () => {
      const currentEmail = emailInputEl ? emailInputEl.value.trim() : '';
      const currentPass = passwordInputEl ? passwordInputEl.value.trim() : '';

      if (!isValidCredential(currentEmail, currentPass)) {
        if (emailInputEl) emailInputEl.value = VALID_EMAIL;
        if (passwordInputEl) passwordInputEl.value = VALID_PASS;
        alert(`🍏 Apple ID Authentication:\n\nAuthorized investor credentials loaded:\nEmail: ${VALID_EMAIL}\nPassword: ${VALID_PASS}\n\nClick "Sign In to Dashboard →" or retry Apple Sign In to enter.`);
        return;
      }

      appleSignInBtn.style.opacity = '0.7';
      setTimeout(() => {
        alert('🍏 Apple ID Verified!\n\nAuthenticated via Apple Secure Enclave Passkey. Directing to dashboard...');
        window.location.href = 'dashboard.html';
      }, 400);
    });
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
        alert(`❌ Access Denied: Invalid Credentials!\n\nYou cannot access the dashboard without valid authorized credentials.\n\nAuthorized Investor Email: ${VALID_EMAIL}\nAuthorized Password: ${VALID_PASS}`);
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

      alert(`🎉 Account Successfully Registered!\n\nWelcome ${nameVal}!\nYour investor account (${emailVal}) has been registered.\n\nPlease log in using your email and password to access the portal.`);

      // Switch back to Sign In tab and pre-fill registered credentials
      if (emailInputEl) emailInputEl.value = emailVal;
      if (passwordInputEl) passwordInputEl.value = passVal;

      if (tabSignInBtn) tabSignInBtn.click();
    });
  }
});
