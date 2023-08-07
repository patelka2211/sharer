import { tag, tagList, SVGParser } from "@patelka2211/dominar";
import poweredBySharer from "../../svgs/powered-by-sharer";
import { getApplist } from "../applist-and-qr/getApplist";

export function sharerDownloadableComponent() {
    return tag("div", {
        attributes: {
            id: "sharer-downloadable-component",
        },
        children: tagList(
            tag("div", {
                attributes: {
                    id: "sharer-applist-n-qr",
                },
                children: tagList(...getApplist()),
            }),
            tag("div", {
                attributes: {
                    class: "powered-by-sharer-container",
                },
                children: SVGParser(poweredBySharer),
            })
        ),
    });
}
