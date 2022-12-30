import waIcon from "../applist/appicons/waIcon.js";
import {
    assignApplistAction,
    GetApplistHtml,
} from "../applist/GetApplistHtml.js";
import closeIcon from "../assets/CloseIcon.js";
import homeIcon from "../assets/HomeIcon.js";
import qrIcon from "../assets/QRIcon.js";
import SharerIcon from "../assets/SharerIcon.js";
import { static_id_elements } from "../getElement.js";
import j2h from "../json2html.js";
import { qr_svg } from "../qrcode.js";
import {
    close_sharer_page,
    open_sharer_page_for,
} from "../sharePage/ShareLink.js";

async function setHome() {
    let home_html = new j2h();

    home_html
        .append(
            home_html.div({ class: "sharer-header" }, [
                home_html.div({ class: "header-icon-container" }, [
                    home_html.div({ id: "sharer-header-icon" }, SharerIcon),
                    home_html.div(
                        { id: "open-app-icon", class: "hide" }
                        // waIcon
                    ),
                ]),
                home_html.div({ class: "header-title-container" }, [
                    home_html.div(
                        { id: "sharer-header-title" },
                        "Sharer by KP"
                    ),
                    home_html.div(
                        { id: "open-app-title", class: "hide" },
                        "Share on WhatsApp"
                    ),
                ]),
                home_html.div({ id: "show-qr" }, qrIcon),
                home_html.div({ class: "close-n-home-btn-container" }, [
                    home_html.div({ id: "home-btn", class: "hide" }, homeIcon),
                    home_html.div({ id: "close-btn" }, closeIcon),
                ]),
            ])
        )
        .append(
            home_html.div({ class: "applist-n-qr-container" }, [
                home_html.div({ id: "applist" }, GetApplistHtml()),
                home_html.div({ id: "qr-frame", class: "hide" }, [
                    home_html.div(
                        {
                            id: "qr-svg",
                            style: `background: url(${qr_svg("Hello", 312)})`,
                        },
                        waIcon
                    ),
                    home_html.div({ class: "powered-by-sharer" }, [
                        home_html.div(
                            { class: "sharer-icon-container" },
                            SharerIcon
                        ),
                        home_html.p("Powered by Sharer"),
                    ]),
                ]),
            ])
        )
        .append(
            home_html.div({ class: "action-btns-container" }, [
                home_html.div({ id: "default-btns" }, [
                    home_html.div(
                        { id: "feedback-btn" },
                        home_html.p("Feedback")
                    ),
                    home_html.div(
                        { id: "developer-btn" },
                        home_html.p("Developer")
                    ),
                ]),
                home_html.div(
                    {
                        id: "open-app-n-download-btns",
                        class: "hide",
                    },
                    [
                        home_html.div(
                            { id: "open-app-btn", class: "first-div" },
                            home_html.p("Open WhatsApp", {
                                id: "open-app-btn-label",
                            })
                        ),
                        home_html.div(
                            { id: "download-qr", class: "second-div" }
                            // '<lottie-player id="download-animation" src="./src/assets/download-animation.json" speed="1" autoplay></lottie-player>'
                        ),
                    ]
                ),
            ])
        );

    let SharerByKP = document.createElement("div");
    SharerByKP.setAttribute("id", "sharer-by-KP");
    SharerByKP.innerHTML = home_html.render();
    document.body.append(SharerByKP);
}

setHome().then(() => {
    static_id_elements.close_btn().onclick = () => window.close();

    static_id_elements.home_btn().onclick = () => {
        close_sharer_page();
    };

    static_id_elements.show_qr().onclick = () => {
        open_sharer_page_for();
    };

    assignApplistAction();
});
