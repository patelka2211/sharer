import cdn from "../cdn";
import j2h from "../j2h";
const getCDNsvgs = (filename) => {
    return j2h.element("img", {
        src: cdn.getPath(["assets", filename]),
    });
    // return `<img src="${cdn.getPath(["assets", filename])}"/>`;
};
const svgs = {
    sharerIcon: getCDNsvgs("sharerIcon.svg"),
    closeIcon: getCDNsvgs("closeIcon.svg"),
    arrowRightIcon: getCDNsvgs("arrowRightIcon.svg"),
    arrowLeftIcon: getCDNsvgs("arrowLeftIcon.svg"),
    wa: getCDNsvgs("waIcon.svg"),
    fb: getCDNsvgs("fbIcon.svg"),
    tw: getCDNsvgs("twIcon.svg"),
    eml: getCDNsvgs("emlIcon.svg"),
    lnkdn: getCDNsvgs("lnkdnIcon.svg"),
    pntrst: getCDNsvgs("pntrstIcon.svg"),
    rdt: getCDNsvgs("rdtIcon.svg"),
    snpcht: getCDNsvgs("snpchtIcon.svg"),
    koo: getCDNsvgs("kooIcon.svg"),
    tg: getCDNsvgs("tgIcon.svg"),
};
export default svgs;
