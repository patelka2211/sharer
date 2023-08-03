import { kpverseSharerElement } from "../elements/kpverseSharer";
import { stopObservation } from "../resize-observer/stop";
import { insertButton } from "../components/button/insertButton";
import { isSharerButtonActive } from "../components/button/main";
import { setShareURL, setShareText } from "../variables/main";
import {
    isSharerOpen,
    changeSharerOpenStatus,
    setContinueToClose,
} from "./main";

/**
 * Closes the Sharer.
 *
 * @returns {void}
 */
export function closeSharer(): void {
    if (isSharerOpen === undefined) return;

    setShareURL(undefined);
    setShareText(undefined);

    let kpverseSharer = kpverseSharerElement();

    if (kpverseSharer !== null) {
        kpverseSharer.classList.add("hide");
        setTimeout(() => {
            if (kpverseSharer !== null) kpverseSharer.remove();
            setTimeout(() => {
                if (isSharerButtonActive === true) insertButton();
                document.body.classList.remove("sharer-is-open");
                changeSharerOpenStatus(undefined);
                setContinueToClose(undefined);
                stopObservation();
            }, 1);
        }, 400);
    }
}
