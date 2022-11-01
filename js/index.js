// import { get_applist_html } from "./component/applist.js";
// import closeButton from "./component/closeButton.js";
import home from "./component/home.js";
import json2html from "./json2html.js";

let j2h = new json2html();

j2h.add(
    j2h.div({ id: "sharer-by-KP" }, j2h.div({ id: "sharer-window" }, home))
);

document.body.innerHTML = j2h.get_html();
