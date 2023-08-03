import { kpverseSharerElement } from "../elements/kpverseSharer";
import { observer } from "./observer";

export function startObservation() {
    let kpverseSharer = kpverseSharerElement();

    if (kpverseSharer !== null)
        kpverseSharer.style.height = `${document.documentElement.clientHeight}px`;

    addEventListener("resize", observer);
}
