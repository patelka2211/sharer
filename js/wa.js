import json2html from "https://patelka2211.github.io/json2html/source/json2html.min.js";
import applist from "./applist.js";

let j2h = new json2html();

export default [
    j2h.div(
        { class: "sharer-info-header" },
        j2h.div({ class: "sharer-info-header-container" }, [
            j2h.div({ class: "back-btn" }),
            j2h.div({ class: "title" }, applist["wa"].name),
            j2h.div({ class: "space" }),
        ])
    ),
    j2h.div(
        { class: "sharer-info-content" },
        j2h.div(
            {
                class: "sharer-info-content-container",
                style: "width: 100%; min-height: 100%; display: flex; flex-direction: column; align-items: center;",
            },
            [
                j2h.div(
                    {
                        class: "app-logo",
                        style: "width: 100px; aspect-ratio: 1;",
                    },
                    applist["wa"].svg
                ),
                j2h.div(
                    {
                        class: "title",
                        style: "margin: 16px 0; font-size: 26px; font-weight: 400;",
                    },
                    `Share on ${applist["wa"].name}`
                ),
            ]
        )
    ),
];
