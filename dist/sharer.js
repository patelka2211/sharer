import cdn from "./cdn";
import { setSharerText, setSharerTextToDefault, setSharerURL, setSharerURLToDefault, } from "./gui/sharerContent/content.functions";
import { closeSharer } from "./gui/sharerHeader/header.functions";
import { openSharer } from "./gui/sharerRoot";
import j2h from "./j2h";
document.head.appendChild(j2h.setAttribute(document.createElement("link"), {
    id: "sharer_css_file",
    rel: "stylesheet",
    href: cdn.getPath(["bundle", "sharerByKP.css"]),
}));
try {
    function showSharerBtn() {
        let sharer_button = document.getElementById("sharer-btn-default");
        sharer_button.classList.remove("hide");
        sharer_button.onclick = openSharer;
    }
    window.addEventListener("load", showSharerBtn);
}
catch (error) { }
try {
    localStorage.removeItem("sharer_deployment_sha");
}
catch (error) { }
export default {
    setURL: function (url) {
        setSharerURL(url);
        return this;
    },
    setURLToDefault: function () {
        setSharerURLToDefault();
        return this;
    },
    setText: function (text) {
        setSharerText(text);
        return this;
    },
    setTextToDefault: function () {
        setSharerTextToDefault();
        return this;
    },
    open: openSharer,
    close: closeSharer,
};
