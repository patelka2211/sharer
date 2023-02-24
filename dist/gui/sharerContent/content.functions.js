import j2h from "../../j2h";
import elements from "../element";
import { setFooterInterface } from "../sharerFooter/footer.functions";
import { openSharerWebsite } from "../sharerWebsite";
import svgs from "../svgs";
import { qr_svg } from "./QRcode";
import { applist } from "./applist";
let QRInterfaceState = false;
function openQRInterfaceState() {
    QRInterfaceState = true;
}
function closeQRInterfaceState() {
    QRInterfaceState = false;
}
export function isQRInterfaceStateOpen() {
    return QRInterfaceState;
}
function setQRInterface() {
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
    openQRInterfaceState();
}
function setApplistInterface() {
    let applist_html = j2h.setRoot(elements.sharer_content());
    Object.keys(applist).forEach((id) => {
        applist_html.append(j2h.element("div", { id: `open-${id}-qr`, class: "applist-item" }, [
            j2h.element("div", { class: "applist-icon-container" }, svgs.cdn[id]),
            j2h.element("div", { class: "applist-app-name" }, applist[id].name),
            j2h.element("div", { class: "arrow-right-icon" }, svgs.local.arrowRightIcon),
        ]));
    });
    applist_html.render();
    Object.keys(applist).forEach((id) => {
        document.getElementById(`open-${id}-qr`).onclick =
            () => {
                setQRInterface();
            };
    });
    setFooterInterface();
}
