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
import QRCode from "../qrcode.js";

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
                    app_html.div({ id: "app-icon" }, applist[appid].svg),
                    app_html.img("", `${applist[appid].name} QR`, {
                        id: "sharer-qr",
                    }),
                    app_html.img("./assets/touch-icon.gif", `Touch here`, {
                        id: "touch-gif",
                    }),
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

        var svgNode = QRCode({
            msg: get_sharing_URL(appid),
            // dim: 300,
            // pad: 40,
            // mtx: 7,
            // ecl: "H",
            // ecb: 0,
            pal: [applist[appid].theme.fg, applist[appid].theme.bg],
            // vrb: 1,
        });

        setTimeout(() => {
            let s = new XMLSerializer();

            let sharer_qr = document.getElementById("sharer-qr");

            sharer_qr.setAttribute(
                "src",
                `data:image/svg+xml;base64,${btoa(
                    s.serializeToString(svgNode)
                )}`
            );
            sharer_qr.style.boxShadow = `0 0px 128px 0 ${applist[appid].theme.bg}66`;
        }, 100);

        document.getElementById("share-to-platform").onclick = () => {
            open_URL_window(get_sharing_URL(appid));
            setTimeout(() => {
                close_sharer();
            }, 200);
        };

        let show_qr = document.getElementById("show-qr");
        let icon_n_qr = document.getElementById("icon-n-qr");
        let toggle_qr_elements = [
            "show-qr",
            "sharer-qr",
            "app-icon",
            "touch-gif",
        ];

        toggle_qr_elements.forEach((element_id) => {
            document.getElementById(element_id).onclick = () => {
                if (icon_n_qr.classList.contains("show-qr")) {
                    show_qr.innerText = "Show QR";
                    setTimeout(() => {
                        document.getElementById(
                            "sharer-header"
                        ).style.backgroundColor = "var(--header-footer-bg)";
                    }, 500);
                } else {
                    document.getElementById(
                        "sharer-header"
                    ).style.backgroundColor = "#00000000";
                    show_qr.innerText = "Hide QR";
                }
                icon_n_qr.classList.toggle("show-qr");

                document.getElementById("touch-gif").remove();
            };
        });

        setTimeout(() => {
            try {
                let touch_gif = document.getElementById("touch-gif");
                touch_gif.classList.add("hide");
                setTimeout(() => {
                    touch_gif.remove();
                }, 400);
            } catch (error) {}
        }, 1600);
    }, 100);
}

export { openApp, set_homepage };
