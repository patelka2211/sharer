import { get_applist_html } from "./component/applist.js";
import closeButton from "./component/closeButton.js";
import json2html from "./json2html.js";

let j2h = new json2html();

j2h.add(
    j2h.div(
        { id: "sharer-by-KP" },
        j2h.div({ id: "sharer-window" }, [
            j2h.div(
                { class: "sharer-header" },
                j2h.div(
                    { class: "sharer-header-container" },
                    j2h.div({ id: "back-btn" }, closeButton)
                )
            ),
            j2h.div({ class: "sharer-content" }, [
                j2h.div({ class: "space" }),
                j2h.div({ class: "applist" }, get_applist_html()),
                j2h.div({ class: "space" }),
            ]),
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
            ),
        ])
    )
);

document.body.innerHTML = j2h.get_html();
