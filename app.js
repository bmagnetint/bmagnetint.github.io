/* ==========================================================================
   B MAGNET INTERNATIONAL & GTC FX — Main Portal Logic & Interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Tab Switching (Sign In vs Register)
  const tabSignInBtn = document.getElementById('tabSignInBtn');
  const tabRegisterBtn = document.getElementById('tabRegisterBtn');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (tabSignInBtn && tabRegisterBtn && loginForm && registerForm) {
    tabSignInBtn.addEventListener('click', () => {
      tabSignInBtn.classList.add('active');
      tabRegisterBtn.classList.remove('active');
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
    });

    tabRegisterBtn.addEventListener('click', () => {
      tabRegisterBtn.classList.add('active');
      tabSignInBtn.classList.remove('active');
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
    });
  }

  // 2. Password Visibility Toggle
  const togglePasswordBtn = document.getElementById('togglePasswordBtn');
  const passwordInput = document.getElementById('password');

  if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener('click', () => {
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
      togglePasswordBtn.style.color = isPassword ? 'var(--gtc-teal)' : '#64748b';
    });
  }

  // 3. Login Authentication Logic
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailVal = document.getElementById('email').value.trim();
      const passVal = document.getElementById('password').value.trim();
      const submitBtn = loginForm.querySelector('button[type="submit"]');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Authenticating GTC FX Vault...';
      }

      setTimeout(() => {
        // Successful login
        localStorage.setItem('bmagnet_auth', 'true');
        localStorage.setItem('bmagnet_email', emailVal || 'test@bmagnetint.com');
        window.location.href = 'dashboard.html';
      }, 700);
    });
  }

  // 4. Register Quick Submission
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const regName = document.getElementById('regFullName').value.trim();
      const regEmail = document.getElementById('regEmail').value.trim();

      localStorage.setItem('bmagnet_kyc_name', regName || 'Alexander Vance');
      localStorage.setItem('bmagnet_kyc_email', regEmail || 'alexander.vance@wealth.com');
      window.location.href = 'register.html';
    });
  }

  // 5. Fast Passkey Access
  const passkeyBtn = document.getElementById('passkeySignInBtn');
  if (passkeyBtn) {
    passkeyBtn.addEventListener('click', () => {
      passkeyBtn.innerHTML = '<span>Scanning Face ID / Touch ID...</span>';
      setTimeout(() => {
        passkeyBtn.innerHTML = '<span>✅ Biometric Authorized!</span>';
        setTimeout(() => {
          localStorage.setItem('bmagnet_auth', 'true');
          window.location.href = 'dashboard.html';
        }, 500);
      }, 900);
    });
  }

  // 6. Social Sign-In (Google / Apple)
  const googleBtn = document.getElementById('googleSignInBtn');
  if (googleBtn) {
    googleBtn.addEventListener('click', () => {
      localStorage.setItem('bmagnet_auth', 'true');
      localStorage.setItem('bmagnet_email', 'investor@gmail.com');
      window.location.href = 'dashboard.html';
    });
  }

  const appleBtn = document.getElementById('appleSignInBtn');
  if (appleBtn) {
    appleBtn.addEventListener('click', () => {
      localStorage.setItem('bmagnet_auth', 'true');
      localStorage.setItem('bmagnet_email', 'investor@icloud.com');
      window.location.href = 'dashboard.html';
    });
  }
});
