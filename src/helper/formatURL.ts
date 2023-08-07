export function formatURL(url: string) {
    try {
        const trimmedURL = url.trim();
        const hasProtocol = trimmedURL.includes("://");
        let formattedURL = trimmedURL;

        if (!hasProtocol) formattedURL = `https://${trimmedURL}`;

        const urlObj = new URL(formattedURL);

        if (!urlObj.host) {
            urlObj.host = urlObj.pathname;
            urlObj.pathname = "/";
        }

        return urlObj;
    } catch (error) {
        console.error("Invalid URL:", error);
        return;
    }
}
