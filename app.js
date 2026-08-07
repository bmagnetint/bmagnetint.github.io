const allocationData = {
  labels: ['Equities', 'Bonds', 'Real Estate', 'Cash', 'Alternatives'],
  datasets: [
    {
      data: [42, 18, 16, 12, 12],
      backgroundColor: ['#00e5e5', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'],
      borderColor: 'transparent',
      borderWidth: 2,
      hoverOffset: 8,
    },
  ],
};

const chartCtx = document.getElementById('allocationChart');
let allocationChart = null;

if (chartCtx) {
  allocationChart = new Chart(chartCtx, {
    type: 'doughnut',
    data: allocationData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            boxWidth: 10,
            padding: 20,
            color: document.documentElement.getAttribute('data-theme') === 'dark' ? '#f8fafc' : '#475569',
            font: {
              family: 'Plus Jakarta Sans',
              weight: '600',
              size: 12,
            },
          },
        },
        tooltip: {
          backgroundColor: '#0f172a',
          titleColor: '#ffffff',
          bodyColor: '#00e5e5',
          borderColor: 'rgba(0, 229, 225, 0.4)',
          borderWidth: 1,
          padding: 12,
          boxPadding: 6,
          usePointStyle: true,
          callbacks: {
            label: function (context) {
              return ` ${context.label}: ${context.parsed}%`;
            },
          },
        },
      },
    },
  });

  // Dynamic Theme Adapter for Chart Legend
  const updateChartTheme = () => {
    if (!allocationChart) return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    allocationChart.options.plugins.legend.labels.color = isDark ? '#f8fafc' : '#475569';
    allocationChart.update();
  };

  const observer = new MutationObserver(() => updateChartTheme());
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
}

const transactions = [
  {
    date: '2026-08-01',
    investment: 'Global Equity Growth Fund',
    type: 'Purchase',
    amount: '$75,000',
    status: 'Completed',
  },
  {
    date: '2026-07-23',
    investment: 'High-Grade Fixed Income',
    type: 'Allocation',
    amount: '$45,000',
    status: 'Completed',
  },
  {
    date: '2026-07-14',
    investment: 'Commercial Real Estate Trust',
    type: 'Review',
    amount: '$24,000',
    status: 'Pending',
  },
  {
    date: '2026-07-09',
    investment: 'Emerging Markets Tech',
    type: 'Rebalance',
    amount: '$18,500',
    status: 'Completed',
  },
];

const syncApiBtn = document.getElementById('syncApiBtn');
if (syncApiBtn) {
  syncApiBtn.addEventListener('click', () => {
    syncApiBtn.textContent = '🔄 Syncing Regulated API...';
    syncApiBtn.style.opacity = '0.7';

    setTimeout(() => {
      syncApiBtn.textContent = '✅ Regulated Data Synced!';
      syncApiBtn.style.opacity = '1';

      setTimeout(() => {
        syncApiBtn.textContent = '🔄 Sync Live API Data';
      }, 2500);
    }, 1200);
  });
}

const transactionBody = document.getElementById('transactionBody');
if (transactionBody) {
  transactions.forEach((transaction) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td style="font-weight: 600;">${transaction.date}</td>
      <td style="font-weight: 700;">${transaction.investment}</td>
      <td>${transaction.type}</td>
      <td style="font-weight: 700; color: var(--accent-teal);">${transaction.amount}</td>
      <td><span class="status-chip ${transaction.status.toLowerCase()}">${transaction.status}</span></td>
    `;
    transactionBody.appendChild(row);
  });
}
