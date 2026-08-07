document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('capitalSlider');
  const capitalDisplay = document.getElementById('calcCapitalDisplay');
  const botsDisplay = document.getElementById('calcBotsDisplay');
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

    // Bot multiplication formula based on user requirements:
    // $500 deposit = 1 Bot => $360 monthly profit ($12/day) => 3 Months = $1,080 profit
    // $1,000 deposit = 2 Bots => $960 monthly profit ($32/day) => 3 Months = $2,880 profit
    // Scales linearly for all deposits (1 bot per $500)
    
    const botCount = Math.max(1, Math.floor(capital / 500));
    
    let monthlyProfit = 360;
    if (botCount === 1) {
      monthlyProfit = 360;
    } else {
      monthlyProfit = botCount * 480; // 2 bots = $960, 3 bots = $1,440, etc.
    }

    const dailyProfit = Math.round(monthlyProfit / 30);
    const months = selectedYears * 12;
    const totalReturn = Math.round(monthlyProfit * months);
    const endValue = Math.round(capital + totalReturn);

    if (botsDisplay) {
      botsDisplay.textContent = `${botCount} ${botCount === 1 ? 'Bot' : 'Bots'}`;
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
