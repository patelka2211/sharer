import waIcon from "./assets/appicons/waIcon";
import fbIcon from "./assets/appicons/fbIcon";
import twIcon from "./assets/appicons/twIcon";
import emlIcon from "./assets/appicons/emlIcon";
import lnkdnIcon from "./assets/appicons/lnkdnIcon";
import pntrstIcon from "./assets/appicons/pntrstIcon";
import rdtIcon from "./assets/appicons/rdtIcon";
import snpchtIcon from "./assets/appicons/snpchtIcon";
import kooIcon from "./assets/appicons/kooIcon";
import tgIcon from "./assets/appicons/tgIcon";
import j2h from "../../j2h";
import arrowRightIcon from "./assets/arrowRightIcon";
import elements from "../element";
import arrowLeftIcon from "../sharerHeader/assets/arrowLeftIcon";
import sharerIcon from "../assets/sharerIcon";

const applist: {
    [_: string]: {
        id: string;
        name: string;
        theme: { primary: string; secondary: string };
        svg: string;
        url_format: Function;
    };
} = {
    wa: {
        id: "wa",
        name: "WhatsApp",
        theme: { primary: "#25D366", secondary: "#ffffff" },
        svg: waIcon,
        url_format: (input_url: string, platform = "mobile", text = "") => {
            if (text != "") text += "\n";

            return `http://${
                platform == "mobile" ? "api" : "web"
            }.whatsapp.com/send?text=${encodeURIComponent(
                `${text}${input_url}`
            )}`;
        },
    },
    fb: {
        id: "fb",
        name: "Facebook",
        theme: { primary: "#0c87ef", secondary: "#ffffff" },
        svg: fbIcon,
        url_format: (input_url: string, text = "") => {
            return `https://www.facebook.com/sharer/sharer.php?t=${encodeURIComponent(
                text
            )}&u=${encodeURIComponent(input_url)}`;
        },
    },
    tw: {
        id: "tw",
        name: "Twitter",
        theme: { primary: "#1D9BF0", secondary: "#ffffff" },
        svg: twIcon,
        url_format: (input_url: string, text = "") => {
            return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                text
            )}&url=${encodeURIComponent(input_url)}`;
        },
    },
    eml: {
        id: "eml",
        name: "Email",
        theme: { primary: "#EA4335", secondary: "#ffffff" },
        svg: emlIcon,
        url_format: (body: string, subject = "") => {
            return `mailto:?subject=${encodeURIComponent(
                subject
            )}&body=${encodeURIComponent(body)}`;
        },
    },
    lnkdn: {
        id: "lnkdn",
        name: "LinkedIn",
        theme: { primary: "#0A66C2", secondary: "#ffffff" },
        svg: lnkdnIcon,
        url_format: (input_url: string, text = "") => {
            if (text != "") text += "\n";
            return `https://www.linkedin.com/cws/share?url=${encodeURIComponent(
                `${text}${input_url}`
            )}`;
        },
    },
    pntrst: {
        id: "pntrst",
        name: "Pinterest",
        theme: { primary: "#E60123", secondary: "#ffffff" },
        svg: pntrstIcon,
        url_format: (input_url: string, text = "") => {
            return `https://www.pinterest.com/pin/create/button/?description=${encodeURIComponent(
                text
            )}&url=${encodeURIComponent(input_url)}&method=button`;
        },
    },
    rdt: {
        id: "rdt",
        name: "Reddit",
        theme: { primary: "#e45b34", secondary: "#ffffff" },
        svg: rdtIcon,
        url_format: (input_url: string, text = "") => {
            return `https://reddit.com/submit?title=${encodeURIComponent(
                text
            )}&url=${encodeURIComponent(input_url)}`;
        },
    },
    snpcht: {
        id: "snpcht",
        name: "Snapchat",
        theme: { primary: "#fffC00", secondary: "#000000" },
        svg: snpchtIcon,
        url_format: (input_url: string) => {
            return `https://snapchat.com/scan?attachmentUrl=${encodeURIComponent(
                input_url
            )}`;
        },
    },
    koo: {
        id: "koo",
        name: "Koo",
        theme: { primary: "#FACD00", secondary: "#383838" },
        svg: kooIcon,
        url_format: (input_url: string, text = "") => {
            if (text != "") text += "\n";
            return `https://www.kooapp.com/create?title=${encodeURIComponent(
                `${text}${input_url}`
            )}`;
        },
    },
    tg: {
        id: "tg",
        name: "Telegram",
        theme: { primary: "#2aa1da", secondary: "#ffffff" },
        svg: tgIcon,
        url_format: (input_url: string, text = "") => {
            return `https://t.me/share/url?url=${encodeURIComponent(
                input_url
            )}&text=${encodeURIComponent(text)}`;
        },
    },
};

export const openSharerWebsite = () => {
    window.open("https://patelka2211.github.io/sharer", "_blank");
};

const revertBackToRoot = () => {
    elements.header_icon_container().innerHTML = sharerIcon;
    elements.header_icon_container().onclick = openSharerWebsite;
    elements.header_title().innerText = "Sharer by KP";

    setApplistHtml();
};

const showAppQR = (appid: string) => {
    elements.header_icon_container().innerHTML = arrowLeftIcon;
    elements.header_icon_container().onclick = revertBackToRoot;
    elements.header_title().innerText = `Share on ${applist[appid].name}`;

    elements.sharer_content().innerHTML = "";
};

export const setApplistHtml = () => {
    let applist_html = j2h.setRoot(elements.sharer_content());

    Object.keys(applist).forEach((id) => {
        applist_html.append(
            j2h.element("div", { id: `open-${id}-qr`, class: "applist-item" }, [
                j2h.element(
                    "div",
                    { class: "applist-icon-container" },
                    applist[id].svg
                ),
                j2h.element(
                    "div",
                    { class: "applist-app-name" },
                    applist[id].name
                ),
                j2h.element(
                    "div",
                    { class: "arrow-right-icon" },
                    arrowRightIcon
                ),
            ])
        );
    });

    applist_html.render();

    Object.keys(applist).forEach((id) => {
        (document.getElementById(`open-${id}-qr`) as HTMLElement).onclick =
            () => {
                showAppQR(id);
            };
    });
};
