import json2html from "../json2html.js";
import { applist, get_applist_html } from "./applist.js";
import { backButton } from "../assets/backButton.js";
import { closeButton } from "../assets/closeButton.js";
import { get_sharer_content } from "./sharerContent.js";
import { get_sharer_header } from "./sharerHeader.js";
import { get_sharing_URL } from "./sharingURL.js";
import { open_window } from "./openWindow.js";
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
                app_html.div(
                    { class: "app-icon-container" },
                    app_html.div({ class: "app-icon" }, applist[appid].svg)
                ),
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
                        "Get QR"
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
            open_window(get_sharing_URL(appid));
            setTimeout(() => {
                close_sharer();
            }, 200);
        };
        document.getElementById("show-qr").onclick = () => {
            document.getElementById("qr-container").innerHTML =
                app_html.get_html(
                    app_html.img(
                        `https://api.qrserver.com/v1/create-qr-code/?size=154x154&data=${encodeURIComponent(
                            get_sharing_URL(appid)
                        )}`,
                        "Sharer QR"
                    )
                );
        };
    }, 100);
}

export { openApp, set_homepage };
