// import { render, tag } from "@patelka2211/dominar";
// import { readRecord, createRecord } from "./storage/main";
// import style from "./style";

// //
// function runAfterLoad() {
//     render(
//         document.head,
//         tag("style", {
//             attributes: { id: "kpverse-sharer-css" },
//             children: style,
//         }),
//         {
//             clearBeforeRender: false,
//             insertType: "append",
//         }
//     ).then(() => {
//         // Initialization code
//         let appIds = readRecord("AppsIdList");
//         if (appIds === undefined) {
//             createRecord("AppsIdList", [
//                 "x",
//                 "wa",
//                 "fb",
//                 "tg",
//                 "lnkdn",
//                 "gml",
//                 "rdt",
//                 "pntrst",
//                 "snpcht",
//             ]);
//         }

//         // // Activate Sharer button by default.
//         // activate();

//         // Remove `runAfterLoad` function after document is loaded.
//         setTimeout(() => {
//             removeEventListener("load", runAfterLoad);
//         }, 1000);
//     });
// }

// addEventListener("load", runAfterLoad);
// //

console.log(
    "Discover the incredible sharing capabilities of Sharer from KPVERSE.\n\nFor more information about Sharer, visit https://kpverse.in/sharer?utm_source=sharer&utm_medium=browser_console&utm_campaign=kpverse_sharer."
);

export { closeSharer as close } from "./operations/closeSharer";
export { openSharer as open } from "./operations/openSharer";
export { button } from "./components/button/buttonObject";
export { setColor } from "./variables/color";
