const cdn = {
    url: "http://192.168.1.4:5500/",
    // url: "http://localhost:5500/",
    getPath: (path) => {
        if (typeof path === "string")
            return cdn.url + path;
        return cdn.url + path.join("/");
    },
};

class json2html {
    constructor(root) {
        this.root = root;
        this.list = [];
    }
    append(input) {
        this.list.push(input);
        return this;
    }
    render(input = this.list, root = this.root, clearRoot = true) {
        if (clearRoot)
            root.innerHTML = "";
        input.forEach((item) => {
            for (const key in item) {
                if (Object.prototype.hasOwnProperty.call(item, key)) {
                    const element = document.createElement(key);
                    const value = item[key];
                    j2h.setAttribute(element, value[0]);
                    if (typeof value[1] == "string") {
                        element.innerHTML = value[1];
                    }
                    else if (typeof value[1] == "object") {
                        if (value[1].length === undefined) {
                            this.render([value[1]], element, false);
                        }
                        else if (value[1].length !== undefined) {
                            this.render(value[1], element, false);
                        }
                    }
                    root.appendChild(element);
                }
            }
        });
    }
}
const j2h = {
    setRoot: (root) => {
        return new json2html(root);
    },
    element: (tagName, attributes = {}, innerHTML = "") => {
        return {
            [tagName]: [attributes, innerHTML],
        };
    },
    setAttribute: (element, attributes) => {
        if (element instanceof json2html) {
            element = element.root;
        }
        if (typeof attributes === "string") {
            element.setAttribute(attributes, "");
        }
        else if (typeof attributes === "object" &&
            attributes.length !== undefined &&
            typeof attributes[0] === "string") {
            for (let index = 0; index < attributes.length; index++) {
                const item = attributes[index];
                element.setAttribute(item, "");
            }
        }
        else if (attributes.length === undefined) {
            for (const key in attributes) {
                element.setAttribute(key, attributes[key].toString());
            }
        }
        else {
            attributes.map((item) => {
                if (item.length === undefined) {
                    let pairedAttribute = item;
                    for (const key in pairedAttribute) {
                        element.setAttribute(key, pairedAttribute[key].toString());
                    }
                }
                else if (typeof item === "object") {
                    item.map((item) => {
                        element.setAttribute(item, "");
                    });
                }
                else {
                    element.setAttribute(item, "");
                }
            });
        }
        return element;
    },
};

const elements = {
    sharer_by_KP: () => {
        return document.getElementById("sharer-by-KP");
    },
    sharer_container: () => {
        return document.getElementById("sharer-container");
    },
    sharer_footer: () => {
        return document.getElementById("sharer-footer");
    },
    sharer_footer_text: () => {
        return document.getElementById("sharer-footer-text");
    },
    sharer_window: () => {
        return document.getElementById("sharer-window");
    },
    sharer_content: () => {
        return document.getElementById("sharer-content");
    },
    header_close_icon: () => {
        return document.getElementById("header-close-icon");
    },
    header_icon_container: () => {
        return document.getElementById("header-icon-container");
    },
    header_title: () => {
        return document.getElementById("header-title");
    },
};

const getCDNsvgs = (filename) => {
    return j2h.element("img", {
        src: cdn.getPath(["assets", filename]),
    });
    // return `<img src="${cdn.getPath(["assets", filename])}"/>`;
};
const svgs = {
    sharerIcon: getCDNsvgs("sharerIcon.svg"),
    closeIcon: getCDNsvgs("closeIcon.svg"),
    arrowRightIcon: getCDNsvgs("arrowRightIcon.svg"),
    arrowLeftIcon: getCDNsvgs("arrowLeftIcon.svg"),
    wa: getCDNsvgs("waIcon.svg"),
    fb: getCDNsvgs("fbIcon.svg"),
    tw: getCDNsvgs("twIcon.svg"),
    eml: getCDNsvgs("emlIcon.svg"),
    lnkdn: getCDNsvgs("lnkdnIcon.svg"),
    pntrst: getCDNsvgs("pntrstIcon.svg"),
    rdt: getCDNsvgs("rdtIcon.svg"),
    snpcht: getCDNsvgs("snpchtIcon.svg"),
    koo: getCDNsvgs("kooIcon.svg"),
    tg: getCDNsvgs("tgIcon.svg"),
};

const setSharerCard = () => {
    let sharer_content = j2h.setRoot(elements.sharer_content());
    sharer_content
        .append(j2h.element("div", { class: "sharer-qr-container" }))
        .append(j2h.element("div", { class: "sharer-credits" }, j2h.element("div", { class: "credits-container" }, [
        j2h.element("div", { class: "credits-icon-container" }, svgs.sharerIcon),
        j2h.element("div", { class: "credits-text" }, "Powered by Sharer"),
    ])));
    sharer_content.render();
    elements.sharer_content().style.height = `${elements.sharer_content().offsetWidth + 51}px`;
};

