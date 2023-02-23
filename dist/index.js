import cdn from "./cdn";
import { openSharer } from "./gui/sharerRoot";
import j2h from "./j2h";
document.head.appendChild(j2h.setAttribute(document.createElement("link"), {
    rel: "stylesheet",
    href: cdn.getPath(["bundle", "sharerByKP.css"]),
}));
export { openSharer as open };
