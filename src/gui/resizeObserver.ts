import elements from "./element";
import { isQRInterfaceStateOpen } from "./sharerContent/content.functions";

let resizeLock = false;

export function resizeObserverAction() {
    if (resizeLock) return;

    resizeLock = true;
    setTimeout(() => {
        resizeLock = false;

        elements.sharer_container().style.height = `${
            document.documentElement.clientHeight - 12
        }px`;

        if (isQRInterfaceStateOpen()) {
            elements.sharer_content().style.height = `${
                elements.sharer_content().offsetWidth + 51
            }px`;
        }
    }, 500);
}

export function startResizeObserver() {
    window.addEventListener("resize", resizeObserverAction);
}
export function closeResizeObserver() {
    window.removeEventListener("resize", resizeObserverAction);
}
