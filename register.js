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

  const regAvatar = document.getElementById('regAvatar');
  const sideAgePreview = document.getElementById('sideAgePreview');

  function getInitials(name) {
    if (!name) return 'AV';
    const parts = name.trim().split(' ').filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  }

  // Update Hero Welcome & Side Passport Card Initials
  function updateHeroAndPassport(name) {
    const cleanName = name.trim() ? name.trim() : 'Investor';
    if (regHeroTitle) {
      regHeroTitle.textContent = `Welcome to B Magnet International, ${cleanName}! 🎉`;
    }
    if (regAvatar) {
      regAvatar.textContent = getInitials(cleanName);
    }
  }

  // Initial Pre-fill
  if (kycFullNameInput) {
    kycFullNameInput.value = nameParam;
    updateHeroAndPassport(nameParam);

    kycFullNameInput.addEventListener('input', () => {
      updateHeroAndPassport(kycFullNameInput.value);
    });
  }

  if (kycEmailInput) kycEmailInput.value = emailParam;

  // -------------------------------------------------------------
  // CUSTOM POP-UP CALENDAR SELECTOR LOGIC
  // -------------------------------------------------------------
  const dobTriggerBtn = document.getElementById('dobTriggerBtn');
  const dobDisplayText = document.getElementById('dobDisplayText');
  const dobCalendarModal = document.getElementById('dobCalendarModal');
  const closeDobModalBtn = document.getElementById('closeDobModalBtn');
  const confirmDobBtn = document.getElementById('confirmDobBtn');

  const calYearSelect = document.getElementById('calYearSelect');
  const calMonthSelect = document.getElementById('calMonthSelect');
  const calDaysGrid = document.getElementById('calDaysGrid');
  const calSelectedPreview = document.getElementById('calSelectedPreview');

  const today = new Date();
  const maxYearAllowed = today.getFullYear() - 18; // 2008 for 2026

  let selectedYear = 1995;
  let selectedMonth = 5; // June (0-indexed)
  let selectedDay = 15;

  // Populate Year Dropdown (Restricted to 18+ years ago)
  if (calYearSelect) {
    calYearSelect.innerHTML = '';
    for (let y = maxYearAllowed; y >= 1940; y--) {
      const opt = document.createElement('option');
      opt.value = y;
      opt.textContent = `${y}`;
      if (y === selectedYear) opt.selected = true;
      calYearSelect.appendChild(opt);
    }
  }

  function renderDaysGrid() {
    if (!calDaysGrid) return;
    calDaysGrid.innerHTML = '';

    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    if (selectedDay > daysInMonth) selectedDay = daysInMonth;

    for (let d = 1; d <= daysInMonth; d++) {
      const dayBtn = document.createElement('button');
      dayBtn.type = 'button';
      dayBtn.textContent = d;
      dayBtn.style.padding = '8px 4px';
      dayBtn.style.borderRadius = '6px';
      dayBtn.style.border = '1px solid rgba(255,255,255,0.1)';
      dayBtn.style.cursor = 'pointer';
      dayBtn.style.fontWeight = '700';
      dayBtn.style.fontSize = '0.85rem';

      if (d === selectedDay) {
        dayBtn.style.background = 'var(--accent-teal)';
        dayBtn.style.color = '#060b14';
        dayBtn.style.borderColor = 'var(--accent-teal)';
      } else {
        dayBtn.style.background = '#1e293b';
        dayBtn.style.color = '#ffffff';
      }

      dayBtn.addEventListener('click', () => {
        selectedDay = d;
        renderDaysGrid();
        updatePreview();
      });

      calDaysGrid.appendChild(dayBtn);
    }
  }

  function calculateAge(y, m, d) {
    let age = today.getFullYear() - y;
    const monthDiff = today.getMonth() - m;
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < d)) {
      age--;
    }
    return age;
  }

  function updatePreview() {
    if (!calSelectedPreview) return;

    const formattedMonth = String(selectedMonth + 1).padStart(2, '0');
    const formattedDay = String(selectedDay).padStart(2, '0');
    const isoDate = `${selectedYear}-${formattedMonth}-${formattedDay}`;

    const age = calculateAge(selectedYear, selectedMonth, selectedDay);
    const isValid18 = age >= 18;

    calSelectedPreview.innerHTML = `${isoDate} (${age} Yrs Old) ${isValid18 ? '<span style="color:#34d399; font-weight:800;">✓ Verified 18+</span>' : '<span style="color:#ef4444; font-weight:800;">❌ Under 18</span>'}`;
  }

  if (calYearSelect) {
    calYearSelect.addEventListener('change', () => {
      selectedYear = parseInt(calYearSelect.value, 10);
      renderDaysGrid();
      updatePreview();
    });
  }

  if (calMonthSelect) {
    calMonthSelect.value = selectedMonth;
    calMonthSelect.addEventListener('change', () => {
      selectedMonth = parseInt(calMonthSelect.value, 10);
      renderDaysGrid();
      updatePreview();
    });
  }

  // Open Pop-Up Calendar Modal
  if (dobTriggerBtn && dobCalendarModal) {
    dobTriggerBtn.addEventListener('click', () => {
      renderDaysGrid();
      updatePreview();
      dobCalendarModal.style.display = 'flex';
    });
  }

  // Close Modal
  if (closeDobModalBtn && dobCalendarModal) {
    closeDobModalBtn.addEventListener('click', () => {
      dobCalendarModal.style.display = 'none';
    });
  }

  // Confirm Date Selection
  if (confirmDobBtn && dobCalendarModal) {
    confirmDobBtn.addEventListener('click', () => {
      const age = calculateAge(selectedYear, selectedMonth, selectedDay);
      if (age < 18) {
        alert('⛔ Age Restriction:\n\nYou must be at least 18 years old to confirm date of birth.');
        return;
      }

      const formattedMonth = String(selectedMonth + 1).padStart(2, '0');
      const formattedDay = String(selectedDay).padStart(2, '0');
      const isoDate = `${selectedYear}-${formattedMonth}-${formattedDay}`;

      if (kycDobInput) kycDobInput.value = isoDate;
      if (dobDisplayText) dobDisplayText.textContent = `📅 ${isoDate} (${age} Yrs - 18+ Verified)`;
      if (sideAgePreview) sideAgePreview.textContent = `${age} Years Old (Verified 18+)`;

      dobCalendarModal.style.display = 'none';
    });
  }

  // -------------------------------------------------------------
  // FORM SUBMISSION & 18+ AGE ENFORCEMENT
  // -------------------------------------------------------------
  if (fullKycForm) {
    fullKycForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('kycFullName').value.trim();
      const email = document.getElementById('kycEmail').value.trim();
      const phone = document.getElementById('kycPhone').value.trim();
      const whatsapp = document.getElementById('kycWhatsApp').value.trim();
      const address = document.getElementById('kycAddress').value.trim();
      const region = document.getElementById('kycRegion').value;
      const dob = kycDobInput ? kycDobInput.value : '';
      const experience = document.getElementById('kycExperience').value;
      const income = document.getElementById('kycIncome').value;

      if (!dob) {
        alert('Please select your Date of Birth using the calendar button.');
        if (dobTriggerBtn) dobTriggerBtn.click();
        return;
      }

      const birthDate = new Date(dob);
      const calculatedAge = calculateAge(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());

      if (calculatedAge < 18) {
        alert(`⛔ Age Requirement Restriction:\n\nYou must be at least 18 years old to register an institutional trading account.`);
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
