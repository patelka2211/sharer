import j2h from "../j2h";

let continue_to_close = false;

const closeSharer = () => {
    document.getElementById("sharer-window");
};

export const setSharerRoot = () => {
    const Sharer_By_KP = document.createElement("div");

    j2h.setAttribute(Sharer_By_KP, { id: "sharer-by-KP", class: "hide" });

    const sharer_root = j2h.setRoot(Sharer_By_KP);

    // sharer_root.append(
    //     j2h.element("div", { id: "sharer-window" }, [
    //         j2h.element("div", { class: "sharer-header" }, [
    //             j2h.element(
    //                 "div",
    //                 { id: "header-icon-container" },
    //                 j2h.element("div", { id: "header-icon" })
    //             ),
    //             j2h.element("div", { id: "header-title" }, "Sharer by KP"),
    //             j2h.element("div", { id: "header-close-icon" }),
    //         ]),
    //         j2h.element("div", { id: "sharer-content" }),
    //         j2h.element("div", { id: "sharer-footer" }),
    //     ])
    // );

    sharer_root.append(
        j2h.element(
            "div",
            { id: "sharer-container", class: "hide" },
            j2h.element("div", { id: "sharer-window" })
        )
    );

    document.body.prepend(Sharer_By_KP);
    sharer_root.render();

    setTimeout(() => {
        Sharer_By_KP.classList.remove("hide");

        setTimeout(() => {
            document
                .getElementById("sharer-container")
                ?.classList.remove("hide");
        }, 300);
    }, 10);

    (document.getElementById("sharer-window") as HTMLElement).onclick = () => {
        continue_to_close = false;
    };
    (document.getElementById("sharer-container") as HTMLElement).onclick =
        () => {
            // if (continue_to_close)
            continue_to_close = true;
        };

    // Sharer_By_KP.classList.add("hide");
};
