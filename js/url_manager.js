export default class url_manager {
    constructor() {
        this.update_params = () => {
            this.params = new URLSearchParams(window.location.search);
        };

        this.update_params();
    }

    set_params(obj, strict = true, replaceState = false) {
        let new_params = "",
            entries;

        if (strict) {
            entries = Object.entries(obj);
        } else {
            let new_obj = this.get_params();
            for (let [key, value] of Object.entries(obj)) {
                new_obj[key] = value;
            }
            entries = Object.entries(new_obj);
        }

        if (entries.length != 0) {
            new_params = "?";
            for (let index = 0; index < entries.length; index++) {
                new_params +=
                    `${entries[index][0]}=${entries[index][1]}` +
                    (index == entries.length - 1 ? "" : "&");
            }
        }

        if (replaceState)
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
