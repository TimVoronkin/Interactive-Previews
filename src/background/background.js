// bg service worker — only job is fetching PDFs for content scripts
// content scripts cant do cross-origin fetch themselves (CORS blocks it),
// but extensions with host_permissions can, so we proxy it thru here

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    // ignore anything thats not our fetch request
    if (msg.type !== 'FETCH_PDF') return false;

    const url = msg.url;
    console.log('[Interactive-Previews BG] Fetching PDF:', url);

    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error: ${res.status} ${res.statusText}`);
            // need arraybuffer to pass raw bytes to pdfjs
            return res.arrayBuffer();
        })
        .then(buffer => {
            // send the arraybuffer directly (Chrome supports structured cloning of ArrayBuffers)
            sendResponse({ success: true, data: buffer });
        })
        .catch(err => {
            // log + send error back so content script can show err state
            console.warn('[Interactive-Previews BG] Fetch failed:', err.message);
            sendResponse({ success: false, error: err.message });
        });

    // IMPORTANT: must return true here or the channel closes before async sendResponse fires
    return true;
});
