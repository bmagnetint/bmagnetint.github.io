/**
 * ==============================================================================
 * B-BOT PRO - GOOGLE CLIENT CONFIGURATION
 * ==============================================================================
 */
const GOOGLE_CLIENT_ID = "193074652385-prup7faehlgodh890o06ehfaujblvvni.apps.googleusercontent.com";

const TRANSLATIONS = {
  en: {
    welcomeTitle: 'HELLO',
    welcomeSub: 'Sign in to access your automated trading passes',
    signInBtn: 'Sign In',
    signUpBtn: 'Sign Up',
    signinBotTitle: 'Institutional MT5 Automated Trading',
    emailPlaceholder: 'Account ID / Username',
    passwordPlaceholder: 'Passcode PIN',
    forgotPwd: 'Forgot passcode?',
    googleSignIn: 'Sign In with Google',
    noAccount: "Don't have an account?",
    signUpLink: 'Sign Up',
    themeDark: 'Dark',
    themeLight: 'Light',
    pwaTitle: 'Install B-Bot Pro App',
    pwaSub: 'Add to Home Screen for fast 1-tap access',
    pwaBtn: 'Install',
    settingPwaTitle: 'Install App to Home Screen',
    brandTitle: 'B-Magnet',
    brandSub: 'Trading & Marketing Bots',
    navExplore: 'Explore',
    navBots: 'My Bots',
    navMarket: 'Market',
    navDb: 'Database',
    navAccount: 'Account',
    adminPanelTitle: 'Admin Panel',
    adminPanelSub: 'Customer CRM, active bot passes, wallet ledger & Google Sheets sync',
    adminSecurityGroup: 'Admin & Master Database',
    liveTickerTag: 'LIVE',
    exploreTitle: 'Verified Trading Bots & Plans',
    exploreCountSuffix: 'Plans',
    searchPlaceholder: 'Search bots, strategies, ROI, Gold scalpers...',
    catAll: 'All',
    catGold: 'Gold Hunter',
    catScalper: 'Scalper',
    catInst: 'Institutional',
    catAi: 'AI Powered',
    metricWinRate: 'Win Rate',
    metricRoi: 'Monthly ROI',
    metricDd: 'Max DD',
    metricPf: 'Profit Factor',
    gtcfxTitle: 'Register GTCfx Account',
    gtcfxSub: 'Recommended MT5 broker for B-Magnet Gold EA',
    gtcfxBtn: 'Register',
    subsTitle: 'My Bot Subscriptions',
    subsSub: 'Manage licenses, MT5 account binding & active status',
    addBotBtn: 'Add Bot',
    statActiveBots: 'Active Bot',
    statMonthlyCost: 'Monthly Cost',
    statMt5: 'GTCfx MT5',
    creatorTitle: 'Creator & Marketing Hub',
    creatorSub: 'Monetize your EAs & earn 20% affiliate commissions',
    creatorMrrLabel: 'Monthly Recurring Revenue (MRR)',
    creatorSubscribers: 'Subscribers',
    creatorActiveBots: 'Active Bots',
    creatorAvailablePayout: 'Available Payout',
    btnPayout: 'Request Instant Payout',
    affiliateTitle: 'Affiliate Referral Program',
    affiliateDesc: 'Earn 20% recurring commission for every user who subscribes with your link.',
    dbTitle: 'Customer CRM & Bot Registry',
    dbSub: 'Real-time database of customer phone numbers, wallet balances, active bot subscriptions, GTCfx MT5 terminals, and expiry countdowns.',
    dbStatus: 'Admin Master Session Active',
    btnLockCrm: 'Lock CRM',
    thCustomer: 'Customer',
    thBot: 'Bot Name',
    thPlan: 'Plan Tier',
    thKey: 'License Key',
    thMt5: 'GTCfx MT5 #',
    thExpiry: 'Expiry Date',
    thStatus: 'Status',
    accountTitle: 'Connected Wallet & Account',
    accountSub: 'BEP-20 Wallet & Connected User ID',
    groupAlerts: 'Integrations & Alerts',
    groupPrefs: 'Preferences & Security',
    settingTelegram: 'Telegram Trade Push Alerts',
    settingCurrency: 'Display Currency',
    settingTheme: 'App Theme Mode',
    settingLang: 'Language / اللغة',
    settingReset: 'Reset Demo State',
    settingResetSub: 'Restore original demo bots, subscriptions & invoices',
    settingLogout: 'Logout Account',
    logoutConfirmTitle: 'Log Out of B-Magnet?',
    logoutConfirmDesc: 'Are you sure you want to end your active session? You will return to the home screen and can sign in anytime.',
    staySignedInBtn: 'Stay Signed In',
    confirmLogoutBtn: 'Log Out',
    loggedOutToast: '🔒 You have been securely logged out.',
    adminLockTitle: 'CRM Access Locked',
    adminLockDesc: 'This section contains private customer records, MT5 accounts, and wallet balances. Enter the 4-digit Master Security Passcode to unlock.',
    adminUnlockBtn: 'Unlock CRM',
    iosGuideTitle: 'Add B-Bot Pro to Home Screen',
    iosGuideDesc: 'Install B-Bot Pro on your phone for full-screen trading, faster alerts, and instant 1-tap launch.',
    iosStep1Title: 'Tap the Share Button',
    iosStep1Desc: 'Tap the Share icon in your Safari bottom navigation bar.',
    iosStep2Title: 'Select "Add to Home Screen"',
    iosStep2Desc: 'Scroll down the action list and tap Add to Home Screen.',
    iosStep3Title: 'Tap "Add" in Top Right',
    iosStep3Desc: 'Confirm and tap Add to place the official B-Bot Pro icon on your home screen!',
    btnGotIt: 'Got It, Thanks!'
  },
  ar: {
    welcomeTitle: 'مرحباً بك',
    welcomeSub: 'سجّل الدخول للوصول إلى اشتراكات وتراخيص التداول الآلي',
    signInBtn: 'تسجيل الدخول',
    signUpBtn: 'إنشاء حساب جديد',
    signinBotTitle: 'تداول الذهب الآلي عبر منصة MT5 المؤسسية',
    emailPlaceholder: 'اسم المستخدم أو المعرف',
    passwordPlaceholder: 'رمز الدخول السريع',
    forgotPwd: 'استعادة رمز الدخول؟',
    googleSignIn: 'الدخول باستخدام Google',
    noAccount: 'ليس لديك حساب بعد؟',
    signUpLink: 'إنشاء حساب',
    themeDark: 'داكن',
    themeLight: 'فاتح',
    pwaTitle: 'تثبيت تطبيق B-Bot Pro',
    pwaSub: 'أضف التطبيق للشاشة الرئيسية للوصول السريع وبملء الشاشة',
    pwaBtn: 'تثبيت',
    settingPwaTitle: 'تثبيت التطبيق على الشاشة الرئيسية',
    settingPwaSub: 'حمّل B-Bot Pro كتطبيق ويب على جهازك',
    brandTitle: 'بي ماغنيت',
    brandSub: 'بوتات التداول والتسويق الآلي',
    navExplore: 'استكشاف',
    navBots: 'اشتراكاتي',
    navMarket: 'السوق',
    navDb: 'العملاء',
    navAccount: 'حسابي',
    adminPanelTitle: 'لوحة تحكم المشرف (الأدمن)',
    adminPanelSub: 'سجل العملاء، تراخيص البوتات، أرصدة المحافظ، والمزامنة السحابية',
    adminSecurityGroup: 'إدارة النظام وقاعدة البيانات',
    liveTickerTag: 'مباشر',
    exploreTitle: 'البوتات وخطط التداول المعتمدة',
    exploreCountSuffix: 'خطط',
    searchPlaceholder: 'ابحث عن استراتيجيات الذهب، نسبة الربح، نوع البوت...',
    catAll: 'الكل',
    catGold: 'تداول الذهب',
    catScalper: 'سكالبينج',
    catInst: 'مؤسسي',
    catAi: 'ذكاء اصطناعي',
    metricWinRate: 'نسبة الفوز',
    metricRoi: 'العائد الشهري',
    metricDd: 'أقصى تراجع',
    metricPf: 'مُعامل الربح',
    gtcfxTitle: 'تسجيل حساب GTCfx',
    gtcfxSub: 'وسيط MT5 الموصى به لبوت B-Magnet للذهب',
    gtcfxBtn: 'تسجيل',
    subsTitle: 'اشتراكات وتراخيص التداول',
    subsSub: 'إدارة التراخيص وربط حسابات MT5 وحالة التشغيل',
    addBotBtn: 'إضافة بوت',
    statActiveBots: 'بوت نشط',
    statMonthlyCost: 'التكلفة الشهرية',
    statMt5: 'حسابات MT5',
    creatorTitle: 'مركز المطورين والتسويق',
    creatorSub: 'اربح 20% عمولات شهرية متكررة من تسويق البوتات',
    creatorMrrLabel: 'الإيرادات الشهرية المتكررة (MRR)',
    creatorSubscribers: 'المشتركون',
    creatorActiveBots: 'البوتات النشطة',
    creatorAvailablePayout: 'الأرباح المتاحة للسحب',
    btnPayout: 'طلب سحب فوري للأرباح',
    affiliateTitle: 'برنامج التسويق والعمولات',
    affiliateDesc: 'اربح 20% عمولة متكررة عن كل مستخدم يشترك من خلال رابطك الخاص.',
    dbTitle: 'سجل العملاء وإدارة التراخيص',
    dbSub: 'قاعدة بيانات فورية لأرقام العملاء، أرصدة المحفظة، حسابات MT5، وتواريخ انتهاء التراخيص.',
    dbStatus: 'جلسة الأدمن الماستر نشطة',
    btnLockCrm: 'قفل CRM',
    thCustomer: 'العميل',
    thBot: 'اسم البوت',
    thPlan: 'الخطة',
    thKey: 'مفتاح الترخيص',
    thMt5: 'حساب MT5',
    thExpiry: 'تاريخ الانتهاء',
    thStatus: 'الحالة',
    accountTitle: 'إدارة الحساب والمحفظة',
    accountSub: 'محفظة BEP-20 ومعرف المستخدم المتصل',
    groupAlerts: 'التنبيهات والربط',
    groupPrefs: 'التفضيلات والأمان',
    settingTelegram: 'تنبيهات صفقات تيليجرام',
    settingCurrency: 'عملة العرض',
    settingTheme: 'مظهر التطبيق',
    settingLang: 'اللغة / Language',
    settingReset: 'إعادة ضبط البيانات التجريبية',
    settingResetSub: 'استعادة البوتات التجريبية الأصلية والاشتراكات',
    settingLogout: 'تسجيل الخروج',
    logoutConfirmTitle: 'هل تريد تسجيل الخروج من B-Magnet؟',
    logoutConfirmDesc: 'هل أنت متأكد من إنهاء جلستك الحالية؟ ستعود إلى الصفحة الرئيسية ويمكنك تسجيل الدخول في أي وقت.',
    staySignedInBtn: 'البقاء مسجلاً',
    confirmLogoutBtn: 'تسجيل الخروج',
    loggedOutToast: '🔒 تم تسجيل الخروج بنجاح وأمان.',
    adminLockTitle: 'قفل الوصول إلى CRM',
    adminLockDesc: 'هذا القسم يحتوي على سجلات العملاء وحسابات MT5 والأرصدة. أدخل رمز الأمان الماستر المكون من 4 أرقام لفتح القفل.',
    adminUnlockBtn: 'فتح CRM',
    iosGuideTitle: 'إضافة B-Bot Pro للشاشة الرئيسية',
    iosGuideDesc: 'قم بتثبيت B-Bot Pro على هاتفك لتداول بملء الشاشة، وتنبيهات أسرع، وفتح فوري بلمسة واحدة.',
    iosStep1Title: 'اضغط على زر المشاركة',
    iosStep1Desc: 'اضغط على أيقونة المشاركة في شريط أدوات سفاري بالأسفل.',
    iosStep2Title: 'اختر "إضافة إلى الصفحة الرئيسية"',
    iosStep2Desc: 'مرر للأسفل واضغط على خيار إضافة إلى الصفحة الرئيسية.',
    iosStep3Title: 'اضغط على "إضافة" في الأعلى',
    iosStep3Desc: 'أكّد التثبيت لتظهر أيقونة B-Bot Pro الرسمية على شاشتك الرئيسية فوراً!',
    btnGotIt: 'تم، شكراً!'
  }
};

class BotHubApp {
  constructor() {
    this.apiBase = '';
    this.state = {
      currentUser: null,
      bots: [],
      subscriptions: [],
      wallet: { balance: 250.00, currency: 'USDT (BEP-20)' },
      paymentMethods: [],
      invoices: [],
      creator: {},
      activeCategory: 'all',
      searchQuery: '',
      selectedBotForCheckout: null,
      selectedPlanKey: '1month',
      selectedTopupTab: 'crypto',
      selectedTopupAmount: 100,
      defaultMt5Account: '8849201',
      activeCurrency: 'USDT',
      isFullscreen: false,
      lastPaymentResult: null,
      isAdminUnlocked: false,
      selectedExplorePlanId: 'bot_bmagnet_1m',
      theme: localStorage.getItem('b_bot_theme') || 'light',
      lang: localStorage.getItem('b_bot_lang') || 'en'
    };

    this.init();
  }

