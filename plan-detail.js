document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const planType = urlParams.get('plan') || 'starter';
  const capitalParam = parseFloat(urlParams.get('capital') || '1000');
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

  // 1 Bot per $1,000 deposit; $300 3-Month contract bot rental fee per bot
  let capital = Math.max(1000, capitalParam);
  let botCount = Math.max(1, Math.floor(capital / 1000));
  let totalRent = botCount * 300;
  let monthlyProfit = botCount * 960;
  let titleStr = "Starter Core AI Bot Plan ($1,000 Deposit - 1 Bot)";

  if (planType === 'core' || capitalParam >= 3000 && capitalParam < 5000) {
    titleStr = "Core Investor AI Bot Detailed Plan ($3,000 Deposit - 3 Bots)";
    capital = capitalParam >= 3000 ? capitalParam : 3000;
    botCount = Math.max(3, Math.floor(capital / 1000));
    totalRent = botCount * 300;
    monthlyProfit = botCount * 960;
  } else if (planType === 'max' || capitalParam >= 5000) {
    titleStr = "Max Forex AI Bot Detailed Plan ($5,000 Deposit - 5 Bots)";
    capital = capitalParam >= 5000 ? capitalParam : 5000;
    botCount = Math.max(5, Math.floor(capital / 1000));
    totalRent = botCount * 300;
    monthlyProfit = botCount * 960;
  } else {
    titleStr = "Starter Core AI Bot Detailed Plan ($1,000 Deposit - 1 Bot)";
    capital = Math.max(1000, capitalParam);
    botCount = Math.max(1, Math.floor(capital / 1000));
    totalRent = botCount * 300;
    monthlyProfit = botCount * 960;
  }

  const dailyProfit = Math.round(monthlyProfit / 30);
  const totalOutlay = capital + totalRent;
  const totalReturn = monthlyProfit * monthsParam;

  if (detailTitle) detailTitle.textContent = titleStr;
  if (detailMonthlyHero) detailMonthlyHero.innerHTML = `$${monthlyProfit.toLocaleString()} <span style="font-size: 1rem; color: var(--text-muted);">/ month</span>`;
  if (detailDailyHero) detailDailyHero.textContent = `$${dailyProfit.toLocaleString()} / day`;
  if (detailOutlayHero) detailOutlayHero.textContent = `$${totalOutlay.toLocaleString()}`;

  if (tblTierName) tblTierName.textContent = titleStr;
  if (tblCapital) tblCapital.textContent = `$${capital.toLocaleString()}`;
  if (tblRent) tblRent.textContent = `$${totalRent.toLocaleString()} (3-Mo Contract for ${botCount} ${botCount === 1 ? 'Bot' : 'Bots'})`;
  if (tblCommitment) tblCommitment.textContent = `${monthsParam} Months`;
  if (tblOutlay) tblOutlay.textContent = `$${totalOutlay.toLocaleString()} ($${capital.toLocaleString()} Deposit + $${totalRent.toLocaleString()} 3-Mo Rent)`;
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
