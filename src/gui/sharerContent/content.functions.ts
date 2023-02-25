import j2h from "../../j2h";
import elements from "../element";
import { setFooterInterface } from "../sharerFooter/footer.functions";
import { openWebsite } from "../sharerWebsite";
import svgs from "../svgs";
import { qr_svg } from "./QRcode";
import { applist } from "./applist";

let QRInterfaceState = false;

let default_url = window.location.href,
    default_text = document.title;

export function setSharerText(text: string) {
    default_text = text;
}

export function setSharerURL(url: string) {
    default_url = url;
}

export function setSharerURLToDefault() {
    default_url = window.location.href;
}

export function setSharerTextToDefault() {
    default_text = document.title;
}

export function openQRInterfaceState() {
    QRInterfaceState = true;
}
function closeQRInterfaceState() {
    QRInterfaceState = false;
}
export function isQRInterfaceStateOpen() {
    return QRInterfaceState;
}

export function revertBackToRoot() {
    ((element) => {
        element.innerHTML = svgs.local.sharerIcon;
        element.onclick = () => openWebsite();
    })(elements.header_icon_container());

    elements.header_title().innerText = "Sharer by KP";

    ((element) => {
        element.style.height = "auto";
        element.style.aspectRatio = "1";
    })(elements.sharer_content());

    setApplistInterface();
    closeQRInterfaceState();
}

function setQRInterface(appid: string) {
    let sharer_content = j2h.setRoot(elements.sharer_content()),
        url_to_be_shared = applist[appid].url_format(default_url, default_text);

    sharer_content
        .append(
            j2h.element(
                "div",
                {
                    class: "sharer-qr-container",
                },
                j2h.element(
                    "div",
                    {
                        class: "sharer-qr",
                        style: `background: url(${qr_svg(url_to_be_shared)})`,
                    },
                    svgs.cdn[appid]
                )
            )
        )
        .append(
            j2h.element(
                "div",
                { class: "sharer-credits" },
                j2h.element("div", { id: "credits-container" }, [
                    j2h.element(
                        "div",
                        { class: "credits-icon-container" },
                        svgs.local.sharerIcon
                    ),
                    j2h.element(
                        "div",
                        { class: "credits-text" },
                        "Powered by Sharer"
                    ),
                ])
            )
        );

    sharer_content.render();

    ((element) => {
        element.style.height = `${element.offsetWidth + 51}px`;
    })(sharer_content.root);

    elements.credits_container().onclick = () => openWebsite();
    openQRInterfaceState();

    ((element) => {
        element.innerHTML = svgs.local.arrowLeftIcon;
        element.onclick = revertBackToRoot;
    })(elements.header_icon_container());

    ((app_details) => {
        elements.header_title().innerText = `Share on ${app_details.name}`;
        setFooterInterface(
            `Open ${app_details.name}`,
            app_details.theme.secondary,
            app_details.theme.primary,
            () => {
                openWebsite(url_to_be_shared);
            }
        );
    })(applist[appid]);
}

export function setApplistInterface() {
    let applist_html = j2h.setRoot(elements.sharer_content());

    Object.keys(applist).forEach((id) => {
        applist_html.append(
            j2h.element("div", { id: `open-${id}-qr`, class: "applist-item" }, [
                j2h.element(
                    "div",
                    { class: "applist-icon-container" },
                    svgs.cdn[id]
                ),
                j2h.element(
                    "div",
                    { class: "applist-app-name" },
                    applist[id].name
                ),
                j2h.element(
                    "div",
                    { class: "arrow-right-icon" },
                    svgs.local.arrowRightIcon
                ),
            ])
        );
    });

    applist_html.render();

    Object.keys(applist).forEach((id) => {
        (document.getElementById(`open-${id}-qr`) as HTMLElement).onclick =
            () => {
                setQRInterface(id);
            };
    });

    setFooterInterface();
    closeQRInterfaceState();
}
