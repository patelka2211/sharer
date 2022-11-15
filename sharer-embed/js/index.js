import json2html from "../../js/src/json2html.js";

async function open_sharer() {
    let sharer_html = new json2html();

    sharer_html.add(
        sharer_html.div(
            { id: "sharer-by-KP" },
            sharer_html.div({ id: "sharer-window" })
        )
    );

    return sharer_html.get_html();
}

open_sharer().then((html) => {
    document.body.innerHTML = html;
});
