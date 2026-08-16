#!/usr/bin/env bash
set -e

SOURCE_DIR="/Users/hanaanjunaid/.gemini/antigravity/scratch/bot_market_app"
DEST_DIR="/Users/hanaanjunaid/Documents/bmagnetint"

echo "🔄 Starting B-Bot App sync: $(date)"

cd "$DEST_DIR"

# 1. Copy updated files
if [ -d "$SOURCE_DIR/public" ]; then
  cp -rf "$SOURCE_DIR/public/"* "$DEST_DIR/"
fi

if [ -d "$SOURCE_DIR/data" ]; then
  mkdir -p "$DEST_DIR/data"
  cp -rf "$SOURCE_DIR/data/"* "$DEST_DIR/data/"
fi

# 2. Inject static fallback in app.js if not already present
/usr/bin/python3 -c '
import re

with open("app.js", "r", encoding="utf-8") as f:
    app_js = f.read()

if "Static Hosting Fallback" not in app_js:
    fallback_code = """      // Static Hosting Fallback (loads data/db.json if API is offline)
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

      this.renderAll();"""
    app_js = re.sub(r"this\.renderAll\(\);\s*\}\s*catch\s*\(err\)\s*\{", fallback_code + "\n    } catch (err) {", app_js, count=1)
    with open("app.js", "w", encoding="utf-8") as f:
        f.write(app_js)
'

# 3. Ensure index.html includes favicons, theme-dark, and logout modal
/usr/bin/python3 -c '
import re, time

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

if "favicon.png" not in html:
    html = html.replace("<link rel=\"manifest\" href=\"/manifest.json\">",
"""<link rel=\"manifest\" href=\"/manifest.json\">
  <link rel=\"icon\" type=\"image/png\" sizes=\"64x64\" href=\"/favicon.png\">
  <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/images/appstore-images/ios/180.png\">""")

if "theme-dark" not in html:
    html = html.replace("<body>", "<body class=\"theme-dark\">")

if "logoutConfirmModal" not in html:
    logout_modal = """  <!-- ======================================================== -->
  <!-- MODAL: LOGOUT CONFIRMATION POPUP                        -->
  <!-- ======================================================== -->
  <div class="modal-backdrop" id="logoutConfirmModal">
    <div class="modal-sheet modal-dialog-centered">
      <div class="sheet-handle"></div>
      <div class="modal-header">
        <h3 class="modal-title" style="display: flex; align-items: center; gap: 8px; color: #ff3366;">
          <span class="material-symbols-rounded" style="color: #ff3366;">logout</span>
          Confirm Sign Out
        </h3>
        <button class="modal-close-btn" onclick="window.botHubApp.closeModal(\x27logoutConfirmModal\x27)">
          <span class="material-symbols-rounded">close</span>
        </button>
      </div>
      <div class="modal-body" style="text-align: center; padding: 24px 20px;">
        <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(225, 29, 72, 0.12); border: 1px solid rgba(225, 29, 72, 0.3); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: #ff3366;">
          <span class="material-symbols-rounded" style="font-size: 28px;">power_settings_new</span>
        </div>
        <h4 style="font-size: 17px; font-weight: 800; color: #ffffff; margin-bottom: 8px;">Log out of B-Bot Pro?</h4>
        <p style="font-size: 13px; color: #94a3b8; line-height: 1.5; margin-bottom: 24px;">
          Are you sure you want to end your session? You will return to the welcome authentication screen.
        </p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <button type="button" class="btn-cancel-modal" onclick="window.botHubApp.closeModal(\x27logoutConfirmModal\x27)">
            Cancel
          </button>
          <button type="button" class="btn-logout-confirm" onclick="window.botHubApp.confirmLogout()">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  </div>
"""
    html = html.replace("<div class=\"toast-container\"", logout_modal + "\n  <div class=\"toast-container\"")

