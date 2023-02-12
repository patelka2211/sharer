/**
 * Copyright (c) 2023 Kartavya Patel
 * Repository url: https://github.com/patelka2211/json2html
 */
type BooleanAttributeName = string;
type PairedAttribute = {
    [_: string]: string | number;
};
type CompositeAttribute = [
    PairedAttribute,
    BooleanAttributeName | BooleanAttributeName[]
];
type Attributes =
    | BooleanAttributeName
    | BooleanAttributeName[]
    | CompositeAttribute
    | PairedAttribute;
type ValidValue = string | ValidPair | ValidPair[];
type ValidPair = {
    [_: string]: [Attributes, ValidValue];
};

interface elements {
    a: "a";
    abbr: "abbr";
    address: "address";
    area: "area";
    article: "article";
    aside: "aside";
    audio: "audio";
    b: "b";
    base: "base";
    bdi: "bdi";
    bdo: "bdo";
    blockquote: "blockquote";
    body: "body";
    br: "br";
    button: "button";
    canvas: "canvas";
    caption: "caption";
    cite: "cite";
    code: "code";
    col: "col";
    colgroup: "colgroup";
    data: "data";
    datalist: "datalist";
    dd: "dd";
    del: "del";
    details: "details";
    dfn: "dfn";
    dialog: "dialog";
    div: "div";
    dl: "dl";
    dt: "dt";
    em: "em";
    embed: "embed";
    fieldset: "fieldset";
    figcaption: "figcaption";
    figure: "figure";
    footer: "footer";
    form: "form";
    h1: "h1";
    h2: "h2";
    h3: "h3";
    h4: "h4";
    h5: "h5";
    h6: "h6";
    head: "head";
    header: "header";
    hgroup: "hgroup";
    hr: "hr";
    html: "html";
    i: "i";
    iframe: "iframe";
    img: "img";
    input: "input";
    ins: "ins";
    kbd: "kbd";
    label: "label";
    legend: "legend";
    li: "li";
    link: "link";
    main: "main";
    map: "map";
    mark: "mark";
    menu: "menu";
    meta: "meta";
    meter: "meter";
    nav: "nav";
    noscript: "noscript";
    object: "object";
    ol: "ol";
    optgroup: "optgroup";
    option: "option";
    output: "output";
    p: "p";
    picture: "picture";
    pre: "pre";
    progress: "progress";
    q: "q";
    rp: "rp";
    rt: "rt";
    ruby: "ruby";
    s: "s";
    samp: "samp";
    script: "script";
    section: "section";
    select: "select";
    slot: "slot";
    small: "small";
    source: "source";
    span: "span";
    strong: "strong";
    style: "style";
    sub: "sub";
    summary: "summary";
    sup: "sup";
    table: "table";
    tbody: "tbody";
    td: "td";
    template: "template";
    textarea: "textarea";
    tfoot: "tfoot";
    th: "th";
    thead: "thead";
    time: "time";
    title: "title";
    tr: "tr";
    track: "track";
    u: "u";
    ul: "ul";
    var: "var";
    video: "video";
    wbr: "wbr";
}

class json2html {
    list: ValidPair[] = [];
    constructor(readonly root: HTMLElement) {}

    append(input: ValidPair): this {
        this.list.push(input);
        return this;
    }
    render(
        input: ValidPair[] = this.list,
        root: HTMLElement = this.root,
        clearRoot: boolean = true
    ): void {
        if (clearRoot) root.innerHTML = "";
        input.forEach((item) => {
            for (const key in item) {
                if (Object.prototype.hasOwnProperty.call(item, key)) {
                    const element = document.createElement(key);
                    const value = item[key];

                    j2h.setAttribute(element, value[0]);

                    if (typeof value[1] == "string") {
                        element.innerText = value[1];
                    } else if (
                        typeof (value[1] as ValidPair | ValidPair[]) == "object"
                    ) {
                        if ((value[1] as ValidPair).length === undefined) {
                            this.render(
                                [value[1] as ValidPair],
                                element,
                                false
                            );
                        } else if (
                            (value[1] as ValidPair[]).length !== undefined
                        ) {
                            this.render(
                                value[1] as ValidPair[],
                                element,
                                false
                            );
                        }
                    }

                    root.appendChild(element);
                }
            }
        });
    }
}

const j2h = {
    setRoot: (root: HTMLElement) => {
        return new json2html(root);
    },

    element: <Tag extends keyof elements>(
        tagName: Tag,
        attributes: Attributes = {},
        innerHTML: ValidValue = ""
    ): ValidPair => {
        return {
            [tagName]: [attributes, innerHTML],
        };
    },

    setAttribute: (
        element: HTMLElement | json2html,
        attributes: Attributes
    ): HTMLElement => {
        if (element instanceof json2html) {
            element = element.root;
        }

        if (typeof attributes === "string") {
            element.setAttribute(attributes as string, "");
        } else if (
            typeof attributes === "object" &&
            attributes.length !== undefined &&
            typeof (attributes as string[])[0] === "string"
        ) {
            for (
                let index = 0;
                index < (attributes as string[]).length;
                index++
            ) {
                const item = (attributes as string[])[index];
                element.setAttribute(item, "");
            }
        } else if ((attributes as PairedAttribute).length === undefined) {
            for (const key in attributes as
                | CompositeAttribute
                | PairedAttribute) {
                element.setAttribute(
                    key,
                    (attributes as PairedAttribute)[key].toString()
                );
            }
        } else {
            (attributes as CompositeAttribute).map((item) => {
                if ((item as PairedAttribute).length === undefined) {
                    let pairedAttribute: PairedAttribute =
                        item as PairedAttribute;
                    for (const key in pairedAttribute) {
                        (element as HTMLElement).setAttribute(
                            key,
                            pairedAttribute[key].toString()
                        );
                    }
                } else if (typeof item === "object") {
                    (item as BooleanAttributeName[]).map((item) => {
                        (element as HTMLElement).setAttribute(item, "");
                    });
                } else {
                    (element as HTMLElement).setAttribute(item, "");
                }
            });
        }

        return element;
    },
};

export default j2h;
