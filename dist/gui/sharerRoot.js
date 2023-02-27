import j2h from "../j2h";
import elements from "./element";
import { resizeObserverAction, startResizeObserver } from "./resizeObserver";
import { setApplistInterface } from "./sharerContent/content.functions";
import { setFooterInterface } from "./sharerFooter/footer.functions";
import { closeSharer, setContinueToCloseFalse, } from "./sharerHeader/header.functions";
import { openWebsite } from "./sharerWebsite";
import svgs from "./svgs";
function setSharerRoot() {
    const Sharer_By_KP = document.createElement("div");
    j2h.setAttribute(Sharer_By_KP, { id: "sharer-by-KP", class: "hide" });
    const sharer_root = j2h.setRoot(Sharer_By_KP);
    sharer_root.append(j2h.element("div", { id: "sharer-container", class: "hide" }, j2h.element("div", { id: "sharer-window" }, [
        j2h.element("div", { class: "sharer-header" }, [
            j2h.element("div", { id: "header-icon-container" }, svgs.local.sharerIcon),
            j2h.element("div", { id: "header-title" }, "Sharer by KP"),
            j2h.element("div", { id: "header-close-icon" }, svgs.local.closeIcon),
        ]),
        j2h.element("div", { id: "sharer-content" }),
        j2h.element("div", { id: "sharer-footer" }, j2h.element("div", { id: "sharer-footer-text" })),
    ])));
    document.body.prepend(Sharer_By_KP);
    sharer_root.render();
}
export function openSharer() {
    try {
        document.getElementById("sharer-by-KP").remove();
    }
    catch (error) { }
    try {
        ((sharer_button) => {
            sharer_button.classList.add("hide");
        })(document.getElementById("sharer-btn-default"));
    }
    catch (error) { }
    setSharerRoot();
    setTimeout(() => {
        elements.sharer_by_KP().classList.remove("hide");
        elements.sharer_container().classList.remove("hide");
    }, 10);
    elements.sharer_window().onclick = setContinueToCloseFalse;
    elements.sharer_container().onclick = closeSharer;
    elements.header_close_icon().onclick = closeSharer;
    [elements.header_icon_container(), elements.sharer_footer()].forEach((element) => {
        element.onclick = () => openWebsite();
    });
    setApplistInterface();
    setFooterInterface();
    resizeObserverAction();
    startResizeObserver();
    document.body.classList.add("sharer-opened");
}
