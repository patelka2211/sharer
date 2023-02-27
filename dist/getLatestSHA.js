var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
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
        try {
            ((element) => {
                let new_sharer_btn_script = document.createElement("script");
                new_sharer_btn_script.src = element.getAttribute("src");
                new_sharer_btn_script.id = element.id;
                element.remove();
                document.head.appendChild(new_sharer_btn_script);
            })(document.getElementById("sharer_button_file"));
        }
        catch (error) { }
        // try {
        //     ((element) => {
        //         let new_sharer_iife_script = document.createElement("script");
        //         new_sharer_iife_script.src = element.getAttribute(
        //             "src"
        //         ) as string;
        //         new_sharer_iife_script.id = element.id;
        //         element.remove();
        //         document.head.appendChild(new_sharer_iife_script);
        //     })(
        //         document.getElementById("sharer_iife_file") as HTMLScriptElement
        //     );
        // } catch (error) {}
        try {
            ((element) => {
                let new_sharer_css_file = document.createElement("link");
                new_sharer_css_file.rel = element.getAttribute("rel");
                new_sharer_css_file.id = element.id;
                new_sharer_css_file.href = element.href;
                element.remove();
                document.head.appendChild(new_sharer_css_file);
            })(document.getElementById("sharer_css_file"));
        }
        catch (error) { }
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
export function getCDN_URL() {
    return `https://cdn\.jsdelivr\.net/gh/patelka2211/sharer@${getSHA()}/`;
}
