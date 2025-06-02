# URL Proxy Redirect Extension

## Introduction
**URL Proxy Redirect** is a Chrome extension that automatically intercepts browser requests and redirects URLs through a specified proxy server. This allows users to access websites via a proxy without manual adjustments.

## Features
- **Automatic URL Proxying**: All web requests are redirected through the proxy.
- **Works for All Websites**: No need for manual configurations.
- **Lightweight & Efficient**: Uses Chrome’s `webRequest` API for seamless operation.

## ⚠️ Important Notice
This extension uses a fixed proxy server URL, which is set to `https://your-proxy-url.com/` by default.  
**Before using the extension, replace this URL with your own proxy server in the `background.js` file**, otherwise, the extension will not function properly.

## Installation
1. **Download the extension files**
   - Save `manifest.json` and `background.js` to a folder.

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

## License
This project is licensed under the **GNU General Public License v3.0 (GPL-3.0)**.  
You are free to **use, modify, and distribute** this software under the terms of the GPL-3.0 license.  

### 📜 Full License Text
You can read the full GPL-3.0 license [here](https://www.gnu.org/licenses/gpl-3.0.html).  
Additionally, a copy of the license is included in the repository as `LICENSE`.

---

Now your README clearly specifies that your extension is under **GPL-3.0**, ensuring proper attribution and compliance. Let me know if you need any refinements! 🚀
