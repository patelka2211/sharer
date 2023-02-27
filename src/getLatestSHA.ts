let timeId = () => {
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

function fetchAndStore() {
    fetchLatestSHA().then((sha) => {
        if (sha === null) {
            return;
        }

        localStorage.setItem(
            "sharer_deployment_sha",
            JSON.stringify({
                sha: sha,
                lastUpdate: timeId(),
            })
        );
    });
}

function getSHA(): string {
    let current_sha = localStorage.getItem("sharer_deployment_sha");

    if (current_sha === null) {
        fetchAndStore();
        return "master";
    } else {
        try {
            let current_sha_obj = JSON.parse(current_sha);
            if (current_sha_obj.lastUpdate !== timeId()) fetchAndStore();
            return current_sha_obj.sha;
        } catch (error) {
            fetchAndStore();
            return "master";
        }
    }
}

export function getCDN_URL() {
    return `https://cdn\.jsdelivr\.net/gh/patelka2211/sharer@${getSHA()}/`;
}
