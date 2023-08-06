import { initializeIfNot } from "./intialization/intializeIfNot";

if (document.readyState === "loading")
    window.addEventListener("load", function runAfterLoad() {
        initializeIfNot();

        setTimeout(() => {
            window.removeEventListener("load", runAfterLoad);
        }, 1000);
    });
else initializeIfNot();

console.log(
    "Discover the incredible sharing capabilities of Sharer from KPVERSE.\n\nFor more information about Sharer, visit https://kpverse.in/sharer?utm_source=sharer&utm_medium=browser_console&utm_campaign=kpverse_sharer."
);

export { button } from "./components/button/buttonObject";
export { VERSION } from "./metadata";
export { closeSharer as close } from "./operations/closeSharer";
export { openSharer as open } from "./operations/openSharer";
export { setColor } from "./variables/color";
