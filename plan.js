document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('capitalSlider');
  const capitalDisplay = document.getElementById('calcCapitalDisplay');
  const returnDisplay = document.getElementById('calcReturnDisplay');
  const valueDisplay = document.getElementById('calcValueDisplay');
  const horizonBtns = document.querySelectorAll('.horizon-btn');
  const selectBtns = document.querySelectorAll('.select-tier-btn');

  let selectedYears = 1;

  function calculateYield() {
    if (!slider || !capitalDisplay || !returnDisplay || !valueDisplay) return;

    const capital = parseFloat(slider.value);
    capitalDisplay.textContent = `$${capital.toLocaleString()}`;

    // Yield rate logic (13% annual compound rate)
    const annualRate = 0.13;
    const endValue = Math.round(capital * Math.pow(1 + annualRate, selectedYears));
    const profit = endValue - capital;

    returnDisplay.textContent = `+$${profit.toLocaleString()}`;
    valueDisplay.textContent = `$${endValue.toLocaleString()}`;
  }

  if (slider) {
    slider.addEventListener('input', calculateYield);
  }

  horizonBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      horizonBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedYears = parseInt(btn.getAttribute('data-years') || '1', 10);
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
