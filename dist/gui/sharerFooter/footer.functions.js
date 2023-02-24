import elements from "../element";
import { openSharerWebsite } from "../sharerWebsite";
export function setFooterInterface(inputText = "Powered by Sharer", fontColor = "#3479f6", bgColor = "#3479f614", actionPerform = openSharerWebsite) {
    ((element) => {
        element.innerText = inputText;
        element.style.color = fontColor;
    })(elements.sharer_footer_text());
    ((element) => {
        element.style.backgroundColor = bgColor;
        element.onclick = actionPerform;
    })(elements.sharer_footer());
}
