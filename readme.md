# URL Proxy Redirect Extension

## Introduction
**URL Proxy Redirect** is a Chrome extension that automatically intercepts browser requests and redirects URLs through a specified proxy server. This can help bypass access restrictions or improve loading speed.

## Features
- **Automatic URL Proxying**: All web requests are redirected through the proxy.
- **Seamless Redirection**: No need to manually modify links.
- **Works for All Websites**: Supports any site without configuration.
- **Lightweight & Efficient**: Uses Chrome’s `webRequest` API for optimal performance.

## ⚠️ Important Notice
This extension uses a fixed proxy server URL, which is set to `https://your-proxy-url.com/` by default.  
**Before using the extension, replace this URL with your own proxy server in the `background.js` file.** Otherwise, the extension will not function properly.

## Installation
1. **Download the extension files**
   - Save `manifest.json` and `background.js` to a folder.
   - Ensure `icon_on.png` and `icon_off.png` exist.

2. **Edit `background.js`**
   - Open `background.js` and locate the following code:
     ```javascript
     const proxyUrl = "https://your-proxy-url.com/";
     ```
   - **Replace `proxyUrl` with your actual proxy server address.**

3. **Load the extension**
   - Open **Chrome Extensions Page** (`chrome://extensions/`)
   - **Enable Developer Mode**
   - Click **Load Unpacked Extension** and select the extension folder.

4. **Test the proxy function**
   - Open any website, and the URL should automatically be prefixed with the proxy.
   - Example: Visiting `https://store.steampowered.com/` will change to `https://your-proxy-url.com/https://store.steampowered.com/`.

## Usage
- **Click the extension icon** to enable or disable proxying.
- **Icon Changes**:
  - 🟢 **Green Icon** → Proxy is enabled.
  - 🔴 **Red Icon** → Proxy is disabled.

## File Overview
- `manifest.json`: Chrome extension configuration file.
- `background.js`: Handles proxy logic (**must replace `proxyUrl`**).
- `icon_on.png` / `icon_off.png`: Extension icons.

## License
MIT License - Free to modify and distribute.

---

Now users will be clearly informed to replace the proxy URL before using the extension! If you'd like further refinements, let me know 🚀  
