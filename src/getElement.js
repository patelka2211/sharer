export function getElementById(id) {
    return document.getElementById(id);
}

export const static_id_elements = {
    sharer_header_icon: () => {
        return getElementById("sharer-header-icon");
    },
    open_app_icon: () => {
        return getElementById("open-app-icon");
    },
    sharer_header_title: () => {
        return getElementById("sharer-header-title");
    },
    open_app_title: () => {
        return getElementById("open-app-title");
    },
    show_qr: () => {
        return getElementById("show-qr");
    },
    home_btn: () => {
        return getElementById("home-btn");
    },
    close_btn: () => {
        return getElementById("close-btn");
    },
    applist: () => {
        return getElementById("applist");
    },
    qr_frame: () => {
        return getElementById("qr-frame");
    },
    qr_svg: () => {
        return getElementById("qr-svg");
    },
    default_btns: () => {
        return getElementById("default-btns");
    },
    feedback_btn: () => {
        return getElementById("feedback-btn");
    },
    developer_btn: () => {
        return getElementById("developer-btn");
    },
    open_app_n_download_btns: () => {
        return getElementById("open-app-n-download-btns");
    },
    open_app_btn: () => {
        return getElementById("open-app-btn");
    },
    open_app_btn_label: () => {
        return getElementById("open-app-btn-label");
    },
    download_qr_btn: () => {
        return getElementById("download-qr");
    },
    download_animation: () => {
        return getElementById("download-animation");
    },
};
