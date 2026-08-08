/* ==========================================================================
   B MAGNET INTERNATIONAL — KYC & Investor Registration Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const fullKycForm = document.getElementById('fullKycForm');
  const dobTriggerBtn = document.getElementById('openDobCalendarBtn');
  const dobCalendarModal = document.getElementById('dobCalendarModal');
  const closeDobModalBtn = document.getElementById('closeCalendarModalBtn');
  const confirmDobBtn = document.getElementById('confirmDobBtn');
  const kycDobInput = document.getElementById('kycDobInput');

  const calYearSelect = document.getElementById('calYearSelect');
  const calMonthSelect = document.getElementById('calMonthSelect');
  const calDaysGrid = document.getElementById('calDaysGrid');
  const calSelectedPreview = document.getElementById('calSelectedPreview');

  const welcomeInvestorName = document.getElementById('welcomeInvestorName');
  const passportName = document.getElementById('passportName');
  const passportEmail = document.getElementById('passportEmail');
  const passportAvatar = document.getElementById('passportAvatar');
  const passportRegion = document.getElementById('passportRegion');
  const passportDob = document.getElementById('passportDob');
  const passportExp = document.getElementById('passportExp');

  // Load Google / Pre-Filled Investor details
  const urlParams = new URLSearchParams(window.location.search);
  const paramName = urlParams.get('name');
  const paramEmail = urlParams.get('email');

  const storedName = paramName || localStorage.getItem('bmagnet_last_reg_name') || 'Alexander Vance';
  const storedEmail = paramEmail || localStorage.getItem('bmagnet_last_reg_email') || 'alexander.vance@wealth.com';

  const fullNameInput = document.getElementById('kycFullName');
  const emailInput = document.getElementById('kycEmail');

  if (fullNameInput) fullNameInput.value = storedName;
  if (emailInput) emailInput.value = storedEmail;

  if (welcomeInvestorName) welcomeInvestorName.textContent = storedName;
  if (passportName) passportName.textContent = storedName;
  if (passportEmail) passportEmail.textContent = storedEmail;

  if (passportAvatar) {
    const initials = storedName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    passportAvatar.textContent = initials || 'AV';
  }

  // Live input sync to passport card
  if (fullNameInput) {
    fullNameInput.addEventListener('input', () => {
      const val = fullNameInput.value.trim() || 'Investor';
      if (welcomeInvestorName) welcomeInvestorName.textContent = val;
      if (passportName) passportName.textContent = val;
      if (passportAvatar) {
        const inits = val.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        passportAvatar.textContent = inits || 'AV';
      }
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      if (passportEmail) passportEmail.textContent = emailInput.value.trim();
    });
  }

  const regionSelect = document.getElementById('kycRegion');
  if (regionSelect) {
    regionSelect.addEventListener('change', () => {
      if (passportRegion) passportRegion.textContent = regionSelect.value;
    });
  }

  const expSelect = document.getElementById('kycExperience');
  if (expSelect) {
    expSelect.addEventListener('change', () => {
      if (passportExp) passportExp.textContent = expSelect.value;
    });
  }

  // -------------------------------------------------------------
  // POP-UP CALENDAR SELECTION
  // -------------------------------------------------------------
  const today = new Date();
  const currentYear = today.getFullYear();

  let selectedYear = 1995;
  let selectedMonth = 4; // May (0-indexed)
  let selectedDay = 15;

  // Populate Year Dropdown
  if (calYearSelect) {
    calYearSelect.innerHTML = '';
    for (let y = currentYear; y >= 1940; y--) {
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
      dayBtn.style.border = '1px solid rgba(0, 168, 150, 0.2)';
      dayBtn.style.cursor = 'pointer';
      dayBtn.style.fontWeight = '700';
      dayBtn.style.fontSize = '0.85rem';

      if (d === selectedDay) {
        dayBtn.style.background = 'var(--brand-teal)';
        dayBtn.style.color = '#ffffff';
        dayBtn.style.borderColor = 'var(--brand-teal)';
      } else {
        dayBtn.style.background = '#f1f5f9';
        dayBtn.style.color = '#0d1f42';
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
    calSelectedPreview.innerHTML = `${isoDate} (${age} Years Old)`;
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

  if (kycDobInput && dobCalendarModal) {
    kycDobInput.addEventListener('click', () => {
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
      const formattedMonth = String(selectedMonth + 1).padStart(2, '0');
      const formattedDay = String(selectedDay).padStart(2, '0');
      const isoDate = `${selectedYear}-${formattedMonth}-${formattedDay}`;
      const age = calculateAge(selectedYear, selectedMonth, selectedDay);

      if (kycDobInput) kycDobInput.value = isoDate;
      if (passportDob) passportDob.textContent = `${isoDate} (${age} yrs)`;

      dobCalendarModal.style.display = 'none';
    });
  }

  // Form Submission
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

      alert(`🎉 Investor Profile Successfully Saved!\n\nWelcome to B Magnet International, ${fullName}!\nProceeding to select your AI Forex Bot capital allocation plan.`);

      window.location.href = 'plan.html';
    });
  }
});
