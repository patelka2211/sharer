import json2html from "../json2html.js";
import { get_applist_html } from "./applist.js";
import closeButton from "./closeButton.js";

let j2h = new json2html();

j2h.add(
    j2h.div(
        { class: "sharer-header" },
        j2h.div(
            { class: "sharer-header-container" },
            j2h.div({ id: "back-btn" }, closeButton)
        )
    )
)
    .add(
        j2h.div({ class: "sharer-content" }, [
            j2h.div({ class: "space" }),
            j2h.div({ class: "sharer-content-main" }, get_applist_html()),
            j2h.div({ class: "space" }),
        ])
    )
    .add(
        j2h.div(
            { class: "sharer-footer" },
            j2h.div({ class: "sharer-footer-container" }, [
                j2h.div(
                    { id: "feedback-btn", class: "footer-btns" },
                    j2h.div(
                        {
                            class: "footer-btn-container",
                            onclick: "console.log('open Feedback');",
                        },
                        "Feedback"
                    )
                ),
                j2h.div({ class: "separator" }),
                j2h.div(
                    { id: "developer-btn", class: "footer-btns" },
                    j2h.div(
                        {
                            class: "footer-btn-container",
                            onclick: "console.log('open Developer');",
                        },
                        "Developer"
                    )
                ),
            ])
        )
    );

export default j2h.list;
