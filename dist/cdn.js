const cdn = {
    url: "https://cdn.jsdelivr.net/gh/patelka2211/sharer/",
    // url: "http://localhost:5500/", // For development purpose only.
    getPath(path) {
        if (typeof path === "string")
            return this.url + path;
        return this.url + path.join("/");
    },
};
export default cdn;
