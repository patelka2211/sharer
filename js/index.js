import json2html from "https://patelka2211.github.io/json2html/source/json2html.min.js";

let j2h = new json2html();

console.log(
    j2h.convert({
        div: [
            {
                id: "div-tag",
                class: "sample",
            },
            {
                img: [
                    {
                        class: "logo",
                        src: "https://google.com",
                    },
                ],
                a: [
                    {
                        id: "link",
                    },
                    "Hello world",
                ],
            },
        ],
    })
);
