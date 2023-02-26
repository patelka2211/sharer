window.addEventListener("load", () => {
    let current_sha = localStorage.getItem("sharer_deployment_sha"),
        timeId = () => {
            let time = new Date();
            return `${time.getHours()}-${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`;
        };

    async function fetchLatestSHA() {
        let response = await fetch(
            "https://api.github.com/repos/patelka2211/sharer/deployments?per_page=1"
        );

        if (!response.ok) {
            return null;
        }

        let json = await response.json(),
            sha = json[0].sha;

        return sha;
    }

    function importSharerScript(sha = "master") {
        let sharer_script = document.createElement("script");

        sharer_script.src = `https://cdn.jsdelivr.net/gh/patelka2211/sharer@${sha}/bundle/sharer.iife.min.js`;

        document.head.appendChild(sharer_script);

        try {
            document.getElementById("sharer_latest_file_importer").remove();
        } catch (error) {}
    }

    function fetchAndStore() {
        fetchLatestSHA().then((sha) => {
            if (sha === null) {
                importSharerScript();
                return;
            }

            localStorage.setItem(
                "sharer_deployment_sha",
                JSON.stringify({
                    sha: sha,
                    lastUpdate: timeId(),
                })
            );

            importSharerScript(sha);
        });
    }

    if (current_sha === null) {
        fetchAndStore();
    } else {
        try {
            current_sha = JSON.parse(current_sha);

            if (current_sha.lastUpdate === timeId()) {
                importSharerScript(current_sha.sha);
            } else {
                fetchAndStore();
            }
        } catch (error) {
            fetchAndStore();
        }
    }
});
