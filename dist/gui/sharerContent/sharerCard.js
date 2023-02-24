import j2h from "../../j2h";
import elements from "../element";
import { openSharerWebsite } from "../sharerWebsite";
import svgs from "../svgs";
import { qr_svg } from "./QRcode";
export function setSharerCard() {
    let sharer_content = j2h.setRoot(elements.sharer_content());
    sharer_content
        .append(j2h.element("div", {
        class: "sharer-qr-container",
        style: `background: url(${qr_svg("Hello")})`,
    }))
        .append(j2h.element("div", { class: "sharer-credits" }, j2h.element("div", { id: "credits-container" }, [
        j2h.element("div", { class: "credits-icon-container" }, svgs.local.sharerIcon),
        j2h.element("div", { class: "credits-text" }, "Powered by Sharer"),
    ])));
    sharer_content.render();
    ((element) => {
        element.style.height = `${element.offsetWidth + 51}px`;
    })(sharer_content.root);
    elements.credits_container().onclick = openSharerWebsite;
}
