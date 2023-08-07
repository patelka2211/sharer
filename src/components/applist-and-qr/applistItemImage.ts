import { tag } from "@patelka2211/dominar";
import { cdn } from "../../helper/cdn";

export function getApplistItemImage(appId: string) {
    return tag("img", {
        attributes: {
            src: cdn.get(["svgs"], `${appId}-icon.svg`),
            class: "applist-item-icon-image",
        },
    });
}
