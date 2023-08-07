import { SVGParser } from "@patelka2211/dominar";
import {
    getCurrentUITheme,
    setAutoTheme,
    setDarkTheme,
    setLightTheme,
} from "dynamic-colors";
import autoModeIcon from "../svgs/auto-mode-icon";
import darkModeIcon from "../svgs/dark-mode-icon";
import lightModeIcon from "../svgs/light-mode-icon";
import { readRecord, createRecord } from "../storage/main";

export function currentThemeIcon(updateTheme = false) {
    let currentTheme = readRecord("Theme");
    if (currentTheme === undefined) {
        currentTheme = getCurrentUITheme();
        createRecord("Theme", currentTheme);
    }

    if (currentTheme === "auto") {
        if (updateTheme) setAutoTheme();
        return SVGParser(autoModeIcon);
    } else if (currentTheme === "dark") {
        if (updateTheme) setDarkTheme();
        return SVGParser(darkModeIcon);
    }
    if (updateTheme) setLightTheme();
    return SVGParser(lightModeIcon);
}
