import { set_homepage } from "../index.js";
import json2html from "../json2html.js";
import { applist } from "./applist.js";
import { backButton } from "./backButton.js";
import { get_sharer_content } from "./sharerContent.js";
import { get_sharer_header } from "./sharerHeader.js";

function openApp(appid) {
    let app_html = new json2html();

    app_html
        .add(get_sharer_header(backButton))
        .add(
            get_sharer_content(
                app_html.div({ class: "share-on-app-container" }, [
                    app_html.div(
                        { class: "app-icon-container" },
                        app_html.div({ class: "app-icon" }, applist[appid].svg)
                    ),

                    app_html.div(
                        { class: "share-btn-container" },
                        app_html.div(
                            { class: "share-btn" },
                            `Share on ${applist[appid].name}`
                        )
                    ),
                ])
            )
        );

    document.getElementById("sharer-window").innerHTML = app_html.get_html();

    setTimeout(() => {
        document.getElementById("back-btn").onclick = () => {
            set_homepage();
        };
    }, 100);
}

export { openApp };
