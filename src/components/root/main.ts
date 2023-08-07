import { tag } from "@patelka2211/dominar";
import { closeSharer } from "../../operations/closeSharer";
import { continueToClose, setContinueToClose } from "../../operations/main";
import { sharerWindow } from "../window/main";

export function kpverseSharer() {
    return tag("div", {
        attributes: {
            id: "kpverse-sharer",
            class: "hide",
        },
        children: sharerWindow(),
        attachEventListeners: {
            click() {
                if (continueToClose || continueToClose === undefined)
                    closeSharer();
                setContinueToClose(true);
            },
        },
    });
}
