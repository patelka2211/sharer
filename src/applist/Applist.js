import waIcon from "./appicons/waIcon.js";
import fbIcon from "./appicons/fbIcon.js";
import twIcon from "./appicons/twIcon.js";
import emlIcon from "./appicons/emlIcon.js";
import lnkdnIcon from "./appicons/lnkdnIcon.js";
import pntrstIcon from "./appicons/pntrstIcon.js";
import rdtIcon from "./appicons/rdtIcon.js";
import snpchtIcon from "./appicons/snpchtIcon.js";
import kooIcon from "./appicons/kooIcon.js";
import tgIcon from "./appicons/tgIcon.js";

export default {
    wa: {
        id: "wa",
        name: "WhatsApp",
        theme: { primary: "#25D366", secondary: "#ffffff" },
        svg: waIcon,
        url_format: (input_url, platform = "app", text = "") => {
            if (text != "") text += "\n";

            return `http://${
                platform == "app" ? "api" : "web"
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
        url_format: (input_url, text = "") => {
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
        url_format: (input_url, text = "") => {
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
        url_format: (body, subject = "") => {
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
        url_format: (input_url, text = "") => {
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
        url_format: (input_url, text = "") => {
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
        url_format: (input_url, text = "") => {
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
        url_format: (input_url) => {
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
        url_format: (input_url, text = "") => {
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
        url_format: (input_url, text = "") => {
            return `https://t.me/share/url?url=${encodeURIComponent(
                input_url
            )}&text=${encodeURIComponent(text)}`;
        },
    },
};
