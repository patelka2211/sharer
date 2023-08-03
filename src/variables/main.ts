import { DynamicColorsType, create, getInstanceByName } from "dynamic-colors";
import { formatURL } from "../helper/formatURL";
import { currentThemeIcon } from "../helper/getCurrentThemeIcon";
import { readRecord, createRecord } from "../storage/main";

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
