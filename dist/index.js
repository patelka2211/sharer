import cdn from "./cdn";
import { openSharer } from "./gui/sharerRoot";
const link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", cdn.getPath(["bundle", "sharerByKP.css"]));
document.head.appendChild(link);
window.addEventListener("load", () => {
    document.getElementById("share-this").onclick = openSharer;
    // openSharer();
});
