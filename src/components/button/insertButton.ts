import { render, tag, SVGParser } from "@patelka2211/dominar";
import { kpverseSharerButtonElement } from "../../elements/kpverseSharerButton";
import { getZIndex } from "../../helper/zIndex";
import { openSharer } from "../../operations/openSharer";
import sharerIcon from "../../svgs/sharer-icon";

export function insertButton() {
    render(
        document.body,
        tag("div", {
            attributes: {
                id: "kpverse-sharer-button",
                class: "hide",
                title: "Click to Share!",
            },
            children: SVGParser(sharerIcon),
            attachEventListeners: {
                mouseenter() {
                    let button = kpverseSharerButtonElement();
                    button?.classList.add("sharer-icon-hover");
                },
                mouseleave() {
                    let button = kpverseSharerButtonElement();
                    button?.classList.remove("sharer-icon-hover");
                },
                click() {
                    openSharer();
                },
            },
        }),
        {
            clearBeforeRender: false,
            insertType: "prepend",
        }
    ).then(() => {
        let tag = kpverseSharerButtonElement();
        if (tag) {
            tag.style.zIndex = `${getZIndex()}`;
            setTimeout(() => {
                if (tag) tag.classList.remove("hide");
            }, 1);
        }
    });
}
