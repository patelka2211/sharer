import json2html from "../json2html.js";
import { get_applist_html } from "./applist.js";
import { closeButton } from "../assets/closeButton.js";
import { get_sharer_content } from "./sharerContent.js";
import { get_sharer_footer } from "./sharerFooter.js";
import { get_sharer_header } from "./sharerHeader.js";

let homepage_html = new json2html();

homepage_html
    .add(get_sharer_header(closeButton))
    .add(get_sharer_content(get_applist_html()))
    .add(get_sharer_footer());

export default homepage_html.list;
