import cdn from "./cdn";
import {
    setDefaultSharerText,
    setDefaultSharerURL,
    setSharerText,
    setSharerURL,
} from "./gui/sharerContent/content.functions";
import { closeSharer } from "./gui/sharerHeader/header.functions";
import { openSharer } from "./gui/sharerRoot";
import j2h from "./j2h";

export default {
    setURL: function (url: string) {
        setSharerURL(url);
        return this;
    },
    setDefaultURL: function () {
        setDefaultSharerURL();
        return this;
    },
    setText: function (text: string) {
        setSharerText(text);
        return this;
    },
    setDefaultText: function () {
        setDefaultSharerText();
        return this;
    },
    open: function () {
        openSharer();
    },
    close: function () {
        closeSharer();
    },
};

// Adding Sharer css programmatically
document.head.appendChild(
    j2h.setAttribute(document.createElement("link"), {
        id: "sharer_css_file",
        rel: "stylesheet",
        href: cdn.getPath(["bundle", "sharerByKP.css"]),
    })
);

try {
    localStorage.removeItem("sharer_deployment_sha"); // To be removed after some time
} catch (error) {}
