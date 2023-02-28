import cdn from "../cdn";

function loadSharerButton() {
    let sharer_button = document.createElement("img");
    sharer_button.src = cdn.getPath(["assets", "sharerIcon.svg"]);
    sharer_button.id = "sharer-btn-default";
    sharer_button.setAttribute(
        "onclick",
        `try {
            sharer.open();
        } catch { 
            alert('It appears that the Sharer module has not been fully loaded at this time.');
        }`.replace("\n", "")
    );
    document.body.appendChild(sharer_button);
}

window.addEventListener("load", loadSharerButton);
