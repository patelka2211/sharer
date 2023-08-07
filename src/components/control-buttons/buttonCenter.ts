import { tag } from "@patelka2211/dominar";
import { openFeedback } from "../../helper/openFeedback";

export function buttonCenter() {
    return tag("button", {
        attributes: {
            id: "sharer-cntrl-btn-center",
        },
        children: "Feedback",
        attachEventListeners: {
            click: openFeedback,
        },
    });
}
