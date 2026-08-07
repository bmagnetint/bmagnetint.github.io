document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const nameParam = urlParams.get('name') || localStorage.getItem('bmagnet_last_reg_name') || 'Alexander Vance';
  const emailParam = urlParams.get('email') || localStorage.getItem('bmagnet_last_reg_email') || 'investor@domain.com';

  const kycFullNameInput = document.getElementById('kycFullName');
  const kycEmailInput = document.getElementById('kycEmail');
  const kycDobInput = document.getElementById('kycDob');

  const fullKycForm = document.getElementById('fullKycForm');
  const kycSuccessCard = document.getElementById('kycSuccessCard');
  const regHeroTitle = document.getElementById('regHeroTitle');

  // Set hero title: Welcome with investor name
  if (regHeroTitle) {
    const firstName = nameParam.trim() ? nameParam.trim() : 'Investor';
    regHeroTitle.textContent = `Welcome, ${firstName}! 🎉`;
  }

  // Pre-fill full name and email if available
  if (kycFullNameInput) kycFullNameInput.value = nameParam;
  if (kycEmailInput) kycEmailInput.value = emailParam;

  // Set 18+ Date of Birth Maximum Allowed Date (18 Years ago from today)
  const today = new Date();
  const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  const maxDobStr = eighteenYearsAgo.toISOString().split('T')[0];
  if (kycDobInput) {
    kycDobInput.setAttribute('max', maxDobStr);
  }

  // Handle Full Client Registration Form Submission with 18+ Age Enforcement
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

      // 18+ Age Validation Check
      if (!dob) {
        alert('Please select a valid Date of Birth.');
        return;
      }

      const birthDate = new Date(dob);
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }

      if (calculatedAge < 18) {
        alert(`⛔ Age Requirement Restriction:\n\nYou must be at least 18 years old to register an institutional trading account.\n\nMinimum required birth date: on or before ${maxDobStr}.`);
        return;
      }

      const profileData = {
        fullName,
        email,
        phone,
        whatsapp,
        address,
        region,
        dob,
        age: calculatedAge,
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
      if (tblSuccDob) tblSuccDob.textContent = `${dob} (${calculatedAge} Years Old - Verified 18+)`;
      if (tblSuccExp) tblSuccExp.textContent = experience;
      if (tblSuccIncome) tblSuccIncome.textContent = income;

      // Smoothly hide form and reveal success card
      fullKycForm.style.display = 'none';
      if (kycSuccessCard) kycSuccessCard.style.display = 'block';

      alert(`🎉 Full Registration & KYC Verified!\n\nWelcome to B Magnet International, ${fullName}!\nYour profile and age (${calculatedAge} Years Old) have been verified.`);
    });
  }
});
