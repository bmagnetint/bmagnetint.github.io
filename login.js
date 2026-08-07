const loginForm = document.getElementById('loginForm');
const googleSignInBtn = document.getElementById('googleSignInBtn');
const appleSignInBtn = document.getElementById('appleSignInBtn');

if (googleSignInBtn) {
  googleSignInBtn.addEventListener('click', () => {
    googleSignInBtn.style.opacity = '0.7';
    googleSignInBtn.style.transform = 'scale(0.92)';

    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 400);
  });
}

if (appleSignInBtn) {
  appleSignInBtn.addEventListener('click', () => {
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

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    const submitBtn = loginForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.textContent = 'Signing in...';
    }

    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 500);
  });
}
