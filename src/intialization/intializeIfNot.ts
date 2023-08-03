import { render, tag } from "@patelka2211/dominar";
import { readRecord, createRecord } from "../storage/main";
import style from "../style";
import { sharerUninitialized, setSharerUninitialized } from "./main";

export function initializeIfNot() {
    if (sharerUninitialized === true) {
        render(
            document.head,
            tag("style", {
                attributes: { id: "kpverse-sharer-css" },
                children: style,
            }),
            {
                clearBeforeRender: false,
                insertType: "append",
            }
        ).then(() => {
            let appIds = readRecord("AppsIdList");
            if (appIds === undefined) {
                createRecord("AppsIdList", [
                    "x",
                    "wa",
                    "mstdn",
                    "tg",
                    "lnkdn",
                    "fb",
                    "gml",
                    "rdt",
                    "pntrst",
                    "snpcht",
                ]);
            }

            setSharerUninitialized(undefined);
        });
    }
}
