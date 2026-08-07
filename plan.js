document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('capitalSlider');
  const capitalDisplay = document.getElementById('calcCapitalDisplay');
  const dailyDisplay = document.getElementById('calcDailyDisplay');
  const monthlyDisplay = document.getElementById('calcMonthlyDisplay');
  const returnDisplay = document.getElementById('calcReturnDisplay');
  const valueDisplay = document.getElementById('calcValueDisplay');
  const horizonBtns = document.querySelectorAll('.horizon-btn');
  const selectBtns = document.querySelectorAll('.select-tier-btn');

  let selectedYears = 0.25; // Default 3 Months

  function calculateYield() {
    if (!slider || !capitalDisplay || !returnDisplay || !valueDisplay) return;

    const capital = parseFloat(slider.value);
    capitalDisplay.textContent = `$${capital.toLocaleString()}`;

    // Formula based on user requirements:
    // $500 Deposit => Daily: $10 - $20/day (Avg $15/day) => $450/month
    // $1,000 Deposit => Daily: $15 - $25/day (Avg $20/day) => $600/month
    
    let dailyMin = Math.round(10 + ((capital - 500) / 500) * 5);
    let dailyMax = Math.round(20 + ((capital - 500) / 500) * 5);

    if (capital < 500) {
      dailyMin = 10;
      dailyMax = 20;
    }

    const dailyAvg = (dailyMin + dailyMax) / 2;
    const monthlyProfit = Math.round(dailyAvg * 30);

    // Days according to selected horizon:
    // 0.25 (3 Months) => 90 days
    // 0.5 (6 Months) => 180 days
    // 1.0 (1 Year) => 365 days
    const totalDays = Math.round(selectedYears * 365);
    const totalReturn = Math.round(dailyAvg * totalDays);
    const endValue = capital + totalReturn;

    if (dailyDisplay) {
      dailyDisplay.textContent = `$${dailyMin} - $${dailyMax} / day`;
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
      selectedYears = parseFloat(btn.getAttribute('data-years') || '0.25');
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
