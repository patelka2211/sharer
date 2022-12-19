import applist from "./applist.js";

export function hide_top_buttons() {
    let default_close_btn = document.getElementById("default-close-btn");
    let home_btn = document.getElementById("home-btn");
    let show_qr_btn = document.getElementById("show-qr-btn");

    default_close_btn.classList.toggle("hide");
    home_btn.classList.toggle("show");
    show_qr_btn.classList.toggle("hide");
}

export function toggle_header_icon_n_text(app_id = null) {
    let header_app_icon = document.getElementById("header-app-icon");
    let header_text_element = document.getElementById("header-text");

    if (app_id == null) {
        header_app_icon.innerHTML = "";
        header_app_icon.classList.remove("show");

        header_text_element.innerText = "";
        header_text_element.classList.remove("show");
        return;
    }

    header_app_icon.innerHTML = applist[app_id].svg;
    header_app_icon.classList.add("show");

    header_text_element.innerText = `Share on ${applist[app_id].name}`;
    header_text_element.classList.add("show");
}
