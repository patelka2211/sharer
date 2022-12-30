import ArrowIcon from "../assets/ArrowIcon.js";
import { getElementById } from "../getElement.js";
import j2h from "../json2html.js";
import { open_sharer_page_for } from "../sharePage/ShareLink.js";
import Applist from "./Applist.js";

let appids = Object.keys(Applist);

export function GetApplistHtml() {
    let applist_html = new j2h(),
        output = [];

    for (const key in Applist) {
        if (Object.hasOwnProperty.call(Applist, key)) {
            const element = Applist[key];

            output.push([
                applist_html.div(
                    { class: "applist-item", id: `share-on-${key}-btn` },
                    [
                        applist_html.div(
                            { class: "applist-item-icon" },
                            element.svg
                        ),
                        applist_html.p(element.name, {
                            class: "applist-item-name",
                        }),
                        applist_html.div({ class: "open-app-icon" }, ArrowIcon),
                    ]
                ),
            ]);
        }
    }

    return output;
}

export function assignApplistAction() {
    for (let index = 0; index < appids.length; index++) {
        const element = appids[index];

        getElementById(`share-on-${element}-btn`).onclick = () => {
            open_sharer_page_for(element);
        };
    }
}
