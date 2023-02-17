import j2h from "../j2h";
import elements from "./element";
let continue_to_close = true, resizeLock = false;
const resizeSharerByKP = () => {
    if (resizeLock)
        return;
    resizeLock = true;
    setTimeout(() => {
        resizeLock = false;
        elements.sharer_by_KP().style.height = `${document.documentElement.scrollHeight}px`;
    }, 500);
};
const closeSharer = () => {
    if (continue_to_close) {
        elements.sharer_container().classList.add("hide");
        setTimeout(() => {
            elements.sharer_by_KP().classList.add("hide");
            setTimeout(() => {
                elements.sharer_by_KP().remove();
                window.onresize = () => { };
            }, 100);
        }, 300);
    }
    continue_to_close = true;
};
export const setSharerRoot = () => {
    const Sharer_By_KP = document.createElement("div");
    j2h.setAttribute(Sharer_By_KP, { id: "sharer-by-KP", class: "hide" });
    const sharer_root = j2h.setRoot(Sharer_By_KP);
    sharer_root.append(j2h.element("div", { id: "sharer-container", class: "hide" }, j2h.element("div", { id: "sharer-window" })));
    document.body.prepend(Sharer_By_KP);
    sharer_root.render();
    setTimeout(() => {
        Sharer_By_KP.classList.remove("hide");
        elements.sharer_container().classList.remove("hide");
    }, 10);
    elements.sharer_window().onclick = () => {
        continue_to_close = false;
    };
    elements.sharer_container().onclick = () => {
        closeSharer();
    };
    resizeSharerByKP();
    window.onresize = resizeSharerByKP;
};
