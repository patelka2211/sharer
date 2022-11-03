import { applist } from "./component/applist.js";
import { close_sharer } from "./component/closeSharer.js";
import home from "./component/homepage.js";
import json2html from "./json2html.js";

function open_sharer(url = "https://patelka2211.github.io/sharer") {
    // sessionStorage.setItem("temp-sharer-url", url);

    let sharer_by_KP_innerHTML = new json2html();

    sharer_by_KP_innerHTML.add(
        sharer_by_KP_innerHTML.div({ id: "sharer-window" }, home)
    );

    let sharer_by_KP = document.createElement("div");

    sharer_by_KP.setAttribute("id", "sharer-by-KP");

    sharer_by_KP.innerHTML = sharer_by_KP_innerHTML.get_html();
    document.body.prepend(sharer_by_KP);

    setTimeout(() => {
        sharer_by_KP.classList.add("show");

        document.getElementById("back-btn").onclick = () => close_sharer();

        Object.keys(applist).forEach((element) => {
            document.getElementById(`open-${element}-btn`).onclick = () =>
                close_sharer();
        });
    }, 200);
}

document.getElementById("open-sharer").onclick = () => {
    open_sharer();
};
// open_sharer();
