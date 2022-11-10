import json2html from "../json2html.js";

function get_sharer_header(nav_btn) {
    let sharer_header = new json2html();
    sharer_header.add(
        sharer_header.div(
            { class: "sharer-header" },
            sharer_header.div(
                { class: "sharer-header-container" },
                sharer_header.div({ id: "back-btn" }, nav_btn)
            )
        )
    );

    return sharer_header.list;
}

export { get_sharer_header };
