import { activate } from "./activate";
import { deactivate } from "./deactivate";

/**
 * Sharer button is An object containing `activate` and `deactivate` methods.
 */
export const button: {
    /**
     * Activates the Sharer button.
     *
     * @returns {void}
     */
    activate: () => void;
    /**
     * Deactivates the Sharer button.
     *
     * @returns {void}
     */
    deactivate: () => void;
} = {
    activate,
    deactivate,
};