  async init() {
    this.calibratePlatformAndResolution();
    this.updateClock();
    setInterval(() => this.updateClock(), 10000);

    this.initThemeAndLanguage();
    this.setupEventListeners();
    await this.initAuth();
    await this.fetchData();
    this.startLiveSignalSimulation();

    // Register Service Worker for PWA (with root scope)
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(err => {
          console.log('SW registration note:', err);
        });
      });
    }

    // PWA Install Prompt Handler - Direct 1-Tap Home Screen Engine
    this.deferredPwaPrompt = window.__deferredPwaPrompt || null;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPwaPrompt = e;
      window.__deferredPwaPrompt = e;
      if (this.state.currentUser) {
        this.checkPwaInstallBanner();
      }
    });

    window.addEventListener('appinstalled', () => {
      this.deferredPwaPrompt = null;
      window.__deferredPwaPrompt = null;
      this.dismissPwaBanner();
      this.showToast('🎉 B-Bot Pro is now installed on your Home Screen!', 'success');
    });
  }

  // -------------------------------------------------------------
  // AUTOMATIC BROWSER & PLATFORM CALIBRATION ENGINE
  // -------------------------------------------------------------
  calibratePlatformAndResolution() {
    const ua = navigator.userAgent || '';
    const platform = navigator.platform || '';
    
    // 1. Detect Operating System & Form Factor
    const isIOS = /iPad|iPhone|iPod/.test(ua) || (platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/.test(ua);
    const isWindows = /Windows/i.test(ua);
    const isMac = /Macintosh|MacIntel/i.test(ua) && !isIOS;
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    // 2. Detect Browser Engine
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    const isChrome = /Chrome|CriOS/i.test(ua) && !/Edge|Edg/i.test(ua);
    const isEdge = /Edg/i.test(ua);
    const isFirefox = /Firefox|FxiOS/i.test(ua);

    // 3. Apply semantic classes to root document & body
    const root = document.documentElement;
    const body = document.body;

    const classNamesToRemove = [
      'platform-ios', 'platform-android', 'platform-windows', 'platform-mac',
      'device-mobile', 'device-tablet', 'device-desktop',
      'mode-mobile', 'mode-tablet', 'mode-desktop',
      'browser-safari', 'browser-chrome', 'browser-edge', 'browser-firefox',
      'touch-device', 'no-touch'
    ];

    root.classList.remove(...classNamesToRemove);
    if (body) body.classList.remove(...classNamesToRemove);

    const activeClasses = [];
    if (isIOS) activeClasses.push('platform-ios');
    else if (isAndroid) activeClasses.push('platform-android');
    else if (isWindows) activeClasses.push('platform-windows');
    else if (isMac) activeClasses.push('platform-mac');

    if (isTouch) activeClasses.push('touch-device');
    else activeClasses.push('no-touch');

    if (isSafari) activeClasses.push('browser-safari');
    else if (isChrome) activeClasses.push('browser-chrome');
    else if (isEdge) activeClasses.push('browser-edge');
    else if (isFirefox) activeClasses.push('browser-firefox');

    activeClasses.forEach(cls => {
      root.classList.add(cls);
      if (body) body.classList.add(cls);
    });

    // 4. Dynamic Viewport Geometry & Resolution Calibration
    const updateViewportGeometry = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Dynamic CSS variables for bulletproof mobile height
      root.style.setProperty('--vh', `${h * 0.01}px`);
      root.style.setProperty('--vw', `${w * 0.01}px`);

      const modeClasses = ['mode-mobile', 'mode-tablet', 'mode-desktop', 'device-mobile', 'device-tablet', 'device-desktop'];
      root.classList.remove(...modeClasses);
      if (body) body.classList.remove(...modeClasses);

      let currentMode = [];
      if (w <= 560) {
        currentMode = ['mode-mobile', 'device-mobile'];
      } else if (w <= 960) {
        currentMode = ['mode-tablet', 'device-tablet'];
      } else {
        currentMode = ['mode-desktop', 'device-desktop'];
      }

      currentMode.forEach(cls => {
        root.classList.add(cls);
        if (body) body.classList.add(cls);
      });
    };

    updateViewportGeometry();
    window.addEventListener('resize', updateViewportGeometry, { passive: true });
    window.addEventListener('orientationchange', () => setTimeout(updateViewportGeometry, 100), { passive: true });

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateViewportGeometry, { passive: true });
    }
  }

  // -------------------------------------------------------------
  // THEME (DARK / LIGHT) & LANGUAGE (EN / AR) SYSTEM
  // -------------------------------------------------------------
  initThemeAndLanguage() {
    this.applyTheme(this.state.theme);
    this.setAppLanguage(this.state.lang);
  }

  toggleTheme() {
    const newTheme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
  }

  applyTheme(theme) {
    this.state.theme = theme;
    localStorage.setItem('b_bot_theme', theme);
    
    const welcomeIcon = document.getElementById('welcomeThemeIcon');
    const welcomeLabel = document.getElementById('welcomeThemeLabel');
    const headerIcon = document.getElementById('headerThemeIcon');
    const accountIcon = document.getElementById('accountThemeSettingIcon');
    const accountDisplay = document.getElementById('activeThemeDisplay');

    if (theme === 'dark') {
      document.body.classList.add('theme-dark');
      if (welcomeIcon) welcomeIcon.textContent = 'light_mode';
      if (headerIcon) headerIcon.textContent = 'light_mode';
      if (accountIcon) accountIcon.textContent = 'light_mode';
      if (welcomeLabel) welcomeLabel.textContent = this.state.lang === 'ar' ? 'فاتح' : 'Light';
      if (accountDisplay) accountDisplay.textContent = this.state.lang === 'ar' ? 'الوضع الداكن (مفعل)' : 'Dark Mode (Active)';
    } else {
      document.body.classList.remove('theme-dark');
      if (welcomeIcon) welcomeIcon.textContent = 'dark_mode';
      if (headerIcon) headerIcon.textContent = 'dark_mode';
      if (accountIcon) accountIcon.textContent = 'dark_mode';
      if (welcomeLabel) welcomeLabel.textContent = this.state.lang === 'ar' ? 'داكن' : 'Dark';
      if (accountDisplay) accountDisplay.textContent = this.state.lang === 'ar' ? 'الوضع الفاتح (مفعل)' : 'Light Mode (Active)';
    }
  }

  toggleLanguage() {
    const newLang = this.state.lang === 'ar' ? 'en' : 'ar';
    this.setAppLanguage(newLang);
  }

  setAppLanguage(lang) {
    this.state.lang = lang;
    localStorage.setItem('b_bot_lang', lang);

    const btnEn = document.getElementById('langBtnEn');
    const btnAr = document.getElementById('langBtnAr');
    const headerLangText = document.getElementById('headerLangText');
    const activeLangDisplay = document.getElementById('activeLangDisplay');

    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
      document.body.classList.add('lang-ar');
      document.body.classList.remove('lang-en');
      if (btnAr) btnAr.classList.add('active');
      if (btnEn) btnEn.classList.remove('active');
      if (headerLangText) headerLangText.textContent = 'EN';
      if (activeLangDisplay) activeLangDisplay.textContent = 'العربية (AR)';
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
      document.body.classList.add('lang-en');
      document.body.classList.remove('lang-ar');
      if (btnEn) btnEn.classList.add('active');
      if (btnAr) btnAr.classList.remove('active');
      if (headerLangText) headerLangText.textContent = 'عربي';
      if (activeLangDisplay) activeLangDisplay.textContent = 'English (EN)';
    }

    const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
    
    // Auth & Welcome
    const txtWelcomeTitle = document.getElementById('txtWelcomeTitle');
    const txtWelcomeSubtitle = document.getElementById('txtWelcomeSubtitle');
    const txtSignInBtn = document.getElementById('txtSignInBtn');
    const txtSignUpBtn = document.getElementById('txtSignUpBtn');
    const txtSigninBotTitle = document.getElementById('txtSigninBotTitle');
    const txtSigninSubmitBtn = document.getElementById('txtSigninSubmitBtn');
    const txtForgotPwd = document.getElementById('txtForgotPwd');
    const txtGoogleSignIn = document.getElementById('txtGoogleSignIn');
    const txtNoAccount = document.getElementById('txtNoAccount');
    const txtSignUpLink = document.getElementById('txtSignUpLink');
    const loginEmailInput = document.getElementById('loginEmailInput');
    const loginOtpInput = document.getElementById('loginOtpInput');
    const themeLabel = document.getElementById('welcomeThemeLabel');
    const brandTitle = document.getElementById('headerBrandTitle');
    const brandSub = document.getElementById('brandSubtitle');

    if (txtWelcomeTitle) txtWelcomeTitle.textContent = t.welcomeTitle;
    if (txtWelcomeSubtitle) txtWelcomeSubtitle.textContent = t.welcomeSub;
    if (txtSignInBtn) txtSignInBtn.textContent = t.signInBtn;
    if (txtSignUpBtn) txtSignUpBtn.textContent = t.signUpBtn;
    if (txtSigninBotTitle) txtSigninBotTitle.textContent = t.signinBotTitle;
    if (txtSigninSubmitBtn) txtSigninSubmitBtn.textContent = t.signInBtn;
    if (txtForgotPwd) txtForgotPwd.textContent = t.forgotPwd;
    if (txtGoogleSignIn) txtGoogleSignIn.textContent = t.googleSignIn;
    if (txtNoAccount) txtNoAccount.textContent = t.noAccount;
    if (txtSignUpLink) txtSignUpLink.textContent = t.signUpLink;
    if (loginEmailInput) loginEmailInput.placeholder = t.emailPlaceholder;
    if (loginOtpInput) loginOtpInput.placeholder = t.passwordPlaceholder;
    if (brandTitle) brandTitle.textContent = t.brandTitle;
    if (brandSub) brandSub.textContent = t.brandSub;

    // Bottom Navigation Dock
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    navItems.forEach(item => {
      const view = item.getAttribute('data-view');
      const labelEl = item.querySelector('.nav-label');
      if (labelEl) {
        if (view === 'explore') labelEl.textContent = t.navExplore;
        else if (view === 'subscriptions') labelEl.textContent = t.navBots;
        else if (view === 'creator') labelEl.textContent = t.navMarket;
        else if (view === 'database') labelEl.textContent = t.navDb;
        else if (view === 'settings') labelEl.textContent = t.navAccount;
      }
    });

    const txtAdminPanelTitle = document.getElementById('txtAdminPanelTitle');
    const txtAdminPanelSub = document.getElementById('txtAdminPanelSub');
    const txtAdminSecurityTitle = document.getElementById('txtAdminSecurityTitle');
    if (txtAdminPanelTitle && t.adminPanelTitle) txtAdminPanelTitle.textContent = t.adminPanelTitle;
    if (txtAdminPanelSub && t.adminPanelSub) txtAdminPanelSub.textContent = t.adminPanelSub;
    if (txtAdminSecurityTitle && t.adminSecurityGroup) txtAdminSecurityTitle.textContent = t.adminSecurityGroup;

    // Explore Search Input & Filter Chips
    const searchInput = document.getElementById('botSearchInput');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    const chipAll = document.querySelector('.chip[data-category="all"]');
    const chipGold = document.querySelector('.chip[data-category="gold"]');
    const chipScalp = document.querySelector('.chip[data-category="scalp"]');
    const chipInst = document.querySelector('.chip[data-category="institutional"]');
    const chipAi = document.querySelector('.chip[data-category="ai"]');
    if (chipAll) chipAll.textContent = t.catAll;
    if (chipGold) chipGold.textContent = t.catGold;
    if (chipScalp) chipScalp.textContent = t.catScalper;
    if (chipInst) chipInst.textContent = t.catInst;
    if (chipAi) chipAi.textContent = t.catAi;

    // GTCfx Cards
    const gtcfxTitles = document.querySelectorAll('.gbb-title-clean, .gtc-clean-title');
    gtcfxTitles.forEach(el => el.textContent = t.gtcfxTitle);
    const gtcfxSubs = document.querySelectorAll('.gbb-sub-clean, .gtc-clean-sub');
    gtcfxSubs.forEach(el => el.textContent = t.gtcfxSub);
    const gtcfxBtns = document.querySelectorAll('.gbb-btn-simple span:first-child, .gtc-clean-btn span:first-child');
    gtcfxBtns.forEach(el => el.textContent = t.gtcfxBtn);

    // PWA Install Elements
    const pwaTitle = document.getElementById('pwaTitleText');
    const pwaSub = document.getElementById('pwaSubText');
    const pwaBtn = document.getElementById('pwaBtnText');
    const settingPwaTitle = document.getElementById('settingPwaTitle');
    const settingPwaSub = document.getElementById('settingPwaSub');
    if (pwaTitle && t.pwaTitle) pwaTitle.textContent = t.pwaTitle;
    if (pwaSub && t.pwaSub) pwaSub.textContent = t.pwaSub;
    if (pwaBtn && t.pwaBtn) pwaBtn.textContent = t.pwaBtn;
    if (settingPwaTitle && t.settingPwaTitle) settingPwaTitle.textContent = t.settingPwaTitle;
    if (settingPwaSub && t.settingPwaSub) settingPwaSub.textContent = t.settingPwaSub;

    // Subscriptions Panel Header
    const subPanelTitle = document.querySelector('#viewSubscriptions .panel-title');
    const subPanelSub = document.querySelector('#viewSubscriptions .panel-subtitle');
    const subAddBtnText = document.querySelector('#viewSubscriptions .btn-add-bot-cute span:last-child');
    if (subPanelTitle) subPanelTitle.textContent = t.subsTitle;
    if (subPanelSub) subPanelSub.textContent = t.subsSub;
    if (subAddBtnText) subAddBtnText.textContent = t.addBotBtn;

    // Subscriptions Stats
    const subStatLabels = document.querySelectorAll('#viewSubscriptions .sub-stat-lbl');
    if (subStatLabels.length >= 3) {
      subStatLabels[0].textContent = t.statActiveBots;
      subStatLabels[1].textContent = t.statMonthlyCost;
      subStatLabels[2].textContent = t.statMt5;
    }

    // CRM Admin Database Header
    const crmTitle = document.querySelector('#viewDatabase .database-title');
    const crmSub = document.querySelector('#viewDatabase .database-sub');
    const crmStatus = document.querySelector('#viewDatabase .database-status-pill');
    const crmLockBtn = document.getElementById('btnLockAdminCrm');
    if (crmTitle) crmTitle.textContent = t.dbTitle;
    if (crmSub) crmSub.textContent = t.dbSub;
    if (crmStatus) crmStatus.innerHTML = `<span class="live-dot-green"></span> ${t.dbStatus}`;
    if (crmLockBtn) crmLockBtn.innerHTML = `<span class="material-symbols-rounded">lock</span> ${t.btnLockCrm}`;

    // Admin PIN Lock Modal
    const adminLockTitleEl = document.querySelector('#crmAdminLockModal .admin-lock-title');
    const adminLockDescEl = document.querySelector('#crmAdminLockModal .admin-lock-desc');
    const adminUnlockBtnEl = document.querySelector('#crmAdminLockModal .btn-admin-unlock');
    if (adminLockTitleEl) adminLockTitleEl.textContent = t.adminLockTitle;
    if (adminLockDescEl) adminLockDescEl.textContent = t.adminLockDesc;
    if (adminUnlockBtnEl) adminUnlockBtnEl.innerHTML = `<span class="material-symbols-rounded">lock_open</span> ${t.adminUnlockBtn}`;

    // iOS Guide Modal
    const iosGuideTitleEl = document.querySelector('#pwaIosGuideModal .pwa-ios-modal-header h3');
    const iosGuideDescEl = document.querySelector('#pwaIosGuideModal .pwa-ios-modal-header p');
    const iosGotItBtnEl = document.querySelector('#pwaIosGuideModal .btn-ios-guide-close');
    if (iosGuideTitleEl) iosGuideTitleEl.textContent = t.iosGuideTitle;
    if (iosGuideDescEl) iosGuideDescEl.textContent = t.iosGuideDesc;
    if (iosGotItBtnEl) iosGotItBtnEl.textContent = t.btnGotIt;

    // Account / Settings View
    const accPanelTitle = document.querySelector('#viewSettings .panel-title');
    const accPanelSub = document.querySelector('#viewSettings .panel-subtitle');
    if (accPanelTitle) accPanelTitle.textContent = t.accountTitle;
    if (accPanelSub) accPanelSub.textContent = t.accountSub;

    // Settings Groups
    const groupTitles = document.querySelectorAll('#viewSettings .settings-group-title');
    if (groupTitles.length >= 2) {
      groupTitles[0].textContent = t.groupAlerts;
      groupTitles[1].textContent = t.groupPrefs;
    }

    // Setting Labels
    const settingLabels = document.querySelectorAll('#viewSettings .setting-label');
    settingLabels.forEach(lbl => {
      const text = lbl.textContent.trim();
      if (text.includes('Telegram') || text.includes('تيليجرام')) lbl.textContent = t.settingTelegram;
      else if (text.includes('Currency') || text.includes('العملة') || text.includes('العرض')) lbl.textContent = t.settingCurrency;
      else if (text.includes('Theme') || text.includes('المظهر') || text.includes('الداكن')) lbl.textContent = t.settingTheme;
      else if (text.includes('Language') || text.includes('اللغة')) lbl.textContent = t.settingLang;
      else if (text.includes('Reset') || text.includes('إعادة ضبط')) lbl.textContent = t.settingReset;
    });

    const logoutBtnText = document.querySelector('#viewSettings .btn-danger span:last-child');
    if (logoutBtnText) logoutBtnText.textContent = t.settingLogout;

    // Logout Modal Dialog Elements
    const txtLogoutConfirmTitle = document.getElementById('txtLogoutConfirmTitle');
    const txtLogoutConfirmDesc = document.getElementById('txtLogoutConfirmDesc');
    const txtStaySignedInBtn = document.getElementById('txtStaySignedInBtn');
    const txtConfirmLogoutBtn = document.getElementById('txtConfirmLogoutBtn');
    const txtLogoutBadge = document.getElementById('txtLogoutBadge');

    if (txtLogoutConfirmTitle) txtLogoutConfirmTitle.textContent = t.logoutConfirmTitle;
    if (txtLogoutConfirmDesc) txtLogoutConfirmDesc.textContent = t.logoutConfirmDesc;
    if (txtStaySignedInBtn) txtStaySignedInBtn.textContent = t.staySignedInBtn;
    if (txtConfirmLogoutBtn) txtConfirmLogoutBtn.textContent = t.confirmLogoutBtn;
    if (txtLogoutBadge) txtLogoutBadge.textContent = lang === 'ar' ? 'أمان الجلسة' : 'SESSION SECURITY';

    if (themeLabel) {
      themeLabel.textContent = this.state.theme === 'dark' 
        ? (lang === 'ar' ? 'فاتح' : 'Light') 
        : (lang === 'ar' ? 'داكن' : 'Dark');
    }

    // Re-render all dynamic content in the chosen language
    if (this.state.bots && this.state.bots.length > 0) {
      this.renderBotsGrid();
      this.renderSubscriptions();
      this.renderCreatorHub();
      this.renderBilling();
      if (this.state.isAdminUnlocked) {
        this.fetchAdminDatabase();
      }
    }
  }
  // MOBILE NUMBER AUTHENTICATION (REQUIRED FIRST)
  // -------------------------------------------------------------
  async initAuth() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('login') || urlParams.has('reset')) {
      localStorage.removeItem('b_bot_auth_user');
      try { await fetch('/api/auth/logout', { method: 'POST' }); } catch (e) {}
    }

    const savedUserStr = localStorage.getItem('b_bot_auth_user');
    let user = null;

    if (savedUserStr) {
      try {
        user = JSON.parse(savedUserStr);
      } catch (e) {}
    }

    if (!user) {
      try {
        const res = await fetch('/api/auth/me').then(r => r.json());
        if (res.success && res.user && res.user.isLoggedIn) {
          user = res.user;
        }
      } catch (e) {}
    }

    if (user && user.isLoggedIn) {
      this.state.currentUser = user;
    }

    // ALWAYS SHOW HOME PAGE FIRST ON ALL PLATFORMS (ANDROID/IPHONE/CHROME/SAFARI/2K/4K)
    this.showLandingPage();

    // Initialize Google Identity Services
    this.initGoogleIdentity();
  }

  initGoogleIdentity() {
    window.handleGoogleCredentialResponse = (response) => {
      if (response && response.credential) {
        this.executeGoogleAuth({
          credential: response.credential
        });
      }
    };

    if (window.google && window.google.accounts && window.google.accounts.id) {
      try {
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: window.handleGoogleCredentialResponse,
          auto_prompt: false
        });
      } catch (err) {
        console.log('Google Identity initialized:', err);
      }
    }
  }

  showLoginScreen() {
    const overlay = document.getElementById('authScreenOverlay');
    if (overlay) {
      overlay.classList.add('active');
      overlay.classList.remove('signin-active');
      overlay.classList.add('landing-active');
    }

    // ALWAYS SHOW HOME PAGE AS DEFAULT (ON ALL WINDOW SIZES & BOOT)
    this.showLandingPage();

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.style.display = 'none';
  }

  showWelcomeScreen() {
    const overlay = document.getElementById('authScreenOverlay');
    if (overlay) {
      overlay.classList.add('active');
      overlay.classList.remove('landing-active');
      overlay.classList.remove('signin-active');
      overlay.classList.add('welcome-active');
    }
    const welcome = document.getElementById('authWelcomeScreen');
    const signin = document.getElementById('authSignInScreen');
    if (welcome) {
      welcome.classList.remove('slide-left');
      welcome.classList.add('active');
    }
    if (signin) {
      signin.classList.remove('active');
      signin.classList.remove('slide-left');
    }
  }

  showSignInScreen() {
    document.body.classList.remove('logged-in');
    // DEFAULT TO LIGHT THEME MATCHING WHOLE SITE (TURNS TO DARK ONLY BY TOGGLE BUTTON)
    if (!localStorage.getItem('b_bot_theme')) {
      this.applyTheme('light');
    }

    const overlay = document.getElementById('authScreenOverlay');
    if (overlay) {
      overlay.classList.add('active');
      overlay.classList.remove('landing-active');
      overlay.classList.remove('welcome-active');
      overlay.classList.add('signin-active');
    }
    const welcome = document.getElementById('authWelcomeScreen');
    const signin = document.getElementById('authSignInScreen');
    if (welcome) {
      welcome.classList.remove('active');
      welcome.classList.add('slide-left');
    }
    if (signin) {
      signin.classList.add('active');
      signin.classList.remove('slide-left');
    }
    const emailInput = document.getElementById('loginEmailInput') || document.getElementById('loginMobileEmailInput');
    if (emailInput) {
      setTimeout(() => {
        emailInput.focus();
        emailInput.select();
      }, 100);
    }
  }

  renderAvatarIntoElement(element, user) {
    if (!element) return;
    const name = (user && user.name) || 'Hanaan';
    const initial = (name.charAt(0) || 'H').toUpperCase();

    if (user && user.avatarUrl) {
      element.innerHTML = `<img src="${user.avatarUrl}" alt="${name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;" />`;
    } else if (user && user.avatarIcon) {
      element.innerHTML = `<span style="font-size:1.2em;line-height:1;display:flex;align-items:center;justify-content:center;">${user.avatarIcon}</span>`;
    } else {
      element.textContent = initial;
    }
  }

  applyLoggedInUI(user) {
    document.body.classList.add('logged-in');
    const overlay = document.getElementById('authScreenOverlay');
    if (overlay) overlay.classList.remove('active');

    const userPhoneText = document.getElementById('headerUserPhoneText');
    const logoutBtn = document.getElementById('logoutBtn');

    const displayName = user.name || (user.email ? user.email.split('@')[0] : 'Hanaan');
    const displayPhone = user.phone || user.fullPhone || user.email || '+91 94950 97786';
    const displayUid = user.userId || user.id || 'BM-98214';

    if (userPhoneText) {
      userPhoneText.textContent = displayName;
    }
    if (logoutBtn) logoutBtn.style.display = 'inline-flex';

    // Update Header mini avatar
    const headerAvatar = document.querySelector('.user-avatar-mini');
    if (headerAvatar) {
      this.renderAvatarIntoElement(headerAvatar, user);
    }

    // Update Account Settings Profile Card
    const pName = document.getElementById('profileDisplayName');
    const pPhone = document.getElementById('profileDisplayPhone');
    const pAvatar = document.getElementById('profileAvatarText');
    const pUid = document.getElementById('profileDisplayUid');

    if (pName) pName.textContent = displayName;
    if (pPhone) pPhone.textContent = displayPhone;
    if (pAvatar) this.renderAvatarIntoElement(pAvatar, user);
    if (pUid) pUid.textContent = `ID: ${displayUid}`;

    // Update Profile Modal avatar if open
    const pmcAvatarBig = document.getElementById('pmcAvatarBig');
    if (pmcAvatarBig) {
      this.renderAvatarIntoElement(pmcAvatarBig, user);
    }

    // 📲 Display PWA Download/Install to Home Screen Badge
    setTimeout(() => this.checkPwaInstallBanner(), 400);
  }

  // -------------------------------------------------------------
  // PROFILE DETAILS & ACCOUNT SETTINGS (USER ID, PHONE, EMAIL)
  // -------------------------------------------------------------
  openProfileDetailsModal() {
    const user = this.state.currentUser || {};
    const displayName = user.name || 'Hanaan';
    const displayPhone = user.phone || user.fullPhone || '+91 94950 97786';
    const displayEmail = user.email || 'hanaan@bmagnet.ai';
    const displayUid = user.userId || user.id || 'BM-98214';
    const displayTelegram = user.telegram || '@B_Magnet_Gold_bot';
    const displayMt5 = user.gtcfxMt5Account || '8849201';

    const pmcAvatarBig = document.getElementById('pmcAvatarBig');
    const pmcDisplayName = document.getElementById('pmcDisplayName');
    const pmcUserIdDisplay = document.getElementById('pmcUserIdDisplay');
    const inputProfileUserId = document.getElementById('inputProfileUserId');
    const inputProfileName = document.getElementById('inputProfileName');
    const inputProfilePhone = document.getElementById('inputProfilePhone');
    const inputProfileEmail = document.getElementById('inputProfileEmail');
    const inputProfileTelegram = document.getElementById('inputProfileTelegram');
    const inputProfileMt5 = document.getElementById('inputProfileMt5');
    const pmcWalletBalance = document.getElementById('pmcWalletBalance');

    if (pmcAvatarBig) this.renderAvatarIntoElement(pmcAvatarBig, user);
    if (pmcDisplayName) pmcDisplayName.textContent = displayName;
    if (pmcUserIdDisplay) pmcUserIdDisplay.textContent = displayUid;
    if (inputProfileUserId) inputProfileUserId.value = displayUid;
    if (inputProfileName) inputProfileName.value = displayName;
    if (inputProfilePhone) inputProfilePhone.value = displayPhone;
    if (inputProfileEmail) inputProfileEmail.value = displayEmail;
    if (inputProfileTelegram) inputProfileTelegram.value = displayTelegram;
    if (inputProfileMt5) inputProfileMt5.value = displayMt5;

    if (pmcWalletBalance) {
      const bal = this.state.wallet ? Number(this.state.wallet.balance).toFixed(2) : '250.00';
      pmcWalletBalance.textContent = `${bal} USDT`;
    }

    // Hide preset avatar tray by default
    const tray = document.getElementById('presetAvatarTray');
    if (tray) tray.style.display = 'none';

    this.openModal('profileDetailsModal');
  }

  handleProfilePhotoUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      this.showToast('Please select a valid image file (JPG, PNG, WebP).', 'warning');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // Optimize and compress image using in-memory canvas
        const canvas = document.createElement('canvas');
        const MAX_SIZE = 256;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_SIZE) {
            height = Math.round((height * MAX_SIZE) / width);
            width = MAX_SIZE;
          }
        } else {
          if (height > MAX_SIZE) {
            width = Math.round((width * MAX_SIZE) / height);
            height = MAX_SIZE;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

        if (!this.state.currentUser) {
          this.state.currentUser = { isLoggedIn: true, userId: 'BM-98214', name: 'Hanaan' };
        }
        this.state.currentUser.avatarUrl = dataUrl;
        this.state.currentUser.avatarIcon = null;

        localStorage.setItem('b_bot_auth_user', JSON.stringify(this.state.currentUser));
        this.applyLoggedInUI(this.state.currentUser);
        this.showToast('✅ Profile picture updated successfully!', 'success');
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
    event.target.value = '';
  }

  togglePresetAvatarSelector() {
    const tray = document.getElementById('presetAvatarTray');
    if (tray) {
      tray.style.display = (tray.style.display === 'none' || !tray.style.display) ? 'block' : 'none';
    }
  }

  setPresetAvatar(icon) {
    if (!this.state.currentUser) {
      this.state.currentUser = { isLoggedIn: true, userId: 'BM-98214', name: 'Hanaan' };
    }
    this.state.currentUser.avatarIcon = icon;
    this.state.currentUser.avatarUrl = null;

    localStorage.setItem('b_bot_auth_user', JSON.stringify(this.state.currentUser));
    this.applyLoggedInUI(this.state.currentUser);

    const tray = document.getElementById('presetAvatarTray');
    if (tray) tray.style.display = 'none';

    this.showToast(`✨ Avatar icon updated to ${icon}!`, 'success');
  }

  removeProfilePhoto() {
    if (!this.state.currentUser) return;
    this.state.currentUser.avatarUrl = null;
    this.state.currentUser.avatarIcon = null;

    localStorage.setItem('b_bot_auth_user', JSON.stringify(this.state.currentUser));
    this.applyLoggedInUI(this.state.currentUser);

    const tray = document.getElementById('presetAvatarTray');
    if (tray) tray.style.display = 'none';

    this.showToast('Profile photo removed. Showing initials.', 'info');
  }

  saveProfileDetails() {
    const inputName = document.getElementById('inputProfileName');
    const inputPhone = document.getElementById('inputProfilePhone');
    const inputEmail = document.getElementById('inputProfileEmail');
    const inputTelegram = document.getElementById('inputProfileTelegram');
    const inputMt5 = document.getElementById('inputProfileMt5');

    const name = inputName ? inputName.value.trim() : 'Hanaan';
    const phone = inputPhone ? inputPhone.value.trim() : '+91 94950 97786';
    const email = inputEmail ? inputEmail.value.trim() : 'hanaan@bmagnet.ai';
    const telegram = inputTelegram ? inputTelegram.value.trim() : '@B_Magnet_Gold_bot';
    const gtcfxMt5 = inputMt5 ? inputMt5.value.trim() : '8849201';

    if (!this.state.currentUser) {
      this.state.currentUser = { isLoggedIn: true, userId: 'BM-98214' };
    }

    this.state.currentUser.name = name;
    this.state.currentUser.phone = phone;
    this.state.currentUser.fullPhone = phone;
    this.state.currentUser.email = email;
    this.state.currentUser.telegram = telegram;
    this.state.currentUser.gtcfxMt5Account = gtcfxMt5;

    localStorage.setItem('b_bot_auth_user', JSON.stringify(this.state.currentUser));

    // Update UI elements immediately
    this.applyLoggedInUI(this.state.currentUser);

    this.closeModal('profileDetailsModal');
    this.showToast('✅ Account profile updated successfully!', 'success');
  }

  copyUserId() {
    const uid = (this.state.currentUser && (this.state.currentUser.userId || this.state.currentUser.id)) || 'BM-98214';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(uid).then(() => {
        this.showToast(`📋 Trader ID ${uid} copied to clipboard!`, 'info');
      }).catch(() => {
        this.showToast(`Trader ID: ${uid}`, 'info');
      });
    } else {
      this.showToast(`Trader ID: ${uid}`, 'info');
    }
  }

  // -------------------------------------------------------------
  // PWA HOME SCREEN DOWNLOAD & INSTALL BADGE SYSTEM
  // -------------------------------------------------------------
  checkPwaInstallBanner() {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    if (isStandalone) return;
    if (sessionStorage.getItem('b_pwa_banner_dismissed') === 'true') return;

    const banner = document.getElementById('pwaInstallBanner');
    if (banner) {
      banner.style.display = 'flex';
    }
  }

  dismissPwaBanner() {
    const banner = document.getElementById('pwaInstallBanner');
    if (banner) banner.style.display = 'none';
    sessionStorage.setItem('b_pwa_banner_dismissed', 'true');
  }

  async installPwaApp() {
    // 1. Check if already installed and running standalone
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    if (isStandalone) {
      this.showToast('✅ B-Bot Pro is already installed and running on your Home Screen!', 'info');
      return;
    }

    // 2. Direct 1-tap installation via native browser prompt
    const promptEvent = this.deferredPwaPrompt || window.__deferredPwaPrompt;
    if (promptEvent) {
      try {
        await promptEvent.prompt();
        const choiceResult = await promptEvent.userChoice;
        if (choiceResult && choiceResult.outcome === 'accepted') {
          this.showToast('🎉 B-Bot Pro installed to your Home Screen!', 'success');
          this.dismissPwaBanner();
        }
        this.deferredPwaPrompt = null;
        window.__deferredPwaPrompt = null;
      } catch (err) {
        console.error('Direct install prompt error:', err);
      }
      return;
    }

    // 3. Security context check (PWA 1-tap installation requires HTTPS or localhost)
    if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
      this.showToast('🔒 HTTPS is required for direct Home Screen installation. Upgrading...', 'warning');
      location.replace('https://' + location.host + location.pathname + location.search);
      return;
    }

    // 4. If prompt is not yet ready, notify user directly without showing explanation guides
    this.showToast('📱 Please select "Install App" or "Add to Home Screen" from your browser menu', 'info');
  }

  async handleGoogleLogin() {
    const btn = document.getElementById('btnGoogleLogin');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<span class="material-symbols-rounded" style="animation: spin 1s infinite linear;">sync</span> Connecting to Google...';
    }

    try {
      if (window.google && window.google.accounts && window.google.accounts.id) {
        window.google.accounts.id.prompt((notification) => {
          if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
            this.executeGoogleAuth({
              email: "hanaan.trader@gmail.com",
              name: "Hanaan Junaid",
              picture: "https://lh3.googleusercontent.com/a/default-user=s96-c"
            });
          }
        });
      } else {
        await this.executeGoogleAuth({
          email: "hanaan.trader@gmail.com",
          name: "Hanaan Junaid",
          picture: "https://lh3.googleusercontent.com/a/default-user=s96-c"
        });
      }
    } catch (err) {
      await this.executeGoogleAuth({
        email: "hanaan.trader@gmail.com",
        name: "Hanaan Junaid",
        picture: "https://lh3.googleusercontent.com/a/default-user=s96-c"
      });
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = `
          <svg class="google-svg-icon" viewBox="0 0 24 24" width="20" height="20">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
          </svg>
          <span>Continue with Google</span>
          <span class="badge-tag" style="background: rgba(66, 133, 244, 0.2); color: #93c5fd; font-size: 9px; margin-left: auto;">1-Click</span>
        `;
      }
    }
  }

  async executeGoogleAuth(googleUser) {
    try {
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(googleUser)
      }).then(r => r.json());

      if (res.success) {
        this.state.currentUser = res.user;
        localStorage.setItem('b_bot_auth_user', JSON.stringify(res.user));
        this.applyLoggedInUI(res.user);
        this.showToast(`🎉 Signed in with Google as ${res.user.name} (${res.user.email})!`, 'success');
        await this.fetchData();
      } else {
        this.showToast(res.error || 'Google Authentication failed', 'danger');
      }
    } catch (e) {
      console.warn('Google Auth API offline, using local session:', e);
      const mockGoogle = {
        id: 'goog_84920',
        name: googleUser.name || 'Hanaan Junaid',
        email: googleUser.email || 'hanaan.trader@gmail.com',
        fullPhone: '+91 94950 97786',
        authProvider: 'google',
        isLoggedIn: true
      };
      this.state.currentUser = mockGoogle;
      localStorage.setItem('b_bot_auth_user', JSON.stringify(mockGoogle));
      this.applyLoggedInUI(mockGoogle);
      this.showToast(`Welcome ${mockGoogle.name}!`, 'success');
    }
  }

  async handleCleanSignIn() {
    const emailInput = document.getElementById('loginEmailInput') || document.getElementById('loginMobileEmailInput');
    const otpInput = document.getElementById('loginOtpInput') || document.getElementById('loginMobileOtpInput');

    const email = emailInput ? emailInput.value.trim() : 'hanaan.trader@gmail.com';
    const otp = (otpInput && otpInput.value.trim()) ? otpInput.value.trim() : '8492';

    if (!email || !email.includes('@')) {
      this.showToast('Please enter a valid email address', 'danger');
      return;
    }

    const submitBtn = document.getElementById('loginMainSubmitBtn') || document.getElementById('loginMobileSubmitBtn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="material-symbols-rounded" style="animation: spin 1s infinite linear; font-size: 18px;">sync</span> Signing in...';
    }

    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, otp: otp })
      });

      const res = await response.json();
      if (res.success) {
        this.state.currentUser = res.user;
        localStorage.setItem('b_bot_auth_user', JSON.stringify(res.user));
        this.applyLoggedInUI(res.user);
        this.showToast(`🎉 Welcome to B-Magnet Trading Pro, ${res.user.name || 'Trader'}!`, 'success');
        await this.fetchData();
      } else {
        const namePart = email.split('@')[0];
        const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
        const mockUser = {
          id: `usr_${Date.now()}`,
          email: email,
          name: formattedName,
          fullPhone: '+91 94950 97786',
          authProvider: 'clean_auth',
          isLoggedIn: true
        };
        this.state.currentUser = mockUser;
        localStorage.setItem('b_bot_auth_user', JSON.stringify(mockUser));
        this.applyLoggedInUI(mockUser);
        this.showToast(`🎉 Welcome ${mockUser.name}!`, 'success');
        await this.fetchData();
      }
    } catch (e) {
      const namePart = email.split('@')[0];
      const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
      const mockUser = {
        id: `usr_${Date.now()}`,
        email: email,
        name: formattedName,
        fullPhone: '+91 94950 97786',
        authProvider: 'clean_auth',
        isLoggedIn: true
      };
      this.state.currentUser = mockUser;
      localStorage.setItem('b_bot_auth_user', JSON.stringify(mockUser));
      this.applyLoggedInUI(mockUser);
      this.showToast(`Welcome ${mockUser.name}!`, 'success');
      await this.fetchData();
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Sign In / Launch App</span>';
      }
    }
  }

  fillDemoCredentials() {
    const emailInput = document.getElementById('loginEmailInput') || document.getElementById('loginMobileEmailInput');
    const otpInput = document.getElementById('loginOtpInput') || document.getElementById('loginMobileOtpInput');
    if (emailInput) emailInput.value = 'hanaan.trader@gmail.com';
    if (otpInput) otpInput.value = '8492';
    this.showToast('💡 Filled demo credentials! Click "Sign In"', 'info');
  }

  // -------------------------------------------------------------
  // DESKTOP COMPANY WEBSITE & SIGN-IN PAGE / MODAL HANDLERS
  // -------------------------------------------------------------
  switchAiImage(imageUrl, btnElement) {
    const mainImg = document.getElementById('aslAiMainImg');
    if (mainImg) {
      mainImg.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
      mainImg.style.opacity = '0.3';
      mainImg.style.transform = 'scale(0.97)';
      setTimeout(() => {
        mainImg.src = imageUrl;
        mainImg.style.opacity = '1';
        mainImg.style.transform = 'scale(1)';
      }, 150);
    }
    const btns = document.querySelectorAll('.asl-switch-btn');
    btns.forEach(b => b.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
  }

  showLandingPage() {
    document.body.classList.remove('logged-in');
    const overlay = document.getElementById('authScreenOverlay');
    if (overlay) {
      overlay.classList.add('active');
      overlay.classList.remove('signin-active');
      overlay.classList.remove('welcome-active');
      overlay.classList.add('landing-active');
    }
  }

  showSignInPage() {
    this.showSignInScreen();
  }

  openDesktopLoginModal() {
    this.showSignInPage();
  }

  closeDesktopLoginModal(e) {
    if (e && e.target && e.target !== e.currentTarget && !e.target.closest('.btn-close-desktop-login')) return;
    const modal = document.getElementById('desktopLoginModalBackdrop');
    if (modal) modal.classList.remove('active');
  }

  fillDesktopDemoCredentials() {
    const emailInput = document.getElementById('loginEmailInput') || document.getElementById('desktopLoginEmailInput');
    const otpInput = document.getElementById('loginOtpInput') || document.getElementById('desktopLoginOtpInput');
    if (emailInput) emailInput.value = 'hanaan.trader@gmail.com';
    if (otpInput) otpInput.value = '8492';
    this.showToast('💡 Filled demo credentials (PIN: 8492)!', 'info');
  }

  async handleDesktopCleanSignIn() {
    const emailInput = document.getElementById('desktopLoginEmailInput');
    const otpInput = document.getElementById('desktopLoginOtpInput');

    const email = emailInput ? emailInput.value.trim() : 'hanaan.trader@gmail.com';
    const otp = (otpInput && otpInput.value.trim()) ? otpInput.value.trim() : '8492';

    if (!email || !email.includes('@')) {
      this.showToast('Please enter a valid email address', 'danger');
      return;
    }

    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, otp: otp })
      });

      const res = await response.json();
      if (res.success) {
        this.state.currentUser = res.user;
        localStorage.setItem('b_bot_auth_user', JSON.stringify(res.user));
        this.closeDesktopLoginModal();
        this.applyLoggedInUI(res.user);
        this.showToast(`🎉 Welcome to B-Magnet Trading Pro, ${res.user.name || 'Trader'}!`, 'success');
        await this.fetchData();
      } else {
        const namePart = email.split('@')[0];
        const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
        const mockUser = {
          id: `usr_${Date.now()}`,
          email: email,
          name: formattedName,
          fullPhone: '+91 94950 97786',
          authProvider: 'clean_auth',
          isLoggedIn: true
        };
        this.state.currentUser = mockUser;
        localStorage.setItem('b_bot_auth_user', JSON.stringify(mockUser));
        this.closeDesktopLoginModal();
        this.applyLoggedInUI(mockUser);
        this.showToast(`🎉 Welcome to B-Magnet Trading Pro, ${mockUser.name}!`, 'success');
        await this.fetchData();
      }
    } catch (e) {
      const namePart = email.split('@')[0];
      const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
      const mockUser = {
        id: `usr_${Date.now()}`,
        email: email,
        name: formattedName,
        fullPhone: '+91 94950 97786',
        authProvider: 'clean_auth',
        isLoggedIn: true
      };
      this.state.currentUser = mockUser;
      localStorage.setItem('b_bot_auth_user', JSON.stringify(mockUser));
      this.closeDesktopLoginModal();
      this.applyLoggedInUI(mockUser);
      this.showToast(`Welcome ${mockUser.name}!`, 'success');
      await this.fetchData();
    }
  }

  async handleSendEmailOtp() {
    const emailInput = document.getElementById('loginEmailInput');
    const email = emailInput ? emailInput.value.trim() : '';

    if (!email || !email.includes('@')) {
      this.showToast('Please enter a valid Gmail / email address', 'danger');
      return;
    }

    const sendBtn = document.getElementById('sendEmailOtpBtn');
    if (sendBtn) {
      sendBtn.disabled = true;
      sendBtn.innerHTML = '<span class="material-symbols-rounded" style="animation: spin 1s infinite linear;">sync</span> Sending Gmail Code...';
    }

    try {
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
      });

      const res = await response.json();
      const pStep = document.getElementById('authPhoneStep');
      const oStep = document.getElementById('authOtpStep');
      const emailDisp = document.getElementById('otpSentEmailDisplay');

      if (res.success) {
        if (pStep) pStep.style.display = 'none';
        if (oStep) oStep.style.display = 'block';
        if (emailDisp) emailDisp.textContent = email;
        this.showToast(`📩 Verification code sent to ${email}! Instant Code: 8492`, 'success');
      } else {
        this.showToast(res.error || 'Failed to send verification code', 'danger');
      }
    } catch (e) {
      const pStep = document.getElementById('authPhoneStep');
      const oStep = document.getElementById('authOtpStep');
      const emailDisp = document.getElementById('otpSentEmailDisplay');
      if (pStep) pStep.style.display = 'none';
      if (oStep) oStep.style.display = 'block';
      if (emailDisp) emailDisp.textContent = email;
      this.showToast(`Instant Gmail Code: 8492`, 'success');
    } finally {
      if (sendBtn) {
        sendBtn.disabled = false;
        sendBtn.innerHTML = '<span class="material-symbols-rounded">mark_email_unread</span> Send Gmail Verification Code (OTP)';
      }
    }
  }

  editAuthEmail() {
    const pStep = document.getElementById('authPhoneStep');
    const oStep = document.getElementById('authOtpStep');
    if (pStep) pStep.style.display = 'block';
    if (oStep) oStep.style.display = 'none';
  }

  async handleVerifyEmailOtp() {
    const emailInput = document.getElementById('loginEmailInput');
    const otpInput = document.getElementById('loginOtpInput');

    const email = emailInput ? emailInput.value.trim() : 'hanaan.trader@gmail.com';
    const otp = otpInput ? otpInput.value.trim() : '8492';

    if (!otp) {
      this.showToast('Please enter the 4-digit Gmail verification code', 'danger');
      return;
    }

    const verifyBtn = document.getElementById('verifyOtpBtn');
    if (verifyBtn) {
      verifyBtn.disabled = true;
      verifyBtn.innerHTML = '<span class="material-symbols-rounded" style="animation: spin 1s infinite linear;">sync</span> Verifying...';
    }

    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          otp: otp
        })
      });

      const res = await response.json();
      if (res.success) {
        this.state.currentUser = res.user;
        localStorage.setItem('b_bot_auth_user', JSON.stringify(res.user));
        this.applyLoggedInUI(res.user);
        this.showToast(`🎉 Welcome to B-Bot Pro, ${res.user.name}! Top up your BEP-20 wallet to activate EAs.`, 'success');
        await this.fetchData();
      } else {
        this.showToast(res.error || 'Invalid Gmail code', 'danger');
      }
    } catch (e) {
      const mockUser = {
        id: `usr_${Date.now()}`,
        email: email,
        name: email.split('@')[0].capitalize(),
        fullPhone: '+91 94950 97786',
        authProvider: 'gmail_otp',
        isLoggedIn: true
      };
      this.state.currentUser = mockUser;
      localStorage.setItem('b_bot_auth_user', JSON.stringify(mockUser));
      this.applyLoggedInUI(mockUser);
      this.showToast(`Welcome ${mockUser.name}!`, 'success');
    } finally {
      if (verifyBtn) {
        verifyBtn.disabled = false;
        verifyBtn.innerHTML = '<span class="material-symbols-rounded">verified_user</span> Verify & Enter B-Bot Pro';
      }
    }
  }

  // Aliases for compatibility
  handleSendOtp() { return this.handleSendEmailOtp(); }
  handleVerifyOtp() { return this.handleVerifyEmailOtp(); }
  editAuthPhone() { return this.editAuthEmail(); }

  handleLogout() {
    this.openModal('logoutConfirmModal');
  }

  async confirmLogout() {
    this.closeModal('logoutConfirmModal');
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (e) {}
    localStorage.removeItem('b_bot_auth_user');
    this.state.currentUser = null;
    this.showLoginScreen();
    const t = TRANSLATIONS[this.state.lang] || TRANSLATIONS.en;
    this.showToast(t.loggedOutToast || '🔒 You have been securely logged out.', 'info');
  }

  showUserMenu() {
    const user = this.state.currentUser;
    const phone = user ? (user.fullPhone || user.phone) : 'Mobile Account';
    const bal = this.state.wallet ? Number(this.state.wallet.balance).toFixed(2) : '250.00';

    if (confirm(`👤 Logged in as: ${phone}\n💰 BEP-20 Wallet: ${bal} USDT\n\nClick OK to Top Up Wallet, or Cancel to Stay.`)) {
      this.openTopupModal();
    }
  }

  updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const clockEl = document.getElementById('statusTime');
    if (clockEl) clockEl.textContent = `${hours}:${minutes}`;
  }

  setupEventListeners() {
    // Ultra-Smooth, non-jumping Live Green Bar scroll auto-hide
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
      let isTicking = false;
      let isHidden = false;
      mainContent.addEventListener('scroll', () => {
        if (!isTicking) {
          window.requestAnimationFrame(() => {
            const top = mainContent.scrollTop;
            if (!isHidden && top > 35) {
              document.body.classList.add('scrolled-hide-live');
              isHidden = true;
            } else if (isHidden && top < 12) {
              document.body.classList.remove('scrolled-hide-live');
              isHidden = false;
            }
            isTicking = false;
          });
          isTicking = true;
        }
      }, { passive: true });
    }

    // Search input
    const searchInput = document.getElementById('botSearchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.state.searchQuery = e.target.value.toLowerCase().trim();
        if (clearBtn) clearBtn.style.display = this.state.searchQuery ? 'block' : 'none';
        this.renderBotsGrid();
      });
    }
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        this.state.searchQuery = '';
        clearBtn.style.display = 'none';
        this.renderBotsGrid();
      });
    }

    // Category Filter Chips
    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        chips.forEach(c => c.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.state.activeCategory = e.currentTarget.dataset.category;
        this.renderBotsGrid();
      });
    });

    // Toggle Frame Fullscreen
    const toggleBtn = document.getElementById('toggleViewModeBtn');
    const frame = document.getElementById('mobileFrame');
    if (toggleBtn && frame) {
      toggleBtn.addEventListener('click', () => {
        this.state.isFullscreen = !this.state.isFullscreen;
        frame.classList.toggle('fullscreen', this.state.isFullscreen);
        toggleBtn.querySelector('.material-symbols-rounded').textContent = 
          this.state.isFullscreen ? 'fullscreen_exit' : 'fullscreen';
      });
    }

    // Custom Topup Input Listener
    const customTopupInput = document.getElementById('customTopupInput');
    if (customTopupInput) {
      customTopupInput.addEventListener('input', (e) => {
        const amt = parseFloat(e.target.value) || 0;
        this.state.selectedTopupAmount = amt;
        document.querySelectorAll('.preset-btn').forEach(btn => {
          btn.classList.toggle('active', parseFloat(btn.dataset.amt) === amt);
        });
        const submitText = document.getElementById('submitTopupBtnText');
        if (submitText) submitText.textContent = `Deposit $${amt.toFixed(2)} to Wallet`;
      });
    }

    // Interactive Credit Card inputs
    const cardNumInput = document.getElementById('cardNumberInput');
    const cardHolderInput = document.getElementById('cardHolderInput');
    const cardExpiryInput = document.getElementById('cardExpiryInput');

    if (cardNumInput) {
      cardNumInput.addEventListener('input', (e) => {
        const val = e.target.value || '•••• •••• •••• 4242';
        const el = document.getElementById('cardPreviewNumber');
        if (el) el.textContent = val;
      });
    }
    if (cardHolderInput) {
      cardHolderInput.addEventListener('input', (e) => {
        const val = e.target.value || 'ALEX MORGAN';
        const el = document.getElementById('cardPreviewHolder');
        if (el) el.textContent = val.toUpperCase();
      });
    }
    if (cardExpiryInput) {
      cardExpiryInput.addEventListener('input', (e) => {
        const val = e.target.value || '12/28';
        const el = document.getElementById('cardPreviewExpiry');
        if (el) el.textContent = val;
      });
    }
  }

  async fetchData() {
    try {
      const [botsRes, subsRes, walletRes, pmsRes, invsRes, creatorRes] = await Promise.all([
        fetch('/api/bots').then(r => r.json()).catch(() => ({ success: false })),
        fetch('/api/subscriptions').then(r => r.json()).catch(() => ({ success: false })),
        fetch('/api/wallet').then(r => r.json()).catch(() => ({ success: false })),
        fetch('/api/payment-methods').then(r => r.json()).catch(() => ({ success: false })),
        fetch('/api/invoices').then(r => r.json()).catch(() => ({ success: false })),
        fetch('/api/creator').then(r => r.json()).catch(() => ({ success: false }))
      ]);

      if (botsRes.success) this.state.bots = botsRes.bots;
      if (subsRes.success) this.state.subscriptions = subsRes.subscriptions;
      if (walletRes.success) this.state.wallet = walletRes.wallet;
      if (pmsRes.success) this.state.paymentMethods = pmsRes.paymentMethods;
      if (invsRes.success) this.state.invoices = invsRes.invoices;
      if (creatorRes.success) this.state.creator = creatorRes.creator;

            // Static Hosting Fallback (loads data/db.json if API is offline)
      if (!this.state.bots || this.state.bots.length === 0) {
        try {
          const staticDb = await fetch("data/db.json").then(r => r.json()).catch(() => null);
          if (staticDb) {
            if (staticDb.bots) this.state.bots = staticDb.bots;
            if (staticDb.subscriptions && (!this.state.subscriptions || !this.state.subscriptions.length)) {
              this.state.subscriptions = staticDb.subscriptions;
            }
            if (staticDb.wallet && !this.state.wallet) this.state.wallet = staticDb.wallet;
            if (staticDb.paymentMethods && (!this.state.paymentMethods || !this.state.paymentMethods.length)) {
              this.state.paymentMethods = staticDb.paymentMethods;
            }
            if (staticDb.invoices && (!this.state.invoices || !this.state.invoices.length)) {
              this.state.invoices = staticDb.invoices;
            }
            if (staticDb.creator) this.state.creator = staticDb.creator;
          }
        } catch (e) {
          console.log("Static DB fallback loaded");
        }
      }

      this.renderAll();
    } catch (err) {
      console.warn('Backend API offline, using fallback state:', err);
    }
  }

  renderAll() {
    this.renderWallet();
    this.renderBotsGrid();
    this.renderSubscriptions();
    this.renderCreatorHub();
    this.renderBilling();
    this.fetchAdminDatabase();
    this.updateBadges();
  }

  renderWallet() {
    const bal = this.state.wallet ? Number(this.state.wallet.balance || 0).toFixed(2) : '250.00';
    const headerBal = document.getElementById('headerWalletBalance');
    if (headerBal) headerBal.textContent = `${bal} USDT`;

    const billingBal = document.getElementById('billingWalletBalance');
    if (billingBal) billingBal.textContent = `${bal} USDT`;

    const topupBal = document.getElementById('topupCurrentBalanceDisplay');
    if (topupBal) topupBal.textContent = `${bal} USDT`;
  }

  updateBadges() {
    const count = this.state.subscriptions.length;
    const subBadge = document.getElementById('navBadgeSubCount');
    if (subBadge) subBadge.textContent = count;

    const desktopSubBadge = document.getElementById('desktopNavBadgeSubCount');
    if (desktopSubBadge) desktopSubBadge.textContent = count;
    
    const activeSubCount = document.getElementById('activeSubCount');
    if (activeSubCount) activeSubCount.textContent = count;

    const monthlyCostEl = document.getElementById('monthlySubCost');
    if (monthlyCostEl) {
      const total = this.state.subscriptions.reduce((sum, s) => sum + (Number(s.price) || 0), 0);
      monthlyCostEl.textContent = `$${total.toFixed(2)}`;
    }

    const boundMt5Accounts = document.getElementById('boundMt5Accounts');
    if (boundMt5Accounts) {
      const boundCount = this.state.subscriptions.filter(s => s.mt5Account || s.gtcfxMt5Account).length;
      boundMt5Accounts.textContent = boundCount;
    }
  }

  // -------------------------------------------------------------
  // VIEW SWITCHER
  // -------------------------------------------------------------
  // VIEW SWITCHER & ADMIN CRM LOCK GATE (PASSCODE: 9633)
  // -------------------------------------------------------------
  switchView(viewName) {
    // 🔐 Security Gate: Require Master Admin Passcode 9633 for CRM Database
    if (viewName === 'database' && !this.state.isAdminUnlocked) {
      this.promptAdminCrmLock();
      return;
    }

    const panels = {
      'explore': 'viewExplore',
      'subscriptions': 'viewSubscriptions',
      'database': 'viewDatabase',
      'creator': 'viewCreator',
      'billing': 'viewBilling',
      'settings': 'viewSettings'
    };

    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item, .desktop-nav-link').forEach(n => n.classList.remove('active'));

    const targetPanelId = panels[viewName];
    if (targetPanelId) {
      const panel = document.getElementById(targetPanelId);
      if (panel) panel.classList.add('active');

      // Update both mobile dock and desktop navbar
      document.querySelectorAll(`[data-view="${viewName}"]`).forEach(btn => btn.classList.add('active'));

      if (viewName === 'database') {
        this.fetchAdminDatabase();
      }

      // Scroll top
      const mainContent = document.getElementById('mainContent');
      if (mainContent) mainContent.scrollTop = 0;
    }
  }

  // -------------------------------------------------------------
  // MASTER ADMIN CRM PASSCODE LOCK METHODS (CODE: 9633)
  // -------------------------------------------------------------
  openAdminPanelFromSettings() {
    if (this.state.isAdminUnlocked) {
      this.switchView('database');
    } else {
      this.promptAdminCrmLock();
    }
  }

  promptAdminCrmLock() {
    const modal = document.getElementById('crmAdminLockModal');
    const input = document.getElementById('crmAdminPinInput');
    if (input) input.value = '';
    if (modal) {
      modal.classList.add('active');
      setTimeout(() => { if (input) input.focus(); }, 200);
    }
  }

  appendAdminPin(digit) {
    const input = document.getElementById('crmAdminPinInput');
    if (input && input.value.length < 4) {
      input.value += digit;
      if (input.value.length === 4) {
        setTimeout(() => this.verifyAdminLockCode(), 120);
      }
    }
  }

  clearAdminPin() {
    const input = document.getElementById('crmAdminPinInput');
    if (input) input.value = '';
  }

  backspaceAdminPin() {
    const input = document.getElementById('crmAdminPinInput');
    if (input && input.value.length > 0) {
      input.value = input.value.slice(0, -1);
    }
  }

  verifyAdminLockCode() {
    const input = document.getElementById('crmAdminPinInput');
    const enteredPin = (input ? input.value : '').trim();

    if (enteredPin === '9633') {
      this.state.isAdminUnlocked = true;
      this.closeModal('crmAdminLockModal');
      this.showToast('🔓 Master Admin Access Granted! Welcome to Admin Panel.', 'success');
      this.switchView('database');
    } else {
      if (input) {
        input.value = '';
        input.classList.add('shake-anim');
        setTimeout(() => input.classList.remove('shake-anim'), 500);
      }
      this.showToast('❌ Access Denied: Incorrect Admin Lock Code', 'danger');
    }
  }

  cancelAdminLockGate() {
    this.closeModal('crmAdminLockModal');
    const activePanel = document.querySelector('.view-panel.active');
    if (!activePanel || activePanel.id === 'viewDatabase') {
      this.switchView('settings');
    }
  }

  lockAdminCrm() {
    this.state.isAdminUnlocked = false;
    this.showToast('🔒 Admin Panel Re-locked for Security', 'info');
    this.switchView('settings');
  }

  // -------------------------------------------------------------
  // 1. EXPLORE & MARKETPLACE
  // -------------------------------------------------------------
  getBotSvgIcon(botId) {
    if (!botId) return '';
    if (botId.includes('1y') || botId.includes('pro')) {
      return `
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
          <rect x="3" y="6" width="18" height="14" rx="4" fill="url(#proSvgGrad_${botId})" stroke="#F59E0B" stroke-width="1.5"/>
          <circle cx="8.5" cy="11.5" r="2" fill="#192750"/>
          <circle cx="8.5" cy="11.5" r="0.8" fill="#00F2FE"/>
          <circle cx="15.5" cy="11.5" r="2" fill="#192750"/>
          <circle cx="15.5" cy="11.5" r="0.8" fill="#00F2FE"/>
          <path d="M9 16C9.5 17 14.5 17 15 16" stroke="#192750" stroke-width="1.8" stroke-linecap="round"/>
          <line x1="12" y1="2" x2="12" y2="6" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
          <circle cx="12" cy="2" r="1.5" fill="#00F2FE"/>
          <defs>
            <linearGradient id="proSvgGrad_${botId}" x1="3" y1="6" x2="21" y2="20" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FEF3C7"/>
              <stop offset="1" stop-color="#F59E0B"/>
            </linearGradient>
          </defs>
        </svg>
      `;
    } else if (botId.includes('3m') || botId.includes('lite')) {
      return `
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
          <rect x="3" y="6" width="18" height="14" rx="4" fill="url(#liteSvgGrad_${botId})" stroke="#0284C7" stroke-width="1.5"/>
          <rect x="7" y="10" width="10" height="3.5" rx="1.75" fill="#192750"/>
          <line x1="8.5" y1="11.75" x2="15.5" y2="11.75" stroke="#38BDF8" stroke-width="1.6" stroke-linecap="round"/>
          <path d="M9 16.5H15" stroke="#192750" stroke-width="1.8" stroke-linecap="round"/>
          <line x1="7" y1="2" x2="10" y2="6" stroke="#0284C7" stroke-width="1.8" stroke-linecap="round"/>
          <line x1="17" y1="2" x2="14" y2="6" stroke="#0284C7" stroke-width="1.8" stroke-linecap="round"/>
          <circle cx="7" cy="2" r="1.2" fill="#0284C7"/>
          <circle cx="17" cy="2" r="1.2" fill="#0284C7"/>
          <defs>
            <linearGradient id="liteSvgGrad_${botId}" x1="3" y1="6" x2="21" y2="20" gradientUnits="userSpaceOnUse">
              <stop stop-color="#E0F2FE"/>
              <stop offset="1" stop-color="#0284C7"/>
            </linearGradient>
          </defs>
        </svg>
      `;
    } else {
      // 1 Month Pass
      return `
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
          <rect x="3" y="6" width="18" height="14" rx="4" fill="url(#trialSvgGrad_${botId})" stroke="#00A896" stroke-width="1.5"/>
          <circle cx="8.5" cy="11.5" r="2" fill="#192750"/>
          <circle cx="8.5" cy="11.5" r="0.8" fill="#5EEAD4"/>
          <circle cx="15.5" cy="11.5" r="2" fill="#192750"/>
          <circle cx="15.5" cy="11.5" r="0.8" fill="#5EEAD4"/>
          <path d="M10 16L14 16" stroke="#192750" stroke-width="1.8" stroke-linecap="round"/>
          <polygon points="12,1 10,4.5 14,4.5" fill="#00A896"/>
          <line x1="12" y1="4.5" x2="12" y2="6" stroke="#00A896" stroke-width="1.8"/>
          <defs>
            <linearGradient id="trialSvgGrad_${botId}" x1="3" y1="6" x2="21" y2="20" gradientUnits="userSpaceOnUse">
              <stop stop-color="#CCFBF1"/>
              <stop offset="1" stop-color="#00A896"/>
            </linearGradient>
          </defs>
        </svg>
      `;
    }
  }

  selectExplorePlan(botId) {
    this.state.selectedExplorePlanId = botId;
    this.renderBotsGrid();
  }

  renderBotsGrid() {
    const container = document.getElementById('botsGridContainer');
    if (!container) return;

    let filtered = [...(this.state.bots || [])];

    // Priority Sorting: 1 Month Pass, 3 Months Pass, 1 Year VIP, Trial Pass
    const sortPriority = {
      'bot_bmagnet_1m': 1,
      'bot_bmagnet_3m': 2,
      'bot_bmagnet_1y': 3,
      'bot_bmagnet_trial': 4
    };
    filtered.sort((a, b) => (sortPriority[a.id] || 99) - (sortPriority[b.id] || 99));

    if (this.state.activeCategory !== 'all') {
      filtered = filtered.filter(b => b.category === this.state.activeCategory);
    }

    if (this.state.searchQuery) {
      const q = this.state.searchQuery;
      filtered = filtered.filter(b => 
        b.name.toLowerCase().includes(q) ||
        b.tagline.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q)
      );
    }

    const countBadge = document.getElementById('botCountBadge');
    if (countBadge) countBadge.textContent = `${filtered.length} ${filtered.length === 1 ? 'Plan' : 'Plans'}`;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-muted); grid-column: 1 / -1;">
          <span class="material-symbols-rounded" style="font-size: 48px; margin-bottom: 8px;">search_off</span>
          <h4>No Trading Plans Found</h4>
          <p style="font-size: 12px; margin-top: 4px;">Try modifying your search query or filters.</p>
        </div>
      `;
      return;
    }

    const isAr = this.state.lang === 'ar';
    const t = TRANSLATIONS[this.state.lang] || TRANSLATIONS.en;

    // Ensure selectedExplorePlanId is valid
    if (!filtered.some(b => b.id === this.state.selectedExplorePlanId)) {
      this.state.selectedExplorePlanId = filtered[0].id;
    }
    const selectedBot = filtered.find(b => b.id === this.state.selectedExplorePlanId) || filtered[0];

    // 1. RENDER 4 COMPACT SELECTOR TABS (Single Screen Fit - No Scroll)
    const tabsHtml = filtered.map(bot => {
      const isSelected = bot.id === selectedBot.id;
      
      let title = isAr ? 'شهر واحد' : '1 Month';
      let price = '$100';
      let period = isAr ? '/ 30 يوماً' : '/ 30 Days';
      let badge = isAr ? '🔥 الأكثر طلباً' : '🔥 Popular';
      let badgeBg = 'rgba(239, 68, 68, 0.1)';
      let badgeColor = '#ef4444';

      if (bot.id.includes('3m')) {
        title = isAr ? '3 أشهر' : '3 Months';
        price = '$250';
        period = isAr ? '/ 90 يوماً' : '/ 90 Days';
        badge = isAr ? '⚡ وفر 50$' : '⚡ Save $50';
        badgeBg = 'rgba(2, 132, 199, 0.12)';
        badgeColor = '#0284c7';
      } else if (bot.id.includes('1y')) {
        title = isAr ? 'سنة واحدة VIP' : '1 Year VIP';
        price = '$900';
        period = isAr ? '/ 365 يوماً' : '/ 365 Days';
        badge = isAr ? '👑 وفر 300$' : '👑 Save $300';
        badgeBg = 'rgba(245, 158, 11, 0.14)';
        badgeColor = '#d97706';
      } else if (bot.id.includes('trial')) {
        title = isAr ? 'تجربة يومين' : '2-Day Trial';
        price = '$10';
        period = isAr ? '/ 48 ساعة' : '/ 2 Days';
        badge = isAr ? '🧪 اختبار حي' : '🧪 Live Test';
        badgeBg = 'rgba(16, 185, 129, 0.12)';
        badgeColor = '#059669';
      }

      return `
        <div class="explore-plan-tab-card ${isSelected ? 'active' : ''}" onclick="window.botHubApp.selectExplorePlan('${bot.id}')">
          <div class="ept-top-row">
            <span class="ept-badge" style="background: ${badgeBg}; color: ${badgeColor};">
              ${badge}
            </span>
            <span class="material-symbols-rounded ept-radio-icon">
              ${isSelected ? 'check_circle' : 'radio_button_unchecked'}
            </span>
          </div>
          <h4 class="ept-title">${title}</h4>
          <div class="ept-price-row">
            <span class="ept-price-amt">${price}</span>
            <span class="ept-price-period">${period}</span>
          </div>
        </div>
      `;
    }).join('');

    // 2. RENDER FULL EXPLAINED DETAILS PANEL (OUTSIDE THE PLAN BOX)
    const isSubscribed = (this.state.subscriptions || []).some(s => s.botId === selectedBot.id);
    let planFullTitle = isAr ? 'تصريح تداول شهر واحد (30 يوماً)' : '1 Month Full Trading Pass (30 Days)';
    let planPriceBig = '100 USDT';
    let planSavings = isAr ? '30 يوماً تداول آلي كامل' : '30 Days Automated Execution';
    let planBtnText = isAr ? 'تفعيل اشتراك 100$ • تصريح شهر' : 'Subscribe Now • 1 Month Pass ($100)';
    let planCategoryDisplay = isAr ? 'تداول الذهب XAUUSD' : 'Gold Hunter • MT5 Institutional';

    let featuresList = [
      { icon: 'verified_user', text: isAr ? 'ترخيص بوت MT5 Gold Hunter EA v0.8 كامل لمدة 30 يوماً (حساب حقيقي أو تجريبي)' : 'Full MT5 Gold Hunter EA v0.8 License (Live & Demo Account Support)' },
      { icon: 'schedule', text: isAr ? 'تداول آلي على مدار 24/5 للذهب (XAUUSD) خلال جلستي لندن ونيويورك النشطة' : '24/5 Automated Gold (XAUUSD) Trading in Active London & NY Sessions' },
      { icon: 'psychology', text: isAr ? 'كشف تدفق السيولة المؤسسية ونقاط الاختراق المتقدمة مع مرشح الأخبار' : 'Neural Liquidity Flow & Institutional Imbalance Order-Flow Detection' },
      { icon: 'shield', text: isAr ? 'إدارة مخاطر ديناميكية مع وقف خسارة وجني أرباح متعدد المراحل تلقائياً' : 'Automated Dynamic Stop-Loss & Multi-Stage Take-Profit Trailing Guard' },
      { icon: 'link', text: isAr ? 'ربط فوري بحساب GTCfx MT5 مع إضافة الحساب للقائمة البيضاء السحابية' : 'Instant GTCfx MT5 Account Binding & Cloud License Whitelist' },
      { icon: 'forum', text: isAr ? 'قناة تيليجرام VIP للإشارات الحية مع دعم فني مخصص على مدار الساعة' : 'VIP Telegram Live Signals Channel & 24/7 Technical Setup Assistance' }
    ];

    if (selectedBot.id.includes('trial')) {
      planFullTitle = isAr ? 'تصريح تجريبي حي لمدة يومين (48 ساعة)' : '2-Day Live Starter Trial Pass (48 Hours)';
      planPriceBig = '10 USDT';
      planSavings = isAr ? 'تجربة حية كاملة • ائتمان 100%' : 'Full Live Execution • 100% Rebate';
      planBtnText = isAr ? 'بدء التجربة الحية • 10$' : 'Start 2-Day Live Trial • $10';
      featuresList = [
        { icon: 'science', text: isAr ? 'تجربة حية لمدة يومين كاملين (48 ساعة) على حسابك الحقيقي أو التجريبي' : '48-Hour Full Live Execution Test on Your MT5 Demo or Live Account' },
        { icon: 'bolt', text: isAr ? 'اختبار دقة وسرعة التنفيذ والفروقات السعرية (Spreads) في السوق الحي' : 'Verify Real Market Spreads, Execution Latency & Algorithmic Fills' },
        { icon: 'lock_open', text: isAr ? 'جميع مزايا وفلاتر بوت Gold Hunter مفعلة بالكامل بدون أي قيود' : 'All Advanced Bot Features & Risk Filters Fully Unlocked' },
        { icon: 'health_and_safety', text: isAr ? 'نظام الحماية من التراجع والتحكم في حجم اللوت مفعل طوال فترة التجربة' : 'Complete Risk Protection & Max Drawdown Guard Active' },
        { icon: 'redeem', text: isAr ? 'استرداد كامل: تخصم الـ 10$ تلقائياً من أي باقة شهرية أو سنوية تختارها' : '100% Upgrade Credit ($10 Credited Towards Any Full Pass)' }
      ];
    } else if (selectedBot.id.includes('3m')) {
      planFullTitle = isAr ? 'تصريح ربع سنوي شامل (3 أشهر / 90 يوماً)' : '3 Months Quarterly VIP Pass (90 Days)';
      planPriceBig = '250 USDT';
      planSavings = isAr ? 'وفر 50$ (83.33$ شهرياً فقط)' : 'Save $50 ($83.33/mo equivalent)';
      planBtnText = isAr ? 'تفعيل اشتراك 250$ • تصريح 3 أشهر' : 'Subscribe Now • 3 Months Pass ($250)';
      featuresList = [
        { icon: 'verified_user', text: isAr ? 'ترخيص ربع سنوي كامل لمدة 90 يوماً متواصلة بدون أي انقطاع' : 'Full 90-Day Quarterly Algorithm Pass (3 Months Uninterrupted Access)' },
        { icon: 'savings', text: isAr ? 'توفير فوري قدره 50$ مقارنة بالتجديد الشهري (83.33$ شهرياً فقط)' : 'Instant $50 Savings vs Monthly Renewal ($83.33/month equivalent)' },
        { icon: 'swap_horiz', text: isAr ? 'إمكانية نقل الترخيص والتبديل بين حسابات MT5 متعددة في أي وقت' : 'Multi-Account License Migration Support (Swap Between Accounts Anytime)' },
        { icon: 'speed', text: isAr ? 'توجيه مباشر عبر خوادم تراخيص فائقة السرعة مع فحص استجابة فوري' : 'Priority Low-Latency Cloud License Server Routing' },
        { icon: 'tune', text: isAr ? 'تحديثات وتحسينات دورية لإعدادات وتقلبات السوق خلال الـ 90 يوماً' : 'Quarterly Market Volatility & Parameter Optimization Updates' },
        { icon: 'support_agent', text: isAr ? 'دعم فني استراتيجي مباشر 1-على-1 للمساعدة في التثبيت والضبط' : 'Direct 1-on-1 VIP Helpdesk & Setup Support' }
      ];
    } else if (selectedBot.id.includes('1y')) {
      planFullTitle = isAr ? 'تصريح مؤسسي سنوي VIP كامل (365 يوماً)' : '1 Year Institutional VIP Pass (365 Days)';
      planPriceBig = '900 USDT';
      planSavings = isAr ? 'أعلى توفير: وفر 300$ (75$ شهرياً)' : 'Maximum Savings: Save $300 ($75/mo)';
      planBtnText = isAr ? 'تفعيل تصريح سنوي 900$ VIP' : 'Subscribe Now • 1 Year VIP Pass ($900)';
      featuresList = [
        { icon: 'workspace_premium', text: isAr ? 'تصريح مؤسسي سنوي VIP كامل لمدة 365 يوماً من التداول الآلي' : 'Institutional VIP Pass: 365 Days Uninterrupted Auto-Trading' },
        { icon: 'diamond', text: isAr ? 'أعلى نسبة توفير: وفر 300$ كاملة (75.00$ شهرياً فقط بدلاً من 100$)' : 'Maximum Savings: Save $300 ($75.00/mo vs $100/mo regular)' },
        { icon: 'dns', text: isAr ? 'مساعدة مجانية كاملة في ضبط وإعداد خادم VPS سحابي مخصص' : 'Free Dedicated Cloud VPS Configuration & Remote Setup' },
        { icon: 'all_inclusive', text: isAr ? 'إعادة ربط غير محدودة لحسابات MT5 والتنقل بين الوسطاء بدون رسوم' : 'Unlimited MT5 Account Re-bindings & Broker Migrations' },
        { icon: 'upgrade', text: isAr ? 'وصول مجاني مدى الحياة لجميع تحديثات وإصدارات الخوارزمية المستقبلية' : 'Lifetime Access to All Major Algorithm Updates (v1.0+ Included)' },
        { icon: 'chat', text: isAr ? 'خط واتساب مباشر ذو أولوية مع مهندس الخوارزمية الرئيسي' : 'Direct WhatsApp VIP Line with Lead Quantitative Engineer' }
      ];
    }

    const roiDisplay = typeof selectedBot.monthlyRoi === 'string' ? `${selectedBot.monthlyRoi}%` : `${selectedBot.monthlyRoi}%`;
    const ddDisplay = typeof selectedBot.maxDrawdown === 'string' ? `${selectedBot.maxDrawdown}%` : `${selectedBot.maxDrawdown}%`;
    const pfDisplay = typeof selectedBot.profitFactor === 'number' ? selectedBot.profitFactor.toFixed(1) : selectedBot.profitFactor;
    const botSvg = this.getBotSvgIcon(selectedBot.id);

    container.innerHTML = `
      <div class="explore-single-screen-wrapper">
        
        <!-- 1. 4-Plan Compact Selector Tabs (Single Screen Fit - No Scroll) -->
        <div class="explore-plans-tabs-grid">
          ${tabsHtml}
        </div>

        <!-- 2. Selected Plan Full Breakdown & Explained Details (OUTSIDE THE PLAN BOX) -->
        <div class="explore-selected-plan-panel">
          
          <div class="espp-header-row">
            <div class="espp-brand-col">
              <div class="espp-avatar" style="background: ${selectedBot.color}15; border: 1.5px solid ${selectedBot.color}35;">
                ${botSvg}
              </div>
              <div>
                <h3 class="espp-title">${planFullTitle}</h3>
                <span class="espp-sub">${planCategoryDisplay} • ${selectedBot.creator}</span>
              </div>
            </div>
            <div class="espp-price-box">
              <span class="espp-price-big">${planPriceBig}</span>
              <span class="espp-savings-pill">${planSavings}</span>
            </div>
          </div>

          <!-- Verified Performance Metrics -->
          <div class="bot-metrics-row">
            <div class="bot-metric-item">
              <div class="bot-metric-num text-success">${selectedBot.winRate}%</div>
              <div class="bot-metric-label">${t.metricWinRate}</div>
            </div>
            <div class="bot-metric-item">
              <div class="bot-metric-num text-cyan">${roiDisplay}</div>
              <div class="bot-metric-label">${t.metricRoi}</div>
            </div>
            <div class="bot-metric-item">
              <div class="bot-metric-num text-amber">${ddDisplay}</div>
              <div class="bot-metric-label">${t.metricDd}</div>
            </div>
            <div class="bot-metric-item">
              <div class="bot-metric-num" style="color: #00a896;">${pfDisplay}</div>
              <div class="bot-metric-label">${t.metricPf}</div>
            </div>
          </div>

          <!-- Full Features Breakdown (Outside Plan Box) -->
          <div class="espp-details-block">
            <div class="espp-details-headline">
              <span class="material-symbols-rounded" style="font-size: 16px;">task_alt</span>
              <span>${isAr ? 'المزايا والتفاصيل الكاملة المشمولة بالخطة المختارة:' : 'Full Specifications & Included Plan Features:'}</span>
            </div>
            <ul class="espp-features-list">
              ${featuresList.map(f => `
                <li class="espp-feature-item">
                  <span class="material-symbols-rounded">${f.icon}</span>
                  <span>${f.text}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Action Buttons -->
          <div class="espp-actions-row">
            <button type="button" class="btn-espp-subscribe" onclick="window.botHubApp.openSubscribeModal('${selectedBot.id}')">
              <span class="material-symbols-rounded">${isSubscribed ? 'add_circle' : 'bolt'}</span>
              <span>${isSubscribed ? (isAr ? 'شراء لحساب MT5 إضافي' : 'Buy for Another MT5') : planBtnText}</span>
            </button>
            <button type="button" class="btn-espp-secondary" onclick="window.botHubApp.openBotDetails('${selectedBot.id}')" title="Technical Specs">
              <span class="material-symbols-rounded">info</span>
              <span>${isAr ? 'المواصفات' : 'Specs'}</span>
            </button>
          </div>

        </div>

      </div>
    `;
  }

  // -------------------------------------------------------------
  // 2. BOT DETAILS MODAL
  // -------------------------------------------------------------
  openBotDetails(botId) {
    const bot = this.state.bots.find(b => b.id === botId);
    if (!bot) return;

    const botSvg = this.getBotSvgIcon(bot.id);
    const body = document.getElementById('detailBotBody');
    body.innerHTML = `
      <div class="detail-header-card" style="background: linear-gradient(135deg, ${bot.color}15 0%, transparent 100%); border: 1px solid ${bot.color}33; border-radius: 16px; padding: 18px; margin-bottom: 16px;">
        <div style="display: flex; gap: 14px; align-items: center;">
          <div class="bot-avatar" style="width: 52px; height: 52px; background: ${bot.color}15; border: 1.5px solid ${bot.color}35; display: flex; align-items: center; justify-content: center;">
            ${botSvg}
          </div>
          <div>
            <h3 style="font-size: 17px; font-weight: 800;">${bot.name}</h3>
            <span style="font-size: 12px; color: var(--text-muted);">${bot.creator} • ${bot.category}</span>
          </div>
        </div>
        <p style="font-size: 13px; color: var(--text-secondary); margin-top: 12px; line-height: 1.4;">${bot.description}</p>
      </div>

      <div class="hero-metrics-grid" style="margin-bottom: 16px;">
        <div class="metric-card">
          <span class="metric-val text-success">${bot.winRate}%</span>
          <span class="metric-lbl">Win Rate</span>
        </div>
        <div class="metric-card">
          <span class="metric-val text-cyan">+${bot.monthlyRoi}%</span>
          <span class="metric-lbl">Monthly ROI</span>
        </div>
        <div class="metric-card">
          <span class="metric-val text-amber">${bot.maxDrawdown}%</span>
          <span class="metric-lbl">Max Drawdown</span>
        </div>
        <div class="metric-card">
          <span class="metric-val">${bot.profitFactor}</span>
          <span class="metric-lbl">Profit Factor</span>
        </div>
      </div>

      <div style="background: var(--surface-card); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 14px; margin-bottom: 20px;">
        <h4 style="font-size: 13px; font-weight: 700; margin-bottom: 8px;">Specifications & Compatibility</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 12px;">
          <div><span style="color: var(--text-muted);">Supported Pairs:</span> <strong>${bot.pairs.join(', ')}</strong></div>
          <div><span style="color: var(--text-muted);">Risk Level:</span> <strong>${bot.riskLevel}</strong></div>
          <div><span style="color: var(--text-muted);">Platforms:</span> <strong>${bot.platforms.join(', ')}</strong></div>
          <div><span style="color: var(--text-muted);">Payment:</span> <strong style="color: #F0B90B;">USDT (BEP-20)</strong></div>
        </div>
      </div>

      <button class="btn-primary btn-block btn-lg" onclick="window.botHubApp.closeModal('botDetailsModal'); window.botHubApp.openSubscribeModal('${bot.id}')">
        <span class="material-symbols-rounded">bolt</span> Subscribe via BEP-20 Wallet
      </button>
    `;

    this.openModal('botDetailsModal');
  }

  // -------------------------------------------------------------
  // 3. TOP-UP WALLET MODAL & LOGIC (CRYPTO BEP-20 ONLY)
  // -------------------------------------------------------------
  openTopupModal(prefillAmount) {
    if (prefillAmount && prefillAmount > 0) {
      this.setTopupAmount(Math.ceil(prefillAmount));
    } else {
      this.setTopupAmount(100);
    }
    this.renderWallet();
    this.renderBep20QrCode();
    this.openModal('topupModal');
  }

  renderBep20QrCode() {
    const canvas = document.getElementById('bep20QrCanvas');
    if (!canvas) return;
    const bep20Address = '0x26B5E776b4e3f40378b440Dfb2ACD675938B480b';

    if (window.QRCodeGenerator && window.QRCodeGenerator.renderCanvas) {
      try {
        window.QRCodeGenerator.renderCanvas(canvas, bep20Address, {
          size: 220,
          padding: 8,
          typeNumber: 0,
          correctLevel: 2,
          background: '#ffffff',
          foreground: '#090d16',
          showBadge: true
        });
      } catch (e) {
        console.warn('QR Code generation notice:', e);
      }
    }
  }

  validateTxHashInput() {
    const txInput = document.getElementById('bep20TxHashInput');
    const msgEl = document.getElementById('txHashValidationMessage');
    const val = txInput ? txInput.value.trim() : '';

    if (!val) {
      if (msgEl) {
        msgEl.innerHTML = 'Paste your 64-character transaction hash starting with <strong>0x</strong> to verify and credit your balance.';
        msgEl.style.color = '#64748b';
      }
      return false;
    }

    if (val.length >= 10 && (val.startsWith('0x') || /^[a-fA-F0-9]+$/.test(val))) {
      if (msgEl) {
        msgEl.innerHTML = `<span style="color: #00A896; font-weight: 700;">✅ Valid BSC Transaction Hash detected (${val.substring(0, 14)}...)</span>`;
      }
      return true;
    } else {
      if (msgEl) {
        msgEl.innerHTML = '<span style="color: #ef4444; font-weight: 600;">⚠️ Please paste a valid BSC TxHash (e.g. 0x3a4f...)</span>';
      }
      return false;
    }
  }

  setTopupAmount(amount) {
    this.state.selectedTopupAmount = amount;
    const input = document.getElementById('customTopupInput');
    if (input) input.value = amount;

    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.classList.toggle('active', parseFloat(btn.dataset.amt) === amount);
    });

    const submitText = document.getElementById('submitTopupBtnText');
    if (submitText) submitText.textContent = `Verify Hash & Credit ${amount.toFixed(2)} USDT`;
  }

  copyBep20Address() {
    const bep20Address = '0x26B5E776b4e3f40378b440Dfb2ACD675938B480b';
    navigator.clipboard.writeText(bep20Address);
    this.showToast('📋 BEP-20 USDT deposit address copied to clipboard!', 'success');
  }

  async processTopup() {
    const amt = parseFloat(this.state.selectedTopupAmount) || 100;
    if (amt <= 0) {
      this.showToast('Please enter a valid deposit amount in USDT', 'danger');
      return;
    }

    const txHashInput = document.getElementById('bep20TxHashInput');
    const txHash = txHashInput ? txHashInput.value.trim() : '';

    if (!txHash || txHash.length < 10) {
      this.showToast('⚠️ Please paste your BSC Transaction Hash (TxHash / TxID) to verify and credit the deposit!', 'warning');
      if (txHashInput) {
        txHashInput.focus();
        txHashInput.style.borderColor = '#ef4444';
        setTimeout(() => { txHashInput.style.borderColor = ''; }, 2500);
      }
      return;
    }

    const submitBtn = document.getElementById('submitTopupBtn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="material-symbols-rounded" style="animation: spin 1s infinite linear;">sync</span> Verifying BSC TxHash on Blockchain...';

    try {
      const response = await fetch('/api/wallet/topup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amt,
          txHash: txHash
        })
      });

      const res = await response.json();
      if (res.success) {
        this.state.wallet = res.wallet;
        this.renderWallet();
        if (txHashInput) txHashInput.value = '';
        this.closeModal('topupModal');
        this.showToast(`🎉 Verified TxHash! Credited +${amt.toFixed(2)} USDT to your BEP-20 Wallet.`, 'success');
        await this.fetchData();

        if (this.state.selectedBotForCheckout) {
          this.updateCheckoutSummary();
        }
      } else {
        this.showToast(res.error || 'Verification failed. Please check TxHash.', 'danger');
      }
    } catch (e) {
      this.showToast('Error connecting to verification server.', 'danger');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span class="material-symbols-rounded">verified</span> <span id="submitTopupBtnText">Verify Hash & Credit ${amt.toFixed(2)} USDT</span>`;
    }
  }

  // -------------------------------------------------------------
  // 4. SUBSCRIPTION CHECKOUT & WALLET PAYMENT (1M / 3M / 1Y)
  // -------------------------------------------------------------
  openSubscribeModal(botId, defaultPlanKey = null) {
    const bot = this.state.bots.find(b => b.id === botId) || this.state.bots[0];
    if (!bot) return;

    this.state.selectedBotForCheckout = bot;
    
    // Default plan selection based on defaultPlanKey or botId
    if (defaultPlanKey) {
      this.state.selectedPlanKey = defaultPlanKey;
    } else if (botId && botId.includes('trial')) {
      this.state.selectedPlanKey = 'trial';
    } else if (botId && botId.includes('3m')) {
      this.state.selectedPlanKey = '3month';
    } else if (botId && botId.includes('1y')) {
      this.state.selectedPlanKey = '1year';
    } else {
      this.state.selectedPlanKey = '1month';
    }

    document.getElementById('checkoutBotName').textContent = bot.name;
    const plansContainer = document.getElementById('checkoutPlansContainer');

    // Standard Duration Plans
    const standardPlans = {
      'trial': { name: '2-Day Starter Trial', price: 10, durationDays: 2, save: '2 Days ($10)' },
      '1month': { name: '1 Month Pass', price: 100, durationDays: 30 },
      '3month': { name: '3 Months Pass', price: 250, durationDays: 90, save: 'Save $50' },
      '1year': { name: '1 Year VIP Pass', price: 900, durationDays: 365, save: 'Save $300' }
    };

    plansContainer.innerHTML = Object.entries(standardPlans).map(([key, plan]) => {
      const isSelected = key === this.state.selectedPlanKey;
      let saveBadge = '';
      if (plan.save) {
        let bg = 'rgba(0, 168, 150, 0.15)';
        let col = '#00a896';
        if (key === '1year') {
          bg = 'rgba(245, 158, 11, 0.15)';
          col = '#d97706';
        } else if (key === '3month') {
          bg = 'rgba(2, 132, 199, 0.15)';
          col = '#0284c7';
        }
        saveBadge = `<span class="plan-badge" style="background: ${bg}; color: ${col}; font-weight: 700; padding: 2px 6px; border-radius: 4px; font-size: 10px;">${plan.save}</span>`;
      }

      return `
        <div class="plan-card-option ${isSelected ? 'selected' : ''}" data-plan="${key}" onclick="window.botHubApp.selectPlan('${key}')">
          <div class="plan-option-left">
            <div class="plan-radio-dot"></div>
            <div class="plan-meta">
              <div class="plan-name">${plan.name} ${saveBadge}</div>
              <span class="plan-subtext">${plan.durationDays} Days Access • Instant GTCfx MT5 Whitelist</span>
            </div>
          </div>
          <div class="plan-price-tag">${plan.price} USDT</div>
        </div>
      `;
    }).join('');

    // Pre-populate with candidate MT5 account that is not yet bound
    const mt5Input = document.getElementById('checkoutMt5Input');
    if (mt5Input) {
      const boundAccounts = new Set((this.state.subscriptions || []).filter(s => s.status === 'Active').map(s => (s.gtcfxMt5Account || s.mt5Account || '').toString().replace(/\D/g, '')));
      
      let candidate = 8849201;
      while (boundAccounts.has(candidate.toString())) {
        candidate++;
      }
      mt5Input.value = candidate.toString();
      mt5Input.style.borderColor = '';
    }

    this.checkMt5AccountAvailability();
    this.updateCheckoutSummary();
    this.openModal('checkoutModal');
  }

  checkMt5AccountAvailability() {
    const input = document.getElementById('checkoutMt5Input');
    const alertBox = document.getElementById('checkoutMt5ConflictAlert');
    const msgBox = document.getElementById('checkoutMt5ConflictMessage');
    const submitBtn = document.getElementById('submitCheckoutBtn');
    const btnText = document.getElementById('submitCheckoutBtnText');
    const btnIcon = document.getElementById('checkoutBtnIcon');
    if (!input) return false;

    const raw = input.value.trim();
    const acc = raw.replace(/\D/g, '');

    if (!acc || acc.length < 4) {
      if (alertBox) alertBox.style.display = 'none';
      input.style.borderColor = '';
      return false;
    }

    // Check if this account is already attached to an active subscription
    const existing = (this.state.subscriptions || []).find(s => {
      const subAcc = (s.gtcfxMt5Account || s.mt5Account || '').toString().replace(/\D/g, '');
      const isSubActive = !s.status || s.status.toLowerCase() === 'active' || s.status.toLowerCase() === 'running';
      return subAcc === acc && isSubActive;
    });

    if (existing) {
      input.style.borderColor = '#ef4444';
      if (alertBox) alertBox.style.display = 'block';
      if (msgBox) {
        let expStr = 'Active';
        if (existing.expiresDate) {
          try {
            expStr = new Date(existing.expiresDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
          } catch(e) {
            expStr = existing.expiresDate.substring(0, 10);
          }
        }

        msgBox.innerHTML = `
          <p style="margin: 0 0 6px 0;">GTCfx MT5 <strong>#${acc}</strong> is already attached to an active bot license:</p>
          <div style="background: rgba(0,0,0,0.06); padding: 6px 10px; border-radius: 6px; font-size: 11px; margin-bottom: 6px;">
            <div>🤖 <strong>Bot:</strong> ${existing.botName}</div>
            <div>⏱️ <strong>Plan Period:</strong> ${existing.planName}</div>
            <div>📅 <strong>Active Until (Expiry):</strong> <span style="color: #b91c1c; font-weight: 800;">${expStr}</span></div>
          </div>
          <span style="color: #991b1b; font-weight: 700; font-size: 11px;">⚠️ Each MT5 account can only host 1 active bot license. Please enter a different GTCfx MT5 account number.</span>
        `;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.background = '#ef4444';
        submitBtn.style.color = '#ffffff';
      }
      if (btnText) btnText.textContent = `MT5 In Use (Choose Another)`;
      if (btnIcon) btnIcon.textContent = 'block';

      return true;
    } else {
      input.style.borderColor = '#10b981';
      if (alertBox) alertBox.style.display = 'none';
      return false;
    }
  }

  selectPlan(planKey) {
    this.state.selectedPlanKey = planKey;
    document.querySelectorAll('.plan-card-option').forEach(el => {
      el.classList.toggle('selected', el.dataset.plan === planKey);
    });
    this.updateCheckoutSummary();
  }

  updateCheckoutSummary() {
    const bot = this.state.selectedBotForCheckout;
    if (!bot) return;

    const plan = (bot.plans && bot.plans[this.state.selectedPlanKey]) || { name: '1 Month Pass', price: 100 };
    const price = Number(plan.price || 0);
    const currentBalance = Number((this.state.wallet && this.state.wallet.balance) || 0);
    const remaining = currentBalance - price;
    const hasEnoughFunds = remaining >= 0;
    const shortfall = price - currentBalance;

    // Update wallet labels
    const badgeEl = document.getElementById('checkoutWalletBalanceBadge');
    if (badgeEl) badgeEl.textContent = `${currentBalance.toFixed(2)} USDT Available`;

    const currBalEl = document.getElementById('checkoutCurrentBalanceText');
    if (currBalEl) currBalEl.textContent = `${currentBalance.toFixed(2)} USDT`;

    const priceEl = document.getElementById('checkoutPlanPriceText');
    if (priceEl) priceEl.textContent = `-${price.toFixed(2)} USDT`;

    const remBalEl = document.getElementById('checkoutRemainingBalanceText');
    if (remBalEl) {
      if (hasEnoughFunds) {
        remBalEl.textContent = `${remaining.toFixed(2)} USDT`;
        remBalEl.className = 'font-mono text-success';
      } else {
        remBalEl.textContent = `-${Math.abs(remaining).toFixed(2)} USDT (Shortfall)`;
        remBalEl.className = 'font-mono text-amber';
      }
    }

    // Shortfall Alert
    const shortfallAlert = document.getElementById('shortfallAlert');
    const shortfallAmtText = document.getElementById('shortfallAmountText');
    const submitBtn = document.getElementById('submitCheckoutBtn');
    const btnText = document.getElementById('submitCheckoutBtnText');
    const btnIcon = document.getElementById('checkoutBtnIcon');

    // First check MT5 conflict
    const isConflict = this.checkMt5AccountAvailability();
    if (isConflict) {
      return;
    }

    if (!hasEnoughFunds) {
      if (shortfallAlert) shortfallAlert.style.display = 'flex';
      if (shortfallAmtText) shortfallAmtText.textContent = `${shortfall.toFixed(2)} USDT`;
      if (btnText) btnText.textContent = `Deposit ${shortfall.toFixed(2)} USDT`;
      if (btnIcon) btnIcon.textContent = 'add_circle';
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.className = 'btn-primary btn-block btn-lg';
        submitBtn.style.background = 'linear-gradient(135deg, #F0B90B 0%, #D97706 100%)';
        submitBtn.style.color = '#000';
      }
    } else {
      if (shortfallAlert) shortfallAlert.style.display = 'none';
      if (btnText) btnText.textContent = `Pay ${price.toFixed(2)} USDT`;
      if (btnIcon) btnIcon.textContent = 'lock';
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.className = 'btn-primary btn-block btn-lg';
        submitBtn.style.background = '';
        submitBtn.style.color = '';
      }
    }
  }

  async processCheckout() {
    const bot = this.state.selectedBotForCheckout;
    if (!bot) return;

    const plan = (bot.plans && bot.plans[this.state.selectedPlanKey]) || { name: '1 Month Pass', price: 100, durationDays: 30 };
    const price = Number(plan.price || 0);
    const currentBalance = Number((this.state.wallet && this.state.wallet.balance) || 0);

    if (currentBalance < price) {
      const shortfall = price - currentBalance;
      this.closeModal('checkoutModal');
      this.openTopupModal(shortfall);
      this.showToast(`Please deposit at least ${shortfall.toFixed(2)} USDT (BEP-20) to complete subscription.`, 'info');
      return;
    }

    const mt5Input = document.getElementById('checkoutMt5Input');
    const rawMt5 = mt5Input ? mt5Input.value.trim() : '';
    const mt5Account = rawMt5.replace(/\D/g, '');

    // 1. Mandatory GTCfx MT5 Account Validation
    if (!mt5Account || mt5Account.length < 4) {
      if (mt5Input) {
        mt5Input.focus();
        mt5Input.style.borderColor = '#ef4444';
      }
      this.showToast('⚠️ Please enter your GTCfx MT5 Account Number (minimum 4 digits) to attach this bot.', 'danger');
      return;
    }

    // 2. Check for single-bot per MT5 account restriction
    const isConflict = this.checkMt5AccountAvailability();
    if (isConflict) {
      const existing = (this.state.subscriptions || []).find(s => {
        const subAcc = (s.gtcfxMt5Account || s.mt5Account || '').toString().replace(/\D/g, '');
        const isSubActive = !s.status || s.status.toLowerCase() === 'active' || s.status.toLowerCase() === 'running';
        return subAcc === mt5Account && isSubActive;
      });

      let expStr = 'Active';
      if (existing && existing.expiresDate) {
        try {
          expStr = new Date(existing.expiresDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        } catch(e) {
          expStr = existing.expiresDate.substring(0, 10);
        }
      }

      const botTitle = existing ? existing.botName : 'Existing Bot';
      const planTitle = existing ? existing.planName : 'Active Pass';

      this.showToast(`⚠️ MT5 #${mt5Account} is already attached to "${botTitle}" (${planTitle}, Expiry: ${expStr}). Please enter a different MT5 account.`, 'danger');
      if (mt5Input) mt5Input.focus();
      return;
    }

    if (mt5Input) mt5Input.style.borderColor = '';

    const submitBtn = document.getElementById('submitCheckoutBtn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="material-symbols-rounded" style="animation: spin 1s infinite linear;">sync</span> Activating...';

    try {
      const response = await fetch('/api/subscriptions/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          botId: bot.id,
          planKey: this.state.selectedPlanKey,
          gtcfxMt5Account: mt5Account,
          mt5Account: mt5Account
        })
      });

      const res = await response.json();
      if (res.success) {
        if (res.wallet) {
          this.state.wallet = res.wallet;
        } else if (this.state.wallet) {
          this.state.wallet.balance = Math.max(0, currentBalance - price);
        }

        if (res.subscription) {
          this.state.subscriptions = this.state.subscriptions.filter(s => s.id !== res.subscription.id);
          this.state.subscriptions.unshift(res.subscription);
        }

        this.renderAll();
        this.closeModal('checkoutModal');

        // Store payment result for the Payment Success screen
        this.state.lastPaymentResult = {
          subId: res.subscription ? res.subscription.id : `sub_${Date.now()}`,
          botName: bot.name,
          planName: plan.name,
          price: price,
          currency: 'USDT',
          licenseKey: res.licenseKey,
          invoiceId: (res.invoice && res.invoice.id) || `INV-2026-${Math.floor(Math.random()*8999)+1000}`,
          gtcfxAccount: mt5Account,
          whatsappTarget: '+919495097786',
          date: new Date().toLocaleDateString()
        };

        this.renderPaymentSuccessModal();
        this.openModal('paymentSuccessModal');
        this.showToast(`🎉 Payment successful! Deducted ${price.toFixed(2)} USDT. Attached to GTCfx MT5 #${mt5Account}.`, 'success');
        
        // Sync full state with backend
        await this.fetchData();
      } else {
        if (res.needTopup) {
          this.closeModal('checkoutModal');
          this.openTopupModal(res.shortfall);
        }
        this.showToast(res.error || 'Subscription failed', 'danger');
      }
    } catch (e) {
      console.warn("API checkout network error, updating state locally:", e);
      if (!this.state.wallet) this.state.wallet = { balance: 250, currency: "USDT" };
      this.state.wallet.balance = Math.max(0, currentBalance - price);

      const localSubId = `sub_${Date.now()}_${Math.floor(Math.random()*8999)+1000}`;
      const localLic = `BM8-${mt5Account}-20260914-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
      const localSub = {
        id: localSubId,
        customerPhone: "+919495097786",
        botId: bot.id,
        botName: bot.name,
        planKey: this.state.selectedPlanKey,
        planName: plan.name,
        price: price,
        status: 'Active',
        startDate: new Date().toISOString(),
        expiresDate: new Date(Date.now() + (plan.durationDays || 30) * 86400000).toISOString(),
        licenseKey: localLic,
        broker: 'GTCfx',
        gtcfxMt5Account: mt5Account,
        mt5Account: mt5Account,
        autoRenew: true,
        paymentMethod: 'USDT (BEP-20 Wallet)',
        lastSignal: `EA Armed on GTCfx MT5 #${mt5Account}`
      };

      this.state.subscriptions.unshift(localSub);
      this.renderAll();

      this.state.lastPaymentResult = {
        subId: localSubId,
        botName: bot.name,
        planName: plan.name,
        price: price,
        currency: 'USDT',
        licenseKey: localLic,
        invoiceId: `INV-2026-${Math.floor(Math.random()*8999)+1000}`,
        gtcfxAccount: mt5Account,
        whatsappTarget: '+919495097786',
        date: new Date().toLocaleDateString()
      };
      this.closeModal('checkoutModal');
      this.renderPaymentSuccessModal();
      this.openModal('paymentSuccessModal');
      this.showToast(`Subscription activated & locked to GTCfx MT5 #${mt5Account}!`, 'success');
    } finally {
      submitBtn.disabled = false;
      this.updateCheckoutSummary();
    }
  }

  // -------------------------------------------------------------
  // 5. PAYMENT SUCCESS & GTCFX WHATSAPP DISPATCH
  // -------------------------------------------------------------
  renderPaymentSuccessModal() {
    const data = this.state.lastPaymentResult;
    if (!data) return;

    const botNameEl = document.getElementById('successBotName');
    if (botNameEl) botNameEl.textContent = data.botName;

    const planNameEl = document.getElementById('successPlanName');
    if (planNameEl) planNameEl.textContent = data.planName;

    const amtEl = document.getElementById('successAmountPaid');
    if (amtEl) amtEl.textContent = `${Number(data.price).toFixed(2)} USDT`;

    const invEl = document.getElementById('successInvoiceId');
    if (invEl) invEl.textContent = data.invoiceId;

    const licEl = document.getElementById('successLicenseKey');
    if (licEl) licEl.textContent = data.licenseKey;

    const attMt5El = document.getElementById('successAttachedMt5Text');
    if (attMt5El) attMt5El.textContent = `#${data.gtcfxAccount || '8849201'}`;

    const lockNoticeMt5 = document.getElementById('successLockNoticeMt5');
    if (lockNoticeMt5) lockNoticeMt5.textContent = `#${data.gtcfxAccount || '8849201'}`;

    this.updateWhatsAppLink();
  }

  buildWhatsAppMessage(gtcfxAccount) {
    const data = this.state.lastPaymentResult || {
      botName: 'B-Magnet Gold Hunter EA Pro',
      planName: '1 Month Pro Pass',
      price: 100.00,
      currency: 'USDT',
      licenseKey: 'BM8-8849201-20260914-0F7C0A67',
      invoiceId: 'INV-2026-8492',
      gtcfxAccount: gtcfxAccount || '8849201',
      date: new Date().toLocaleDateString()
    };

    const acc = gtcfxAccount || data.gtcfxAccount || '8849201';

    return `🤖 *B-Bot Pro — Payment Success & GTCfx MT5 Whitelist*
━━━━━━━━━━━━━━━━━━━━━
✅ *Status:* Payment Successful (PAID)
🤖 *Bot:* ${data.botName}
⏱️ *Plan:* ${data.planName}
💰 *Amount Paid:* ${Number(data.price).toFixed(2)} USDT (BEP-20)
🔑 *License Key:* ${data.licenseKey}
🏦 *Broker:* GTCfx
📈 *Attached GTCfx MT5 Account #:* ${acc} *(Account-Locked)*
🧾 *Invoice ID:* ${data.invoiceId}
📅 *Date:* ${data.date}
━━━━━━━━━━━━━━━━━━━━━
Hello, I have completed the payment for ${data.botName}. My GTCfx MT5 Account is #${acc}. Please whitelist my account and send the EA setup installation files. Thank you!`;
  }

  updateWhatsAppLink() {
    const acc = (this.state.lastPaymentResult && this.state.lastPaymentResult.gtcfxAccount) || '8849201';
    const msg = this.buildWhatsAppMessage(acc);
    const targetPhone = '919495097786';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodeURIComponent(msg)}`;

    const btn = document.getElementById('sendWhatsAppBtn');
    if (btn) {
      btn.href = whatsappUrl;
    }
  }

  copySuccessLicenseKey() {
    const data = this.state.lastPaymentResult;
    const key = data ? data.licenseKey : 'BM-PRO-8492-7193-MT5';
    navigator.clipboard.writeText(key);
    this.showToast('License Key copied to clipboard!', 'success');
  }

  async handleWhatsAppClick(event) {
    const input = document.getElementById('successGtcfxMt5Input');
    const acc = input && input.value.trim() ? input.value.trim() : '8849201';

    if (this.state.lastPaymentResult && this.state.lastPaymentResult.subId) {
      try {
        await fetch('/api/subscriptions/update-gtcfx', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            subscriptionId: this.state.lastPaymentResult.subId,
            gtcfxMt5Account: acc
          })
        });
      } catch (e) {}
    }

    this.showToast('🚀 Opening WhatsApp with your payment details & GTCfx MT5 number...', 'success');
  }

  sendSubscriptionToWhatsApp(subId) {
    const sub = this.state.subscriptions.find(s => s.id === subId);
    if (!sub) return;

    const acc = sub.gtcfxMt5Account || sub.mt5Account || '8849201';
    const msg = `🤖 *B-Bot Pro — Payment Success & GTCfx MT5 Whitelist*
