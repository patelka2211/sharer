import { static_id_elements } from "../getElement.js";

function toggle_visibility() {
    [
        static_id_elements.sharer_header_title,
        static_id_elements.open_app_title,
        static_id_elements.show_qr,
        static_id_elements.close_btn,
        static_id_elements.home_btn,
        //
        static_id_elements.applist,
        static_id_elements.feedback_frame,
        //
        static_id_elements.default_btns,
        static_id_elements.close_feedback_btn,
    ].forEach((element) => {
        element().classList.toggle("hide");
    });
}

export function open_feedback() {
    static_id_elements.home_btn().onclick = () => {
        close_feedback();
    };
    static_id_elements.feedback_done().onclick = () => {
        close_feedback();
    };

    static_id_elements.open_app_title().innerText = "Sharer Feedback";

    static_id_elements.feedback_frame().innerHTML =
        '<iframe src="https://patelka2211.github.io/sharer/redirect?action=feedback" frameborder="0"></iframe>';

    toggle_visibility();
}

export function close_feedback() {
    static_id_elements.open_app_title().innerText = "";
    // static_id_elements.feedback_frame().innerHTML = '<iframe src="https://patelka2211.github.io/sharer/redirect?action=feedback" frameborder="0"></iframe>';
    toggle_visibility();
}
