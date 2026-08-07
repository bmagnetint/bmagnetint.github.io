document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const nameParam = urlParams.get('name') || localStorage.getItem('bmagnet_last_reg_name') || 'Alexander Vance';
  const emailParam = urlParams.get('email') || localStorage.getItem('bmagnet_last_reg_email') || 'investor@domain.com';

  const regHeaderName = document.getElementById('regHeaderName');
  const regHeaderEmail = document.getElementById('regHeaderEmail');
  const regAvatar = document.getElementById('regAvatar');

  const cardRegName = document.getElementById('cardRegName');
  const cardRegEmail = document.getElementById('cardRegEmail');
  const tblRegName = document.getElementById('tblRegName');
  const tblRegEmail = document.getElementById('tblRegEmail');
  const regHeroTitle = document.getElementById('regHeroTitle');

  // Compute initials for avatar
  const initials = nameParam.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'IV';

  if (regHeaderName) regHeaderName.textContent = nameParam;
  if (regHeaderEmail) regHeaderEmail.textContent = emailParam;
  if (regAvatar) regAvatar.textContent = initials;

  if (cardRegName) cardRegName.textContent = nameParam;
  if (cardRegEmail) cardRegEmail.textContent = emailParam;
  if (tblRegName) tblRegName.textContent = nameParam;
  if (tblRegEmail) tblRegEmail.textContent = emailParam;

  if (regHeroTitle) regHeroTitle.textContent = `Welcome to B Magnet International, ${nameParam.split(' ')[0]}! 🎉`;
});
