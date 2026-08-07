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

    // Enforce min $1000 deposit
    let capital = parseFloat(slider.value);
    if (capital < 1000) capital = 1000;

    capitalDisplay.textContent = `$${capital.toLocaleString()}`;

    // Bot allocation: 1 Bot per $500 deposit (e.g. $1000 = 2 Bots)
    const botCount = Math.max(2, Math.floor(capital / 500));
    
    // Bot Rental: $100 / month per bot ($200/mo for 2 bots)
    const monthlyRent = botCount * 100;
    const totalOutlay = capital + monthlyRent;

    // Monthly Profit per Bot: $480/bot for 2+ bots ($960/mo for $1000 deposit)
    const monthlyProfit = botCount * 480;
    const dailyProfit = Math.round(monthlyProfit / 30);
    const totalReturn = monthlyProfit * selectedMonths;
    const endValue = capital + totalReturn;

    if (botsDisplay) botsDisplay.textContent = `${botCount} Bots`;
    if (rentDisplay) rentDisplay.textContent = `$${monthlyRent.toLocaleString()} / mo`;
    if (outlayDisplay) outlayDisplay.textContent = `$${totalOutlay.toLocaleString()}`;
    if (dailyDisplay) dailyDisplay.textContent = `$${dailyProfit.toLocaleString()} / day`;
    if (monthlyDisplay) monthlyDisplay.textContent = `$${monthlyProfit.toLocaleString()} / mo`;
    returnDisplay.textContent = `+$${totalReturn.toLocaleString()}`;
    valueDisplay.textContent = `$${endValue.toLocaleString()}`;
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

      if (tierName.includes('1,500') || tierName.includes('Core') && !tierName.includes('1,000')) {
        planParam = 'core';
        capitalVal = Math.max(1500, capitalVal);
      } else if (tierName.includes('5,000') || tierName.includes('Max')) {
        planParam = 'max';
        capitalVal = Math.max(5000, capitalVal);
      } else {
        planParam = 'starter';
        capitalVal = Math.max(1000, capitalVal);
      }

      window.location.href = `plan-detail.html?plan=${planParam}&capital=${capitalVal}&months=${selectedMonths}`;
    });
  });

  calculateYield();
});