let isQROpen = false;
// export const openAppQR = () => {
//     isQROpen = true;
// };
// export const closeAppQR = () => {
//     isQROpen = false;
// };
const isAppQROpen = () => {
    return isQROpen;
};
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
const openSharerWebsite = () => {
    window.open("https://patelka2211.github.io/sharer/", "_blank");
};
const revertBackToRoot = () => {
    j2h.setRoot(elements.header_icon_container())
        .append(svgs.sharerIcon)
        .render();
    elements.header_icon_container().onclick = openSharerWebsite;
    elements.header_title().innerText = "Sharer by KP";
    elements.sharer_content().style.height = "auto";
    elements.sharer_content().style.aspectRatio = "1";
    setApplistHtml();
    isQROpen = false;
};
const showAppQR = (appid) => {
    j2h.setRoot(elements.header_icon_container())
        .append(svgs.arrowLeftIcon)
        .render();
    elements.header_icon_container().onclick = revertBackToRoot;
    elements.header_title().innerText = `Share on ${applist[appid].name}`;
    elements.sharer_footer_text().innerText = `Open ${applist[appid].name}`;
    elements.sharer_footer_text().style.color = applist[appid].theme.secondary;
    elements.sharer_footer().style.backgroundColor =
        applist[appid].theme.primary;
    elements.sharer_content().style.height = `${elements.sharer_content().offsetHeight + 51}px`;
    setSharerCard();
    isQROpen = true;
};
const setApplistHtml = () => {
    let applist_html = j2h.setRoot(elements.sharer_content());
    Object.keys(applist).forEach((id) => {
        applist_html.append(j2h.element("div", { id: `open-${id}-qr`, class: "applist-item" }, [
            j2h.element("div", { class: "applist-icon-container" }, svgs[id]),
            j2h.element("div", { class: "applist-app-name" }, applist[id].name),
            j2h.element("div", { class: "arrow-right-icon" }, svgs.arrowRightIcon),
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
};

let continue_to_close = true, resizeLock = false;
const resizeSharerByKP = () => {
    if (resizeLock)
        return;
    resizeLock = true;
    setTimeout(() => {
        resizeLock = false;
        elements.sharer_container().style.height = `${document.documentElement.clientHeight - 12}px`;
        if (isAppQROpen()) {
            elements.sharer_content().style.height = `${elements.sharer_content().offsetWidth + 51}px`;
        }
    }, 500);
};
const setSharerRoot = () => {
    const Sharer_By_KP = document.createElement("div");
    j2h.setAttribute(Sharer_By_KP, { id: "sharer-by-KP", class: "hide" });
    const sharer_root = j2h.setRoot(Sharer_By_KP);
    sharer_root.append(j2h.element("div", { id: "sharer-container", class: "hide" }, j2h.element("div", { id: "sharer-window" }, [
        j2h.element("div", { class: "sharer-header" }, [
            j2h.element("div", { id: "header-icon-container" }, svgs.sharerIcon),
            j2h.element("div", { id: "header-title" }, "Sharer by KP"),
            j2h.element("div", { id: "header-close-icon" }, svgs.closeIcon),
        ]),
        j2h.element("div", { id: "sharer-content" }),
        j2h.element("div", { id: "sharer-footer" }, j2h.element("div", { id: "sharer-footer-text" }
        // "Powered by Sharer"
        )),
    ])));
    document.body.prepend(Sharer_By_KP);
    sharer_root.render();
};
const openSharer = () => {
    try {
        document.getElementById("sharer-by-KP").remove();
    }
    catch (error) { }
    setSharerRoot();
    setTimeout(() => {
        elements.sharer_by_KP().classList.remove("hide");
        elements.sharer_container().classList.remove("hide");
    }, 10);
    elements.sharer_window().onclick = () => {
        continue_to_close = false;
    };
    elements.sharer_container().onclick = closeSharer;
    elements.header_close_icon().onclick = closeSharer;
    [elements.header_icon_container(), elements.sharer_footer()].forEach((element) => {
        element.onclick = openSharerWebsite;
    });
    setApplistHtml();
    resizeSharerByKP();
    window.addEventListener("resize", resizeSharerByKP);
    document.body.classList.add("sharer-opened");
};
const closeSharer = () => {
    if (continue_to_close) {
        elements.sharer_container().classList.add("hide");
        setTimeout(() => {
            elements.sharer_by_KP().classList.add("hide");
            setTimeout(() => {
                elements.sharer_by_KP().remove();
                window.removeEventListener("resize", resizeSharerByKP);
            }, 100);
        }, 300);
        document.body.classList.remove("sharer-opened");
    }
    continue_to_close = true;
};

const link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", cdn.getPath(["bundle", "sharerByKP.css"]));
document.head.appendChild(link);
window.addEventListener("load", () => {
    document.getElementById("share-this").onclick = openSharer;
    // openSharer();
});
