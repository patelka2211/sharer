import cdn from "./cdn";
import {
    setSharerText,
    setSharerTextToDefault,
    setSharerURL,
    setSharerURLToDefault,
} from "./gui/sharerContent/content.functions";
import { closeSharer } from "./gui/sharerHeader/header.functions";
import { openSharer } from "./gui/sharerRoot";
import j2h from "./j2h";

document.head.appendChild(
    j2h.setAttribute(document.createElement("link"), {
        rel: "stylesheet",
        href: cdn.getPath(["bundle", "sharerByKP.css"]),
    })
);

export default {
    setURL: function (url: string) {
        setSharerURL(url);
        return this;
    },
    setURLToDefault: function () {
        setSharerURLToDefault();
        return this;
    },
    setText: function (text: string) {
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
