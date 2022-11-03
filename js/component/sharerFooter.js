import json2html from "../json2html.js";

function get_sharer_footer() {
    let sharer_footer = new json2html();

    sharer_footer.add(
        sharer_footer.div(
            { class: "sharer-footer" },
            sharer_footer.div({ class: "sharer-footer-container" }, [
                sharer_footer.div(
                    { id: "feedback-btn", class: "footer-btns" },
                    sharer_footer.div(
                        {
                            class: "footer-btn-container",
                            onclick: "console.log('open Feedback');",
                        },
                        "Feedback"
                    )
                ),
                sharer_footer.div({ class: "separator" }),
                sharer_footer.div(
                    { id: "developer-btn", class: "footer-btns" },
                    sharer_footer.div(
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

    return sharer_footer.list;
}

export { get_sharer_footer };
