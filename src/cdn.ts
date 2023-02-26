const cdn = {
    // url: "http://localhost:5500/", // For development purpose only.
    url: (() => {
        let timeId = () => {
            let time = new Date();
            return `${time.getHours()}-${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`;
        };
        let current_deployment_sha = localStorage.getItem(
            "sharer_deployment_sha"
        );

        if (current_deployment_sha === null)
            return "https://cdn.jsdelivr.net/gh/patelka2211/sharer/";

        try {
            let current_deployment_sha_object = JSON.parse(
                current_deployment_sha
            );

            if (current_deployment_sha_object.lastUpdate === timeId()) {
                return `https://cdn.jsdelivr.net/gh/patelka2211/sharer@${current_deployment_sha_object.sha}/`;
            } else {
                return "https://cdn.jsdelivr.net/gh/patelka2211/sharer/";
            }
        } catch (error) {
            return "https://cdn.jsdelivr.net/gh/patelka2211/sharer/";
        }
    })(),
    getPath(path: string | string[]) {
        if (typeof path === "string") return this.url + path;
        return this.url + path.join("/");
    },
};

export default cdn;
