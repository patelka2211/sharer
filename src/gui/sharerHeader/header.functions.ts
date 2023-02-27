import elements from "../element";
import { closeResizeObserver } from "../resizeObserver";

let continue_to_close = true;

export function setContinueToCloseFalse() {
    continue_to_close = false;
}

export function closeSharer() {
    if (continue_to_close) {
        try {
            elements.sharer_container().classList.add("hide");
            setTimeout(() => {
                elements.sharer_by_KP().classList.add("hide");
                setTimeout(() => {
                    elements.sharer_by_KP().remove();
                    closeResizeObserver();
                }, 100);
            }, 300);
            document.body.classList.remove("sharer-opened");

            try {
                ((sharer_button) => {
                    sharer_button.classList.remove("hide");
                })(
                    document.getElementById("sharer-btn-default") as HTMLElement
                );
            } catch (error) {}
        } catch (error) {
            console.log(error);
        }
    }

    continue_to_close = true;
}
