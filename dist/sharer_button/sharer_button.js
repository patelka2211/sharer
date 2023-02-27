import cdn from "../cdn";
function loadSharerButton() {
    let sharer_button = document.createElement("img");
    sharer_button.src = cdn.getPath(["assets", "sharerIcon.svg"]);
    sharer_button.id = "sharer-btn-default";
    document.body.appendChild(sharer_button);
}
window.addEventListener("load", loadSharerButton);
