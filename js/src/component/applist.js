import email_icon from "../assets/eml_icon.js";
import fb_icon from "../assets/fb_icon.js";
import koo_icon from "../assets/koo_icon.js";
import linkedin_icon from "../assets/lnkdn_icon.js";
import pinterest_icon from "../assets/pntrst_icon.js";
import reddit_icon from "../assets/rdt_icon.js";
import snapchat_icon from "../assets/snpcht_icon.js";
import tg_icon from "../assets/tg_icon.js";
import twitter_icon from "../assets/tw_icon.js";
import whatsapp_icon from "../assets/wa_icon.js";
import json2html from "../json2html.js";
import openArrow from "./openArrow.js";

let applist = {
    wa: {
        id: "wa",
        name: "WhatsApp",
        theme: { bg: "#25D366", fg: "white" },
        svg: whatsapp_icon,
        description:
            "WhatsApp is an internationally available freeware, cross-platform centralized instant messaging (IM) and voice-over-IP (VoIP) service owned by American company Meta Platforms (formerly Facebook).",
    },
    fb: {
        id: "fb",
        name: "Facebook",
        theme: { bg: "#0c87ef", fg: "white" },
        svg: fb_icon,
        description:
            "Facebook is an online social media and social networking service owned by American company Meta Platforms.",
    },
    tw: {
        id: "tw",
        name: "Twitter",
        theme: { bg: "#1D9BF0", fg: "white" },
        svg: twitter_icon,
        description:
            'Twitter is a microblogging and social networking service owned by American company Twitter, Inc., on which users post and interact with messages known as "tweets".',
    },
    email: {
        id: "email",
        name: "Email",
        theme: { bg: "#EA4335", fg: "white" },
        svg: email_icon,
        description:
            'Email is a method of exchanging messages ("mail") between people using electronic devices. E.g. Gmail',
    },
    lnkdn: {
        id: "lnkdn",
        name: "LinkedIn",
        theme: { bg: "#0A66C2", fg: "white" },
        svg: linkedin_icon,
        description:
            "LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps.",
    },
    pntrst: {
        id: "pntrst",
        name: "Pinterest",
        theme: { bg: "#E60123", fg: "white" },
        svg: pinterest_icon,
        description:
            'Pinterest is an image sharing and social media service designed to enable saving and discovery of information (specifically "ideas") on the internet using images, and on a smaller scale, animated GIFs and videos, in the form of pinboards.',
    },
    rdt: {
        id: "rdt",
        name: "Reddit",
        theme: { bg: "#e45b34", fg: "white" },
        svg: reddit_icon,
        description:
            "Reddit is an American social news aggregation, content rating, and discussion website.",
    },
    snpcht: {
        id: "snpcht",
        name: "Snapchat",
        theme: { bg: "#FFFC00", fg: "black" },
        svg: snapchat_icon,
        description:
            "Snapchat is an American multimedia instant messaging app and service developed by Snap Inc., originally Snapchat Inc.",
    },
    koo: {
        id: "koo",
        name: "Koo",
        theme: { bg: "#FACD00", fg: "#383838" },
        svg: koo_icon,
        description:
            "Koo is an Indian microblogging and social networking service, based in Bengaluru, India.",
    },
    tg: {
        id: "tg",
        name: "Telegram",
        theme: { bg: "#2aa1da", fg: "white" },
        svg: tg_icon,
        description:
            "Telegram Messenger, or simply Telegram, is an globally accessible freemium, cross-platform, encrypted, cloud-based and centralized instant messaging (IM) service.",
    },
};

function get_applist_html() {
    let app_list_obj = new json2html(),
        appids = Object.keys(applist);
    for (let index = 0; index < appids.length; index++) {
        let appid = appids[index];
        app_list_obj.add(
            app_list_obj.div(
                {
                    class: "applist-item",
                    id: `open-${applist[appid].id}-btn`,
                },
                [
                    app_list_obj.div({ class: "icon-n-name" }, [
                        app_list_obj.div(
                            { class: "app-icon" },
                            applist[appid].svg
                        ),
                        app_list_obj.div(
                            { class: "app-name" },
                            applist[appid].name
                        ),
                    ]),
                    app_list_obj.div({ class: "open-arrow" }, openArrow),
                ]
            )
        );
    }
    return app_list_obj.list;
}

export { applist, get_applist_html };
