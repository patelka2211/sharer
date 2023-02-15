import j2h from "../../j2h";

export const setSharerRoot = () => {
    const Sharer_By_KP = document.createElement("div");

    j2h.setAttribute(Sharer_By_KP, { id: "sharer-by-KP" });

    const sharer_root = j2h.setRoot(Sharer_By_KP);

    sharer_root.append(
        j2h.element("div", { id: "sharer-window" }, [
            j2h.element("div", { class: "sharer-header" }, [
                j2h.element(
                    "div",
                    { id: "header-icon-container" },
                    j2h.element("div", { id: "header-icon" })
                ),
                j2h.element("div", { id: "header-title" }, "Sharer by KP"),
                j2h.element("div", { id: "header-close-icon" }),
            ]),
            j2h.element("div", { id: "sharer-content" }),
            j2h.element("div", { id: "sharer-footer" }),
        ])
    );

    document.body.prepend(Sharer_By_KP);
    sharer_root.render();

    // Sharer_By_KP.classList.add("hide");
};
