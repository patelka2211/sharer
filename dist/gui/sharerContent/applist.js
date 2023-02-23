import j2h from "../../j2h";
import elements from "../element";
import svgs from "../svgs";
import { setSharerCard } from "./sharerCard";
let isQROpen = false;
export function isAppQROpen() {
    return isQROpen;
}
const applist = {
    wa: {
        id: "wa",
        name: "WhatsApp",
        theme: { primary: "#25D366", secondary: "#ffffff" },
        url_format: (input_url, platform = "mobile", text = "") => {
            if (text != "")
                text += "\n";
            return `http://${platform == "mobile" ? "api" : "web"}.whatsapp.com/send?text=${encodeURIComponent(`${text}${input_url}`)}`;
        },
    },
    fb: {
        id: "fb",
        name: "Facebook",
        theme: { primary: "#0c87ef", secondary: "#ffffff" },
        url_format: (input_url, text = "") => {
            return `https://www.facebook.com/sharer/sharer.php?t=${encodeURIComponent(text)}&u=${encodeURIComponent(input_url)}`;
        },
    },
    tw: {
        id: "tw",
        name: "Twitter",
        theme: { primary: "#1D9BF0", secondary: "#ffffff" },
        url_format: (input_url, text = "") => {
            return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(input_url)}`;
        },
    },
    eml: {
        id: "eml",
        name: "Email",
        theme: { primary: "#EA4335", secondary: "#ffffff" },
        url_format: (body, subject = "") => {
            return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        },
    },
    lnkdn: {
        id: "lnkdn",
        name: "LinkedIn",
        theme: { primary: "#0A66C2", secondary: "#ffffff" },
        url_format: (input_url, text = "") => {
            if (text != "")
                text += "\n";
            return `https://www.linkedin.com/cws/share?url=${encodeURIComponent(`${text}${input_url}`)}`;
        },
    },
    pntrst: {
        id: "pntrst",
        name: "Pinterest",
        theme: { primary: "#E60123", secondary: "#ffffff" },
        url_format: (input_url, text = "") => {
            return `https://www.pinterest.com/pin/create/button/?description=${encodeURIComponent(text)}&url=${encodeURIComponent(input_url)}&method=button`;
        },
    },
    rdt: {
        id: "rdt",
        name: "Reddit",
        theme: { primary: "#e45b34", secondary: "#ffffff" },
        url_format: (input_url, text = "") => {
            return `https://reddit.com/submit?title=${encodeURIComponent(text)}&url=${encodeURIComponent(input_url)}`;
        },
    },
    snpcht: {
        id: "snpcht",
        name: "Snapchat",
        theme: { primary: "#fffC00", secondary: "#000000" },
        url_format: (input_url) => {
            return `https://snapchat.com/scan?attachmentUrl=${encodeURIComponent(input_url)}`;
        },
    },
    koo: {
        id: "koo",
        name: "Koo",
        theme: { primary: "#FACD00", secondary: "#383838" },
        url_format: (input_url, text = "") => {
            if (text != "")
                text += "\n";
            return `https://www.kooapp.com/create?title=${encodeURIComponent(`${text}${input_url}`)}`;
        },
    },
    tg: {
        id: "tg",
        name: "Telegram",
        theme: { primary: "#2aa1da", secondary: "#ffffff" },
        url_format: (input_url, text = "") => {
            return `https://t.me/share/url?url=${encodeURIComponent(input_url)}&text=${encodeURIComponent(text)}`;
        },
    },
};
export function openSharerWebsite() {
    window.open("https://patelka2211.github.io/sharer/", "_blank");
}
function revertBackToRoot() {
    elements.header_icon_container().innerHTML = svgs.local.sharerIcon;
    elements.header_icon_container().onclick = openSharerWebsite;
    elements.header_title().innerText = "Sharer by KP";
    elements.sharer_content().style.height = "auto";
    elements.sharer_content().style.aspectRatio = "1";
    setApplistHtml();
    isQROpen = false;
}
function showAppQR(appid) {
    elements.header_icon_container().innerHTML = svgs.local.arrowLeftIcon;
    elements.header_icon_container().onclick = revertBackToRoot;
    elements.header_title().innerText = `Share on ${applist[appid].name}`;
    elements.sharer_footer_text().innerText = `Open ${applist[appid].name}`;
    elements.sharer_footer_text().style.color = applist[appid].theme.secondary;
    elements.sharer_footer().style.backgroundColor =
        applist[appid].theme.primary;
    elements.sharer_content().style.height = `${elements.sharer_content().offsetHeight + 51}px`;
    setSharerCard();
    isQROpen = true;
}
export function setApplistHtml() {
    let applist_html = j2h.setRoot(elements.sharer_content());
    Object.keys(applist).forEach((id) => {
        applist_html.append(j2h.element("div", { id: `open-${id}-qr`, class: "applist-item" }, [
            j2h.element("div", { class: "applist-icon-container" }, svgs.cdn[id]),
            j2h.element("div", { class: "applist-app-name" }, applist[id].name),
            j2h.element("div", { class: "arrow-right-icon" }, svgs.local.arrowRightIcon),
        ]));
    });
    applist_html.render();
    Object.keys(applist).forEach((id) => {
        document.getElementById(`open-${id}-qr`).onclick =
            () => {
                showAppQR(id);
            };
    });
    elements.sharer_footer_text().innerText = "Powered by Sharer";
    elements.sharer_footer().style.backgroundColor = "#3479f614";
    elements.sharer_footer_text().style.color = "#3479f6";
}
