import json2html from "../json2html.js";
import { applist } from "./applist.js";

export default function openApp(appid) {
    if (appid == applist.wa.id) {
        let wa_html = json2html();
    }
}
