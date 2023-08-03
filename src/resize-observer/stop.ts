import { observer } from "./observer";

export function stopObservation() {
    window.removeEventListener("resize", observer);
}
