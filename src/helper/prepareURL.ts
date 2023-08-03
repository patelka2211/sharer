import { share_text, share_url } from "../variables/main";

export function prepareURL(urlFormat: string) {
    if (share_text !== undefined && share_url !== undefined) {
        urlFormat = urlFormat.replace(`{%text%}`, share_text);
        urlFormat = urlFormat.replace(`{%url%}`, share_url.toString());
    }

    return urlFormat;
}
