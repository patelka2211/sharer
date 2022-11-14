import backButton from "../assets/backButton.js";
import json2html from "../json2html.js";
import { set_homepage } from "./openApp.js";
import { get_sharer_content } from "./sharerContent.js";
import { get_sharer_header } from "./sharerHeader.js";

export function open_feedback() {
    let app_html = new json2html();

    app_html
        .add(get_sharer_header(backButton))
        .add(
            get_sharer_content(
                app_html.div(
                    { id: "feedback-form" },
                    app_html.iframe(
                        "https://docs.google.com/forms/d/e/1FAIpQLSeI8_vYyaJgM7SJM4Y9AWfLq-tglWZh6yt7bEXEOJr_L-hV1A/viewform?formkey=dGx0b1ZrTnoyZDgtYXItMWVBdVlQQWc6MQ"
                    )
                )
            )
        );

    document.getElementById("sharer-window").innerHTML = app_html.get_html();

    setTimeout(() => {
        document.getElementById("back-btn").onclick = () => {
            set_homepage();
        };
    }, 100);
}