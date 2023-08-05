import { render } from "@patelka2211/dominar";
import { DynamicColorsType, create, getInstanceByName } from "dynamic-colors";
import { sharerControlButtonLeftElement } from "../elements/sharerControlButtonLeft";
import { formatURL } from "../helper/formatURL";
import { currentThemeIcon } from "../helper/getCurrentThemeIcon";
import { isSharerOpen } from "../operations/main";
import { basicDecrypt } from "../storage/basicDecrypt";
import { readRecord, createRecord } from "../storage/main";
import { storageKeyFormat } from "../storage/storageKeyFormat";

export let share_url: URL | undefined = undefined;

export function setShareURL(newURL: string | undefined) {
    if (newURL !== undefined)
        try {
            let temp_url = formatURL(newURL);
            if (temp_url !== undefined) share_url = temp_url;
            else share_url = new URL(location.href);
        } catch (error) {
            console.log(error);
            share_url = new URL(location.href);
        }
    else share_url = newURL;
}

export let share_text: string | undefined = undefined;

export function setShareText(newText: string | undefined) {
    share_text = newText;
}

export let sharerDynamicColors: DynamicColorsType | undefined = undefined;

let color = readRecord("Color");
if (typeof color !== "string") {
    color = "#2596D1";
    // color = "#5900ff";
    createRecord("Color", color);
}

try {
    sharerDynamicColors = create("sharer", color);
} catch (error) {
    sharerDynamicColors = getInstanceByName("sharer");
    sharerDynamicColors?.setColor(color);
}

sharerDynamicColors?.restrictRemove();

currentThemeIcon(true);

addEventListener("storage", (ev) => {
    ev.preventDefault();
    if (ev.key === storageKeyFormat("Color")) {
        let { newValue } = ev;
        if (newValue)
            try {
                sharerDynamicColors?.setColor(basicDecrypt(newValue));
            } catch (error) {
                console.log(error);
            }
    } else if (ev.key === storageKeyFormat("Theme")) {
        let { newValue } = ev;
        if (newValue) {
            let themeIcon = currentThemeIcon(true);
            if (isSharerOpen) {
                let button = sharerControlButtonLeftElement();
                if (button) render(button, themeIcon);
            }
        }
    }
});