v = str(int(time.time()))[-4:]
html = re.sub(r"style\.css(\?v=[^\"]*)?", "style.css?v=" + v, html)
html = re.sub(r"app\.js(\?v=[^\"]*)?", "app.js?v=" + v, html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
'

# 4. Ensure style.css contains theme-dark tokens and high-contrast modal styles
/usr/bin/python3 -c '
with open("style.css", "r", encoding="utf-8") as f:
    css = f.read()

if "body.theme-dark .modal-sheet" not in css:
    dark_tokens = """
body.theme-dark, .theme-dark, [data-theme="dark"] {
  --bg-app: #070b14;
  --bg-frame: #0e1422;
  --surface-card: #131b2e;
  --surface-elevated: #18223a;
  --surface-highlight: #1d2946;
  
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-medium: rgba(0, 168, 150, 0.35);
  --border-active: #00a896;

  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
}

body.theme-dark .modal-sheet,
.theme-dark .modal-sheet {
  background: #0e1422 !important;
  color: #f8fafc !important;
  border: 1px solid rgba(0, 168, 150, 0.35) !important;
}

body.theme-dark .modal-header,
.theme-dark .modal-header {
  background: #0e1422 !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: #ffffff !important;
}

body.theme-dark .modal-title,
.theme-dark .modal-title {
  color: #ffffff !important;
}

body.theme-dark .modal-subtitle,
.theme-dark .modal-subtitle {
  color: #94a3b8 !important;
}

body.theme-dark .modal-body,
.theme-dark .modal-body {
  background: #0e1422 !important;
  color: #f8fafc !important;
}

body.theme-dark .modal-body h1,
body.theme-dark .modal-body h2,
body.theme-dark .modal-body h3,
body.theme-dark .modal-body h4,
body.theme-dark .modal-body h5,
body.theme-dark .modal-body h6,
body.theme-dark .modal-body strong {
  color: #ffffff !important;
}

body.theme-dark .modal-body p,
body.theme-dark .modal-body span {
  color: #cbd5e1;
}

body.theme-dark .modal-body label {
  color: #94a3b8 !important;
}

body.theme-dark .form-input,
body.theme-dark .form-select,
body.theme-dark .form-textarea,
.theme-dark .form-input,
.theme-dark .form-select,
.theme-dark .form-textarea {
  background: #131b2e !important;
  border: 1.5px solid rgba(255, 255, 255, 0.12) !important;
  color: #ffffff !important;
}

body.theme-dark .plan-card-option,
.theme-dark .plan-card-option {
  background: #131b2e !important;
  border: 1.5px solid rgba(255, 255, 255, 0.1) !important;
}

body.theme-dark .plan-card-option:hover,
.theme-dark .plan-card-option:hover {
  border-color: rgba(0, 168, 150, 0.5) !important;
  background: #18223a !important;
}

body.theme-dark .plan-card-option.selected,
.theme-dark .plan-card-option.selected {
  border-color: var(--brand-teal) !important;
  background: rgba(0, 168, 150, 0.15) !important;
}

body.theme-dark .plan-name,
.theme-dark .plan-name {
  color: #ffffff !important;
}

body.theme-dark .digital-wallet-box,
.theme-dark .digital-wallet-box {
  background: #131b2e !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
}

body.theme-dark .checkout-summary-card,
.theme-dark .checkout-summary-card {
  background: rgba(0, 0, 0, 0.4) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}
"""
    css = css.replace("/* Reset & Base */", dark_tokens + "\n/* Reset & Base */")
    with open("style.css", "w", encoding="utf-8") as f:
        f.write(css)
'

# 5. Deploy to Firebase & GitHub
echo "🚀 Deploying to Firebase Hosting..."
firebase deploy

echo "📦 Pushing changes to GitHub repository..."
git add -A
if ! git diff --cached --quiet; then
  git commit -m "Auto-sync latest B-Bot App build $(date '+%Y-%m-%d %H:%M:%S')"
  git push origin main
else
  echo "No git changes to commit."
fi

echo "✅ Sync & Deployment complete at $(date)"
