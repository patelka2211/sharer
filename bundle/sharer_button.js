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
* Last updated at : 2023-02-27T18:11:40.545Z
*/
'use strict';

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let timeId = () => {
    let time = new Date();
    return `${time.getHours()}-${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`;
};
function fetchLatestSHA() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch("https://api.github.com/repos/patelka2211/sharer/deployments?per_page=1");
        if (!response.ok) {
            return null;
        }
        let json = yield response.json(), sha = json[0].sha;
        return sha;
    });
}
function fetchAndStore() {
    fetchLatestSHA().then((sha) => {
        if (sha === null) {
            return;
        }
        localStorage.setItem("sharer_deployment_sha", JSON.stringify({
            sha: sha,
            lastUpdate: timeId(),
        }));
    });
}
function getSHA() {
    let current_sha = localStorage.getItem("sharer_deployment_sha");
    if (current_sha === null) {
        fetchAndStore();
        return "master";
    }
    else {
        try {
            let current_sha_obj = JSON.parse(current_sha);
            if (current_sha_obj.lastUpdate !== timeId())
                fetchAndStore();
            return current_sha_obj.sha;
        }
        catch (error) {
            fetchAndStore();
            return "master";
        }
    }
}
function getCDN_URL() {
    return `https://cdn\.jsdelivr\.net/gh/patelka2211/sharer@${getSHA()}/`;
}

const cdn = {
    // url: "http://localhost:5500/", // For development purpose only.
    url: getCDN_URL(),
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
    document.body.appendChild(sharer_button);
}
window.addEventListener("load", loadSharerButton);
