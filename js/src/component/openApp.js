import json2html from "../json2html.js";
import { applist, get_applist_html } from "./applist.js";
import backButton from "../assets/backButton.js";
import closeButton from "../assets/closeButton.js";
import { get_sharer_content } from "./sharerContent.js";
import { get_sharer_header } from "./sharerHeader.js";
import { get_sharing_URL } from "./sharingURL.js";
import { open_URL_window } from "./openURLWindow.js";
import { close_sharer } from "./closeSharer.js";
import { get_sharer_footer } from "./sharerFooter.js";

function set_homepage() {
    let homepage_html = new json2html();

    homepage_html
        .add(get_sharer_header(closeButton))
        .add(get_sharer_content(get_applist_html()))
        .add(get_sharer_footer());

    document.getElementById("sharer-window").innerHTML =
        homepage_html.get_html();
    setTimeout(() => {
        document.getElementById("back-btn").onclick = () => close_sharer();

        Object.keys(applist).forEach((element) => {
            document.getElementById(`open-${element}-btn`).onclick = () => {
                openApp(element);
            };
        });
    }, 200);
}

function openApp(appid) {
    let app_html = new json2html();

    app_html.add(get_sharer_header(backButton)).add(
        get_sharer_content(
            app_html.div({ class: "share-on-app-container" }, [
                app_html.div({ id: "icon-n-qr" }, [
                    app_html.img(
                        `https://api.qrserver.com/v1/create-qr-code/?size=340x320&data=${encodeURIComponent(
                            get_sharing_URL(appid)
                        )}&qzone=2&color=${(() => {
                            if (applist[appid].theme.fg == "white")
                                return "ffffff";
                            return applist[appid].theme.fg.substring(1);
                        })()}&bgcolor=${applist[appid].theme.bg.substring(1)}`,
                        "Error loading QR",
                        { id: "sharer-qr" }
                    ),
                    app_html.div({ id: "app-icon" }, applist[appid].svg),
                ]),
                app_html.div(
                    { class: "title" },
                    `Share on ${applist[appid].name}`
                ),
                app_html.div(
                    { class: "description" },
                    applist[appid].description
                ),
                app_html.div({ class: "sharing-options" }, [
                    app_html.div(
                        {
                            class: "share-btns",
                            id: `share-to-platform`,
                            style: `color: ${applist[appid].theme.fg}; background-color: ${applist[appid].theme.bg};`,
                        },
                        app_html.div(
                            { class: "share-btn" },
                            `Open ${applist[appid].name}`
                        )
                    ),
                    app_html.div({ class: "separator" }),
                    app_html.div(
                        {
                            class: "share-btns",
                            id: "show-qr",
                            style: `color: ${applist[appid].theme.fg}; background-color: ${applist[appid].theme.bg};`,
                        },
                        "Show QR"
                    ),
                ]),
                app_html.div({ id: "qr-container" }),
            ])
        )
    );

    document.getElementById("sharer-window").innerHTML = app_html.get_html();

    setTimeout(() => {
        document.getElementById("back-btn").onclick = () => {
            set_homepage();
        };
        document.getElementById("share-to-platform").onclick = () => {
            open_URL_window(get_sharing_URL(appid));
            setTimeout(() => {
                close_sharer();
            }, 200);
        };
        document.getElementById("show-qr").onclick = () => {
            let icon_n_qr = document.getElementById("icon-n-qr");
            if (icon_n_qr.classList.contains("show-qr")) {
                document.getElementById("show-qr").innerText = "Show QR";
            } else {
                document.getElementById("show-qr").innerText = "Hide QR";
            }
            icon_n_qr.classList.toggle("show-qr");
        };
    }, 100);
}

export { openApp, set_homepage };
