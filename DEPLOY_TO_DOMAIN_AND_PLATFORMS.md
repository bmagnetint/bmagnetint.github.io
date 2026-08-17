# 🌐 B-Bot Pro: Custom Domain Deployment & Cross-Platform Compatibility Guide

This guide provides step-by-step instructions to deploy **B-Bot Pro** to your live **Custom Domain** and confirms cross-platform compatibility across **Mobile, Android, Web, Chrome, and Safari**.

---

## 📱 Cross-Platform Compatibility Architecture

B-Bot Pro has been engineered and optimized to render flawlessly across all platforms:

| Platform / Browser | Status | Features & Optimizations |
| :--- | :---: | :--- |
| **Android (Chrome & Samsung)** | ✅ Certified | PWA 1-Tap Home Screen installation (`beforeinstallprompt`), full offline service worker caching, WebApp Manifest. |
| **Android Native App (APK/AAB)** | ✅ Certified | Full native Android WebView app in `android/` directory (`com.bbotpro.app`), hardware-accelerated rendering, Play Store ready. |
| **iOS Safari & iPadOS** | ✅ Certified | Dynamic viewport height (`100dvh`), notch/Dynamic Island safe-area insets (`env(safe-area-inset-top/bottom)`), Apple touch icons, and custom iOS Home Screen Guide. |
| **Desktop Chrome & Edge** | ✅ Certified | High-DPI responsive layout, dual-screen monitor view (AI Bot graphics on left + Auth panel on right), full hardware acceleration. |
| **macOS Safari** | ✅ Certified | WebKit glassmorphism backdrop filters (`-webkit-backdrop-filter`), smooth typography antialiasing (`-webkit-font-smoothing`). |

---

## 🚀 1. Deploying to Your Custom Domain via Google Cloud Run (Recommended)

Google Cloud Run provides auto-scaling, free SSL certificates, and custom domain mapping.

### Step 1: Deploy to Google Cloud Run
Run the following command from the project root:
```bash
gcloud run deploy b-bot-pro \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080
```

Google Cloud will output your live URL (e.g. `https://b-bot-pro-xxxxxx-uc.a.run.app`).

### Step 2: Connect Your Custom Domain (e.g. `yourdomain.com` or `app.yourdomain.com`)
1. Go to **Google Cloud Console** $\rightarrow$ **Cloud Run** $\rightarrow$ **Domain Mappings**.
2. Click **Add Mapping** $\rightarrow$ select your service `b-bot-pro`.
3. Enter your domain: `yourdomain.com` or `subdomain.yourdomain.com`.
4. Copy the provided DNS records (**A records** or **CNAME record**).
5. Open your domain registrar (Namecheap, GoDaddy, Cloudflare, Hostinger, etc.) and add the DNS records.
6. Google Cloud automatically provisions a **free Google SSL certificate** for your domain within 15 minutes!

---

## ⚡ 2. Deploying via Docker / VPS / DigitalOcean / Render / Railway

### Standard Docker Deployment:
```bash
# 1. Build the Docker container
docker build -t b-bot-pro .

# 2. Run container on port 80 or 8080
docker run -d -p 8080:8080 --name bbot-app --restart always b-bot-pro
```

### Deploy to Render / Railway:
- **Render**: Connect your GitHub repository $\rightarrow$ Select **Web Service** $\rightarrow$ Runtime: `Python 3` $\rightarrow$ Start Command: `python3 server.py`.
- **Railway**: Connect GitHub repository $\rightarrow$ Deploy $\rightarrow$ Railway auto-detects `Dockerfile` or `server.py` and provides your custom domain mapping under Service Settings.

---

## 🧲 3. Connecting Google Sheets Master CRM Database

1. Open **[sheets.new](https://sheets.new)** in your browser.
2. Title the sheet: `B-Bot Pro Master Database`.
3. Click **Extensions** $\rightarrow$ **Apps Script**.
4. Paste the entire code from **`google_apps_script.js`** into the editor and click **Save**.
5. Click **Deploy** $\rightarrow$ **New deployment** $\rightarrow$ Select type: **Web app**:
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
6. Click **Deploy**, authorize permissions, and copy your **Web App URL**.
7. Open **B-Bot Pro Admin Panel** (PIN: `9633`), paste your Web App URL into the **Google Sheets Sync** box, and click **Sync**!

---

## 📱 4. Android APK & Play Store Package Generation

### Instant PWA Package (PWABuilder):
1. Visit **[PWABuilder.com](https://www.pwabuilder.com)**.
2. Enter your live custom domain URL (e.g. `https://yourdomain.com`).
3. Click **Package for Stores** $\rightarrow$ **Google Play (Android)**.
4. Download the generated `.zip` containing:
   - `app-release.aab` (Ready for Google Play Console submission)
   - `app-debug.apk` (For testing on your Android phone)

### Android Studio Build:
1. Open the `/android` directory in **Android Studio**.
2. Update `APP_URL` in `MainActivity.java` with your live domain URL.
3. In Android Studio: **Build** $\rightarrow$ **Generate Signed Bundle / APK**.
