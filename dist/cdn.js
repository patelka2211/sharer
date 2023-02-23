const cdn = {
    // url: "http://192.168.1.7:5500/",
    url: "http://localhost:5500/",
    getPath(path) {
        if (typeof path === "string")
            return this.url + path;
        return this.url + path.join("/");
    },
};
export default cdn;
