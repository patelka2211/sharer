import { tag, tagList, SVGParser } from "@patelka2211/dominar";
import { openURL } from "../../helper/openURL";
import { prepareURL } from "../../helper/prepareURL";
import { readRecord } from "../../storage/main";
import openLinkIcon from "../../svgs/open-link-icon";
import qrIcon from "../../svgs/qr-icon";
import { getApplistItemImage } from "./applistItemImage";
import { applistToQRState } from "./applistToQRState";
import { appsObject } from "./main";
import { moveItemToZerothIndex } from "./moveItemToZeroIndex";

export function getApplist() {
    const appIds = readRecord("AppsIdList");

    if (Array.isArray(appIds)) {
        return (appIds as string[]).map((appId, index) => {
            const applistItem = appsObject[appId];
            return tag("div", {
                attributes: {
                    id: `applist-item-${applistItem.id}`,
                    class: "applist-item",
                },
                children: tagList(
                    tag("div", {
                        attributes: {
                            class: "applist-item-icon-container",
                        },
                        children: getApplistItemImage(applistItem.id),
                    }),
                    tag("span", {
                        attributes: {
                            class: "applist-item-name",
                            title: applistItem.name,
                        },
                        children: applistItem.name,
                    }),
                    tag("div", {
                        attributes: {
                            class: "applist-item-qr-icon",
                            title: "Show QR Code",
                        },
                        children: SVGParser(qrIcon),
                        attachEventListeners: {
                            click() {
                                applistToQRState(applistItem);
                                moveItemToZerothIndex(index);
                            },
                        },
                    }),
                    tag("div", {
                        attributes: {
                            class: "applist-item-open-icon",
                            title: `Open ${applistItem.name}`,
                        },
                        children: SVGParser(openLinkIcon),
                        attachEventListeners: {
                            click() {
                                openURL(prepareURL(applistItem.url_format));
                                moveItemToZerothIndex(index);
                            },
                        },
                    })
                ),
            });
        });
    }

    return [];
}
