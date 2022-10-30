import json2html from "https://patelka2211.github.io/json2html/source/json2html.min.js";
import applist from "./applist.js";

let j2h = new json2html();

export default [
    j2h.div(
        { class: "sharer-info-header" },
        j2h.div({ class: "sharer-info-header-container" }, [
            j2h.div({
                id: "close-sharer-info",
                onclick:
                    "let sharer_info = document.querySelector('#sharer-info'); sharer_info.style.left='100%';",
            }),
            j2h.div({ class: "title" }, applist["wa"].name),
            j2h.div({ class: "space" }),
        ])
    ),
    j2h.div(
        { class: "sharer-info-content" },
        j2h.div({ class: "sharer-info-content-container" }, [
            j2h.div({ class: "app-logo" }, applist["wa"].svg),
            j2h.div({ class: "title" }, `Share on ${applist["wa"].name}`),
            j2h.input({
                class: "inputs",
                placeholder: "Messege",
            }),
            j2h.input({
                class: "inputs",
                placeholder: "URL",
            }),
            { button: [{ id: "share-btn" }, "Share"] },
        ])
    ),
];
