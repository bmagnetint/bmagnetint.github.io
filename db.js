/* ==========================================================================
   B MAGNET INTERNATIONAL — Investor Database & Authentication Engine
   (Powered by Google Cloud Firestore & Firebase Auth)
   ========================================================================== */

// Database Schema Definition for Investor Records
const INVESTOR_SCHEMA_EXAMPLE = {
  investorId: "INV-8094",
  fullName: "Alexander Sterling",
  email: "investor@bmagnetint.com",
  accountStatus: "Active",
  createdTimestamp: "2026-08-01T10:00:00Z",
  portfolio: {
    totalValue: 1284670,
    monthlyReturn: 8.4,
    projectedYield: 11.6,
    liquidCash: 124800,
    riskProfile: "Moderate",
    activeHoldingsCount: 14
  },
  holdings: [
    { asset: "Global Equity Growth Fund", allocationPercent: 42, value: 539561 },
    { asset: "High-Grade Fixed Income", allocationPercent: 18, value: 231240 },
    { asset: "Commercial Real Estate Trust", allocationPercent: 16, value: 205547 },
    { asset: "Liquid Reserves", allocationPercent: 12, value: 154160 },
    { asset: "Emerging Markets Tech", allocationPercent: 12, value: 154160 }
  ],
  recentTransactions: [
    { date: "2026-08-01", investment: "Global Equity Growth Fund", type: "Purchase", amount: "$75,000", status: "Completed" },
    { date: "2026-07-23", investment: "High-Grade Fixed Income", type: "Allocation", amount: "$45,000", status: "Completed" },
    { date: "2026-07-14", investment: "Commercial Real Estate Trust", type: "Review", amount: "$24,000", status: "Pending" },
    { date: "2026-07-09", investment: "Emerging Markets Tech", type: "Rebalance", amount: "$18,500", status: "Completed" }
  ]
};

// Local Database Helper (Fallback Caching Engine)
class InvestorDatabase {
  constructor() {
    this.storageKey = 'bmagnet_investor_data';
    this.initDatabase();
  }

  initDatabase() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify(INVESTOR_SCHEMA_EXAMPLE));
    }
  }

  getInvestorData() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : INVESTOR_SCHEMA_EXAMPLE;
    } catch (e) {
      return INVESTOR_SCHEMA_EXAMPLE;
    }
  }

  updateInvestorData(newData) {
    const current = this.getInvestorData();
    const updated = { ...current, ...newData };
    localStorage.setItem(this.storageKey, JSON.stringify(updated));
    return updated;
  }
}

const dbEngine = new InvestorDatabase();
window.dbEngine = dbEngine;
