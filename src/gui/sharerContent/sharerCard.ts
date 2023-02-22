import j2h from "../../j2h";
import elements from "../element";
import svgs from "../svgs";

export const setSharerCard = () => {
    let sharer_content = j2h.setRoot(elements.sharer_content());

    sharer_content
        .append(j2h.element("div", { class: "sharer-qr-container" }))
        .append(
            j2h.element(
                "div",
                { class: "sharer-credits" },
                j2h.element("div", { class: "credits-container" }, [
                    j2h.element(
                        "div",
                        { class: "credits-icon-container" },
                        svgs.sharerIcon
                    ),
                    j2h.element(
                        "div",
                        { class: "credits-text" },
                        "Powered by Sharer"
                    ),
                ])
            )
        );

    sharer_content.render();

    elements.sharer_content().style.height = `${
        elements.sharer_content().offsetWidth + 51
    }px`;
};
