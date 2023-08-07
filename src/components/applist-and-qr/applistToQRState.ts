import { render, SVGParser, attachEventListeners } from "@patelka2211/dominar";
import { sharerApplistAndQRElement } from "../../elements/sharerApplistAndQR";
import { sharerControlButtonCenterElement } from "../../elements/sharerControlButtonCenter";
import { sharerControlButtonRightElement } from "../../elements/sharerControlButtonRight";
import { downloadSharerQR } from "../downloadable/downloadSharerQR";
import { prepareURL } from "../../helper/prepareURL";
import { createQR } from "../../helper/qrcode";
import applistIcon from "../../svgs/applist-icon";
import { share_url } from "../../variables/main";
import { qrToApplistState } from "./qrToApplistState";
import { appsItemType } from "./types";

export function applistToQRState(applistItem: appsItemType) {
    let ApplistAndQRTag = sharerApplistAndQRElement(),
        ControlButtonRight = sharerControlButtonRightElement(),
        ControlButtonCenter = sharerControlButtonCenterElement();
    if (
        ApplistAndQRTag !== null &&
        ControlButtonRight !== null &&
        ControlButtonCenter !== null
    ) {
        render(
            ApplistAndQRTag,
            SVGParser(createQR(prepareURL(applistItem.url_format)))
        ).then(() => {
            ApplistAndQRTag?.scrollTo({ top: 0 });
        });

        render(ControlButtonRight, SVGParser(applistIcon)).then(() => {
            if (ControlButtonRight !== null)
                attachEventListeners(ControlButtonRight, {
                    click: qrToApplistState,
                });
        });

        render(ControlButtonCenter, "Download QR").then(() => {
            if (ControlButtonCenter !== null)
                attachEventListeners(ControlButtonCenter, {
                    click() {
                        if (share_url !== undefined)
                            downloadSharerQR(
                                share_url.hostname,
                                applistItem.name
                            );
                    },
                });
        });
    }
}
