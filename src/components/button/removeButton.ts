import { kpverseSharerButtonElement } from "../../elements/kpverseSharerButton";

export function removeButton() {
    let button = kpverseSharerButtonElement();

    if (button) {
        button.classList.add("hide");
        button.classList.remove("sharer-icon-hover");
        setTimeout(() => {
            if (button) button.remove();
        }, 400);
    }
}
