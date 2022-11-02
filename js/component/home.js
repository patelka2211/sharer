import json2html from "../json2html.js";
import { get_applist_html } from "./applist.js";
import { closeButton } from "./closeButton.js";

let home_html = new json2html();

home_html
    .add(
        home_html.div(
            { class: "sharer-header" },
            home_html.div(
                { class: "sharer-header-container" },
                home_html.div({ id: "back-btn" }, closeButton)
            )
        )
    )
    .add(
        home_html.div({ class: "sharer-content" }, [
            home_html.div({ class: "space" }),
            home_html.div({ class: "sharer-content-main" }, get_applist_html()),
            home_html.div({ class: "space" }),
        ])
    )
    .add(
        home_html.div(
            { class: "sharer-footer" },
            home_html.div({ class: "sharer-footer-container" }, [
                home_html.div(
                    { id: "feedback-btn", class: "footer-btns" },
                    home_html.div(
                        {
                            class: "footer-btn-container",
                            onclick: "console.log('open Feedback');",
                        },
                        "Feedback"
                    )
                ),
                home_html.div({ class: "separator" }),
                home_html.div(
                    { id: "developer-btn", class: "footer-btns" },
                    home_html.div(
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

export default home_html.list;
