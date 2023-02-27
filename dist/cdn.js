import { getCDN_URL } from "./getLatestSHA";
const cdn = {
    // url: "http://localhost:5500/", // For development purpose only.
    url: getCDN_URL(),
    getPath(path) {
        if (typeof path === "string")
            return this.url + path;
        return this.url + path.join("/");
    },
};
export default cdn;
