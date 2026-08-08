/* ==========================================================================
   B MAGNET INTERNATIONAL — English & Arabic (EN / AR) Translation Engine
   ========================================================================== */

(function () {
  const LANG_STORAGE_KEY = 'bmagnet_lang';

  const DICTIONARY = {
    en: {
      brandTag: 'INSTITUTIONAL INVESTMENT PORTAL',
      signIn: 'Sign In',
      createAccount: 'Create Account',
      accessPortal: 'Access Portal',
      registerAccount: 'Register Account',
      investorEmail: 'Investor Email Address',
      tradingPassword: 'Investor Account Password',
      forgotPassword: 'Forgot Password?',
      signInBtn: 'Access Investment Portal →',
      passkey: 'Passkey',
      google: 'Google',
      apple: 'Apple ID',
      fullName: 'Full Legal Name',
      proceedKyc: 'Proceed to Investor Profile →',
      saveStrategy: 'Save & Activate AI Bot Portfolio Strategy →',
      dashboard: 'Dashboard',
      botPlans: 'Bot Plans',
      cryptoVault: 'Crypto Vault',
      signOut: 'Sign Out',
      changePlan: 'Change Plan',
      returnLogin: 'Return to Login',
      totalPayable: 'Total Amount Payable',
      baseCapital: 'Base Capital Deposit',
      botRent: '3-Month Bot Rental Fee',
      dailyReturn: 'Daily Net Return (Mon–Fri)',
      totalOutlay: 'Total Initial Outlay Required',
      activeDays: 'Active Yield Distribution Days',
      projectedMonthly: 'Projected Monthly Profit',
      readyFund: 'Ready to Fund',
      proceedVault: 'Fund & Activate Strategy via Crypto Vault →',
      instantVerification: 'INSTANT VERIFIED ONBOARDING',
      sslSecurity: '🔒 256-Bit SSL Encrypted | Segregated Tier-1 Vaults'
    },
    ar: {
      brandTag: 'بوابة الاستثمار المؤسسي',
      signIn: 'تسجيل الدخول',
      createAccount: 'إنشاء حساب مستثمر',
      accessPortal: 'دخول البوابة',
      registerAccount: 'تسجيل حساب جديد',
      investorEmail: 'البريد الإلكتروني للمستثمر',
      tradingPassword: 'كلمة مرور حساب المستثمر',
      forgotPassword: 'نسيت كلمة المرور؟',
      signInBtn: 'دخول بوابة الاستثمار ←',
      passkey: 'مفتاح المرور (بصمة الوجه)',
      google: 'حساب جوجل',
      apple: 'آبل ID',
      fullName: 'الاسم القانوني الكامل',
      proceedKyc: 'المتابعة إلى ملف المستثمر ←',
      saveStrategy: 'حفظ وتفعيل محفظة روبوتات الذكاء الاصطناعي ←',
      dashboard: 'لوحة التحكم',
      botPlans: 'خطط الروبوتات',
      cryptoVault: 'خزينة العملات الرقمية',
      signOut: 'تسجيل الخروج',
      changePlan: 'تغيير الخطة',
      returnLogin: 'العودة لتسجيل الدخول',
      totalPayable: 'إجمالي المبلغ المستحق',
      baseCapital: 'إيداع رأس المال الأساسي',
      botRent: 'رسوم إيجار الروبوت (عقد 3 أشهر)',
      dailyReturn: 'العائد اليومي الصافي (الإثنين–الجمعة)',
      totalOutlay: 'إجمالي رأس المال والرسوم المطلوبة',
      activeDays: 'أيام توزيع العوائد النشطة (الإثنين - الجمعة)',
      projectedMonthly: 'الأرباح الشهرية المتوقعة',
      readyFund: 'جاهز للإيداع',
      proceedVault: 'إيداع وتفعيل الاستراتيجية عبر الخزينة ←',
      instantVerification: 'تسجيل فوري ومعتمد للمستثمر',
      sslSecurity: '🔒 تشفير 256-Bit SSL | خزائن بنكية متعددة التوقيع'
    }
  };

  function getStoredLang() {
    return localStorage.getItem(LANG_STORAGE_KEY) || 'en';
  }

  function applyLanguage(lang) {
    const isArabic = lang === 'ar';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
    localStorage.setItem(LANG_STORAGE_KEY, lang);

    // Update Language Toggle Buttons
    const langLabels = document.querySelectorAll('#currentLangLabel, .current-lang-label');
    langLabels.forEach((el) => {
      el.textContent = isArabic ? 'العربية' : 'EN';
    });

    const dict = DICTIONARY[lang] || DICTIONARY.en;

    // Translate Brand Tag
    const brandTags = document.querySelectorAll('.brand-tag, .login-brand-sub');
    brandTags.forEach((el) => {
      el.textContent = dict.brandTag;
    });

    // Translate Tabs
    const tabSignInBtn = document.getElementById('tabSignInBtn');
    if (tabSignInBtn) tabSignInBtn.textContent = dict.signIn;

    const tabRegisterBtn = document.getElementById('tabRegisterBtn');
    if (tabRegisterBtn) tabRegisterBtn.textContent = dict.createAccount;

    // Translate Form Elements on index.html
    const emailLabel = document.querySelector('label[for="email"]');
    if (emailLabel) emailLabel.textContent = dict.investorEmail;

    const passLabel = document.querySelector('label[for="password"]');
    if (passLabel) passLabel.textContent = dict.tradingPassword;

    const forgotLink = document.querySelector('.forgot-pass-link');
    if (forgotLink) forgotLink.textContent = dict.forgotPassword;

    const mainSignInBtn = document.querySelector('#loginForm button[type="submit"]');
    if (mainSignInBtn) mainSignInBtn.textContent = dict.signInBtn;

    const regNameLabel = document.querySelector('label[for="regFullName"]');
    if (regNameLabel) regNameLabel.textContent = dict.fullName;

    const regEmailLabel = document.querySelector('label[for="regEmail"]');
    if (regEmailLabel) regEmailLabel.textContent = dict.investorEmail;

    const regSubmitBtn = document.querySelector('#registerForm button[type="submit"]');
    if (regSubmitBtn) regSubmitBtn.textContent = dict.proceedKyc;

    // Translate Nav Links
    document.querySelectorAll('.site-nav a, .nav-link').forEach((link) => {
      const textSpan = link.querySelector('span');
      if (!textSpan) return;
      const text = textSpan.textContent.trim();

      if (text.includes('Dashboard') || text.includes('لوحة التحكم')) {
        textSpan.textContent = dict.dashboard;
      } else if (text.includes('Bot Plans') || text.includes('خطط الروبوتات')) {
        textSpan.textContent = dict.botPlans;
      } else if (text.includes('Crypto Vault') || text.includes('خزينة العملات')) {
        textSpan.textContent = dict.cryptoVault;
      } else if (text.includes('Sign Out') || text.includes('تسجيل الخروج')) {
        textSpan.textContent = dict.signOut;
      } else if (text.includes('Change Plan') || text.includes('تغيير الخطة')) {
        textSpan.textContent = dict.changePlan;
      } else if (text.includes('Return to Login') || text.includes('العودة لتسجيل')) {
        textSpan.textContent = dict.returnLogin;
      }
    });

    // Flip text alignments for RTL when in Arabic
    document.body.style.textAlign = isArabic ? 'right' : 'left';
  }

  // Initialize
  const initialLang = getStoredLang();
  applyLanguage(initialLang);

  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(getStoredLang());

    document.addEventListener('click', (e) => {
      const toggleBtn = e.target.closest('#langToggleBtn, .lang-toggle-btn');
      if (toggleBtn) {
        e.preventDefault();
        const current = getStoredLang();
        const next = current === 'en' ? 'ar' : 'en';
        applyLanguage(next);
      }
    });
  });
})();
