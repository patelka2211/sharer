import { set_homepage } from "../index.js";
import json2html from "../json2html.js";
import { backButton } from "./backButton.js";
import { get_sharer_content } from "./sharerContent.js";
import { get_sharer_header } from "./sharerHeader.js";

function openWA() {
    let wa_html = new json2html();

    wa_html
        .add(get_sharer_header(backButton))
        .add(get_sharer_content("Share on WhatsApp"));

    document.getElementById("sharer-window").innerHTML = wa_html.get_html();

    setTimeout(() => {
        document.getElementById("back-btn").onclick = () => {
            set_homepage();
        };
    }, 100);
}

export { openWA };