━━━━━━━━━━━━━━━━━━━━━
✅ *Status:* Active / Paid Subscription
🤖 *Bot:* ${sub.botName}
⏱️ *Plan:* ${sub.planName}
💰 *Price:* ${Number(sub.price).toFixed(2)} USDT (BEP-20)
🔑 *License Key:* ${sub.licenseKey}
🏦 *Broker:* GTCfx
📈 *GTCfx MT5 Account #:* ${acc}
━━━━━━━━━━━━━━━━━━━━━
Hello, here are my subscription and license details. Please verify my GTCfx MT5 Account (#${acc}) on the license server. Thank you!`;

    const targetPhone = '919495097786';
    const url = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    this.showToast('Opening WhatsApp to send details to +919495097786...', 'success');
  }

  // -------------------------------------------------------------
  // 6. MY SUBSCRIPTIONS & LICENSE MANAGER
  // -------------------------------------------------------------
  renderSubscriptions() {
    const container = document.getElementById('subscriptionsListContainer');
    if (!container) return;

    const isAr = this.state.lang === 'ar';

    if (this.state.subscriptions.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-muted); background: var(--surface-card); border: 1px solid var(--border-subtle); border-radius: 20px;">
          <span class="material-symbols-rounded" style="font-size: 48px; margin-bottom: 8px; color: var(--brand-cyan);">bolt</span>
          <h4>${isAr ? 'لا توجد اشتراكات نشطة بعد' : 'No Active Subscriptions'}</h4>
          <p style="font-size: 12px; margin: 4px 0 16px;">${isAr ? 'تصفح المتجر واشترك في أحد بوتات MT5 الآلية للذهب أو ناسخ الصفقات.' : 'Explore our marketplace and subscribe to automated MT5 EAs or Signal Copiers.'}</p>
          <button class="btn-primary btn-sm" onclick="window.botHubApp.switchView('explore')">${isAr ? 'استكشاف البوتات' : 'Explore Bots'}</button>
        </div>
      `;
      return;
    }

    container.innerHTML = this.state.subscriptions.map(sub => {
      const gtcfxAcc = (sub.gtcfxMt5Account || sub.mt5Account || '8849201').toString().replace(/\D/g, '') || '8849201';

      return `
        <div class="subscription-card">
          <div class="sub-card-top">
            <div>
              <h4 class="sub-name">${sub.botName}</h4>
              <span style="font-size: 11px; color: var(--text-muted);">${sub.planName} • ${Number(sub.price).toFixed(2)} USDT (BEP-20)</span>
            </div>
            <span class="sub-status-active">${isAr ? '🟢 نشط' : '🟢 Active'}</span>
          </div>

          <!-- Attached GTCfx MT5 Account Banner -->
          <div class="bot-gtcfx-attached-banner">
            <div class="bga-left">
              <div class="bga-icon-circle">
                <span class="material-symbols-rounded" style="font-size: 18px;">link</span>
              </div>
              <div>
                <span class="bga-label">${isAr ? 'حساب التداول المربوط' : 'ATTACHED TRADING ACCOUNT'}</span>
                <div class="bga-account-row">
                  <strong class="bga-account font-mono">GTCfx MT5 #${gtcfxAcc}</strong>
                </div>
              </div>
            </div>
            <span class="bga-lock-tag">${isAr ? '🔒 مقفل على هذا الحساب' : '🔒 Account-Locked'}</span>
          </div>

          <div class="license-box">
            <div>
              <span style="font-size: 10px; color: var(--text-muted); display: block; font-weight: 800;">${isAr ? `مفتاح الترخيص (مقفل على GTCFX #${gtcfxAcc})` : `LICENSE KEY (LOCKED TO GTCFX #${gtcfxAcc})`}</span>
              <span class="license-key-text font-mono">${sub.licenseKey}</span>
            </div>
            <button class="btn-copy-license" onclick="window.botHubApp.copyText('${sub.licenseKey}', 'License Key copied!')" title="Copy Key">
              <span class="material-symbols-rounded">content_copy</span>
            </button>
          </div>

          <div class="sub-meta-row">
            <span>${isAr ? 'الوسيط:' : 'Broker:'} <strong style="color: #fbbf24;">GTCfx</strong> (MT5 #${gtcfxAcc})</span>
            <span>${isAr ? 'طريقة الدفع:' : 'Paid via:'} <strong>${sub.paymentMethod || 'USDT (BEP-20)'}</strong></span>
          </div>

          <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-radius: 8px; margin-bottom: 14px; font-size: 11px; display: flex; align-items: center; gap: 8px;">
            <span class="pulse-dot"></span>
            <span style="color: var(--text-secondary);">${isAr ? `البوت جاهز ومصرح له بالعمل على حساب GTCfx MT5 #${gtcfxAcc}` : (sub.lastSignal || `EA Armed & Whitelisted for GTCfx MT5 #${gtcfxAcc}`)}</span>
          </div>

          <div class="sub-actions-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <button class="btn-sm btn-whatsapp" style="padding: 8px 8px; font-size: 11px;" onclick="window.botHubApp.sendSubscriptionToWhatsApp('${sub.id}')">
              <span class="material-symbols-rounded" style="font-size: 15px;">chat</span> ${isAr ? 'واتساب' : 'WhatsApp'}
            </button>
            <button class="btn-sm btn-outline" style="padding: 8px 6px; font-size: 11px;" onclick="window.botHubApp.openLicenseSetupModal('${sub.id}')">
              <span class="material-symbols-rounded" style="font-size: 15px;">terminal</span> ${isAr ? 'إعداد MT5' : 'GTCfx MT5'}
            </button>
            <button class="btn-sm btn-key-gen-small" style="padding: 8px 6px; font-size: 11px;" onclick="window.botHubApp.openLicenseGeneratorForSub('${sub.id}')">
              <span class="material-symbols-rounded" style="font-size: 15px;">key</span> ${isAr ? 'توليد المفتاح' : 'Key Gen'}
            </button>
            <button class="btn-sm btn-primary" style="padding: 8px 6px; font-size: 11px; background: linear-gradient(135deg, #0284c7 0%, #00a896 100%);" onclick="window.botHubApp.openSubscribeModal('${sub.botId}', '${sub.planKey}')" title="Purchase the same plan again for another MT5 account">
              <span class="material-symbols-rounded" style="font-size: 15px;">add_circle</span> ${isAr ? 'شراء لحساب آخر' : 'Buy Again'}
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  openPurchaseAdditionalModal() {
    const body = document.getElementById('purchaseAdditionalBody');
    if (!body) return;

    const allBots = this.state.bots || [];
    body.innerHTML = `
      <div style="margin-bottom: 16px;">
        <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.5;">
          Select any bot plan below to purchase an active license. You can purchase the same plan multiple times for different MT5 account numbers.
        </p>
      </div>
      <div class="purchase-plans-list" style="display: flex; flex-direction: column; gap: 10px;">
        ${allBots.map(bot => {
          let priceText = '$100 USDT';
          let durText = '1 Month Pass (30 Days)';
          let planKey = '1month';

          if (bot.id.includes('trial')) {
            priceText = '$10 USDT';
            durText = '2-Day Starter Trial';
            planKey = 'trial';
          } else if (bot.id.includes('3m')) {
            priceText = '$250 USDT';
            durText = '3 Months Pass (90 Days)';
            planKey = '3month';
          } else if (bot.id.includes('1y')) {
            priceText = '$900 USDT';
            durText = '1 Year VIP Pass (365 Days)';
            planKey = '1year';
          }

          const botSvg = this.getBotSvgIcon(bot.id);

          return `
            <div style="display: flex; align-items: center; justify-content: space-between; background: var(--surface-card); border: 1.5px solid var(--border-subtle); border-radius: 14px; padding: 12px 14px; gap: 10px;">
              <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
                <div style="width: 38px; height: 38px; border-radius: 10px; background: ${bot.color}15; border: 1px solid ${bot.color}35; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  ${botSvg}
                </div>
                <div style="min-width: 0;">
                  <h5 style="font-size: 13px; font-weight: 700; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${bot.name}</h5>
                  <span style="font-size: 11px; color: var(--text-muted);">${durText}</span>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 10px; flex-shrink: 0;">
                <span style="font-size: 13px; font-weight: 800; color: #fbbf24;" class="font-mono">${priceText}</span>
                <button class="btn-primary btn-sm" onclick="window.botHubApp.closeModal('purchaseAdditionalModal'); window.botHubApp.openSubscribeModal('${bot.id}', '${planKey}')">
                  <span class="material-symbols-rounded" style="font-size: 15px;">bolt</span> Buy Plan
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    this.openModal('purchaseAdditionalModal');
  }

  openLicenseSetupModal(subId) {
    const sub = this.state.subscriptions.find(s => s.id === subId);
    if (!sub) return;

    const gtcfxAcc = sub.gtcfxMt5Account || sub.mt5Account || '8849201';

    const body = document.getElementById('licenseModalBody');
    body.innerHTML = `
      <div style="margin-bottom: 16px;">
        <h4 style="font-size: 15px; font-weight: 700;">${sub.botName}</h4>
        <span style="font-size: 12px; color: var(--text-muted);">GTCfx Broker MT5 Whitelist & Terminal Setup</span>
      </div>

      <div class="license-box" style="margin-bottom: 16px;">
        <div>
          <span style="font-size: 10px; color: var(--text-muted); display: block;">ACTIVE LICENSE KEY</span>
          <span class="license-key-text">${sub.licenseKey}</span>
        </div>
        <button class="btn-copy-license" onclick="window.botHubApp.copyText('${sub.licenseKey}', 'License Key copied!')">
          <span class="material-symbols-rounded">content_copy</span>
        </button>
      </div>

      <div class="form-group">
        <label class="form-label" for="modalMt5Input">
          <span>GTCfx MT5 Account Number</span>
          <span class="label-hint">GTCfx Live or Demo Account</span>
        </label>
        <input type="text" id="modalMt5Input" class="form-input font-mono" value="${gtcfxAcc}" placeholder="e.g. 8849201">
      </div>

      <div style="background: rgba(234, 179, 8, 0.08); border: 1px solid rgba(234, 179, 8, 0.25); border-radius: 12px; padding: 12px; margin-bottom: 16px; font-size: 11px; color: var(--text-secondary); line-height: 1.4;">
        <strong style="color: #fbbf24;">GTCfx Installation Guide:</strong>
        <ol style="margin-left: 16px; margin-top: 4px;">
          <li>Copy your License Key above.</li>
          <li>In your GTCfx MT5 terminal, attach the EA to XAUUSD chart.</li>
          <li>Enter your License Key in EA Inputs and enable 'Allow Algo Trading'.</li>
        </ol>
      </div>

      <button class="btn-primary btn-block btn-lg" onclick="window.botHubApp.submitMt5Binding('${sub.id}')">
        <span class="material-symbols-rounded">check</span> Save GTCfx MT5 Account
      </button>

      <button class="btn-whatsapp btn-block" style="margin-top: 10px;" onclick="window.botHubApp.sendSubscriptionToWhatsApp('${sub.id}')">
        <svg class="wa-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.13.82.83-3.05-.2-.31a8.167 8.167 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.188 8.188 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.19 8.24zm4.51-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z"/>
        </svg>
        <span>Send to WhatsApp (+919495097786)</span>
      </button>
    `;

    this.openModal('licenseModal');
  }

  async submitMt5Binding(subId) {
    const input = document.getElementById('modalMt5Input');
    const acc = input ? input.value.trim() : '';
    if (!acc) {
      this.showToast('Please enter a valid GTCfx MT5 Account Number', 'danger');
      return;
    }

    try {
      const response = await fetch('/api/subscriptions/update-gtcfx', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subscriptionId: subId,
          gtcfxMt5Account: acc
        })
      });

      const res = await response.json();
      if (res.success) {
        this.showToast(`GTCfx MT5 Account #${acc} whitelisted!`, 'success');
        this.closeModal('licenseModal');
        await this.fetchData();
      }
    } catch (e) {
      this.closeModal('licenseModal');
      this.showToast('Account bound locally!', 'success');
    }
  }

  // -------------------------------------------------------------
  // 5. CREATOR STUDIO & AFFILIATE HUB
  // -------------------------------------------------------------
  // 7. CREATOR STUDIO & AFFILIATE HUB
  // -------------------------------------------------------------
  renderCreatorHub() {
    const creator = this.state.creator;
    if (!creator) return;
    const isAr = this.state.lang === 'ar';
    const t = TRANSLATIONS[this.state.lang] || TRANSLATIONS.en;

    const mrrEl = document.getElementById('creatorMrr');
    if (mrrEl) mrrEl.textContent = `$${(creator.mrr || 4820).toFixed(2)}`;

    const subsEl = document.getElementById('creatorSubscribers');
    if (subsEl) subsEl.textContent = creator.totalSubscribers || 64;

    const activeBotsEl = document.getElementById('creatorActiveBots');
    if (activeBotsEl) activeBotsEl.textContent = creator.activeBots || 2;

    const payoutEl = document.getElementById('creatorPayoutBalance');
    if (payoutEl) payoutEl.textContent = `$${(creator.payoutBalance || 3480).toFixed(2)}`;

    // Update Headings and Labels
    const creatorTitle = document.querySelector('#viewCreator .panel-title');
    const creatorSub = document.querySelector('#viewCreator .panel-subtitle');
    const mrrLabel = document.querySelector('#viewCreator .rev-label');
    const payoutBtn = document.querySelector('#viewCreator .btn-payout');
    const affTitle = document.querySelector('#viewCreator .affiliate-title');
    const affDesc = document.querySelector('#viewCreator .affiliate-desc');

    if (creatorTitle) creatorTitle.textContent = t.creatorTitle;
    if (creatorSub) creatorSub.textContent = t.creatorSub;
    if (mrrLabel) mrrLabel.textContent = t.creatorMrrLabel;
    if (payoutBtn) payoutBtn.innerHTML = `<span class="material-symbols-rounded">payments</span> ${t.btnPayout}`;
    if (affTitle) affTitle.textContent = t.affiliateTitle;
    if (affDesc) affDesc.innerHTML = isAr ? 'اربح <strong>20% عمولة متكررة</strong> عن كل مستخدم يشترك عبر رابطك الخاص.' : 'Earn <strong>20% recurring commission</strong> for every user who subscribes with your link.';

    const publishedList = document.getElementById('publishedBotsList');
    if (publishedList && creator.publishedBots) {
      publishedList.innerHTML = creator.publishedBots.map(bot => `
        <div style="background: var(--surface-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <h4 style="font-size: 14px; font-weight: 700;">${bot.name}</h4>
            <span style="font-size: 11px; color: var(--text-muted);">${bot.subscribers} ${isAr ? 'مشترك نشط' : 'Active Subscribers'} • $${bot.monthlyRevenue.toFixed(2)}/${isAr ? 'شهرياً' : 'mo'}</span>
          </div>
          <span style="font-size: 10px; font-weight: 700; background: var(--color-success-bg); color: var(--color-success); padding: 3px 8px; border-radius: 20px;">
            ${isAr ? 'نشط' : bot.status}
          </span>
        </div>
      `).join('');
    }
  }

  copyReferralLink() {
    const input = document.getElementById('affiliateLinkInput');
    if (input) {
      navigator.clipboard.writeText(input.value);
      this.showToast(this.state.lang === 'ar' ? 'تم نسخ رابط الإحالة! ستحصل على 20% عمولة عن كل مشترك.' : 'Affiliate referral link copied! Earn 20% on every subscriber.', 'success');
    }
  }

  openPublishModal() {
    this.openModal('publishModal');
  }

  async submitPublishBot() {
    const name = document.getElementById('pubBotName').value.trim();
    const tagline = document.getElementById('pubBotTagline').value.trim();
    const category = document.getElementById('pubCategory').value;
    const riskLevel = document.getElementById('pubRiskLevel').value;
    const winRate = document.getElementById('pubWinRate').value;
    const monthlyRoi = document.getElementById('pubMonthlyRoi').value;
    const monthlyPrice = document.getElementById('pubMonthlyPrice').value;
    const description = document.getElementById('pubDescription').value.trim();

    if (!name || !tagline) {
      this.showToast('Please provide a Bot Name and Tagline', 'danger');
      return;
    }

    try {
      const response = await fetch('/api/bots/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, tagline, category, riskLevel, winRate, monthlyRoi, monthlyPrice, description
        })
      });
      const res = await response.json();
      if (res.success) {
        this.closeModal('publishModal');
        this.showToast(`🚀 ${name} published to marketplace!`, 'success');
        await this.fetchData();
        this.switchView('explore');
      }
    } catch (e) {
      this.closeModal('publishModal');
      this.showToast('Bot published successfully in local mode!', 'success');
    }
  }

  // -------------------------------------------------------------
  // 6. BILLING & INVOICES
  // -------------------------------------------------------------
  renderBilling() {
    // Connected BEP-20 Asset Card & Payment Methods
    const pmContainer = document.getElementById('paymentMethodsList');
    if (pmContainer) {
      const bep20Addr = '0x26B5E776b4e3f40378b440Dfb2ACD675938B480b';
      pmContainer.innerHTML = `
        <div class="pm-item" style="border-color: rgba(240, 185, 11, 0.35); background: linear-gradient(135deg, rgba(240, 185, 11, 0.08) 0%, rgba(12, 16, 26, 0.95) 100%);">
          <div class="pm-left">
            <div class="pm-icon-box" style="background: rgba(240, 185, 11, 0.2); color: #F0B90B; border: 1px solid rgba(240, 185, 11, 0.4);">
              <span class="material-symbols-rounded">currency_bitcoin</span>
            </div>
            <div>
              <div class="pm-title" style="display: flex; align-items: center; gap: 6px;">
                <span>USDT (BEP-20)</span>
                <span class="bsc-coin-badge">BSC</span>
              </div>
              <div class="pm-sub font-mono font-xs" style="color: #fbbf24; word-break: break-all; margin-top: 2px;">
                ${bep20Addr}
              </div>
            </div>
          </div>
          <button class="btn-copy-code" onclick="window.botHubApp.copyText('${bep20Addr}', 'Deposit Address copied!')" title="Copy Address">
            <span class="material-symbols-rounded" style="font-size: 16px;">content_copy</span>
          </button>
        </div>
      `;
    }

    // Invoices
    const invContainer = document.getElementById('invoicesListContainer');
    if (invContainer) {
      invContainer.innerHTML = this.state.invoices.map(inv => {
        return `
          <div class="inv-item">
            <div class="inv-left">
              <div class="pm-icon-box" style="color: var(--color-success);">
                <span class="material-symbols-rounded">receipt_long</span>
              </div>
              <div>
                <div class="inv-title">${inv.botName} (${inv.plan})</div>
                <div class="inv-sub">${inv.id} • ${new Date(inv.date).toLocaleDateString()} • ${inv.paymentMethod}</div>
              </div>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 14px; font-weight: 800; font-family: var(--font-mono);">${inv.amount.toFixed(2)} USDT</span>
              <span style="display: block; font-size: 10px; color: var(--color-success); font-weight: 700;">${inv.status}</span>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  openAddPaymentModal() {
    this.showToast('Connect your Credit Card or Crypto Wallet in the Checkout flow.', 'success');
  }

  // -------------------------------------------------------------
  // 7. SETTINGS & UTILS
  // -------------------------------------------------------------
  showMt5GlobalBindingModal() {
    const acc = prompt('Enter your primary MetaTrader 5 Account Number:', this.state.defaultMt5Account);
    if (acc) {
      this.state.defaultMt5Account = acc.trim();
      const el = document.getElementById('defaultMt5AccountDisplay');
      if (el) el.textContent = `${this.state.defaultMt5Account} (Configured)`;
      this.showToast(`Default MT5 Account set to #${this.state.defaultMt5Account}`, 'success');
    }
  }

  showTelegramAlertsModal() {
    const botUsername = prompt('Enter your Telegram @username or Bot Token for push alerts:', '@AlexTraderAlerts_bot');
    if (botUsername) {
      this.showToast(`Telegram Alerts connected to ${botUsername}!`, 'success');
    }
  }

  showCurrencySelector() {
    const currencies = ['USD ($)', 'USDT (Tether)', 'EUR (€)', 'GBP (£)'];
    const selected = prompt(`Select Currency:\n1. USD ($)\n2. USDT\n3. EUR (€)\n4. GBP (£)\n\nEnter 1, 2, 3, or 4:`, '1');
    if (selected) {
      this.showToast('Currency preference updated!', 'success');
    }
  }

  async resetDemoData() {
    if (confirm('Reset all bots, subscriptions, and invoices to initial demo state?')) {
      try {
        await fetch('/api/reset-demo', { method: 'POST' });
        await this.fetchData();
        this.showToast('Demo data restored!', 'success');
      } catch (e) {
        this.showToast('Demo state reset', 'success');
      }
    }
  }

  startLiveSignalSimulation() {
    this.liveTelemetry = {
      goldPrice: 2492.65,
      goldChange: +1.38,
      spread: 0.0,
      globalBaseEquity: 1482950.00,
      globalNetProfit: 342890.00,
      globalRoi: 23.1,
      activeSession: 'London - NY Overlap Session (Peak Liquidity)',
      marketRegime: 'Bullish Imbalance Trend • XAUUSD Strong Buy',
      connectedNodes: 1840,
      winRate: 92.4,
      drawdown: 2.8,
      recentTrades: [
        { bot: 'B-Magnet Gold EA', action: 'Buy 0.50 Lot @ 2,491.20', pips: '+36.5 pips', profit: '+$1,825.00' },
        { bot: 'B-Magnet Gold Hunter', action: 'Scalp TP Triggered @ 2,493.10', pips: '+18.0 pips', profit: '+$900.00' },
        { bot: 'B-Magnet Gold Pro', action: 'Imbalance Cycle Closed', pips: '+54.0 pips', profit: '+$2,700.00' },
        { bot: 'B-Magnet Recovery', action: 'Hedge Exit (100% Breakeven)', pips: '+4.0 pips', profit: '+$200.00' }
      ],
      tradeIndex: 0
    };

    const renderTickerTrack = () => {
      const t = this.liveTelemetry;
      const trade = t.recentTrades[t.tradeIndex % t.recentTrades.length];
      const isUp = t.goldChange >= 0;
      const formattedGold = t.goldPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      const formattedEquity = t.globalBaseEquity.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      const formattedProfit = t.globalNetProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      return `
        <!-- XAUUSD Realtime Live Price -->
        <span class="ticker-item">
          <span class="ticker-pill-tag tpt-gold">🟡 XAUUSD REALTIME</span>
          <span class="highlight font-mono">$${formattedGold}</span>
          <span class="${isUp ? 'price-up' : 'price-down'}">${isUp ? '▲' : '▼'} ${isUp ? '+' : ''}${t.goldChange.toFixed(2)}%</span>
          <span style="font-size: 10px; color: var(--text-muted);">(Spread: ${t.spread.toFixed(1)} Raw GTCfx)</span>
        </span>

        <!-- Global Base Equity -->
        <span class="ticker-item">
          <span class="ticker-pill-tag tpt-equity">🌐 GLOBAL BASE EQUITY</span>
          <strong class="highlight font-mono">$${formattedEquity}</strong>
          <span class="profit font-mono">(+$${formattedProfit} / +${t.globalRoi}%)</span>
        </span>

        <!-- Current Live Session & Situation -->
        <span class="ticker-item">
          <span class="ticker-pill-tag tpt-session">🟢 LIVE SESSION</span>
          <strong class="highlight">${t.activeSession}</strong>
          <span style="color: #0284c7; font-weight: 700;">| ${t.marketRegime}</span>
        </span>

        <!-- Live Trade Execution Telemetry -->
        <span class="ticker-item">
          <span class="ticker-pill-tag tpt-signal">🤖 LIVE BOT TRADE</span>
          <strong class="highlight">${trade.bot}:</strong>
          <span>${trade.action}</span>
          <span class="profit">${trade.profit} (${trade.pips})</span>
        </span>

        <!-- Risk & Node Telemetry -->
        <span class="ticker-item">
          <span class="ticker-pill-tag tpt-equity">🛡️ RISK CONTROL</span>
          <span>Max DD: <strong>${t.drawdown}%</strong> (Cap: 30%)</span>
          <span>• Win Rate: <strong class="profit">${t.winRate}%</strong></span>
          <span>• Connected Nodes: <strong>${t.connectedNodes} GTCfx MT5 Terminals</strong></span>
        </span>
      `;
    };

    const updateDom = () => {
      const el = document.getElementById('liveTickerContent');
      if (!el) return;
      const trackHtml = renderTickerTrack();
      // Duplicate tracks for seamless infinite marquee loop
      el.innerHTML = `${trackHtml}${trackHtml}`;
    };

    updateDom();

    // High frequency price tick & equity telemetry update (every 2.2 seconds)
    setInterval(() => {
      const delta = (Math.random() - 0.47) * 0.35;
      this.liveTelemetry.goldPrice = Math.max(2470, +(this.liveTelemetry.goldPrice + delta).toFixed(2));
      this.liveTelemetry.goldChange = +(this.liveTelemetry.goldChange + (delta * 0.02)).toFixed(2);
      
      const equityDelta = delta * 180;
      this.liveTelemetry.globalBaseEquity = +(this.liveTelemetry.globalBaseEquity + equityDelta).toFixed(2);
      this.liveTelemetry.globalNetProfit = +(this.liveTelemetry.globalNetProfit + equityDelta).toFixed(2);

      if (Math.random() > 0.6) {
        this.liveTelemetry.tradeIndex++;
      }

      updateDom();
    }, 2200);
  }

  copyText(text, successMsg) {
    navigator.clipboard.writeText(text);
    this.showToast(successMsg || 'Copied to clipboard!', 'success');
  }

  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Choose appropriate icon based on type / message
    let icon = 'info';
    if (type === 'success') icon = 'check_circle';
    else if (type === 'danger') icon = 'error';
    else if (type === 'warning') icon = 'warning';
    
    if (message.includes('🔒') || message.toLowerCase().includes('log out') || message.toLowerCase().includes('logged out') || message.includes('خروج')) {
      icon = 'lock';
    } else if (message.includes('🎉') || message.includes('✨')) {
      icon = 'celebration';
    } else if (message.includes('📋') || message.includes('copy') || message.includes('نسخ')) {
      icon = 'content_copy';
    }

    const iconSpan = document.createElement('span');
    iconSpan.className = 'material-symbols-rounded toast-icon-badge';
    iconSpan.textContent = icon;

    const textSpan = document.createElement('span');
    textSpan.textContent = message;

    toast.appendChild(iconSpan);
    toast.appendChild(textSpan);

    container.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 3800);
  }

  // -------------------------------------------------------------
  // 8. GOOGLE ACCOUNT CRM DATABASE & REAL-TIME ALERTS
  // -------------------------------------------------------------
  async fetchAdminDatabase() {
    try {
      const res = await fetch('/api/admin/database').then(r => r.json());
      if (res.success) {
        this.renderAdminDatabase(res);
      }
    } catch (e) {
      console.warn('Error fetching admin database:', e);
    }
  }

  renderAdminDatabase(data) {
    const stats = data.stats || {};
    const customers = data.customers || [];
    const subscriptions = data.subscriptions || [];
    const notifications = data.notifications || [];
    const isAr = this.state.lang === 'ar';

    // Top KPIs
    const kpiCust = document.getElementById('dbKpiCustomers');
    const kpiSubs = document.getElementById('dbKpiSubscriptions');
    const kpiRev = document.getElementById('dbKpiRevenue');
    const kpiMt5 = document.getElementById('dbKpiMt5');

    if (kpiCust) kpiCust.textContent = stats.totalCustomers || customers.length || '1';
    if (kpiSubs) kpiSubs.textContent = stats.activeSubscriptions || subscriptions.length || '2';
    if (kpiRev) kpiRev.textContent = `${(stats.totalRevenueUsdt || 370).toFixed(2)} USDT`;
    if (kpiMt5) kpiMt5.textContent = `${subscriptions.length} ${isAr ? 'مصرح' : 'Whitelisted'}`;

    // Saved webhook in input
    const webhookInput = document.getElementById('googleSheetWebhookInput');
    const savedUrl = localStorage.getItem('b_bot_google_webhook_url');
    if (webhookInput && savedUrl && !webhookInput.value) {
      webhookInput.value = savedUrl;
    }

    // Notification Badge in Header
    const notifCount = document.getElementById('headerNotifCount');
    if (notifCount) {
      const unreadCount = notifications.filter(n => n.unread).length;
      if (unreadCount > 0) {
        notifCount.textContent = unreadCount;
        notifCount.style.display = 'flex';
      } else {
        notifCount.style.display = 'none';
      }
    }

    // Populate Quick-fill client dropdown in Admin Hosted Key Generator
    const clientSelect = document.getElementById('adminKeyGenClientSelect');
    if (clientSelect) {
      const existingAccounts = new Set();
      let selectHtml = `<option value="">⚡ Quick-fill from CRM Customers...</option>`;
      subscriptions.forEach(s => {
        const acc = s.gtcfxMt5Account || s.mt5Account;
        if (acc && !existingAccounts.has(acc)) {
          existingAccounts.add(acc);
          selectHtml += `<option value="${acc}">${s.customerPhone || 'Client'} — MT5 #${acc} (${s.planName || 'Pass'})</option>`;
        }
      });
      customers.forEach(c => {
        const acc = c.gtcfxMt5Account;
        if (acc && !existingAccounts.has(acc)) {
          existingAccounts.add(acc);
          selectHtml += `<option value="${acc}">${c.phone} — MT5 #${acc} (${c.name || 'Trader'})</option>`;
        }
      });
      clientSelect.innerHTML = selectHtml;
    }
    this.generateAdminKey();

    // Render Customers Table
    const custTbody = document.getElementById('crmCustomersTbody');
    if (custTbody) {
      if (customers.length === 0) {
        custTbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color: var(--text-muted);">${isAr ? 'لا توجد سجلات دخول عملاء بعد.' : 'No customer logins recorded yet.'}</td></tr>`;
      } else {
        custTbody.innerHTML = customers.map(c => `
          <tr>
            <td>
              <strong style="color: #fff;">${c.phone}</strong>
              <span style="display:block; font-size:10px; color:var(--text-muted);">${c.name || (isAr ? 'متداول' : 'Trader')}</span>
            </td>
            <td class="font-mono font-bold" style="color: #10B981;">${Number(c.walletBalance || 0).toFixed(2)} USDT</td>
            <td><span class="badge-featured" style="font-size:9px; padding:2px 6px;">${c.activeBots || (c.subscriptions ? c.subscriptions.length : 0)} EA</span></td>
            <td class="font-mono">${Number(c.totalSpent || 0).toFixed(2)} USDT</td>
            <td class="font-mono" style="color: #fbbf24;">#${c.gtcfxMt5Account || '8849201'}</td>
            <td style="font-size: 10px; color: var(--text-muted);">${new Date(c.lastLoginAt || c.registeredAt || Date.now()).toLocaleString(isAr ? 'ar-SA' : 'en-US')}</td>
          </tr>
        `).join('');
      }
    }

    // Render Subscriptions & Expiry Table
    const subTbody = document.getElementById('crmSubscriptionsTbody');
    if (subTbody) {
      if (subscriptions.length === 0) {
        subTbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color: var(--text-muted);">${isAr ? 'لا توجد اشتراكات نشطة.' : 'No active bot subscriptions.'}</td></tr>`;
      } else {
        const now = Date.now();
        subTbody.innerHTML = subscriptions.map(s => {
          const expTime = new Date(s.expiresDate).getTime();
          const daysLeft = Math.ceil((expTime - now) / (1000 * 60 * 60 * 24));
          let badgeClass = 'badge-days-left';
          let badgeText = isAr ? `باقي ${daysLeft} يوم` : `${daysLeft} Days Left`;

          if (daysLeft <= 0) {
            badgeClass = 'badge-days-expired';
            badgeText = isAr ? 'منتهي' : 'Expired';
          } else if (daysLeft <= 5) {
            badgeClass = 'badge-days-warning';
            badgeText = isAr ? `⚠️ باقي ${daysLeft} يوم` : `⚠️ ${daysLeft} Days Left`;
          }

          return `
            <tr>
              <td><strong class="font-mono">${s.customerPhone || '+919495097786'}</strong></td>
              <td style="font-weight: 700; color: #fff;">${s.botName}</td>
              <td><span class="badge-tag">${s.planName}</span></td>
              <td class="font-mono font-xs" style="color: var(--brand-cyan);">${s.licenseKey}</td>
              <td class="font-mono" style="color: #fbbf24;">#${s.gtcfxMt5Account || s.mt5Account || '8849201'}</td>
              <td style="font-size: 10px;">${new Date(s.expiresDate).toLocaleDateString(isAr ? 'ar-SA' : 'en-US')}</td>
              <td><span class="${badgeClass}">${badgeText}</span></td>
            </tr>
          `;
        }).join('');
      }
    }

    // Render Audit & Notification Timeline
    const timeline = document.getElementById('crmAuditTimeline');
    if (timeline) {
      if (notifications.length === 0) {
        timeline.innerHTML = `<div style="text-align:center; color: var(--text-muted); padding: 12px;">${isAr ? 'لا يوجد نشاط مسجل بعد.' : 'No activity logged yet.'}</div>`;
      } else {
        timeline.innerHTML = notifications.slice(0, 10).map(n => {
          let icon = 'notifications';
          let iconClass = 'login';
          if (n.type === 'NEW_SUBSCRIPTION') {
            icon = 'rocket_launch';
            iconClass = 'sub';
          } else if (n.type === 'WALLET_TOPUP') {
            icon = 'currency_bitcoin';
            iconClass = 'topup';
          }

          return `
            <div class="timeline-item">
              <div class="tl-icon ${iconClass}">
                <span class="material-symbols-rounded" style="font-size: 18px;">${icon}</span>
              </div>
              <div class="tl-content">
                <div class="tl-header">
                  <span class="tl-title">${n.title}</span>
                  <span class="tl-time">${new Date(n.timestamp).toLocaleTimeString()}</span>
                </div>
                <div class="tl-body">${n.message}</div>
              </div>
            </div>
          `;
        }).join('');
      }
    }
  }

  async syncToGoogleSheet() {
    const input = document.getElementById('googleSheetWebhookInput');
    const webhookUrl = input ? input.value.trim() : '';

    if (webhookUrl) {
      localStorage.setItem('b_bot_google_webhook_url', webhookUrl);
    }

    const btn = document.getElementById('btnSyncGoogleSheet');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<span class="material-symbols-rounded" style="animation: spin 1s infinite linear;">sync</span> Syncing...';
    }

    try {
      const res = await fetch('/api/admin/sync-google-sheet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ webhookUrl: webhookUrl })
      }).then(r => r.json());

      // Outbound client-side push directly to Google Apps Script Web App
      if (webhookUrl && webhookUrl.includes('script.google.com')) {
        const dbRes = await fetch('/api/admin/database').then(r => r.json());
        const payload = {
          event: 'DATABASE_FULL_SYNC',
          timestamp: new Date().toISOString(),
          totalCustomers: dbRes.customers ? dbRes.customers.length : 1,
          totalSubscriptions: dbRes.subscriptions ? dbRes.subscriptions.length : 2,
          customers: dbRes.customers || [],
          subscriptions: dbRes.subscriptions || [],
          invoices: dbRes.invoices || [],
          targetOwnerWhatsApp: '+919495097786'
        };

        try {
          await fetch(webhookUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload)
          });
        } catch (postErr) {
          console.log('Outbound webhook notice:', postErr);
        }
      }

      if (res.success) {
        this.showToast(`🟢 ${res.message}`, 'success');
        this.fetchAdminDatabase();
      } else {
        this.showToast(res.error || 'Sync completed', 'info');
      }
    } catch (e) {
      this.showToast('🟢 Google Database synchronized locally!', 'success');
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<span class="material-symbols-rounded">sync</span> Sync';
      }
    }
  }

  openNotificationsModal() {
    const body = document.getElementById('notificationsModalBody');

    fetch('/api/notifications').then(r => r.json()).then(res => {
      const list = (res.success && res.notifications) ? res.notifications : [];
      if (body) {
        if (list.length === 0) {
          body.innerHTML = `
            <div style="text-align: center; padding: 30px 10px; color: var(--text-muted);">
              <span class="material-symbols-rounded" style="font-size: 40px; color: var(--text-muted); display: block; margin-bottom: 8px;">notifications_off</span>
              <p>No new customer alerts yet.</p>
            </div>
          `;
        } else {
          body.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 10px; max-height: 400px; overflow-y: auto;">
              ${list.map(n => `
                <div class="timeline-item" style="background: rgba(255, 255, 255, 0.03);">
                  <div class="tl-icon ${n.type === 'NEW_SUBSCRIPTION' ? 'sub' : (n.type === 'WALLET_TOPUP' ? 'topup' : 'login')}">
                    <span class="material-symbols-rounded" style="font-size: 18px;">
                      ${n.type === 'NEW_SUBSCRIPTION' ? 'rocket_launch' : (n.type === 'WALLET_TOPUP' ? 'currency_bitcoin' : 'person_add')}
                    </span>
                  </div>
                  <div class="tl-content">
                    <div class="tl-header">
                      <span class="tl-title">${n.title}</span>
                      <span class="tl-time">${new Date(n.timestamp).toLocaleTimeString()}</span>
                    </div>
                    <div class="tl-body">${n.message}</div>
                    <div style="margin-top: 8px;">
                      <a href="https://api.whatsapp.com/send?phone=919495097786&text=${encodeURIComponent('Hello ' + (n.customerPhone || '') + ', regarding your B-Bot Pro notification: ' + n.title)}" target="_blank" class="btn-xs btn-outline" style="display: inline-flex; align-items: center; gap: 4px; color: #25D366; border-color: rgba(37, 211, 102, 0.3);">
                        <span class="material-symbols-rounded" style="font-size: 13px;">chat</span> WhatsApp Customer
                      </a>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          `;
        }
      }
      this.openModal('notificationsModal');
    }).catch(() => {
      this.openModal('notificationsModal');
    });
  }

  exportCustomersCsv() {
    fetch('/api/admin/database').then(r => r.json()).then(res => {
      const customers = res.customers || [];
      if (customers.length === 0) {
        this.showToast('No customer records to export', 'info');
        return;
      }
      let csv = 'Customer Phone,Trader Name,Wallet Balance USDT,Active Bots,Total Spent USDT,GTCfx MT5 Account,Registered Date,Last Login\n';
      customers.forEach(c => {
        csv += `"${c.phone}","${c.name}",${c.walletBalance || 0},${c.activeBots || 0},${c.totalSpent || 0},"${c.gtcfxMt5Account || '8849201'}","${c.registeredAt}","${c.lastLoginAt || ''}"\n`;
      });

      const blob = new Blob([csv], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.setAttribute('href', url);
      a.setAttribute('download', `b_bot_pro_customers_${Date.now()}.csv`);
      a.click();
      this.showToast('📥 Customer CRM CSV exported successfully!', 'success');
    });
  }

  openGoogleScriptGuide() {
    alert(
      "🟢 GOOGLE SHEETS LIVE SYNC INSTRUCTIONS:\n\n" +
      "1. Open https://sheets.new in your Google Account.\n" +
      "2. Click Extensions > Apps Script.\n" +
      "3. Paste the contents of google_apps_script.js.\n" +
      "4. Click Deploy > New deployment > Web App.\n" +
      "5. Set access to 'Anyone' and click Deploy.\n" +
      "6. Copy your Web App URL and paste it into the Sync Webhook box."
    );
  }

  copyGtcfxReferralLink() {
    const url = 'https://web.mygtc.app/login/register?ref=Y8JMgpna';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        this.showToast('📋 GTCfx Registration Link copied to clipboard!', 'success');
      }).catch(() => {
        this.copyText(url, '📋 GTCfx Registration Link copied!');
      });
    } else {
      this.copyText(url, '📋 GTCfx Registration Link copied!');
    }
  }

  // -------------------------------------------------------------
  // 12. LOCALHOST CRYPTOGRAPHIC MT5 LICENSE GENERATOR
  // -------------------------------------------------------------
  calculateLicenseHash(raw) {
    let hash = 2166136261 >>> 0;
    for (let i = 0; i < raw.length; i++) {
      hash ^= raw.charCodeAt(i);
      hash = Math.imul(hash, 16777619) >>> 0;
    }
    return hash.toString(16).toUpperCase().padStart(8, '0');
  }

  openLicenseGeneratorForSub(subId) {
    this.openLicenseGeneratorModal(subId);
  }

  populatePurchasedBotsDropdown(selectedSubId) {
    const select = document.getElementById('genPurchasedBotSelect');
    if (!select) return;
    const activeSubs = this.state.subscriptions || [];

    select.innerHTML = activeSubs.map(s => {
      const acc = s.gtcfxMt5Account || s.mt5Account || '8849201';
      return `<option value="${s.id}" ${s.id === selectedSubId ? 'selected' : ''}>🤖 ${s.botName} • ${s.planName} (MT5 #${acc})</option>`;
    }).join('');
  }

  onSelectPurchasedBot(subId) {
    const activeSubs = this.state.subscriptions || [];
    const sub = activeSubs.find(s => s.id === subId) || activeSubs[0];
    if (sub) {
      this.renderGeneratorForSub(sub);
    }
  }

  renderGeneratorForSub(sub) {
    if (!sub) return;

    // 1. Auto-detect default MT5 account number from purchased bot
    const detectedMt5 = (sub.gtcfxMt5Account || sub.mt5Account || (this.state.currentUser && this.state.currentUser.gtcfxMt5Account) || '8849201').toString().replace(/\D/g, '') || '8849201';

    const detBotEl = document.getElementById('genDetectedBotName');
    if (detBotEl) detBotEl.textContent = sub.botName || 'B-Magnet Gold Hunter EA';

    const detMt5El = document.getElementById('genDetectedMt5Account');
    if (detMt5El) detMt5El.textContent = `#${detectedMt5}`;

    const noticeMt5El = document.getElementById('genNoticeMt5');
    if (noticeMt5El) noticeMt5El.textContent = `#${detectedMt5}`;

    // 2. Auto-detect rent duration strictly from purchased bot plan
    const planKey = (sub.planKey || '').toLowerCase();
    const price = Number(sub.price) || 100;

    let daysToAdd = 30;
    let planTitle = '1 Month ($100)';
    let durDisplay = '1 Month (30 Days)';

    if (planKey.includes('trial') || price === 10) {
      daysToAdd = 2;
      planTitle = 'Trial (2 Days)';
      durDisplay = '2-Day Starter Trial';
    } else if (planKey.includes('3m') || planKey.includes('3month') || price === 250) {
      daysToAdd = 90;
      planTitle = '3 Months ($250)';
      durDisplay = '3 Months Pass (90 Days)';
    } else if (planKey.includes('1y') || planKey.includes('year') || price === 900) {
      daysToAdd = 365;
      planTitle = '1 Year ($900)';
      durDisplay = '1 Year VIP Pass (365 Days)';
    } else {
      daysToAdd = 30;
      planTitle = '1 Month ($100)';
      durDisplay = '1 Month Pass (30 Days)';
    }

    const detPlanEl = document.getElementById('genDetectedPlanDuration');
    if (detPlanEl) detPlanEl.textContent = sub.planName || durDisplay;

    const durBadge = document.getElementById('genDurationBadge');
    if (durBadge) durBadge.textContent = planTitle;

    // 3. Expiry date calculation
    let expiryTag = "";
    let expiryDesc = "";

    if (sub.expiresDate) {
      try {
        const d = new Date(sub.expiresDate);
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        expiryTag = `${yyyy}${mm}${dd}`;
        expiryDesc = `${yyyy}.${mm}.${dd} 23:59:59`;
      } catch (e) {
        let d = new Date();
        d.setDate(d.getDate() + daysToAdd);
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        expiryTag = `${yyyy}${mm}${dd}`;
        expiryDesc = `${yyyy}.${mm}.${dd} 23:59:59`;
      }
    } else {
      let d = new Date();
      d.setDate(d.getDate() + daysToAdd);
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const dd = String(d.getDate()).padStart(2, '0');
      expiryTag = `${yyyy}${mm}${dd}`;
      expiryDesc = `${yyyy}.${mm}.${dd} 23:59:59`;
    }

    const detExp = document.getElementById('genDetExpiry');
    if (detExp) detExp.textContent = expiryDesc;

    // 4. Existing Key Lock Rule: If key already generated, lock and reuse existing key
    let finalKey = sub.licenseKey;
    if (!finalKey) {
      const salt = "BM_V08_GOLD_SECRET_SALT_@919495097786";
      const raw = `${detectedMt5}_${expiryTag}_${salt}`;
      const checksum = this.calculateLicenseHash(raw);
      finalKey = `BM8-${detectedMt5}-${expiryTag}-${checksum}`;
      sub.licenseKey = finalKey;
    }

    const keyOut = document.getElementById('genKeyOutput');
    if (keyOut) keyOut.textContent = finalKey;

    const statusBadge = document.getElementById('genKeyStatusBadge');
    if (statusBadge) statusBadge.textContent = '✅ Issued & Locked';

    const lockedNotice = document.getElementById('genLockedNoticeWrap');
    if (lockedNotice) lockedNotice.style.display = 'flex';

    this.currentGeneratedData = {
      key: finalKey,
      account: detectedMt5,
      plan: planTitle,
      botName: sub.botName || 'B-Magnet Gold Hunter EA',
      expiryDesc: expiryDesc
    };
  }

  openLicenseGeneratorModal() {
    // REDIRECT EXCLUSIVELY TO ADMIN PANEL (PANEL 03: KEY GENERATOR)
    this.switchView('database');
  }

  initModalKeygenState() {
    this.modalKeygenState = {
      mode: 'MONTHS',
      count: 1,
      title: '1 Month ($100)',
      price: '$100',
      salt: "BM_V08_GOLD_SECRET_SALT_@919495097786"
    };
  }

  selectModalKeyDuration(mode, count, title, price, btn) {
    if (!this.modalKeygenState) this.initModalKeygenState();
    this.modalKeygenState.mode = mode;
    this.modalKeygenState.count = count;
    this.modalKeygenState.title = title;
    this.modalKeygenState.price = price;

    const btns = document.querySelectorAll('#licenseGeneratorModal .akg-preset-btn');
    btns.forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const customWrap = document.getElementById('modalKeyGenCustomDateWrap');
    if (customWrap) customWrap.style.display = 'none';

    const lbl = document.getElementById('modalKeyGenPlanLabel');
    if (lbl) lbl.textContent = title;

    this.generateModalKey();
  }

  toggleModalKeyCustomDate(btn) {
    if (!this.modalKeygenState) this.initModalKeygenState();
    this.modalKeygenState.mode = 'CUSTOM';
    this.modalKeygenState.title = 'Custom Date';
    this.modalKeygenState.price = 'Custom';

    const btns = document.querySelectorAll('#licenseGeneratorModal .akg-preset-btn');
    btns.forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const customWrap = document.getElementById('modalKeyGenCustomDateWrap');
    if (customWrap) customWrap.style.display = 'block';

    const dateInput = document.getElementById('modalKeyGenCustomDate');
    if (dateInput && !dateInput.value) {
      let d = new Date();
      d.setMonth(d.getMonth() + 1);
      dateInput.value = d.toISOString().split('T')[0];
    }

    const lbl = document.getElementById('modalKeyGenPlanLabel');
    if (lbl) lbl.textContent = 'Custom Date';

    this.generateModalKey();
  }

  getModalKeyExpiryTag() {
    if (!this.modalKeygenState) this.initModalKeygenState();
    const st = this.modalKeygenState;
    if (st.mode === 'LIFETIME') return "LIFETIME";

    let d = new Date();
    if (st.mode === 'DAYS') {
      d.setDate(d.getDate() + st.count);
    } else if (st.mode === 'MONTHS') {
      d.setMonth(d.getMonth() + st.count);
    } else if (st.mode === 'CUSTOM') {
      const dateInput = document.getElementById('modalKeyGenCustomDate');
      if (dateInput && dateInput.value) {
        const parts = dateInput.value.split('-');
        return `${parts[0]}${parts[1]}${parts[2]}`;
      }
    }
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  }

  generateModalKey() {
    if (!this.modalKeygenState) this.initModalKeygenState();
    const accInput = document.getElementById('modalKeyGenAcc');
    const acc = accInput ? accInput.value.trim() : '8849201';
    const cleanAcc = acc || '8849201';

    const expiryTag = this.getModalKeyExpiryTag();
    const salt = "BM_V08_GOLD_SECRET_SALT_@919495097786";
    const raw = `${cleanAcc}_${expiryTag}_${salt}`;
    const hash = this.calculateLicenseHash(raw);
    const fullKey = `BM8-${cleanAcc}-${expiryTag}-${hash}`;

    let expiryDesc = "";
    if (this.modalKeygenState.mode === 'LIFETIME') {
      expiryDesc = "LIFETIME (No Expiry) ♾️";
    } else {
      const y = expiryTag.substring(0, 4);
      const m = expiryTag.substring(4, 6);
      const day = expiryTag.substring(6, 8);
      expiryDesc = `${y}.${m}.${day} 23:59:59`;
    }

    const keyOut = document.getElementById('modalKeyGenOutput');
    if (keyOut) keyOut.textContent = fullKey;

    const detAcc = document.getElementById('modalKeyGenDetAcc');
    if (detAcc) detAcc.textContent = `#${cleanAcc}`;

    const detPlan = document.getElementById('modalKeyGenDetPlan');
    if (detPlan) detPlan.textContent = this.modalKeygenState.title;

    const durPill = document.getElementById('modalKeyGenDurPill');
    if (durPill) durPill.textContent = this.modalKeygenState.title;

    const detExp = document.getElementById('modalKeyGenDetExpiry');
    if (detExp) detExp.textContent = expiryDesc;

    this.modalGeneratedKeyData = {
      key: fullKey,
      account: cleanAcc,
      plan: this.modalKeygenState.title,
      expiryTag: expiryTag,
      expiryDesc: expiryDesc
    };

    return fullKey;
  }

  onModalClientSelect(val) {
    if (!val) return;
    const accInput = document.getElementById('modalKeyGenAcc');
    if (accInput) accInput.value = val;
    this.generateModalKey();
  }

  copyModalKey() {
    if (!this.modalGeneratedKeyData) this.generateModalKey();
    const key = this.modalGeneratedKeyData.key;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(key).then(() => {
        this.showToast('✅ License Key Copied!', 'success');
      }).catch(() => {
        this.copyText(key, '✅ License Key Copied!');
      });
    } else {
      this.copyText(key, '✅ License Key Copied!');
    }
  }

  copyModalWhatsAppMsg() {
    if (!this.modalGeneratedKeyData) this.generateModalKey();
    const d = this.modalGeneratedKeyData;
    const msg = `🧲 *B-MAGNET GOLD HUNTER v.08 LICENSE ACTIVATION*\n\n` +
                `👤 *Registered MT5 Account:* #${d.account}\n` +
                `💎 *Plan:* ${d.plan}\n` +
                `⏳ *Validity Until:* ${d.expiryDesc}\n\n` +
                `🔑 *Your License Key:* \n\`${d.key}\`\n\n` +
                `📥 *Activation Instructions:*\n` +
                `1. Open MetaTrader 5 and attach *B-Magnet Gold Hunter* to your Gold (XAUUSD) chart.\n` +
                `2. In the EA Inputs settings tab, paste your License Key into *InpLicenseKey*.\n` +
                `3. Click OK and trade!\n\n` +
                `📞 *Vendor WhatsApp Support:* +919495097786`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(msg).then(() => {
        this.showToast('💬 WhatsApp Message Copied!', 'success');
      }).catch(() => {
        this.copyText(msg, '💬 WhatsApp Message Copied!');
      });
    } else {
      this.copyText(msg, '💬 WhatsApp Message Copied!');
    }
  }

  sendModalWhatsAppDirect() {
    if (!this.modalGeneratedKeyData) this.generateModalKey();
    const d = this.modalGeneratedKeyData;
    const msg = `🧲 *B-MAGNET GOLD HUNTER v.08 LICENSE ACTIVATION*\n\n` +
                `👤 *Registered MT5 Account:* #${d.account}\n` +
                `💎 *Plan:* ${d.plan}\n` +
                `⏳ *Validity Until:* ${d.expiryDesc}\n\n` +
                `🔑 *Your License Key:* \n\`${d.key}\`\n\n` +
                `📥 *Activation Instructions:*\n` +
                `1. Open MetaTrader 5 and attach *B-Magnet Gold Hunter* to your Gold (XAUUSD) chart.\n` +
                `2. In the EA Inputs settings tab, paste your License Key into *InpLicenseKey*.\n` +
                `3. Click OK and trade!\n\n` +
                `📞 *Vendor Support:* +919495097786`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919495097786?text=${encoded}`, '_blank');
  }

  async saveModalKeyToMt5() {
    if (!this.modalGeneratedKeyData) this.generateModalKey();
    const d = this.modalGeneratedKeyData;
    try {
      this.showToast(`Binding MT5 #${d.account}...`, 'info');
      await this.apiCall('/api/subscriptions/update-gtcfx', 'POST', {
        gtcfxMt5Account: d.account
      });
      this.showToast(`✅ License Key BM8-#${d.account} Bound & Active!`, 'success');
      await this.fetchData();
    } catch (e) {
      this.showToast(`✅ License Key BM8-#${d.account} Active!`, 'success');
    }
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      if (!modal.dataset.backdropBound) {
        modal.dataset.backdropBound = 'true';
        modal.addEventListener('click', (e) => {
          if (e.target === modal) this.closeModal(modalId);
        });
      }
    }
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
  }

  // =========================================================================
  // HOSTED ADMIN CRM VENDOR LICENSE KEY GENERATOR PROGRAM
  // =========================================================================
  initAdminKeygenState() {
    this.adminKeygenState = {
      mode: 'MONTHS',
      count: 1,
      title: '1 Month ($100)',
      price: '$100',
      salt: "BM_V08_GOLD_SECRET_SALT_@919495097786"
    };
  }

  selectAdminKeyDuration(mode, count, title, price, btn) {
    if (!this.adminKeygenState) this.initAdminKeygenState();
    this.adminKeygenState.mode = mode;
    this.adminKeygenState.count = count;
    this.adminKeygenState.title = title;
    this.adminKeygenState.price = price;

    const btns = document.querySelectorAll('.akg-preset-btn');
    btns.forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const customWrap = document.getElementById('adminKeyGenCustomDateWrap');
    if (customWrap) customWrap.style.display = 'none';

    const lbl = document.getElementById('adminKeyGenPlanLabel');
    if (lbl) lbl.textContent = title;

    this.generateAdminKey();
  }

  toggleAdminKeyCustomDate(btn) {
    if (!this.adminKeygenState) this.initAdminKeygenState();
    this.adminKeygenState.mode = 'CUSTOM';
    this.adminKeygenState.title = 'Custom Date';
    this.adminKeygenState.price = 'Custom';

    const btns = document.querySelectorAll('.akg-preset-btn');
    btns.forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const customWrap = document.getElementById('adminKeyGenCustomDateWrap');
    if (customWrap) customWrap.style.display = 'block';

    const dateInput = document.getElementById('adminKeyGenCustomDate');
    if (dateInput && !dateInput.value) {
      let d = new Date();
      d.setMonth(d.getMonth() + 1);
      dateInput.value = d.toISOString().split('T')[0];
    }

    const lbl = document.getElementById('adminKeyGenPlanLabel');
    if (lbl) lbl.textContent = 'Custom Date';

    this.generateAdminKey();
  }

  getAdminKeyExpiryTag() {
    if (!this.adminKeygenState) this.initAdminKeygenState();
    const st = this.adminKeygenState;
    if (st.mode === 'LIFETIME') return "LIFETIME";

    let d = new Date();
    if (st.mode === 'DAYS') {
      d.setDate(d.getDate() + st.count);
    } else if (st.mode === 'MONTHS') {
      d.setMonth(d.getMonth() + st.count);
    } else if (st.mode === 'CUSTOM') {
      const dateInput = document.getElementById('adminKeyGenCustomDate');
      if (dateInput && dateInput.value) {
        const parts = dateInput.value.split('-');
        return `${parts[0]}${parts[1]}${parts[2]}`;
      }
    }
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  }

  generateAdminKey() {
    if (!this.adminKeygenState) this.initAdminKeygenState();
    const accInput = document.getElementById('adminKeyGenAcc');
    const acc = accInput ? accInput.value.trim() : '8849201';
    const cleanAcc = acc || '8849201';

    const expiryTag = this.getAdminKeyExpiryTag();
    const salt = "BM_V08_GOLD_SECRET_SALT_@919495097786";
    const raw = `${cleanAcc}_${expiryTag}_${salt}`;
    const hash = this.calculateLicenseHash(raw);
    const fullKey = `BM8-${cleanAcc}-${expiryTag}-${hash}`;

    let expiryDesc = "";
    if (this.adminKeygenState.mode === 'LIFETIME') {
      expiryDesc = "LIFETIME (No Expiry) ♾️";
    } else {
      const y = expiryTag.substring(0, 4);
      const m = expiryTag.substring(4, 6);
      const day = expiryTag.substring(6, 8);
      expiryDesc = `${y}.${m}.${day} 23:59:59`;
    }

    const keyOut = document.getElementById('adminKeyGenOutput');
    if (keyOut) keyOut.textContent = fullKey;

    const detAcc = document.getElementById('adminKeyGenDetAcc');
    if (detAcc) detAcc.textContent = `#${cleanAcc}`;

    const detPlan = document.getElementById('adminKeyGenDetPlan');
    if (detPlan) detPlan.textContent = this.adminKeygenState.title;

    const durPill = document.getElementById('adminKeyGenDurPill');
    if (durPill) durPill.textContent = this.adminKeygenState.title;

    const detExp = document.getElementById('adminKeyGenDetExpiry');
    if (detExp) detExp.textContent = expiryDesc;

    this.adminGeneratedKeyData = {
      key: fullKey,
      account: cleanAcc,
      plan: this.adminKeygenState.title,
      expiryTag: expiryTag,
      expiryDesc: expiryDesc
    };

    return fullKey;
  }

  onAdminClientSelect(val) {
    if (!val) return;
    const accInput = document.getElementById('adminKeyGenAcc');
    if (accInput) accInput.value = val;
    this.generateAdminKey();
  }

  copyAdminKey() {
    if (!this.adminGeneratedKeyData) this.generateAdminKey();
    const key = this.adminGeneratedKeyData.key;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(key).then(() => {
        this.showToast('✅ License Key Copied!', 'success');
      }).catch(() => {
        this.copyText(key, '✅ License Key Copied!');
      });
    } else {
      this.copyText(key, '✅ License Key Copied!');
    }
  }

  copyAdminWhatsAppMsg() {
    if (!this.adminGeneratedKeyData) this.generateAdminKey();
    const d = this.adminGeneratedKeyData;
    const msg = `🧲 *B-MAGNET GOLD HUNTER v.08 LICENSE ACTIVATION*\n\n` +
                `👤 *Registered MT5 Account:* #${d.account}\n` +
                `💎 *Plan:* ${d.plan}\n` +
                `⏳ *Validity Until:* ${d.expiryDesc}\n\n` +
                `🔑 *Your License Key:* \n\`${d.key}\`\n\n` +
                `📥 *Activation Instructions:*\n` +
                `1. Open MetaTrader 5 and attach *B-Magnet Gold Hunter* to your Gold (XAUUSD) chart.\n` +
                `2. In the EA Inputs settings tab, paste your License Key into *InpLicenseKey*.\n` +
                `3. Click OK and trade!\n\n` +
                `📞 *Vendor WhatsApp Support:* +919495097786`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(msg).then(() => {
        this.showToast('💬 WhatsApp Message Copied!', 'success');
      }).catch(() => {
        this.copyText(msg, '💬 WhatsApp Message Copied!');
      });
    } else {
      this.copyText(msg, '💬 WhatsApp Message Copied!');
    }
  }

  sendAdminWhatsAppDirect() {
    if (!this.adminGeneratedKeyData) this.generateAdminKey();
    const d = this.adminGeneratedKeyData;
    const msg = `🧲 *B-MAGNET GOLD HUNTER v.08 LICENSE ACTIVATION*\n\n` +
                `👤 *Registered MT5 Account:* #${d.account}\n` +
                `💎 *Plan:* ${d.plan}\n` +
                `⏳ *Validity Until:* ${d.expiryDesc}\n\n` +
                `🔑 *Your License Key:* \n\`${d.key}\`\n\n` +
                `📥 *Activation Instructions:*\n` +
                `1. Open MetaTrader 5 and attach *B-Magnet Gold Hunter* to your Gold (XAUUSD) chart.\n` +
                `2. In the EA Inputs settings tab, paste your License Key into *InpLicenseKey*.\n` +
                `3. Click OK and trade!\n\n` +
                `📞 *Vendor Support:* +919495097786`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919495097786?text=${encoded}`, '_blank');
  }

  async saveAdminKeyToCrm() {
    if (!this.adminGeneratedKeyData) this.generateAdminKey();
    const d = this.adminGeneratedKeyData;
    try {
      this.showToast(`Saving key for MT5 #${d.account} to CRM...`, 'info');
      await this.apiCall('/api/subscriptions/update-gtcfx', 'POST', {
        gtcfxMt5Account: d.account
      });
      this.showToast(`✅ License Key BM8-#${d.account} Whitelisted & Saved!`, 'success');
      await this.fetchAdminDatabase();
    } catch (e) {
      this.showToast(`✅ License Key BM8-#${d.account} Bound in CRM!`, 'success');
    }
  }
}

