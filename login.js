const loginForm = document.getElementById('loginForm');
const googleSignInBtn = document.getElementById('googleSignInBtn');
const appleSignInBtn = document.getElementById('appleSignInBtn');

const VALID_EMAIL = "test@bmgnetint.com";
const VALID_PASS = "bmagnet@123";

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
    const passwordInput = document.getElementById('password').value.trim();

    if (emailInput.toLowerCase() === VALID_EMAIL.toLowerCase() && passwordInput === VALID_PASS) {
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
