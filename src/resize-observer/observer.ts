import { kpverseSharerElement } from "../elements/kpverseSharer";
import { lock, setLock } from "./main";

export function observer() {
    if (lock === true) return;
    setLock(true);

    setTimeout(() => {
        let kpverseSharer = kpverseSharerElement();

        if (kpverseSharer !== null)
            kpverseSharer.style.height = `${document.documentElement.clientHeight}px`;

        setLock(undefined);
    }, 500);
}