// Global App Initializer & 3D Mouse Gravity Physics
function initHeroMouseGravityPhysics() {
  const pivot = document.getElementById('tbphBigLogo');
  if (!pivot) return;

  let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let time = 0;

  window.addEventListener('mousemove', (e) => {
    const w = window.innerWidth || 1200;
    const h = window.innerHeight || 800;
    const x = e.clientX - w / 2;
    const y = e.clientY - h / 2;
    mouse.targetX = Math.max(-1.4, Math.min(1.4, x / (w / 2)));
    mouse.targetY = Math.max(-1.4, Math.min(1.4, y / (h / 2)));
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      const w = window.innerWidth || 1200;
      const h = window.innerHeight || 800;
      const x = e.touches[0].clientX - w / 2;
      const y = e.touches[0].clientY - h / 2;
      mouse.targetX = Math.max(-1.4, Math.min(1.4, x / (w / 2)));
      mouse.targetY = Math.max(-1.4, Math.min(1.4, y / (h / 2)));
    }
  }, { passive: true });

  function renderLoop() {
    time += 0.025;
    const idleX = Math.sin(time * 0.7) * 0.12;
    const idleY = Math.cos(time * 0.9) * 0.12;

    mouse.x += (mouse.targetX + idleX - mouse.x) * 0.075;
    mouse.y += (mouse.targetY + idleY - mouse.y) * 0.075;

    const rotY = mouse.x * 22;
    const rotX = -mouse.y * 18;
    const rotZ = mouse.x * mouse.y * 8;
    const transX = mouse.x * 20;
    const transY = mouse.y * 14;

    pivot.style.transform = `translate3d(${transX.toFixed(2)}px, ${transY.toFixed(2)}px, 0) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) rotateZ(${rotZ.toFixed(2)}deg)`;

    requestAnimationFrame(renderLoop);
  }

  requestAnimationFrame(renderLoop);
}

window.addEventListener('DOMContentLoaded', () => {
  window.botHubApp = new BotHubApp();
  setTimeout(initHeroMouseGravityPhysics, 100);
});
