import cdn from "../cdn";

function loadSharerButton() {
    document.head.appendChild(
        ((element) => {
            element.id = "sharer_button_css_file";
            element.rel = "stylesheet";
            element.href = cdn.getPath(["bundle", "sharer_button.css"]);
            return element;
        })(document.createElement("link") as HTMLLinkElement)
    );

    let sharer_button = document.createElement("img");
    sharer_button.src = cdn.getPath(["assets", "sharerIcon.svg"]);
    sharer_button.id = "sharer-btn-default";
    sharer_button.classList.add("hide");
    sharer_button.setAttribute(
        "onclick",
        `try {
            sharer.open();
        } catch { 
            alert('It appears that the Sharer module has not been fully loaded at this time.');
        }`.replace("\n", "")
    );
    document.body.appendChild(sharer_button);
    setTimeout(() => {
        sharer_button.classList.remove("hide");
    }, 400);
}

window.addEventListener("load", loadSharerButton);
