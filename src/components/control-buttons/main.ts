import { tag, tagList } from "@patelka2211/dominar";
import { buttonLeft } from "./buttonLeft";
import { buttonRight } from "./buttonRight";
import { buttonCenter } from "./buttonCenter";

export function sharerControlButtonsComponent() {
    return tag("div", {
        attributes: {
            id: "sharer-cntrl-btns-container",
        },
        children: tagList(buttonLeft(), buttonCenter(), buttonRight()),
    });
}
