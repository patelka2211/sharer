import { render, attachEventListeners } from "@patelka2211/dominar";
import { isSharerButtonActive } from "../components/button/main";
import { removeButton } from "../components/button/removeButton";
import { kpverseSharer } from "../components/root/main";
import { kpverseSharerElement } from "../elements/kpverseSharer";
import { poweredBySharerElement } from "../elements/poweredBySharer";
import { openURL } from "../helper/openURL";
import { getZIndex } from "../helper/zIndex";
import { initializeIfNot } from "../intialization/intializeIfNot";
import { sharerUninitialized } from "../intialization/main";
import { startObservation } from "../resize-observer/start";
import { setShareURL, setShareText } from "../variables/main";
import { isSharerOpen, changeSharerOpenStatus } from "./main";

/**
 * Opens the Sharer with the specified options.
 *
 * @param {object} [option] - Optional configuration for the Sharer.
 * @param {string} [option.url] - The URL to be shared.
 * @param {string} [option.text] - The text to be shared.
 * @returns {void}
 */
export function openSharer(option?: { url?: string; text?: string }): void {
    if (isSharerOpen === true) return;

    if (sharerUninitialized === true) initializeIfNot();

    if (option !== undefined) {
        let { url, text } = option;
        if (url !== undefined) setShareURL(url);
        else setShareURL(location.href);

        if (text !== undefined) setShareText(text);
        else setShareText(document.title);
    } else {
        setShareURL(location.href);
        setShareText(document.title);
    }

    let timeout = 1;

    if (isSharerButtonActive === true) {
        removeButton();
        timeout = 400;
    }

    setTimeout(() => {
        render(document.body, kpverseSharer(), {
            clearBeforeRender: false,
            insertType: "prepend",
        }).then(() => {
            setTimeout(() => {
                let kpverseSharer = kpverseSharerElement();

                if (kpverseSharer !== null) {
                    kpverseSharer.style.zIndex = `${getZIndex()}`;
                    kpverseSharer.classList.remove("hide");
                }

                document.body.classList.add("sharer-is-open");

                let poweredBySharer = poweredBySharerElement();
                if (poweredBySharer)
                    attachEventListeners(poweredBySharer, {
                        click() {
                            openURL(
                                "https://kpverse.in/sharer?utm_source=sharer&utm_medium=powered_by_sharer&utm_campaign=kpverse_sharer"
                            );
                        },
                    });

                startObservation();

                changeSharerOpenStatus(true);
            }, 1);
        });
    }, timeout);
}
