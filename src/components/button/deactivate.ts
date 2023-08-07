import { isSharerButtonActive, changeSharerButtonStatus } from "./main";
import { removeButton } from "./removeButton";

/**
 * Deactivates Sharer button.
 *
 * @returns {void}
 */
export function deactivate(): void {
    if (isSharerButtonActive === undefined) return;
    if (isSharerButtonActive === true) changeSharerButtonStatus(undefined);
    removeButton();
}
