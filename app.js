const allocationData = {
  labels: ['Equities', 'Bonds', 'Real Estate', 'Cash', 'Alternatives'],
  datasets: [
    {
      data: [42, 18, 16, 12, 12],
      backgroundColor: ['#05a8a8', '#1e40af', '#059669', '#d97706', '#6366f1'],
      borderColor: '#ffffff',
      borderWidth: 3,
      hoverOffset: 6,
    },
  ],
};

const allocationChart = new Chart(document.getElementById('allocationChart'), {
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
          color: '#475569',
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
        bodyColor: '#05a8a8',
        borderColor: 'rgba(5, 168, 168, 0.3)',
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

const transactionBody = document.getElementById('transactionBody');

if (transactionBody) {
  transactions.forEach((transaction) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td style="font-weight: 600; color: #0f172a;">${transaction.date}</td>
      <td style="font-weight: 700; color: #0f172a;">${transaction.investment}</td>
      <td>${transaction.type}</td>
      <td style="font-weight: 700; color: #05a8a8;">${transaction.amount}</td>
      <td><span class="status-chip ${transaction.status.toLowerCase()}">${transaction.status}</span></td>
    `;
    transactionBody.appendChild(row);
  });
}
