const cdn = {
    url: "https://patelka2211.github.io/sharer/",
    // url: "http://localhost:5500/", // For development purpose only.
    getPath(path) {
        if (typeof path === "string")
            return this.url + path;
        return this.url + path.join("/");
    },
};
export default cdn;
