import j2h from "../j2h";
export const setSharerRoot = () => {
    const Sharer_By_KP = document.createElement("div");
    j2h.setAttribute(Sharer_By_KP, { id: "sharer-by-KP", class: "" });
    const sharer_root = j2h.setRoot(Sharer_By_KP);
    document.body.prepend(Sharer_By_KP);
    sharer_root.render();
    setTimeout(() => {
        Sharer_By_KP.classList.add("hide");
    }, 1000);
};
