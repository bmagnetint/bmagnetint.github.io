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

  // Detailed Modal Elements
  const planDetailModal = document.getElementById('planDetailModal');
  const closePlanDetailBtn = document.getElementById('closePlanDetailBtn');
  const detailPlanTitle = document.getElementById('detailPlanTitle');
  const detailProfitRate = document.getElementById('detailProfitRate');
  const detailCapital = document.getElementById('detailCapital');
  const detailRent = document.getElementById('detailRent');
  const detailHorizon = document.getElementById('detailHorizon');
  const detailOutlay = document.getElementById('detailOutlay');
  const detailDaily = document.getElementById('detailDaily');
  const detailTotalReturn = document.getElementById('detailTotalReturn');
  const deployPlanBtn = document.getElementById('deployPlanBtn');
  const downloadPdfBtn = document.getElementById('downloadPdfBtn');

  let selectedMonths = 3; // Default 3 Months (Min)

  function calculateYield() {
    if (!slider || !capitalDisplay || !returnDisplay || !valueDisplay) return;

    const capital = parseFloat(slider.value);
    capitalDisplay.textContent = `$${capital.toLocaleString()}`;

    // Bot allocation: 1 Bot per $500 deposit
    const botCount = Math.max(1, Math.floor(capital / 500));
    
    // Bot Rental: $100 / month per bot
    const monthlyRent = botCount * 100;
    const totalOutlay = capital + monthlyRent;

    let monthlyProfit = 360;
    if (botCount === 1) {
      monthlyProfit = 360;
    } else {
      monthlyProfit = botCount * 480;
    }

    const dailyProfit = Math.round(monthlyProfit / 30);
    const totalReturn = monthlyProfit * selectedMonths;
    const endValue = capital + totalReturn;

    if (botsDisplay) botsDisplay.textContent = `${botCount} ${botCount === 1 ? 'Bot' : 'Bots'}`;
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

  // Open Detailed Plan View Modal
  selectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tierName = btn.getAttribute('data-tier') || 'Starter Micro';
      let capitalVal = 500;
      let botRentVal = 100;
      let monthlyProfitVal = 360;
      let dailyProfitVal = 12;

      if (tierName.includes('1,500') || tierName.includes('Core')) {
        capitalVal = 1500;
        botRentVal = 300;
        monthlyProfitVal = 1440;
        dailyProfitVal = 48;
      } else if (tierName.includes('5,000') || tierName.includes('Max')) {
        capitalVal = 5000;
        botRentVal = 1000;
        monthlyProfitVal = 4800;
        dailyProfitVal = 160;
      }

      const totalOutlayVal = capitalVal + botRentVal;
      const totalReturnVal = monthlyProfitVal * selectedMonths;

      if (detailPlanTitle) detailPlanTitle.textContent = `🎯 Detailed Plan View: ${tierName}`;
      if (detailProfitRate) detailProfitRate.innerHTML = `$${monthlyProfitVal.toLocaleString()} <span style="font-size: 1rem; color: var(--text-muted);">/ month</span>`;
      if (detailCapital) detailCapital.textContent = `$${capitalVal.toLocaleString()}`;
      if (detailRent) detailRent.textContent = `$${botRentVal.toLocaleString()} / month`;
      if (detailHorizon) detailHorizon.textContent = `${selectedMonths} Months`;
      if (detailOutlay) detailOutlay.textContent = `$${totalOutlayVal.toLocaleString()} ($${capitalVal.toLocaleString()} Deposit + $${botRentVal.toLocaleString()} 1st Mo Rent)`;
      if (detailDaily) detailDaily.textContent = `$${dailyProfitVal.toLocaleString()} / day`;
      if (detailTotalReturn) detailTotalReturn.textContent = `+$${totalReturnVal.toLocaleString()}`;

      if (planDetailModal) planDetailModal.classList.add('active');
    });
  });

  if (closePlanDetailBtn && planDetailModal) {
    closePlanDetailBtn.addEventListener('click', () => {
      planDetailModal.classList.remove('active');
    });
  }

  if (planDetailModal) {
    planDetailModal.addEventListener('click', (e) => {
      if (e.target === planDetailModal) {
        planDetailModal.classList.remove('active');
      }
    });
  }

  if (deployPlanBtn) {
    deployPlanBtn.addEventListener('click', () => {
      alert('🔒 Deployment Initiated!\n\nRedirecting to GTC FX Multi-Sig Payment Vault to deploy your AI Trading Bot instance...');
      planDetailModal.classList.remove('active');
    });
  }

  if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener('click', () => {
      alert('📄 Prospectus Downloaded!\n\nB-Magnet-Institutional-AI-Bot-Strategy-Prospectus.pdf has been saved to your downloads.');
    });
  }

  calculateYield();
});
