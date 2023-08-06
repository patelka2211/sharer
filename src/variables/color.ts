import { closeSharer } from "../operations/closeSharer";
import { openSharer } from "../operations/openSharer";
import { updateRecord } from "../storage/main";
import { sharerDynamicColors } from "./main";

/**
 * Sets Sharer color.
 *
 * @param {string | undefined} newColor - The new color value.
 * @returns {object} An object containing open and close functions.
 * @property {function} open - The function to open the Sharer.
 * @property {function} close - The function to close the Sharer.
 */
export function setColor(newColor?: string): object {
    const output = {
        open: openSharer,
        close: closeSharer,
    };

    if (sharerDynamicColors) {
        try {
            sharerDynamicColors.setColor(newColor || "#2596D1");
        } catch (error) {
            console.warn(error);
        }

        updateRecord("Color", newColor || "#2596D1");
    } else console.warn(`"sharerDynamicColors" is not defined.`);

    return output;
}
