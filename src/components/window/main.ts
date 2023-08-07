import { tag, tagList } from "@patelka2211/dominar";
import { setContinueToClose } from "../../operations/main";
import { sharerControlButtonsComponent } from "../control-buttons/main";
import { sharerDownloadableComponent } from "../downloadable/main";

export function sharerWindow() {
    return tag("div", {
        attributes: {
            class: "sharer-window",
        },
        children: tagList(
            sharerDownloadableComponent(),
            sharerControlButtonsComponent()
        ),
        attachEventListeners: {
            click() {
                setContinueToClose(false);
            },
        },
    });
}
