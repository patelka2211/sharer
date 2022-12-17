import j2h from "../json2html.js";
import applist from "./applist.js";
import arrowIcon from "./vectors/arrowIcon.js";
import closeIcon from "./vectors/closeIcon.js";
import homeIcon from "./vectors/homeIcon.js";
import qrIcon from "./vectors/qrIcon.js";
import SharerIcon from "./vectors/SharerIcon.js";

async function set_root() {
    let sharer_html = new j2h();

    sharer_html.append(
        sharer_html.div({ id: "sharer-root" }, [
            sharer_html.div(
                { class: "sharer-header" },
                sharer_html.div({ class: "header-content" }, [
                    sharer_html.div({ class: "header-app-icon-container" }, [
                        sharer_html.div(
                            { class: "default-header-icon" },
                            SharerIcon
                        ),
                        sharer_html.div({ id: "header-app-icon" }),
                    ]),
                    sharer_html.div({ class: "header-text-container" }, [
                        sharer_html.div(
                            { class: "default-header-text" },
                            "Sharer by KP"
                        ),
                        sharer_html.div(
                            { id: "header-text" },
                            "Sharing on WhatsApp"
                        ),
                    ]),
                    sharer_html.div({ id: "show-qr-btn" }, qrIcon),
                    sharer_html.div({ class: "close-or-home-btn" }, [
                        sharer_html.div({ id: "default-close-btn" }, closeIcon),
                        sharer_html.div({ id: "home-btn" }, homeIcon),
                    ]),
                ])
            ),
            sharer_html.div({ class: "applist-n-qr" }, [
                sharer_html.div(
                    { id: "applist" },
                    (() => {
                        let list = [],
                            app_ids = Object.keys(applist);

                        for (let index = 0; index < app_ids.length; index++) {
                            list.push(
                                sharer_html.div(
                                    {
                                        class: "list-item",
                                        id: `open-${applist[app_ids[index]]}`,
                                    },
                                    [
                                        sharer_html.div(
                                            { class: "applist-app-icon" },
                                            applist[app_ids[index]].svg
                                        ),
                                        sharer_html.div(
                                            { class: "applist-app-name" },
                                            applist[app_ids[index]].name
                                        ),
                                        sharer_html.div(
                                            { class: "open-app-arrow" },
                                            arrowIcon
                                        ),
                                    ]
                                )
                            );
                        }

                        return list;
                    })()
                ),
                sharer_html.div({ id: "url-qr" }),
            ]),
            sharer_html.div({ class: "bottom-operators-container" }, [
                sharer_html.div({ id: "default-bottom-operators" }, [
                    sharer_html.div(
                        { id: "feedback-btn" },
                        sharer_html.div({}, "Feedback")
                    ),
                    sharer_html.div(
                        { id: "developer-btn" },
                        sharer_html.div({}, "Developer")
                    ),
                ]),
                sharer_html.div({ id: "bottom-operators" }, [
                    sharer_html.div(
                        { id: "open-app-btn" },
                        sharer_html.div({}, "Open WhatsApp")
                    ),
                ]),
            ]),
            sharer_html.div({ id: "powered-by-sharer" }, "Powered by Sharer"),
        ])
    );

    console.log(sharer_html.render());
    document.body.innerHTML = sharer_html.render();
}

function increase_body_height() {
    if (document.body.offsetHeight < 516) {
        document.body.style.height = `${document.body.offsetHeight + 1}px`;
        setTimeout(() => {
            increase_body_height();
        }, 10);
    }
}

function decrease_body_height() {
    if (document.body.offsetHeight > 481) {
        document.body.style.height = `${document.body.offsetHeight - 1}px`;
        setTimeout(() => {
            decrease_body_height();
        }, 10);
    }
}

set_root()
    .then(() => {
        document.getElementById("default-close-btn").onclick = () =>
            window.close();

        document.getElementById("show-qr-btn").onclick = () => {
            document
                .getElementById("default-bottom-operators")
                .classList.toggle("hide");
            document
                .getElementById("bottom-operators")
                .classList.toggle("show");
        };

        // document.getElementById("show-qr-btn").onclick = () => {
        //     document
        //         .getElementById("default-close-btn")
        //         .classList.toggle("hide");
        //     document.getElementById("home-btn").classList.toggle("show");
        // };

        // document.getElementById("show-qr-btn").onclick = () => {
        //     document.getElementById("header-app-icon").classList.toggle("show");
        //     document.getElementById("header-text").classList.toggle("show");
        //     decrease_body_height();
        //     document
        //         .getElementById("powered-by-sharer")
        //         .classList.remove("show");
        //     document.getElementById("powered-by-sharer").style.display = "none";
        // };

        // document.getElementById("bottom-operators").onclick = () => {
        //     increase_body_height();
        //     setTimeout(() => {
        //         document.getElementById("powered-by-sharer").style.display =
        //             "block";
        //     }, 600);
        //     setTimeout(() => {
        //         document
        //             .getElementById("powered-by-sharer")
        //             .classList.add("show");
        //     }, 800);
        // };

        // chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        //     let url = tabs[0].url;
        //     // use `url` here inside the callback because it's asynchronous!
        //     document.getElementById("url-qr").innerText = url;
        // });
    })
    .catch((err) => {
        console.log(err);
    });
