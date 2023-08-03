import { activate } from "./activate";
import { deactivate } from "./deactivate";

/**
 * Represents a Sharer button with activation and deactivation functions.
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
