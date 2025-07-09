document.addEventListener("DOMContentLoaded", () => {
    // CRITICAL CHANGE: Using chrome.storage.sync.get instead of chrome.storage.local.get
    chrome.storage.sync.get('apiKeyIsSet', (data) => {
        if (data.apiKeyIsSet === true) { // Explicitly check if it's true
            // API key is set, go directly to the final activated page
            window.location.href = 'activate.html';
        } else {
            // API key is NOT set, start the setup flow from the very first page
            window.location.href = 'homepage.html';
        }
    });
});