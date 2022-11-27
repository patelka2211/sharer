import j2h from "./json2html.js";

async function open_sharer() {
    let j2h_obj = new j2h();
    j2h_obj.append(
        j2h_obj.div(
            { id: "sharer-by-KP" },
            j2h_obj.div(
                { id: "sharer-window" },
                j2h_obj.div({ id: "sharer-header" }, [
                    j2h_obj.div({ class: "sharer-header-subpart" }, [
                        j2h_obj.div({ class: "icon-n-title" }, [
                            j2h_obj.div({ id: "header-icon" }),
                            j2h_obj.div({ id: "header-title" }, "Sharer by KP"),
                        ]),
                        j2h_obj.div({ id: "sharer-close-btn" }),
                    ]),
                    j2h_obj.div(
                        { class: "sharer-header-subpart" },
                        j2h_obj.div({ class: "search-bar" }, [
                            j2h_obj.div(
                                { class: "search-bar-icon" },
                                `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_199_2)">
                                        <path
                                            d="M12.9167 11.6667H12.2584L12.025 11.4417C13.025 10.275 13.5417 8.68334 13.2584 6.99167C12.8667 4.675 10.9334 2.825 8.60003 2.54167C5.07503 2.10834 2.10837 5.075 2.5417 8.6C2.82503 10.9333 4.67503 12.8667 6.9917 13.2583C8.68337 13.5417 10.275 13.025 11.4417 12.025L11.6667 12.2583V12.9167L15.2084 16.4583C15.55 16.8 16.1084 16.8 16.45 16.4583C16.7917 16.1167 16.7917 15.5583 16.45 15.2167L12.9167 11.6667ZM7.9167 11.6667C5.8417 11.6667 4.1667 9.99167 4.1667 7.91667C4.1667 5.84167 5.8417 4.16667 7.9167 4.16667C9.9917 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.9917 11.6667 7.9167 11.6667Z"
                                            fill="#7F7F84" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_199_2">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>`
                            ),
                            j2h_obj.input({
                                id: "search-bar-input",
                                placeholder: "Search Apps",
                            }),
                            j2h_obj.div(
                                { id: "search-bar-clear" },
                                `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_200_5)">
                                        <path
                                            d="M9.99996 1.66666C5.39163 1.66666 1.66663 5.39166 1.66663 9.99999C1.66663 14.6083 5.39163 18.3333 9.99996 18.3333C14.6083 18.3333 18.3333 14.6083 18.3333 9.99999C18.3333 5.39166 14.6083 1.66666 9.99996 1.66666ZM13.5833 13.5833C13.2583 13.9083 12.7333 13.9083 12.4083 13.5833L9.99996 11.175L7.59163 13.5833C7.26663 13.9083 6.74163 13.9083 6.41663 13.5833C6.09163 13.2583 6.09163 12.7333 6.41663 12.4083L8.82496 9.99999L6.41663 7.59166C6.09163 7.26666 6.09163 6.74166 6.41663 6.41666C6.74163 6.09166 7.26663 6.09166 7.59163 6.41666L9.99996 8.82499L12.4083 6.41666C12.7333 6.09166 13.2583 6.09166 13.5833 6.41666C13.9083 6.74166 13.9083 7.26666 13.5833 7.59166L11.175 9.99999L13.5833 12.4083C13.9 12.725 13.9 13.2583 13.5833 13.5833Z"
                                            fill="#7F7F84" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_200_5">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>`
                            ),
                        ])
                    ),
                ])
            )
        )
    );

    document.body.innerHTML = j2h_obj.render();
}

open_sharer()
    .then(() => {
        // document.getElementById("header-icon-container").onclick = () => {
        //     document
        //         .getElementById("temp-header-icon")
        //         .classList.toggle("show");
        // };
    })
    .catch((error) => {
        console.log(error.message);
    });
