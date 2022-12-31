class url_manager {
    constructor() {
        this.update_params = () => {
            this.params = new URLSearchParams(window.location.search);
        };

        this.update_params();
    }

    set_params(obj, strict = false) {
        let new_obj = this.get_params(),
            new_params = "?";

        for (let [key, value] of Object.entries(obj)) {
            new_obj[key] = value;
        }

        let entries = Object.entries(new_obj);

        for (let index = 0; index < entries.length; index++) {
            new_params +=
                `${entries[index][0]}=${entries[index][1]}` +
                (index == entries.length - 1 ? "" : "&");
        }

        if (strict)
            history.replaceState(
                {},
                null,
                `${window.location.pathname}${new_params}`
            );
        else
            history.pushState(
                {},
                null,
                `${window.location.pathname}${new_params}`
            );
        this.update_params();
    }

    clear(replaceState = true) {
        if (replaceState)
            history.replaceState({}, null, window.location.pathname);
        else history.pushState({}, null, window.location.pathname);

        this.update_params();
    }

    is_empty() {
        this.update_params();
        let empty_or_not = true;

        for (const item of this.params.keys()) {
            empty_or_not = false;
            break;
        }
        return empty_or_not;
    }

    get_params() {
        this.update_params();
        if (this.is_empty()) {
            return {};
        }

        let temp = Object();
        for (const [key, value] of this.params.entries()) {
            temp[key] = value;
        }
        return temp;
    }
}

const url_manager_obj = new url_manager();

const redirection_map = {
    feedback: "https://forms.gle/XMQeQNmAtscbkwat5",
    developer: "https://github.com/patelka2211",
};

const url_params = url_manager_obj.get_params();

if (url_params.hasOwnProperty("action") && url_params.action != "") {
    if (url_params.action == "feedback" || "developer") {
        console.log("ready");
        window.location.href = redirection_map[url_params.action];
    } else {
        window.location.href = redirection_map.developer;
    }
} else {
    window.location.href = redirection_map.developer;
}
