import { VERSION } from "../metadata";

export const cdn = {
    url: `https://cdn.jsdelivr.net/gh/patelka2211/sharer@${VERSION}/`,
    get: (paths: string[], fileName?: string) => {
        let url = cdn.url + paths.join("/") + "/";
        if (fileName === undefined) return url;
        return url + fileName;
    },
};
