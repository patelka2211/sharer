import { initializeIfNot } from "../../intialization/intializeIfNot";
import { sharerUninitialized } from "../../intialization/main";
import { isSharerOpen } from "../../operations/main";
import { insertButton } from "./insertButton";
import { isSharerButtonActive, changeSharerButtonStatus } from "./main";

/**
 * Activates Sharer button.
 *
 * @returns {void}
 */
export function activate(): void {
    if (isSharerButtonActive === true) return;
    if (sharerUninitialized === true) initializeIfNot();
    if (isSharerButtonActive === undefined) changeSharerButtonStatus(true);
    if (isSharerOpen === undefined) insertButton();
}
