import elements from "../element";
import { closeResizeObserver } from "../resizeObserver";

let continue_to_close = true;

export function closeSharer() {
    if (continue_to_close) {
        elements.sharer_container().classList.add("hide");
        setTimeout(() => {
            elements.sharer_by_KP().classList.add("hide");
            setTimeout(() => {
                elements.sharer_by_KP().remove();
                closeResizeObserver();
            }, 100);
        }, 300);
        document.body.classList.remove("sharer-opened");
    }

    continue_to_close = true;
}

export function setContinueToCloseFalse() {
    continue_to_close = false;
}
