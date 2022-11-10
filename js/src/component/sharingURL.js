import { applist } from "./applist.js";

function get_sharing_URL(appid) {
    let input_url = sessionStorage.getItem("temp-sharer-url"),
        title = sessionStorage.getItem("temp-sharer-title"),
        output_url = "";

    if (appid == applist.wa.id) {
        if (title != "") title += "\n";
        output_url = `http://api.whatsapp.com/send?text=${encodeURIComponent(
            `${title}${input_url}`
        )}`;
    } else if (appid == applist.fb.id) {
        output_url = `https://www.facebook.com/sharer/sharer.php?t=${encodeURIComponent(
            title
        )}&u=${encodeURIComponent(input_url)}`;
    } else if (appid == applist.email.id) {
        output_url = `mailto:?subject=${encodeURIComponent(
            title
        )}&body=${encodeURIComponent(input_url)}`;
    } else if (appid == applist.lnkdn.id) {
        if (title != "") title += "\n";
        output_url = `https://www.linkedin.com/cws/share?url=${encodeURIComponent(
            `${title}${input_url}`
        )}`;
    } else if (appid == applist.tw.id) {
        output_url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
        )}&url=${encodeURIComponent(input_url)}`;
    } else if (appid == applist.snpcht.id) {
        output_url = `https://snapchat.com/scan?attachmentUrl=${encodeURIComponent(
            input_url
        )}`;
    } else if (appid == applist.rdt.id) {
        output_url = `https://reddit.com/submit?title=${encodeURIComponent(
            title
        )}&url=${encodeURIComponent(input_url)}`;
    } else if (appid == applist.koo.id) {
        if (title != "") title += "\n";
        output_url = `https://www.kooapp.com/create?title=${encodeURIComponent(
            `${title}${input_url}`
        )}`;
    } else if (appid == applist.pntrst.id) {
        output_url = `https://www.pinterest.com/pin/create/button/?description=${encodeURIComponent(
            title
        )}&url=${encodeURIComponent(input_url)}&method=button`;
        //&media=${"https://raw.githubusercontent.com/patelka2211/gdocs/main/assets/opengraph.jpg"}
    } else if (appid == applist.tg.id) {
        output_url = `https://t.me/share/url?url=${encodeURIComponent(
            input_url
        )}&text=${encodeURIComponent(title)}&to=`;
    }

    return output_url;
}

export { get_sharing_URL };
