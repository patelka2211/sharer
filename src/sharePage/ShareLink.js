import Applist from "../applist/Applist.js";
import SharerIcon from "../assets/SharerIcon.js";
import { static_id_elements } from "../getElement.js";
import html2canvas from "../html2canvas.js";
import { qr_svg } from "../qrcode.js";

export function open_url(url) {
    window.open(
        url,
        "_blank",
        `resizable=yes,width=${screen.width * 0.84},height=${
            screen.height * 0.84
        },top=${(screen.height * 0.16) / 2},left=${(screen.width * 0.16) / 2}`
    );
}

function download_qr() {
    html2canvas(static_id_elements.qr_frame()).then((canvas) => {
        var link = document.createElement("a");
        link.style.display = "none";
        document.body.prepend(link);
        link.download = ((date = new Date()) => {
            return `SharerCard_${date.toDateString()}_${date.toLocaleTimeString()}.png`;
        })();
        link.href = canvas.toDataURL("image/png");
        link.target = "_blank";
        link.innerHTML = "download";
        link.click();
        setTimeout(() => {
            link.remove();
        }, 2000);
    });
}

export function open_sharer_page_for(appid = null) {
    static_id_elements.home_btn().onclick = () => {
        close_sharer_page();
    };

    if (appid == null) {
        static_id_elements.open_app_icon().innerHTML = SharerIcon;
        static_id_elements.open_app_title().innerText = "Sharer by KP";
        static_id_elements.qr_svg().innerHTML = SharerIcon;

        chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
            const url = tabs[0].url;
            // use `url` here inside the callback because it's asynchronous!
            static_id_elements.qr_svg().style.background = `url(${qr_svg(
                url,
                312
            )})`;

            static_id_elements.open_app_btn().onclick = () => {
                navigator.clipboard
                    .writeText(url)
                    .then(() => {
                        static_id_elements.open_app_btn_label().innerText =
                            "👍🏻 URL copied";
                        setTimeout(() => {
                            static_id_elements.open_app_btn_label().innerText =
                                "📋 Copy URL";
                        }, 1600);
                    })
                    .catch(() => {
                        static_id_elements.open_app_btn_label().innerText =
                            "❌ Error occurred";
                    });
            };
        });
        static_id_elements.open_app_btn().style.backgroundColor = "#f7f7f5";
        static_id_elements.open_app_btn_label().innerText = "📋 Copy URL";
        static_id_elements.open_app_btn_label().style.color = "#31302c";
    } else {
        static_id_elements.open_app_icon().innerHTML = Applist[appid].svg;
        static_id_elements.open_app_title().innerText = `Share on ${Applist[appid].name}`;
        static_id_elements.qr_svg().innerHTML = Applist[appid].svg;

        chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
            const url = tabs[0].url;
            // use `url` here inside the callback because it's asynchronous!
            static_id_elements.qr_svg().style.background = `url(${qr_svg(
                Applist[appid].url_format(url),
                312
            )})`;

            static_id_elements.open_app_btn().onclick = () => {
                open_url(
                    (() => {
                        if (appid == "wa")
                            return Applist[appid].url_format(url, "web");
                        else return Applist[appid].url_format(url);
                    })()
                );
            };
        });

        static_id_elements.open_app_btn().style.backgroundColor =
            Applist[appid].theme.primary;
        static_id_elements.open_app_btn_label().innerText = `Open ${Applist[appid].name}`;
        static_id_elements.open_app_btn_label().style.color =
            Applist[appid].theme.secondary;
    }

    static_id_elements.download_qr_btn().innerHTML =
        '<lottie-player id="download-animation" src="./src/assets/download-animation.json" speed="1" autoplay></lottie-player>';

    setTimeout(() => {
        static_id_elements.download_qr_btn().classList.toggle("highlight");
        static_id_elements.download_animation().classList.toggle("highlight");
    }, 1600);
    static_id_elements.download_qr_btn().onclick = () => {
        download_qr();
    };
    toggle_visibility();
}

function toggle_visibility() {
    [
        static_id_elements.sharer_header_icon,
        static_id_elements.open_app_icon,
        static_id_elements.sharer_header_title,
        static_id_elements.open_app_title,
        static_id_elements.show_qr,
        static_id_elements.close_btn,
        static_id_elements.home_btn,
        //
        static_id_elements.applist,
        static_id_elements.qr_frame,
        //
        static_id_elements.default_btns,
        static_id_elements.open_app_n_download_btns,
    ].forEach((element) => {
        element().classList.toggle("hide");
    });
}

export function close_sharer_page() {
    static_id_elements.download_qr_btn().classList.toggle("highlight");
    static_id_elements.download_animation().classList.toggle("highlight");
    toggle_visibility();
}
