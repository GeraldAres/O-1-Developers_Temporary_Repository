document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get(['azureApiKey'], ({ azureApiKey }) => {
        if (azureApiKey) document.getElementById("api-key").value = azureApiKey;
    });

    document.getElementById("confirmAPI").addEventListener("click", () => {
        const apiKey = document.getElementById("api-key").value.trim();
        if (!apiKey) return;

        chrome.storage.sync.set({ azureApiKey: apiKey, apiKeyIsSet: true }, () => {
            document.getElementById("successMessage").style.display = "block";

            setTimeout(() => {
                window.location.href = 'intro2ed.html';
            }, 1000);
        });
    });
});