document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const planType = urlParams.get('plan') || 'starter';
  const capitalParam = parseFloat(urlParams.get('capital') || '500');
  const monthsParam = parseInt(urlParams.get('months') || '3', 10);

  const detailTitle = document.getElementById('detailTitle');
  const detailMonthlyHero = document.getElementById('detailMonthlyHero');
  const detailDailyHero = document.getElementById('detailDailyHero');
  const detailOutlayHero = document.getElementById('detailOutlayHero');
  const tblTierName = document.getElementById('tblTierName');
  const tblCapital = document.getElementById('tblCapital');
  const tblRent = document.getElementById('tblRent');
  const tblCommitment = document.getElementById('tblCommitment');
  const tblOutlay = document.getElementById('tblOutlay');
  const tblDaily = document.getElementById('tblDaily');
  const tblReturn = document.getElementById('tblReturn');
  const detailProceedBtn = document.getElementById('detailProceedBtn');
  const pdfDownloadBtn = document.getElementById('pdfDownloadBtn');

  // Calculation parameters based on plan selection or custom parameters
  let titleStr = "Starter Micro AI Bot Detailed Plan";
  let capital = capitalParam;
  let botCount = Math.max(1, Math.floor(capital / 500));
  let monthlyRent = botCount * 100;
  let monthlyProfit = 360;

  if (planType === 'core' || capitalParam >= 1500 && capitalParam < 5000) {
    titleStr = "Core Investor AI Bot Detailed Plan";
    capital = capitalParam >= 1500 ? capitalParam : 1500;
    botCount = Math.max(2, Math.floor(capital / 500));
    monthlyRent = botCount * 100;
    monthlyProfit = botCount * 480;
  } else if (planType === 'max' || capitalParam >= 5000) {
    titleStr = "Max Yield Arbitrage AI Bot Detailed Plan";
    capital = capitalParam >= 5000 ? capitalParam : 5000;
    botCount = Math.max(10, Math.floor(capital / 500));
    monthlyRent = botCount * 100;
    monthlyProfit = botCount * 480;
  } else {
    // Starter
    titleStr = "Starter Micro AI Bot Detailed Plan";
    capital = capitalParam >= 500 ? capitalParam : 500;
    botCount = Math.max(1, Math.floor(capital / 500));
    monthlyRent = botCount * 100;
    monthlyProfit = botCount === 1 ? 360 : botCount * 480;
  }

  const dailyProfit = Math.round(monthlyProfit / 30);
  const totalOutlay = capital + monthlyRent;
  const totalReturn = monthlyProfit * monthsParam;

  if (detailTitle) detailTitle.textContent = titleStr;
  if (detailMonthlyHero) detailMonthlyHero.innerHTML = `$${monthlyProfit.toLocaleString()} <span style="font-size: 1rem; color: var(--text-muted);">/ month</span>`;
  if (detailDailyHero) detailDailyHero.textContent = `$${dailyProfit.toLocaleString()} / day`;
  if (detailOutlayHero) detailOutlayHero.textContent = `$${totalOutlay.toLocaleString()}`;

  if (tblTierName) tblTierName.textContent = titleStr;
  if (tblCapital) tblCapital.textContent = `$${capital.toLocaleString()}`;
  if (tblRent) tblRent.textContent = `$${monthlyRent.toLocaleString()} / month (${botCount} ${botCount === 1 ? 'Bot' : 'Bots'})`;
  if (tblCommitment) tblCommitment.textContent = `${monthsParam} Months`;
  if (tblOutlay) tblOutlay.textContent = `$${totalOutlay.toLocaleString()} ($${capital.toLocaleString()} Deposit + $${monthlyRent.toLocaleString()} 1st Mo Rent)`;
  if (tblDaily) tblDaily.textContent = `$${dailyProfit.toLocaleString()} / day`;
  if (tblReturn) tblReturn.textContent = `+$${totalReturn.toLocaleString()}`;

  if (detailProceedBtn) {
    detailProceedBtn.addEventListener('click', () => {
      window.location.href = `payment.html?plan=${planType}&capital=${capital}&months=${monthsParam}`;
    });
  }

  if (pdfDownloadBtn) {
    pdfDownloadBtn.addEventListener('click', () => {
      alert(`📄 Prospectus Downloaded!\n\nB-Magnet-Institutional-AI-Bot-Strategy-Prospectus.pdf has been saved to your downloads.`);
    });
  }
});
