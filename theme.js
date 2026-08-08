/* ==========================================================================
   B MAGNET INTERNATIONAL — Dynamic Theme Manager (Light & Dark Mode)
   ========================================================================== */

(function () {
  const THEME_STORAGE_KEY = 'bmagnet_theme';

  function getStoredTheme() {
    return localStorage.getItem(THEME_STORAGE_KEY) || 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    // Update Theme Toggle Buttons
    const themeBtns = document.querySelectorAll('#themeToggleBtn, .theme-toggle-icon-btn');
    themeBtns.forEach((btn) => {
      const iconSpan = btn.querySelector('#themeIcon') || btn;
      if (theme === 'dark') {
        iconSpan.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        `;
        btn.setAttribute('title', 'Switch to Light Mode');
      } else {
        iconSpan.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        `;
        btn.setAttribute('title', 'Switch to Dark Mode');
      }
    });
  }

  // Apply immediately before DOM render to prevent flash
  const initialTheme = getStoredTheme();
  applyTheme(initialTheme);

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getStoredTheme());

    document.addEventListener('click', (e) => {
      const toggleBtn = e.target.closest('#themeToggleBtn, .theme-toggle-icon-btn');
      if (toggleBtn) {
        e.preventDefault();
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
      }
    });
  });
})();
