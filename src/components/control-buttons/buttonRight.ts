import { tag, SVGParser } from "@patelka2211/dominar";
import { closeSharer } from "../../operations/closeSharer";
import closeIcon from "../../svgs/close-icon";

export function buttonRight() {
    return tag("button", {
        attributes: {
            id: "sharer-cntrl-btn-right",
            class: "sharer-cntrl-btn-corner",
        },
        children: SVGParser(closeIcon),
        attachEventListeners: {
            click: closeSharer,
        },
    });
}
