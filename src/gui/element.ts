const elements = {
    sharer_by_KP: () => document.getElementById("sharer-by-KP") as HTMLElement,

    sharer_container: () =>
        document.getElementById("sharer-container") as HTMLElement,

    sharer_footer: () =>
        document.getElementById("sharer-footer") as HTMLElement,

    sharer_footer_text: () =>
        document.getElementById("sharer-footer-text") as HTMLElement,

    sharer_window: () =>
        document.getElementById("sharer-window") as HTMLElement,

    sharer_content: () =>
        document.getElementById("sharer-content") as HTMLElement,

    header_close_icon: () =>
        document.getElementById("header-close-icon") as HTMLElement,

    header_icon_container: () =>
        document.getElementById("header-icon-container") as HTMLElement,

    header_title: () => document.getElementById("header-title") as HTMLElement,
    credits_container: () =>
        document.getElementById("credits-container") as HTMLElement,
};

export default elements;
