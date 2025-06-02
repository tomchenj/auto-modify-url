const proxyUrl = "https://your-proxy-url.com/"; //replace the url forward with your reverse proxy url.

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        let currentUrl = details.url;

        // make sure it doesn't enter a dead loop.
        if (!currentUrl.startsWith(proxyUrl)) {
            return { redirectUrl: proxyUrl + currentUrl };
        }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
);
