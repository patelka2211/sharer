import { appsItemType } from "./types";

export let appsObject: {
    [id: string]: appsItemType;
} = {
    gml: {
        id: "gml",
        name: "Email",
        url_format: `mailto:?subject={%text%}&body={%url%}`,
    },
    mstdn: {
        id: "mstdn",
        name: "Mastodon",
        url_format: `https://toot.kytta.dev/?text={%text%}%0A{%url%}`,
    },
    fb: {
        id: "fb",
        name: "Facebook",
        url_format:
            "https://www.facebook.com/sharer/sharer.php?t={%text%}&u={%url%}",
    },
    wa: {
        id: "wa",
        name: "WhatsApp",
        url_format: "https://api.whatsapp.com/send?text={%text%}%0A{%url%}",
    },
    x: {
        id: "x",
        name: "X",
        url_format: `https://twitter.com/intent/tweet?text={%text%}&url={%url%}`,
    },
    lnkdn: {
        id: "lnkdn",
        name: "LinkedIn",
        url_format: `https://www.linkedin.com/shareArticle?mini=true&url={%url%}&title={%text%}`,
    },
    rdt: {
        id: "rdt",
        name: "Reddit",
        url_format: `https://reddit.com/submit?title={%text%}&url={%url%}`,
    },
    pntrst: {
        id: "pntrst",
        name: "Pinterest",
        url_format: `https://www.pinterest.com/pin/create/button/?description={%text%}&url={%url%}&method=button`,
    },
    snpcht: {
        id: "snpcht",
        name: "Snapchat",
        url_format: `https://snapchat.com/scan?attachmentUrl={%url%}`,
    },
    tg: {
        id: "tg",
        name: "Telegram",
        url_format: `https://telegram.me/share/url?url={%url%}&text={%text%}`,
    },
    // koo: {
    //     id: "koo",
    //     name: "Koo",
    //     url_format: `https://www.kooapp.com/create?title={%text%}%0A{%url%}`,
    // },
};
