import json2html from "../json2html.js";

function get_sharer_content(sharer_content) {
    let sharerContent = new json2html();

    sharerContent.add(
        sharerContent.div({ class: "sharer-content" }, [
            sharerContent.div({ class: "space" }),
            sharerContent.div({ class: "sharer-content-main" }, sharer_content),
            sharerContent.div({ class: "space" }),
        ])
    );

    return sharerContent.list;
}

export { get_sharer_content };
