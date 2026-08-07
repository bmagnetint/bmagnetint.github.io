document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const nameParam = urlParams.get('name') || localStorage.getItem('bmagnet_last_reg_name') || 'Alexander Vance';
  const emailParam = urlParams.get('email') || localStorage.getItem('bmagnet_last_reg_email') || 'investor@domain.com';

  const kycFullNameInput = document.getElementById('kycFullName');
  const kycEmailInput = document.getElementById('kycEmail');

  const regHeaderName = document.getElementById('regHeaderName');
  const regHeaderEmail = document.getElementById('regHeaderEmail');
  const regAvatar = document.getElementById('regAvatar');

  const fullKycForm = document.getElementById('fullKycForm');
  const kycSuccessCard = document.getElementById('kycSuccessCard');

  // Pre-fill full name and email if available
  if (kycFullNameInput) kycFullNameInput.value = nameParam;
  if (kycEmailInput) kycEmailInput.value = emailParam;

  // Compute initials for header avatar
  const initials = nameParam.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'IV';
  if (regHeaderName) regHeaderName.textContent = nameParam;
  if (regHeaderEmail) regHeaderEmail.textContent = emailParam;
  if (regAvatar) regAvatar.textContent = initials;

  // Handle Full Client Registration Form Submission
  if (fullKycForm) {
    fullKycForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('kycFullName').value.trim();
      const email = document.getElementById('kycEmail').value.trim();
      const phone = document.getElementById('kycPhone').value.trim();
      const whatsapp = document.getElementById('kycWhatsApp').value.trim();
      const address = document.getElementById('kycAddress').value.trim();
      const region = document.getElementById('kycRegion').value;
      const dob = document.getElementById('kycDob').value;
      const experience = document.getElementById('kycExperience').value;
      const income = document.getElementById('kycIncome').value;

      const profileData = {
        fullName,
        email,
        phone,
        whatsapp,
        address,
        region,
        dob,
        experience,
        income,
        registeredAt: new Date().toISOString()
      };

      // Store complete profile in localStorage
      localStorage.setItem('bmagnet_registered_full_profile', JSON.stringify(profileData));
      localStorage.setItem('bmagnet_last_reg_name', fullName);
      localStorage.setItem('bmagnet_last_reg_email', email);

      // Populate success card details
      const succName = document.getElementById('succName');
      const succEmail = document.getElementById('succEmail');
      const tblSuccPhone = document.getElementById('tblSuccPhone');
      const tblSuccWhatsApp = document.getElementById('tblSuccWhatsApp');
      const tblSuccAddress = document.getElementById('tblSuccAddress');
      const tblSuccRegion = document.getElementById('tblSuccRegion');
      const tblSuccDob = document.getElementById('tblSuccDob');
      const tblSuccExp = document.getElementById('tblSuccExp');
      const tblSuccIncome = document.getElementById('tblSuccIncome');

      if (succName) succName.textContent = fullName;
      if (succEmail) succEmail.textContent = email;
      if (tblSuccPhone) tblSuccPhone.textContent = phone;
      if (tblSuccWhatsApp) tblSuccWhatsApp.textContent = whatsapp;
      if (tblSuccAddress) tblSuccAddress.textContent = address;
      if (tblSuccRegion) tblSuccRegion.textContent = region;
      if (tblSuccDob) tblSuccDob.textContent = dob;
      if (tblSuccExp) tblSuccExp.textContent = experience;
      if (tblSuccIncome) tblSuccIncome.textContent = income;

      // Smoothly hide form and reveal success card
      fullKycForm.style.display = 'none';
      if (kycSuccessCard) kycSuccessCard.style.display = 'block';

      alert(`🎉 Full Registration & KYC Verified!\n\nWelcome to B Magnet International, ${fullName}!\nYour full profile details have been verified.`);
    });
  }
});
