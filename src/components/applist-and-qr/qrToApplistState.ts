import {
    render,
    tagList,
    SVGParser,
    attachEventListeners,
} from "@patelka2211/dominar";
import { sharerApplistAndQRElement } from "../../elements/sharerApplistAndQR";
import { sharerControlButtonCenterElement } from "../../elements/sharerControlButtonCenter";
import { sharerControlButtonRightElement } from "../../elements/sharerControlButtonRight";
import { openFeedback } from "../../helper/openFeedback";
import { closeSharer } from "../../operations/closeSharer";
import closeIcon from "../../svgs/close-icon";
import { getApplist } from "./getApplist";

export function qrToApplistState() {
    let ApplistAndQRTag = sharerApplistAndQRElement(),
        ControlButtonRight = sharerControlButtonRightElement(),
        ControlButtonCenter = sharerControlButtonCenterElement();
    if (
        ApplistAndQRTag !== null &&
        ControlButtonRight !== null &&
        ControlButtonCenter !== null
    ) {
        render(ApplistAndQRTag, tagList(...getApplist()));

        render(ControlButtonRight, SVGParser(closeIcon)).then(() => {
            if (ControlButtonRight !== null)
                attachEventListeners(ControlButtonRight, {
                    click: closeSharer,
                });
        });

        render(ControlButtonCenter, "Feedback").then(() => {
            if (ControlButtonCenter !== null)
                attachEventListeners(ControlButtonCenter, {
                    click: openFeedback,
                });
        });
    }
}
