import { applist } from "./component/applist.js";
import { close_sharer } from "./component/closeSharer.js";
import home from "./component/homepage.js";
import { openApp } from "./component/openApp.js";
import json2html from "./json2html.js";

function set_homepage() {
    document.getElementById("sharer-window").innerHTML =
        new json2html().get_html(home);
    setTimeout(() => {
        document.getElementById("back-btn").onclick = () => close_sharer();

        Object.keys(applist).forEach((element) => {
            document.getElementById(`open-${element}-btn`).onclick = () => {
                openApp(element);
            };
        });
    }, 200);
}

const resize_ob = new ResizeObserver(function (entries) {
    setTimeout(() => {
        entries[0].target.style.height = `${window.innerHeight}px`;
    }, 200);
});

function open_sharer(url = "https://patelka2211.github.io/sharer", title = "") {
    sessionStorage.setItem("temp-sharer-url", url);
    sessionStorage.setItem("temp-sharer-title", title);

    let sharer_by_KP_innerHTML = new json2html();

    sharer_by_KP_innerHTML.add(
        sharer_by_KP_innerHTML.div({ id: "sharer-window" }, "")
    );

    let sharer_by_KP = document.createElement("div");

    sharer_by_KP.setAttribute("id", "sharer-by-KP");

    sharer_by_KP.innerHTML = sharer_by_KP_innerHTML.get_html();

    document.body.prepend(sharer_by_KP);

    setTimeout(() => {
        set_homepage();
        sharer_by_KP.classList.add("show");
        sharer_by_KP.style.height = `${window.innerHeight}px`;

        // Listen for orientation changes
        window.addEventListener("orientationchange", () => {
            setTimeout(() => {
                sharer_by_KP.style.height = `${window.innerHeight}px`;
            }, 100);
        });

        // start observing for resize
        resize_ob.observe(sharer_by_KP);
    }, 200);

    document.body.style.overflow = "hidden";
}

document.getElementById("open-sharer").onclick = () => {
    open_sharer();
};

export { set_homepage };
