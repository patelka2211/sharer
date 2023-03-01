import cdn from "./cdn";
import { setSharerText, setDefaultSharerText, setSharerURL, setDefaultSharerURL, } from "./gui/sharerContent/content.functions";
import { closeSharer } from "./gui/sharerHeader/header.functions";
import { openSharer } from "./gui/sharerRoot";
import j2h from "./j2h";
document.head.appendChild(j2h.setAttribute(document.createElement("link"), {
    id: "sharer_css_file",
    rel: "stylesheet",
    href: cdn.getPath(["bundle", "sharerByKP.css"]),
}));
try {
    localStorage.removeItem("sharer_deployment_sha"); // To be removed after some time
}
catch (error) { }
export default {
    setURL: function (url) {
        setSharerURL(url);
        return this;
    },
    setDefaultURL: function () {
        setDefaultSharerURL();
        return this;
    },
    setText: function (text) {
        setSharerText(text);
        return this;
    },
    setDefaultText: function () {
        setDefaultSharerText();
        return this;
    },
    open: openSharer,
    close: closeSharer,
};
