import { closeSharer } from "../operations/closeSharer";
import { openSharer } from "../operations/openSharer";
import { updateRecord } from "../storage/main";
import { sharerDynamicColors } from "./main";

/**
 * Sets the color to a new value.
 *
 * @param {string} newColor - The new color value.
 * @returns {object} - An object with open and close functions.
 * @property {function} open - The function to open the Sharer.
 * @property {function} close - The function to close the Sharer.
 */
export function setColor(newColor: string): object {
    try {
        sharerDynamicColors?.setColor(newColor);
        updateRecord("Color", newColor);
    } catch (error) {
        console.log(error);
    }
    return {
        open: openSharer,
        close: closeSharer,
    };
}
