/**
 * B-Magnet PRO Home Page App Script (Port 8080)
 */

function toggleTheme8080() {
  const body = document.body;
  const icon = document.getElementById('themeToggleIcon');
  if (body.classList.contains('theme-light')) {
    body.classList.remove('theme-light');
    if (icon) icon.textContent = '🌙';
  } else {
    body.classList.add('theme-light');
    if (icon) icon.textContent = '☀️';
  }
}

function openLoginModal8080() {
  const modal = document.getElementById('loginModal8080');
  if (modal) modal.classList.add('active');
}

function closeLoginModal8080() {
  const modal = document.getElementById('loginModal8080');
  if (modal) modal.classList.remove('active');
}

function submitLogin8080() {
  const input = document.getElementById('loginInput8080');
  const account = input ? input.value : 'trader@bmagnet.pro';
  alert('⚡ Access Passcode Sent to: ' + account + '\n\nWelcome to B-Magnet PRO Financial Platform (Port 8080)!');
  closeLoginModal8080();
}
