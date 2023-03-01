/**
* "Sharer by KP"
* - Sharer is a user-friendly JavaScript library that seamlessly enhances website sharing across various applications and social media platforms. Boost engagement and increase website reach with Sharer - the top-rated JavaScript library for seamless URL sharing!
*
* @author Kartavya Patel <patelka2211@gmail.com>
*
* @license {@link https://github.com/patelka2211/sharer/blob/main/LICENSE MIT}
*
* @copyright Kartavya Patel 2023
*
* Includes {@link https://github.com/patelka2211/json2html JSON2HTML} and {@link https://github.com/datalog/qrcode-svg qrcode-svg}.
*
* Last updated at : 2023-03-01T06:25:12.809Z
*/
(function () {
    'use strict';

    const cdn = {
        url: "https://patelka2211.github.io/sharer/",
        // url: "http://localhost:5500/", // For development purpose only.
        getPath(path) {
            if (typeof path === "string")
                return this.url + path;
            return this.url + path.join("/");
        },
    };

    function loadSharerButton() {
        let sharer_button = document.createElement("img");
        sharer_button.src = cdn.getPath(["assets", "sharerIcon.svg"]);
        sharer_button.id = "sharer-btn-default";
        sharer_button.classList.add("hide");
        sharer_button.setAttribute("onclick", `try {
            sharer.open();
        } catch { 
            alert('It appears that the Sharer module has not been fully loaded at this time.');
        }`.replace("\n", ""));
        document.body.appendChild(sharer_button);
        setTimeout(() => {
            sharer_button.classList.remove("hide");
        }, 400);
    }
    window.addEventListener("load", loadSharerButton);

})();
