import { render } from "@patelka2211/dominar";
import { sharerControlButtonLeftElement } from "../elements/sharerControlButtonLeft";
import { currentThemeIcon } from "../helper/getCurrentThemeIcon";
import { isSharerOpen } from "../operations/main";
import { sharerDynamicColors } from "../variables/main";
import { basicDecrypt } from "./basicDecrypt";
import { __storageCreate } from "./create";
import { __storageDelete } from "./delete";
import { __storageRead } from "./read";
import { storageKeyFormat } from "./storageKeyFormat";
import { __storageUpdate } from "./update";

export {
    __storageCreate as createRecord,
    __storageRead as readRecord,
    __storageUpdate as updateRecord,
    __storageDelete as deleteRecord,
};

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
