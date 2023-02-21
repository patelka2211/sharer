const cdn = {
    url: "http://192.168.1.6:5500/",
    // url: "http://localhost:5500/",
    getPath: (path: string | string[]) => {
        if (typeof path === "string") return cdn.url + path;
        return cdn.url + path.join("/");
    },
};

export default cdn;
