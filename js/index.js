import json2html from "https://patelka2211.github.io/json2html/source/json2html.min.js";
import applist from "./applist.js";
import wa from "./wa.js";

let j2h = new json2html();

j2h.add(
    j2h.div(
        { id: "sharer-by-KP" },
        j2h.div({ class: "sharer-window" }, [
            j2h.div({ class: "sharer-menu" }, [
                j2h.div(
                    { class: "sharer-menu-header" },
                    j2h.div({ class: "sharer-menu-header-container" }, [
                        j2h.div({
                            id: "sharer-close-btn",
                            onclick: `alert('close sharer.');`,
                        }),
                        j2h.div({ class: "title" }, "Sharer by KP"),
                        j2h.div({ class: "space" }),
                    ])
                ),
                j2h.div(
                    { class: "sharer-menu-applist" },
                    (() => {
                        let appids = Object.keys(applist),
                            output = [];
                        for (let index = 0; index < appids.length; index++) {
                            let appid = appids[index];
                            output.push(
                                j2h.input({
                                    name: "clickables",
                                    type: "radio",
                                    id: `${applist[appid].id}-btn`,
                                    // onclick: `alert('open ${applist[appid].name}');`,
                                    onclick:
                                        "let sharer_info = document.querySelector('#sharer-info'); sharer_info.style.left='0';",
                                }),
                                j2h.label({ for: `${applist[appid].id}-btn` }, [
                                    j2h.div({ class: "icon-name" }, [
                                        j2h.div(
                                            { class: "icon" },
                                            applist[appid].svg
                                        ),
                                        j2h.div(
                                            { class: "name" },
                                            applist[appid].name
                                        ),
                                    ]),
                                    j2h.div({ class: "open-arrow" }, ""),
                                ])
                            );
                        }
                        return output;
                    })()
                ),
                j2h.div(
                    { class: "sharer-menu-footer" },
                    j2h.div({ class: "sharer-menu-footer-container" }, [
                        j2h.input({
                            name: "clickables",
                            type: "radio",
                            id: "feedback-btn",
                            // onclick: `alert('open feedback');`,
                            onclick:
                                "let sharer_info = document.querySelector('#sharer-info'); sharer_info.style.left='0';",
                        }),
                        j2h.label(
                            { for: "feedback-btn" },
                            j2h.div({ class: "title" }, "Feedback")
                        ),
                        j2h.div({ class: "separator" }),
                        j2h.input({
                            name: "clickables",
                            type: "radio",
                            id: "developer-btn",
                            // onclick: `alert('open developer tab');`,
                            onclick:
                                "let sharer_info = document.querySelector('#sharer-info'); sharer_info.style.left='0';",
                        }),
                        j2h.label(
                            { for: "developer-btn" },
                            j2h.div({ class: "title" }, "Developer")
                        ),
                    ])
                ),
            ]),
            j2h.div({ class: "separator" }),
            j2h.div({ id: "sharer-info" }, wa),
        ])
    )
);

document.body.innerHTML = j2h.get_html();
