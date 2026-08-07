document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const planType = urlParams.get('plan') || 'starter';
  const capitalParam = parseFloat(urlParams.get('capital') || '1000');

  const payTitle = document.getElementById('payTitle');
  const payAmountDisplay = document.getElementById('payAmountDisplay');
  const payCapitalDisplay = document.getElementById('payCapitalDisplay');
  const payRentDisplay = document.getElementById('payRentDisplay');

  const bep20TabBtn = document.getElementById('bep20TabBtn');
  const trc20TabBtn = document.getElementById('trc20TabBtn');
  const bep20Panel = document.getElementById('bep20Panel');
  const trc20Panel = document.getElementById('trc20Panel');

  const copyBep20Btn = document.getElementById('copyBep20Btn');
  const copyTrc20Btn = document.getElementById('copyTrc20Btn');
  const bep20Addr = document.getElementById('bep20Addr');
  const trc20Addr = document.getElementById('trc20Addr');
  const paymentForm = document.getElementById('paymentForm');

  let capital = Math.max(1000, capitalParam);
  let botCount = Math.max(1, Math.floor(capital / 1000));
  let totalRent = botCount * 300;
  let totalOutlay = capital + totalRent;
  let planTitleStr = "Starter Core AI Bot ($1,000 Deposit)";

  if (planType === 'core') {
    planTitleStr = "Core Investor AI Bot ($3,000 Deposit)";
    capital = Math.max(3000, capitalParam);
    botCount = Math.max(3, Math.floor(capital / 1000));
    totalRent = botCount * 300;
    totalOutlay = capital + totalRent;
  } else if (planType === 'max') {
    planTitleStr = "Max Yield Arbitrage AI Bot ($5,000 Deposit)";
    capital = Math.max(5000, capitalParam);
    botCount = Math.max(5, Math.floor(capital / 1000));
    totalRent = botCount * 300;
    totalOutlay = capital + totalRent;
  }

  if (payTitle) payTitle.textContent = `${planTitleStr} Payment`;
  if (payAmountDisplay) payAmountDisplay.innerHTML = `$${totalOutlay.toLocaleString()} <span style="font-size: 1rem; color: var(--text-muted);">USDT</span>`;
  if (payCapitalDisplay) payCapitalDisplay.textContent = `$${capital.toLocaleString()} USDT`;
  if (payRentDisplay) payRentDisplay.textContent = `$${totalRent.toLocaleString()} USDT (3-Mo Rent)`;

  // Tab Switching Logic
  if (bep20TabBtn && trc20TabBtn && bep20Panel && trc20Panel) {
    bep20TabBtn.addEventListener('click', () => {
      bep20TabBtn.className = 'btn btn-primary network-tab-btn active';
      trc20TabBtn.className = 'btn btn-secondary network-tab-btn';
      bep20Panel.style.display = 'block';
      trc20Panel.style.display = 'none';
    });

    trc20TabBtn.addEventListener('click', () => {
      trc20TabBtn.className = 'btn btn-primary network-tab-btn active';
      bep20TabBtn.className = 'btn btn-secondary network-tab-btn';
      trc20Panel.style.display = 'block';
      bep20Panel.style.display = 'none';
    });
  }

  // Copy Address Handlers
  if (copyBep20Btn && bep20Addr) {
    copyBep20Btn.addEventListener('click', () => {
      navigator.clipboard.writeText(bep20Addr.value);
      copyBep20Btn.textContent = '✅ Copied!';
      setTimeout(() => copyBep20Btn.textContent = '📋 Copy', 2000);
    });
  }

  if (copyTrc20Btn && trc20Addr) {
    copyTrc20Btn.addEventListener('click', () => {
      navigator.clipboard.writeText(trc20Addr.value);
      copyTrc20Btn.textContent = '✅ Copied!';
      setTimeout(() => copyTrc20Btn.textContent = '📋 Copy', 2000);
    });
  }

  // Payment Submission
  if (paymentForm) {
    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const txid = document.getElementById('txHashInput').value.trim();
      const submitBtn = paymentForm.querySelector('button[type="submit"]');

      if (submitBtn) {
        submitBtn.textContent = 'Verifying Transaction on Blockchain...';
      }

      setTimeout(() => {
        alert(`✅ Payment Received & Verified!\n\nTXID: ${txid}\nAmount: $${totalOutlay.toLocaleString()} USDT\n\nYour ${botCount} AI Trading Bot instance(s) have been deployed and linked to your GTC FX Global multi-sig vault. Directing to your dashboard...`);
        window.location.href = 'dashboard.html';
      }, 1500);
    });
  }
});
