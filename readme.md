# URL Proxy Redirect 扩展

## 简介
**URL Proxy Redirect** 是一个 Chrome 扩展，它会自动拦截所有浏览器请求，并将 URL 重定向至指定的反代服务器。这样可以用于绕过访问限制或提升访问速度。

## 功能
- **自动代理 URL**：所有网页请求都会添加反代前缀
- **无缝重定向**：无需手动修改链接，浏览器会自动使用代理服务器
- **支持所有网站**：不局限于特定网站
- **轻量级**：基于 Chrome 的 `webRequest` API，运行效率高

## 安装步骤
1. **下载扩展代码**
   - 将 `manifest.json` 和 `background.js` 保存到一个文件夹
   - 确保 `icon_on.png` 和 `icon_off.png` 存在

2. **加载扩展**
   - 打开 Chrome，进入 **扩展管理页面** (`chrome://extensions/`)
   - **启用开发者模式**
   - 点击 **加载已解压的扩展**，选择扩展目录

3. **测试代理功能**
   - 访问任意网站，URL 应该会自动添加代理前缀
   - 例如访问 `https://store.steampowered.com/` 后，会变成 `https://your-proxy-url.com/https://store.steampowered.com/`

## 使用方法
- **点击扩展图标** 可启用或禁用代理
- **图标变化**
  - 🔴 **红色图标** 代表代理关闭
  - 🟢 **绿色图标** 代表代理启用

## 代码文件
- `manifest.json`：扩展的配置文件
- `background.js`：主要的代理逻辑
- `icon_on.png` / `icon_off.png`：扩展图标

## 许可证
MIT License - 自由修改和分发

---

如果你需要添加更多说明，比如 **特定网站规则** 或 **高级功能**，可以随时让我帮你调整！🚀
