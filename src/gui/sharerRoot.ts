import j2h from "../j2h";
import elements from "./element";
import {
    isAppQROpen,
    openSharerWebsite,
    setApplistHtml,
} from "./sharerContent/applist";
import svgs from "./svgs";

let continue_to_close = true,
    resizeLock = false;

const resizeSharerByKP = () => {
    if (resizeLock) return;

    resizeLock = true;
    setTimeout(() => {
        resizeLock = false;

        elements.sharer_container().style.height = `${
            document.documentElement.clientHeight - 12
        }px`;

        if (isAppQROpen()) {
            elements.sharer_content().style.height = `${
                elements.sharer_content().offsetWidth + 51
            }px`;
        }
    }, 500);
};

const setSharerRoot = () => {
    const Sharer_By_KP = document.createElement("div");

    j2h.setAttribute(Sharer_By_KP, { id: "sharer-by-KP", class: "hide" });

    const sharer_root = j2h.setRoot(Sharer_By_KP);

    sharer_root.append(
        j2h.element(
            "div",
            { id: "sharer-container", class: "hide" },
            j2h.element("div", { id: "sharer-window" }, [
                j2h.element("div", { class: "sharer-header" }, [
                    j2h.element(
                        "div",
                        { id: "header-icon-container" },
                        svgs.sharerIcon
                    ),
                    j2h.element("div", { id: "header-title" }, "Sharer by KP"),
                    j2h.element(
                        "div",
                        { id: "header-close-icon" },
                        svgs.closeIcon
                    ),
                ]),
                j2h.element("div", { id: "sharer-content" }),
                j2h.element(
                    "div",
                    { id: "sharer-footer" },
                    j2h.element(
                        "div",
                        { id: "sharer-footer-text" }
                        // "Powered by Sharer"
                    )
                ),
            ])
        )
    );

    document.body.prepend(Sharer_By_KP);
    sharer_root.render();
};

export const openSharer = () => {
    try {
        (document.getElementById("sharer-by-KP") as HTMLElement).remove();
    } catch (error) {}

    setSharerRoot();

    setTimeout(() => {
        elements.sharer_by_KP().classList.remove("hide");
        elements.sharer_container().classList.remove("hide");
    }, 10);

    elements.sharer_window().onclick = () => {
        continue_to_close = false;
    };

    elements.sharer_container().onclick = closeSharer;
    elements.header_close_icon().onclick = closeSharer;

    [elements.header_icon_container(), elements.sharer_footer()].forEach(
        (element) => {
            element.onclick = openSharerWebsite;
        }
    );

    setApplistHtml();

    resizeSharerByKP();
    window.addEventListener("resize", resizeSharerByKP);
    document.body.classList.add("sharer-opened");
};

const closeSharer = () => {
    if (continue_to_close) {
        elements.sharer_container().classList.add("hide");
        setTimeout(() => {
            elements.sharer_by_KP().classList.add("hide");
            setTimeout(() => {
                elements.sharer_by_KP().remove();
                window.removeEventListener("resize", resizeSharerByKP);
            }, 100);
        }, 300);
        document.body.classList.remove("sharer-opened");
    }

    continue_to_close = true;
};
