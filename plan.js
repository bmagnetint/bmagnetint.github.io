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

    const capital = parseFloat(slider.value);
    capitalDisplay.textContent = `$${capital.toLocaleString()}`;

    // Bot allocation: 1 Bot per $500 deposit
    const botCount = Math.max(1, Math.floor(capital / 500));
    
    // Bot Rental: $100 / month per bot
    const monthlyRent = botCount * 100;

    // Total Initial Outlay required ($500 Capital Deposit + $100 1st Month Bot Rent = $600 per bot)
    const totalOutlay = capital + monthlyRent;

    // Monthly Profit per Bot:
    // 1 Bot ($500 Deposit + $100 Rent = $600 Total Outlay) => $360 / mo ($12/day)
    // 2 Bots ($1,000 Deposit + $200 Rent = $1,200 Total Outlay) => $960 / mo ($32/day)
    let monthlyProfit = 360;
    if (botCount === 1) {
      monthlyProfit = 360;
    } else {
      monthlyProfit = botCount * 480;
    }

    const dailyProfit = Math.round(monthlyProfit / 30);
    const totalReturn = monthlyProfit * selectedMonths;
    const endValue = capital + totalReturn;

    if (botsDisplay) {
      botsDisplay.textContent = `${botCount} ${botCount === 1 ? 'Bot' : 'Bots'}`;
    }
    if (rentDisplay) {
      rentDisplay.textContent = `$${monthlyRent.toLocaleString()} / mo`;
    }
    if (outlayDisplay) {
      outlayDisplay.textContent = `$${totalOutlay.toLocaleString()}`;
    }
    if (dailyDisplay) {
      dailyDisplay.textContent = `$${dailyProfit.toLocaleString()} / day`;
    }
    if (monthlyDisplay) {
      monthlyDisplay.textContent = `$${monthlyProfit.toLocaleString()} / mo`;
    }
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

  selectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tierName = btn.getAttribute('data-tier');
      alert(`🎯 Plan Selected: ${tierName}\n\nYour portfolio selection has been logged. Your senior advisory officer will contact you to finalize the capital allocation documentation.`);
    });
  });

  calculateYield();
});
