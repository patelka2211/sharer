import cdn from "./cdn";
import { closeSharer } from "./gui/sharerHeader/header.functions";
import { openSharer } from "./gui/sharerRoot";
import j2h from "./j2h";
document.head.appendChild(j2h.setAttribute(document.createElement("link"), {
    rel: "stylesheet",
    href: cdn.getPath(["bundle", "sharerByKP.css"]),
}));
let default_url = window.location.href, default_text = document.title;
function getSharerText(text) {
    return default_text;
}
function getSharerURL(url) {
    return default_url;
}
export default {
    setURL: function (url) {
        default_url = url;
        return this;
    },
    setText: function (text) {
        default_text = text;
        return this;
    },
    open: openSharer,
    close: closeSharer,
};
