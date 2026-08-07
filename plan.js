document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('capitalSlider');
  const capitalDisplay = document.getElementById('calcCapitalDisplay');
  const botsDisplay = document.getElementById('calcBotsDisplay');
  const rentDisplay = document.getElementById('calcRentDisplay');
  const outlayDisplay = document.getElementById('calcOutlayDisplay');
  const dailyDisplay = document.getElementById('calcDailyDisplay');
  const monthlyDisplay = document.getElementById('calcMonthlyDisplay');
  const returnDisplay = document.getElementById('calcReturnDisplay');
  const valueDisplay = document.getElementById('calcValueDisplay');
  const horizonBtns = document.querySelectorAll('.horizon-btn');
  const selectBtns = document.querySelectorAll('.select-tier-btn');

  let selectedMonths = 3; // Default 3 Months (Min)

  function calculateYield() {
    if (!slider || !capitalDisplay || !returnDisplay || !valueDisplay) return;

    let capital = parseFloat(slider.value);
    if (capital < 1000) capital = 1000;

    capitalDisplay.textContent = `$${capital.toLocaleString()}`;

    // 1 Bot per $1,000 deposit
    const botCount = Math.max(1, Math.floor(capital / 1000));
    
    // $300 total bot rental fee for 3-Month Contract per bot
    const totalRent = botCount * 300;
    const totalOutlay = capital + totalRent;

    // Daily Profit Range per bot: $10 - $30 / day (Mon - Fri trading, Sat/Sun Off)
    const minDaily = botCount * 10;
    const maxDaily = botCount * 30;

    // Trading Days: ~22 days per month (Mon-Fri)
    const minMonthly = minDaily * 22;
    const maxMonthly = maxDaily * 22;

    const minReturn = minMonthly * selectedMonths;
    const maxReturn = maxMonthly * selectedMonths;

    const minEndValue = capital + minReturn;
    const maxEndValue = capital + maxReturn;

    if (botsDisplay) botsDisplay.textContent = `${botCount} ${botCount === 1 ? 'Bot' : 'Bots'}`;
    if (rentDisplay) rentDisplay.textContent = `$${totalRent.toLocaleString()} (3-Mo Contract)`;
    if (outlayDisplay) outlayDisplay.textContent = `$${totalOutlay.toLocaleString()}`;
    if (dailyDisplay) dailyDisplay.textContent = `$${minDaily.toLocaleString()} – $${maxDaily.toLocaleString()} / day`;
    if (monthlyDisplay) monthlyDisplay.textContent = `$${minMonthly.toLocaleString()} – $${maxMonthly.toLocaleString()} / mo`;
    returnDisplay.textContent = `+$${minReturn.toLocaleString()} – $${maxReturn.toLocaleString()}`;
    valueDisplay.textContent = `$${minEndValue.toLocaleString()} – $${maxEndValue.toLocaleString()}`;
  }

  if (slider) {
    slider.addEventListener('input', calculateYield);
  }

  horizonBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      horizonBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedMonths = parseInt(btn.getAttribute('data-months') || '3', 10);
      calculateYield();
    });
  });

  // Navigate to dedicated plan-detail.html page when a plan is selected
  selectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tierName = btn.getAttribute('data-tier') || 'Starter Core';
      let planParam = 'starter';
      let capitalVal = slider ? parseFloat(slider.value) : 1000;

      if (tierName.includes('3,000') || tierName.includes('Core Investor')) {
        planParam = 'core';
        capitalVal = 3000;
      } else if (tierName.includes('5,000') || tierName.includes('Max')) {
        planParam = 'max';
        capitalVal = 5000;
      } else {
        planParam = 'starter';
        capitalVal = 1000;
      }

      window.location.href = `plan-detail.html?plan=${planParam}&capital=${capitalVal}&months=${selectedMonths}`;
    });
  });

  calculateYield();
});
