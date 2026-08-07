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

/* Theme Manager Engine (Icon-Only Light & Dark Mode Switcher) */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (document.body) {
    document.body.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  }
}

(function initTheme() {
  const savedTheme = localStorage.getItem('bmagnet_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  // Apply immediately to html tag
  document.documentElement.setAttribute('data-theme', savedTheme);

  const onReady = () => {
    applyTheme(savedTheme);

    const btn = document.getElementById('themeToggleBtn');
    if (!btn) return;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem('bmagnet_theme', next);
      applyTheme(next);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();

/* i18n Multi-Language Translation Engine (English & Arabic RTL) */
const TRANSLATIONS = {
  en: {
    brandName: "B MAGNET INTERNATIONAL",
    brandTagLogin: "Investor Portal",
    brandTagDash: "Portfolio Management",
    signOut: "Sign Out",
    eyebrow: "Secure Investor Access",
    heroTitle: "Institutional-grade portfolio management.",
    heroSubtitle: "Welcome back. Access real-time asset tracking, performance metrics, and tailored investment strategies in one unified portal.",
    feature1Title: "Live Portfolio Analytics",
    feature1Desc: "Track your full asset allocation and yield projections in real time.",
    feature2Title: "Downside Protection & Strategy",
    feature2Desc: "Institutional risk controls tailored to your capital objectives.",
    authHeader: "Authentication",
    signInTitle: "Sign In to Portal",
    emailLabel: "Investor Email",
    passwordLabel: "Password",
    signInBtn: "Sign In to Dashboard →",
    orSignInWith: "OR SIGN IN WITH",
    footnote: "Contact your advisory officer for credential recovery.",
    footerCopy: "© 2026 B Magnet Investment. All rights reserved. Secure investor portal.",
    overview: "Overview",
    plan: "Plan",
    activity: "Activity"
  },
  ar: {
    brandName: "بي ماجنت الدولية",
    brandTagLogin: "بوابة المستثمرين",
    brandTagDash: "إدارة المحافظ الاستثمارية",
    signOut: "تسجيل الخروج",
    eyebrow: "دخول آمن للمستثمرين",
    heroTitle: "إدارة محافظ استثمارية بمستوى مؤسسي عالي.",
    heroSubtitle: "مرحباً بعودتك. تتبع أصولك واستراتيجياتك الاستثمارية في الوقت الفعلي عبر منصة موحدة.",
    feature1Title: "تحليلات المحفظة المباشرة",
    feature1Desc: "تتبع توزيع الأصول وتوقعات العوائد مباشرة وبدقة متناهية.",
    feature2Title: "حماية رأس المال والاستراتيجيات",
    feature2Desc: "ضوابط مخاطر مؤسسية مصممة خصيصاً لتحقيق أهدافك المالية.",
    authHeader: "مصادقة الدخول",
    signInTitle: "تسجيل الدخول إلى البوابة",
    emailLabel: "البريد الإلكتروني للمستثمر",
    passwordLabel: "كلمة المرور",
    signInBtn: "الدخول إلى لوحة التحكم ←",
    orSignInWith: "أو تسجيل الدخول بواسطة",
    footnote: "تواصل مع مستشارك المالي لاستعادة بيانات الدخول.",
    footerCopy: "© ٢٠٢٦ بي ماجنت الاستثمارية. جميع الحقوق محفوظة. بوابة مستثمرين آمنة.",
    overview: "نظرة عامة",
    plan: "الخطة الاستثمارية",
    activity: "النشاطات"
  }
};

(function initI18n() {
  const applyLang = (lang) => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
      langBtn.textContent = lang === 'ar' ? '🌐 EN' : '🌐 AR';
      langBtn.setAttribute('title', lang === 'ar' ? 'Switch to English' : 'التحويل إلى اللغة العربية');
    }
  };

  const onReady = () => {
    applyLang(localStorage.getItem('bmagnet_lang') || 'en');

    const langBtn = document.getElementById('langToggleBtn');
    if (!langBtn) return;

    langBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = localStorage.getItem('bmagnet_lang') || 'en';
      const next = current === 'ar' ? 'en' : 'ar';
      localStorage.setItem('bmagnet_lang', next);
      applyLang(next);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();
