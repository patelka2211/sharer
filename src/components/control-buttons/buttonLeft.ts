import { tag, render } from "@patelka2211/dominar";
import { themeCycle } from "dynamic-colors";
import { sharerControlButtonLeftElement } from "../../elements/sharerControlButtonLeft";
import { currentThemeIcon } from "../../helper/getCurrentThemeIcon";
import { updateRecord } from "../../storage/main";

export function buttonLeft() {
    return tag("button", {
        attributes: {
            id: "sharer-cntrl-btn-left",
            class: "sharer-cntrl-btn-corner",
        },
        children: currentThemeIcon(true),
        attachEventListeners: {
            click() {
                updateRecord("Theme", themeCycle());
                let button = sharerControlButtonLeftElement();
                if (button !== null) render(button, currentThemeIcon());
            },
        },
    });
}
