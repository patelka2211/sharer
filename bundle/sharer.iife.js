/**
* "Sharer by KP"
* - Sharer is a JavaScript library that offers sharing capability with smooth transitions to share a website's URL to other applications.
*
* @author Kartavya Patel <patelka2211@gmail.com>
*
* @license {@link https://github.com/patelka2211/sharer/blob/main/LICENSE MIT}
*
* @copyright Kartavya Patel 2023
*
* Includes {@link https://github.com/patelka2211/json2html JSON2HTML} and {@link https://github.com/datalog/qrcode-svg qrcode-svg}.
*
* Last updated at : 2023-02-26T17:33:34.405Z
*/
var sharer = (function () {
    'use strict';

    const cdn = {
        // url: "http://localhost:5500/", // For development purpose only.
        url: (() => {
            let timeId = () => {
                let time = new Date();
                return `${time.getHours()}-${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`;
            };
            let current_deployment_sha = localStorage.getItem("sharer_deployment_sha");
            if (current_deployment_sha === null)
                return "https://cdn.jsdelivr.net/gh/patelka2211/sharer/";
            try {
                let current_deployment_sha_object = JSON.parse(current_deployment_sha);
                if (current_deployment_sha_object.lastUpdate === timeId()) {
                    return `https://cdn.jsdelivr.net/gh/patelka2211/sharer@${current_deployment_sha_object.sha}/`;
                }
                else {
                    return "https://cdn.jsdelivr.net/gh/patelka2211/sharer/";
                }
            }
            catch (error) {
                return "https://cdn.jsdelivr.net/gh/patelka2211/sharer/";
            }
        })(),
        getPath(path) {
            if (typeof path === "string")
                return this.url + path;
            return this.url + path.join("/");
        },
    };

    class json2html {
        constructor(root) {
            this.root = root;
            this.list = [];
        }
        append(input) {
            this.list.push(input);
            return this;
        }
        render(input = this.list, root = this.root, clearRoot = true) {
            if (clearRoot)
                root.innerHTML = "";
            input.forEach((item) => {
                for (const key in item) {
                    if (Object.prototype.hasOwnProperty.call(item, key)) {
                        const element = document.createElement(key);
                        const value = item[key];
                        j2h.setAttribute(element, value[0]);
                        if (typeof value[1] == "string") {
                            element.innerHTML = value[1];
                        }
                        else if (typeof value[1] == "object") {
                            if (value[1].length === undefined) {
                                this.render([value[1]], element, false);
                            }
                            else if (value[1].length !== undefined) {
                                this.render(value[1], element, false);
                            }
                        }
                        root.appendChild(element);
                    }
                }
            });
        }
    }
    const j2h = {
        setRoot: (root) => {
            return new json2html(root);
        },
        element: (tagName, attributes = {}, innerHTML = "") => {
            return {
                [tagName]: [attributes, innerHTML],
            };
        },
        setAttribute: (element, attributes) => {
            if (element instanceof json2html) {
                element = element.root;
            }
            if (typeof attributes === "string") {
                element.setAttribute(attributes, "");
            }
            else if (typeof attributes === "object" &&
                attributes.length !== undefined &&
                typeof attributes[0] === "string") {
                for (let index = 0; index < attributes.length; index++) {
                    const item = attributes[index];
                    element.setAttribute(item, "");
                }
            }
            else if (attributes.length === undefined) {
                for (const key in attributes) {
                    element.setAttribute(key, attributes[key].toString());
                }
            }
            else {
                attributes.map((item) => {
                    if (item.length === undefined) {
                        let pairedAttribute = item;
                        for (const key in pairedAttribute) {
                            element.setAttribute(key, pairedAttribute[key].toString());
                        }
                    }
                    else if (typeof item === "object") {
                        item.map((item) => {
                            element.setAttribute(item, "");
                        });
                    }
                    else {
                        element.setAttribute(item, "");
                    }
                });
            }
            return element;
        },
    };

    const elements = {
        sharer_by_KP: () => document.getElementById("sharer-by-KP"),
        sharer_container: () => document.getElementById("sharer-container"),
        sharer_footer: () => document.getElementById("sharer-footer"),
        sharer_footer_text: () => document.getElementById("sharer-footer-text"),
        sharer_window: () => document.getElementById("sharer-window"),
        sharer_content: () => document.getElementById("sharer-content"),
        header_close_icon: () => document.getElementById("header-close-icon"),
        header_icon_container: () => document.getElementById("header-icon-container"),
        header_title: () => document.getElementById("header-title"),
        credits_container: () => document.getElementById("credits-container"),
    };

    function openWebsite(url = "https://patelka2211.github.io/sharer/") {
        window.open(url, "_blank");
    }

    function setFooterInterface(inputText = "Powered by Sharer", fontColor = "#5900ff", bgColor = "#5900ff14", actionPerform = () => openWebsite()) {
        ((element) => {
            element.innerText = inputText;
            element.style.color = fontColor;
        })(elements.sharer_footer_text());
        ((element) => {
            element.style.backgroundColor = bgColor;
            element.onclick = actionPerform;
        })(elements.sharer_footer());
    }

    function getCDNsvgs(filename) {
        return j2h.element("img", {
            src: cdn.getPath(["assets", filename]),
        });
    }
    const svgs = {
        local: {
            sharerIcon: `<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="512" height="512" rx="116" fill="white" /> <g clip-path="url(#clip0_270_65)"> <path d="M255.086 77.7143C207.881 77.9564 162.699 96.9092 129.449 130.416C96.1985 163.924 77.5938 209.25 77.7148 256.455C77.8359 303.66 96.6728 348.89 130.095 382.226C163.516 415.562 208.795 434.283 256 434.283C303.205 434.283 348.483 415.562 381.905 382.226C415.327 348.89 434.164 303.66 434.285 256.455C434.406 209.25 415.801 163.924 382.551 130.416C349.301 96.9092 304.119 77.9564 256.914 77.7143H255.086Z" stroke="#E8DBFF" stroke-width="26" /> <path d="M256 77.7143V434.286M434.286 256H77.7142M117.943 146.286C158.238 175.033 206.502 190.484 256 190.484C305.498 190.484 353.762 175.033 394.057 146.286M394.057 365.714C353.762 336.967 305.498 321.516 256 321.516C206.502 321.516 158.238 336.967 117.943 365.714M242.286 82.2857C216.879 103.742 196.461 130.484 182.455 160.645C168.448 190.806 161.192 223.66 161.192 256.914C161.192 290.169 168.448 323.023 182.455 353.184C196.461 383.345 216.879 410.087 242.286 431.543M269.714 431.543C295.121 410.087 315.539 383.345 329.545 353.184C343.551 323.023 350.808 290.169 350.808 256.914C350.808 223.66 343.551 190.806 329.545 160.645C315.539 130.484 295.121 103.742 269.714 82.2857" stroke="#E8DBFF" stroke-width="18" /> </g> <g filter="url(#filter0_dii_270_65)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M277.709 221.623C277.709 227.787 282.702 232.785 288.865 232.793H295.891C305.265 232.793 309.952 232.793 313.52 234.647C316.526 236.208 318.978 238.66 320.539 241.666C322.393 245.234 322.393 249.921 322.393 259.295V329.917C322.393 339.291 322.393 343.978 320.539 347.546C318.978 350.552 316.526 353.003 313.52 354.565C309.952 356.418 305.265 356.418 295.891 356.418H214.843C205.469 356.418 200.782 356.418 197.214 354.565C194.208 353.003 191.757 350.552 190.195 347.546C188.342 343.978 188.342 339.291 188.342 329.917V259.295C188.342 249.921 188.342 245.234 190.195 241.666C191.757 238.66 194.208 236.208 197.214 234.647C200.782 232.793 205.469 232.793 214.843 232.793H221.877C228.036 232.781 233.025 227.784 233.025 221.623C233.025 215.461 228.037 210.465 221.879 210.452H214.3C197.215 210.452 188.673 210.452 182.171 213.829C176.691 216.676 172.224 221.143 169.378 226.622C166 233.125 166 241.667 166 258.752V330.46C166 347.545 166 356.087 169.378 362.589C172.224 368.069 176.691 372.536 182.171 375.382C188.673 378.76 197.215 378.76 214.3 378.76H297.179C314.264 378.76 322.806 378.76 329.309 375.382C334.788 372.536 339.255 368.069 342.102 362.589C345.479 356.087 345.479 347.545 345.479 330.46V258.752C345.479 241.667 345.479 233.125 342.102 226.622C339.255 221.143 334.788 216.676 329.309 213.829C322.806 210.452 314.264 210.452 297.179 210.452H288.855C282.697 210.465 277.709 215.461 277.709 221.623Z" fill="#5900FF" /> <rect x="244.569" y="137.468" width="22.3418" height="165.329" rx="11.1709" fill="#5900FF" /> <path d="M247.833 140.783C250.634 138.026 252.035 136.647 253.649 136.142C255.01 135.716 256.469 135.716 257.83 136.142C259.445 136.647 260.845 138.026 263.646 140.783L280.957 157.824C287.163 163.933 290.266 166.988 290.456 169.62C290.615 171.804 289.741 173.937 288.096 175.383C286.114 177.125 281.759 177.125 273.05 177.125H238.429C229.72 177.125 225.366 177.125 223.383 175.383C221.738 173.937 220.865 171.804 221.023 169.62C221.213 166.988 224.316 163.933 230.523 157.824L247.833 140.783Z" fill="#5900FF" /> </g> <defs> <filter id="filter0_dii_270_65" x="150" y="125.823" width="211.479" height="274.937" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix" /> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /> <feOffset dy="6" /> <feGaussianBlur stdDeviation="8" /> <feComposite in2="hardAlpha" operator="out" /> <feColorMatrix type="matrix" values="0 0 0 0 0.34902 0 0 0 0 0 0 0 0 0 1 0 0 0 0.32 0" /> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_270_65" /> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_270_65" result="shape" /> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /> <feOffset dx="10" dy="10" /> <feGaussianBlur stdDeviation="8" /> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" /> <feColorMatrix type="matrix" values="0 0 0 0 0.909804 0 0 0 0 0.858824 0 0 0 0 1 0 0 0 0.32 0" /> <feBlend mode="normal" in2="shape" result="effect2_innerShadow_270_65" /> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /> <feOffset dx="-10" dy="-10" /> <feGaussianBlur stdDeviation="8" /> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" /> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" /> <feBlend mode="normal" in2="effect2_innerShadow_270_65" result="effect3_innerShadow_270_65" /> </filter> <clipPath id="clip0_270_65"> <rect width="384" height="384" fill="white" transform="translate(64 64)" /> </clipPath> </defs> </svg>`,
            closeIcon: `<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.6894 8.3212C21.2753 7.90709 20.6064 7.90709 20.1923 8.3212L15 13.5028L9.80774 8.31058C9.39363 7.89647 8.72469 7.89647 8.31058 8.31058C7.89647 8.72469 7.89647 9.39363 8.31058 9.80774L13.5028 15L8.31058 20.1923C7.89647 20.6064 7.89647 21.2753 8.31058 21.6894C8.72469 22.1035 9.39363 22.1035 9.80774 21.6894L15 16.4972L20.1923 21.6894C20.6064 22.1035 21.2753 22.1035 21.6894 21.6894C22.1035 21.2753 22.1035 20.6064 21.6894 20.1923L16.4972 15L21.6894 9.80774C22.0929 9.40425 22.0929 8.72469 21.6894 8.3212Z" fill="#848388" /> </svg>`,
            arrowLeftIcon: `<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.3873 8.38747C18.8748 8.87497 18.8748 9.66247 18.3873 10.15L13.5373 15L18.3873 19.85C18.8748 20.3375 18.8748 21.125 18.3873 21.6125C17.8998 22.1 17.1123 22.1 16.6248 21.6125L10.8873 15.875C10.3998 15.3875 10.3998 14.6 10.8873 14.1125L16.6248 8.37497C17.0998 7.89997 17.8998 7.89997 18.3873 8.38747Z" fill="#91918E" /></svg>`,
            arrowRightIcon: `<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.6127 8.38747C11.1252 8.87497 11.1252 9.66247 11.6127 10.15L16.4627 15L11.6127 19.85C11.1252 20.3375 11.1252 21.125 11.6127 21.6125C12.1002 22.1 12.8877 22.1 13.3752 21.6125L19.1127 15.875C19.6002 15.3875 19.6002 14.6 19.1127 14.1125L13.3752 8.37497C12.9002 7.89997 12.1002 7.89997 11.6127 8.38747Z" fill="#91918E" /></svg>`,
        },
        cdn: (function (obj) {
            [
                "wa",
                "fb",
                "tw",
                "eml",
                "lnkdn",
                "pntrst",
                "rdt",
                "snpcht",
                "koo",
                "tg",
            ].forEach((app) => {
                obj[app] = getCDNsvgs(`${app}Icon.svg`);
            });
            return obj;
        })({}),
    };

    function QRCode(r) {
        var n, t, o, e, a = [], f = [], i = Math.max, u = Math.min, h = Math.abs, v = Math.ceil, c = /^[0-9]*$/, s = /^[A-Z0-9 $%*+.\/:-]*$/, l = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", g = [
            [
                -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22,
                24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30,
                30, 30, 30, 30, 30, 30, 30, 30, 30,
            ],
            [
                -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24,
                28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
                28, 28, 28, 28, 28, 28, 28, 28, 28,
            ],
            [
                -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30,
                24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30,
                30, 30, 30, 30, 30, 30, 30, 30, 30,
            ],
            [
                -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24,
                30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30,
                30, 30, 30, 30, 30, 30, 30, 30, 30,
            ],
        ], d = [
            [
                -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8,
                8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21,
                22, 24, 25,
            ],
            [
                -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13,
                14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37,
                38, 40, 43, 45, 47, 49,
            ],
            [
                -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18,
                21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51,
                53, 56, 59, 62, 65, 68,
            ],
            [
                -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19,
                21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57,
                60, 63, 66, 70, 74, 77, 81,
            ],
        ], m = { L: [0, 1], M: [1, 0], Q: [2, 3], H: [3, 2] }, p = function (r, n) {
            for (var t = 0, o = 8; o--;)
                t = (t << 1) ^ (285 * (t >>> 7)) ^ (((n >>> o) & 1) * r);
            return t;
        }, C = function (r, n) {
            for (var t = [], o = r.length, e = o; e;)
                for (var a = r[o - e--] ^ t.shift(), f = n.length; f--;)
                    t[f] ^= p(n[f], a);
            return t;
        }, w = function (r) {
            for (var n = [
                function () {
                    return 0 == (t + o) % 2;
                },
                function () {
                    return 0 == t % 2;
                },
                function () {
                    return 0 == o % 3;
                },
                function () {
                    return 0 == (t + o) % 3;
                },
                function () {
                    return 0 == (((t / 2) | 0) + ((o / 3) | 0)) % 2;
                },
                function () {
                    return 0 == ((t * o) % 2) + ((t * o) % 3);
                },
                function () {
                    return 0 == (((t * o) % 2) + ((t * o) % 3)) % 2;
                },
                function () {
                    return 0 == (((t + o) % 2) + ((t * o) % 3)) % 2;
                },
            ][r], t = e; t--;)
                for (var o = e; o--;)
                    f[t][o] || (a[t][o] ^= n());
        }, b = function () {
            for (var r = function (r, n) {
                n[6] || (r += e), n.shift(), n.push(r);
            }, n = function (n, o, a) {
                return n && (r(o, a), (o = 0)), r((o += e), a), t(a);
            }, t = function (r) {
                var n = r[5], t = n > 0 &&
                    r[4] == n &&
                    r[3] == 3 * n &&
                    r[2] == n &&
                    r[1] == n;
                return ((t && r[6] >= 4 * n && r[0] >= n ? 1 : 0) +
                    (t && r[0] >= 4 * n && r[6] >= n ? 1 : 0));
            }, o = 0, f = e * e, i = 0, u = e; u--;) {
                for (var c = [0, 0, 0, 0, 0, 0, 0], s = [0, 0, 0, 0, 0, 0, 0], l = !1, g = !1, d = 0, m = 0, p = e; p--;) {
                    a[u][p] == l
                        ? 5 == ++d
                            ? (o += 3)
                            : d > 5 && o++
                        : (r(d, c), (o += 40 * t(c)), (d = 1), (l = a[u][p])),
                        a[p][u] == g
                            ? 5 == ++m
                                ? (o += 3)
                                : m > 5 && o++
                            : (r(m, s),
                                (o += 40 * t(s)),
                                (m = 1),
                                (g = a[p][u]));
                    var C = a[u][p];
                    C && i++,
                        p &&
                            u &&
                            C == a[u][p - 1] &&
                            C == a[u - 1][p] &&
                            C == a[u - 1][p - 1] &&
                            (o += 3);
                }
                o += 40 * n(l, d, c) + 40 * n(g, m, s);
            }
            return (o += 10 * (v(h(20 * i - 10 * f) / f) - 1));
        }, A = function (r, n, t) {
            for (; n--;)
                t.push((r >>> n) & 1);
        }, M = function (r, n) {
            return r.numBitsCharCount[((n + 7) / 17) | 0];
        }, B = function (r, n) {
            return 0 != ((r >>> n) & 1);
        }, x = function (r, n) {
            for (var t = 0, o = r.length; o--;) {
                var e = r[o], a = M(e, n);
                if (1 << a <= e.numChars)
                    return 1 / 0;
                t += 4 + a + e.bitData.length;
            }
            return t;
        }, D = function (r) {
            if (r < 1 || r > 40)
                throw "Version number out of range";
            var n = (16 * r + 128) * r + 64;
            if (r >= 2) {
                var t = (r / 7) | 2;
                (n -= (25 * t - 10) * t - 55), r >= 7 && (n -= 36);
            }
            return n;
        }, I = function (r, n) {
            for (var t = 2; -2 <= t; t--)
                for (var o = 2; -2 <= o; o--)
                    E(r + o, n + t, 1 != i(h(o), h(t)));
        }, H = function (r, n) {
            for (var t = 4; -4 <= t; t--)
                for (var o = 4; -4 <= o; o--) {
                    var a = i(h(o), h(t)), f = r + o, u = n + t;
                    0 <= f &&
                        f < e &&
                        0 <= u &&
                        u < e &&
                        E(f, u, 2 != a && 4 != a);
                }
        }, $ = function (r) {
            for (var n = (t[1] << 3) | r, o = n, a = 10; a--;)
                o = (o << 1) ^ (1335 * (o >>> 9));
            var f = 21522 ^ ((n << 10) | o);
            if (f >>> 15 != 0)
                throw "Assertion error";
            for (a = 0; a <= 5; a++)
                E(8, a, B(f, a));
            E(8, 7, B(f, 6)), E(8, 8, B(f, 7)), E(7, 8, B(f, 8));
            for (a = 9; a < 15; a++)
                E(14 - a, 8, B(f, a));
            for (a = 0; a < 8; a++)
                E(e - 1 - a, 8, B(f, a));
            for (a = 8; a < 15; a++)
                E(8, e - 15 + a, B(f, a));
            E(8, e - 8, 1);
        }, O = function () {
            for (var r = e; r--;)
                E(6, r, 0 == r % 2), E(r, 6, 0 == r % 2);
            for (var t = (function () {
                var r = [];
                if (n > 1)
                    for (var t = 2 + ((n / 7) | 0), o = 32 == n
                        ? 26
                        : 2 * v((e - 13) / (2 * t - 2)); t--;)
                        r[t] = t * o + 6;
                return r;
            })(), o = (r = t.length); o--;)
                for (var a = r; a--;)
                    (0 == a && 0 == o) ||
                        (0 == a && o == r - 1) ||
                        (a == r - 1 && 0 == o) ||
                        I(t[a], t[o]);
            H(3, 3),
                H(e - 4, 3),
                H(3, e - 4),
                $(0),
                (function () {
                    if (!(7 > n)) {
                        for (var r = n, t = 12; t--;)
                            r = (r << 1) ^ (7973 * (r >>> 11));
                        var o = (n << 12) | r;
                        if (((t = 18), o >>> 18 != 0))
                            throw "Assertion error";
                        for (; t--;) {
                            var a = e - 11 + (t % 3), f = (t / 3) | 0, i = B(o, t);
                            E(a, f, i), E(f, a, i);
                        }
                    }
                })();
        }, Q = function (r) {
            if (r.length != V(n, t))
                throw "Invalid argument";
            for (var o = d[t[0]][n], e = g[t[0]][n], a = (D(n) / 8) | 0, f = o - (a % o), i = (a / o) | 0, u = [], h = (function (r) {
                var n = 1, t = [];
                t[r - 1] = 1;
                for (var o = 0; o < r; o++) {
                    for (var e = 0; e < r; e++)
                        t[e] = p(t[e], n) ^ t[e + 1];
                    n = p(n, 2);
                }
                return t;
            })(e), v = 0, c = 0; v < o; v++) {
                var s = r.slice(c, c + i - e + (v < f ? 0 : 1));
                c += s.length;
                var l = C(s, h);
                v < f && s.push(0), u.push(s.concat(l));
            }
            var m = [];
            for (v = 0; v < u[0].length; v++)
                for (var w = 0; w < u.length; w++)
                    (v != i - e || w >= f) && m.push(u[w][v]);
            return m;
        }, S = function (r) {
            for (var n = [], t = ((r = encodeURI(r)), 0); t < r.length; t++)
                "%" != r.charAt(t)
                    ? n.push(r.charCodeAt(t))
                    : (n.push(parseInt(r.substr(t + 1, 2), 16)), (t += 2));
            return n;
        }, V = function (r, n) {
            return ((D(r) / 8) | 0) - g[n[0]][r] * d[n[0]][r];
        }, E = function (r, n, t) {
            (a[n][r] = t ? 1 : 0), (f[n][r] = 1);
        }, R = function (r) {
            for (var n = [], t = 0, o = r; t < o.length; t++) {
                var e = o[t];
                A(e, 8, n);
            }
            return {
                modeBits: 4,
                numBitsCharCount: [8, 16, 16],
                numChars: r.length,
                bitData: n,
            };
        }, Z = function (r) {
            if (!c.test(r))
                throw "String contains non-numeric characters";
            for (var n = [], t = 0; t < r.length;) {
                var o = u(r.length - t, 3);
                A(parseInt(r.substr(t, o), 10), 3 * o + 1, n), (t += o);
            }
            return {
                modeBits: 1,
                numBitsCharCount: [10, 12, 14],
                numChars: r.length,
                bitData: n,
            };
        }, z = function (r) {
            if (!s.test(r))
                throw "String contains unencodable characters in alphanumeric mode";
            var n, t = [];
            for (n = 0; n + 2 <= r.length; n += 2) {
                var o = 45 * l.indexOf(r.charAt(n));
                (o += l.indexOf(r.charAt(n + 1))), A(o, 11, t);
            }
            return (n < r.length && A(l.indexOf(r.charAt(n)), 6, t),
                {
                    modeBits: 2,
                    numBitsCharCount: [9, 11, 13],
                    numChars: r.length,
                    bitData: t,
                });
        }, L = function (r, n, t, o) {
            var e = (function (r) {
                return "" == r
                    ? []
                    : c.test(r)
                        ? [Z(r)]
                        : s.test(r)
                            ? [z(r)]
                            : [R(S(r))];
            })(r);
            return U(e, n, t, o);
        }, N = function (r, i, u, h) {
            (t = i), (o = h);
            for (var v = (e = 4 * (n = r) + 17); v--;)
                (a[v] = []), (f[v] = []);
            if ((O(),
                (function (r) {
                    for (var n = 0, t = 1, o = e - 1, i = o; i > 0; i -= 2) {
                        6 == i && --i;
                        for (var u = 0 > (t = -t) ? o : 0, h = 0; h < e; ++h) {
                            for (var v = i; v > i - 2; --v)
                                f[u][v] ||
                                    ((a[u][v] = B(r[n >>> 3], 7 - (7 & n))),
                                        ++n);
                            u += t;
                        }
                    }
                })(Q(u)),
                0 > o)) {
                var c = 1e9;
                for (v = 8; v--;) {
                    w(v), $(v);
                    var s = b();
                    c > s && ((c = s), (o = v)), w(v);
                }
            }
            w(o), $(o), (f = []);
        }, U = function (r, n, t, o, e, a) {
            if ((void 0 === e && (e = 1),
                void 0 === a && (a = 40),
                void 0 === o && (o = -1),
                void 0 === t && (t = !0),
                !(1 <= e && e <= a && a <= 40) || o < -1 || o > 7))
                throw "Invalid value";
            for (var f = [], i = 236, h = [], v = e;;) {
                var c = x(r, v);
                if (c <= 8 * V(v, n))
                    break;
                if (v >= a)
                    throw "Data too long";
                v++;
            }
            if (t)
                for (var s = (l = [m.H, m.Q, m.M]).length; s--;)
                    c <= 8 * V(v, l[s]) && (n = l[s]);
            for (var l = 0; l < r.length; l++) {
                var g = r[l];
                A(g.modeBits, 4, f), A(g.numChars, M(g, v), f);
                for (var d = 0, p = g.bitData; d < p.length; d++)
                    f.push(p[d]);
            }
            if (f.length != c)
                throw "Assertion error";
            var C = 8 * V(v, n);
            if (f.length > C)
                throw "Assertion error";
            if ((A(0, u(4, C - f.length), f),
                A(0, (8 - (f.length % 8)) % 8, f),
                f.length % 8 != 0))
                throw "Assertion error";
            for (; f.length < C;)
                A(i, 8, f), (i ^= 253);
            for (s = f.length; s--;)
                h[s >>> 3] |= f[s] << (7 - (7 & s));
            return N(v, n, h, o);
        };
        return (function () {
            function n(r) {
                return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(r);
            }
            function t(r, n) {
                for (var t in ((r = document.createElementNS(s, r)), n || {}))
                    r.setAttribute(t, n[t]);
                return r;
            }
            var o, f, i, u, v, c, s = "http://www.w3.org/2000/svg", l = "", g = "string" == typeof r ? { msg: r } : r || {}, d = g.pal || ["#000"], 
            // p = h(g.dim) || 256,
            p = "100%", C = [1, 0, 0, 1, (c = (c = h(g.pad)) > -1 ? c : 4), c], w = n((w = d[0])) ? w : "#000", b = n((b = d[1])) ? b : 0, A = g.vrb ? 0 : 1;
            for (L(g.msg || "", m[g.ecl] || m.M, 0 == g.ecb ? 0 : 1, g.mtx),
                v = e + 2 * c,
                i = e; i--;)
                for (u = 0, f = e; f--;)
                    a[i][f] &&
                        (A
                            ? (u++,
                                a[i][f - 1] ||
                                    ((l +=
                                        "M" +
                                            f +
                                            "," +
                                            i +
                                            "h" +
                                            u +
                                            "v1h-" +
                                            u +
                                            "v-1z"),
                                        (u = 0)))
                            : (l += "M" + f + "," + i + "h1v1h-1v-1z"));
            return ((o = t("svg", {
                viewBox: [0, 0, v, v].join(" "),
                width: p,
                height: p,
                fill: w,
                "shape-rendering": "crispEdges",
                xmlns: s,
                version: "1.1",
            })),
                b &&
                    o.appendChild(t("path", { fill: b, d: "M0,0V" + v + "H" + v + "V0H0Z" })),
                o.appendChild(t("path", { transform: "matrix(" + C + ")", d: l })),
                o);
        })();
    }
    function qr_svg(input_data) {
        let svgNode = QRCode({
            msg: input_data,
            // dim: 256,
            pad: 0,
            // pad: 40,
            // mtx: 7,
            // ecl: "H",
            // ecb: 0,
            pal: ["#000000", "#ffffff"],
            // vrb: 1,
        }), _ = new XMLSerializer();
        return `data:image/svg+xml;base64,${btoa(_.serializeToString(svgNode))}`;
    }

    const applist = {
        wa: {
            id: "wa",
            name: "WhatsApp",
            theme: { primary: "#25D366", secondary: "#ffffff" },
            url_format: (input_url, text = "") => {
                if (text != "")
                    text += "\n";
                return `https://api.whatsapp.com/send?text=${encodeURIComponent(`${text}${input_url}`)}`;
            },
        },
        fb: {
            id: "fb",
            name: "Facebook",
            theme: { primary: "#0c87ef", secondary: "#ffffff" },
            url_format: (input_url, text = "") => {
                return `https://www.facebook.com/sharer/sharer.php?t=${encodeURIComponent(text)}&u=${encodeURIComponent(input_url)}`;
            },
        },
        tw: {
            id: "tw",
            name: "Twitter",
            theme: { primary: "#1D9BF0", secondary: "#ffffff" },
            url_format: (input_url, text = "") => {
                return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(input_url)}&hashtags=${encodeURIComponent("SharedUsingSharer,SharerByKP")}`;
            },
        },
        eml: {
            id: "eml",
            name: "Email",
            theme: { primary: "#EA4335", secondary: "#ffffff" },
            url_format: (body, subject = "") => {
                return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            },
        },
        lnkdn: {
            id: "lnkdn",
            name: "LinkedIn",
            theme: { primary: "#0A66C2", secondary: "#ffffff" },
            url_format: (input_url, text = "") => {
                if (text != "")
                    text += "\n";
                return `https://www.linkedin.com/cws/share?url=${encodeURIComponent(`${text}${input_url}`)}`;
            },
        },
        pntrst: {
            id: "pntrst",
            name: "Pinterest",
            theme: { primary: "#E60123", secondary: "#ffffff" },
            url_format: (input_url, text = "") => {
                return `https://www.pinterest.com/pin/create/button/?description=${encodeURIComponent(text)}&url=${encodeURIComponent(input_url)}&method=button`;
            },
        },
        rdt: {
            id: "rdt",
            name: "Reddit",
            theme: { primary: "#e45b34", secondary: "#ffffff" },
            url_format: (input_url, text = "") => {
                return `https://reddit.com/submit?title=${encodeURIComponent(text)}&url=${encodeURIComponent(input_url)}`;
            },
        },
        snpcht: {
            id: "snpcht",
            name: "Snapchat",
            theme: { primary: "#fffC00", secondary: "#000000" },
            url_format: (input_url, text = "") => {
                return `https://snapchat.com/scan?attachmentUrl=${encodeURIComponent(input_url)}`;
            },
        },
        koo: {
            id: "koo",
            name: "Koo",
            theme: { primary: "#FACD00", secondary: "#383838" },
            url_format: (input_url, text = "") => {
                if (text != "")
                    text += "\n";
                return `https://www.kooapp.com/create?title=${encodeURIComponent(`${text}${input_url}`)}`;
            },
        },
        tg: {
            id: "tg",
            name: "Telegram",
            theme: { primary: "#2aa1da", secondary: "#ffffff" },
            url_format: (input_url, text = "") => {
                return `https://t.me/share/url?url=${encodeURIComponent(input_url)}&text=${encodeURIComponent(text)}`;
            },
        },
    };

    let QRInterfaceState = false;
    let default_url = window.location.href, default_text = document.title;
    function setSharerText(text) {
        default_text = text;
    }
    function setSharerURL(url) {
        default_url = url;
    }
    function setSharerURLToDefault() {
        default_url = window.location.href;
    }
    function setSharerTextToDefault() {
        default_text = document.title;
    }
    function openQRInterfaceState() {
        QRInterfaceState = true;
    }
    function closeQRInterfaceState() {
        QRInterfaceState = false;
    }
    function isQRInterfaceStateOpen() {
        return QRInterfaceState;
    }
    function revertBackToRoot() {
        ((element) => {
            element.innerHTML = svgs.local.sharerIcon;
            element.onclick = () => openWebsite();
        })(elements.header_icon_container());
        elements.header_title().innerText = "Sharer by KP";
        ((element) => {
            element.style.height = "auto";
            element.style.aspectRatio = "1";
        })(elements.sharer_content());
        setApplistInterface();
        closeQRInterfaceState();
    }
    function setQRInterface(appid) {
        let sharer_content = j2h.setRoot(elements.sharer_content()), url_to_be_shared = applist[appid].url_format(default_url, default_text);
        sharer_content
            .append(j2h.element("div", {
            class: "sharer-qr-container",
        }, j2h.element("div", {
            class: "sharer-qr",
            style: `background: url(${qr_svg(url_to_be_shared)})`,
        }, svgs.cdn[appid])))
            .append(j2h.element("div", { class: "sharer-credits" }, j2h.element("div", { id: "credits-container" }, [
            j2h.element("div", { class: "credits-icon-container" }, svgs.local.sharerIcon),
            j2h.element("div", { class: "credits-text" }, "Powered by Sharer"),
        ])));
        sharer_content.render();
        ((element) => {
            element.style.height = `${element.offsetWidth + 51}px`;
        })(sharer_content.root);
        elements.credits_container().onclick = () => openWebsite();
        openQRInterfaceState();
        ((element) => {
            element.innerHTML = svgs.local.arrowLeftIcon;
            element.onclick = revertBackToRoot;
        })(elements.header_icon_container());
        ((app_details) => {
            elements.header_title().innerText = `Share on ${app_details.name}`;
            setFooterInterface(`Open ${app_details.name}`, app_details.theme.secondary, app_details.theme.primary, () => {
                openWebsite(url_to_be_shared);
            });
        })(applist[appid]);
    }
    function setApplistInterface() {
        let applist_html = j2h.setRoot(elements.sharer_content());
        Object.keys(applist).forEach((id) => {
            applist_html.append(j2h.element("div", { id: `open-${id}-qr`, class: "applist-item" }, [
                j2h.element("div", { class: "applist-icon-container" }, svgs.cdn[id]),
                j2h.element("div", { class: "applist-app-name" }, applist[id].name),
                j2h.element("div", { class: "arrow-right-icon" }, svgs.local.arrowRightIcon),
            ]));
        });
        applist_html.render();
        Object.keys(applist).forEach((id) => {
            document.getElementById(`open-${id}-qr`).onclick =
                () => {
                    setQRInterface(id);
                };
        });
        setFooterInterface();
        closeQRInterfaceState();
    }

    let resizeLock = false;
    function resizeObserverAction() {
        if (resizeLock)
            return;
        resizeLock = true;
        setTimeout(() => {
            resizeLock = false;
            elements.sharer_container().style.height = `${document.documentElement.clientHeight - 12}px`;
            if (isQRInterfaceStateOpen()) {
                elements.sharer_content().style.height = `${elements.sharer_content().offsetWidth + 51}px`;
            }
        }, 500);
    }
    function startResizeObserver() {
        window.addEventListener("resize", resizeObserverAction);
    }
    function closeResizeObserver() {
        window.removeEventListener("resize", resizeObserverAction);
    }

    let continue_to_close = true;
    function setContinueToCloseFalse() {
        continue_to_close = false;
    }
    function closeSharer() {
        if (continue_to_close) {
            try {
                elements.sharer_container().classList.add("hide");
                setTimeout(() => {
                    elements.sharer_by_KP().classList.add("hide");
                    setTimeout(() => {
                        elements.sharer_by_KP().remove();
                        closeResizeObserver();
                    }, 100);
                }, 300);
                document.body.classList.remove("sharer-opened");
            }
            catch (error) {
                console.log(error);
            }
        }
        continue_to_close = true;
    }

    function setSharerRoot() {
        const Sharer_By_KP = document.createElement("div");
        j2h.setAttribute(Sharer_By_KP, { id: "sharer-by-KP", class: "hide" });
        const sharer_root = j2h.setRoot(Sharer_By_KP);
        sharer_root.append(j2h.element("div", { id: "sharer-container", class: "hide" }, j2h.element("div", { id: "sharer-window" }, [
            j2h.element("div", { class: "sharer-header" }, [
                j2h.element("div", { id: "header-icon-container" }, svgs.local.sharerIcon),
                j2h.element("div", { id: "header-title" }, "Sharer by KP"),
                j2h.element("div", { id: "header-close-icon" }, svgs.local.closeIcon),
            ]),
            j2h.element("div", { id: "sharer-content" }),
            j2h.element("div", { id: "sharer-footer" }, j2h.element("div", { id: "sharer-footer-text" })),
        ])));
        document.body.prepend(Sharer_By_KP);
        sharer_root.render();
    }
    function openSharer() {
        try {
            document.getElementById("sharer-by-KP").remove();
        }
        catch (error) { }
        setSharerRoot();
        setTimeout(() => {
            elements.sharer_by_KP().classList.remove("hide");
            elements.sharer_container().classList.remove("hide");
        }, 10);
        elements.sharer_window().onclick = setContinueToCloseFalse;
        elements.sharer_container().onclick = closeSharer;
        elements.header_close_icon().onclick = closeSharer;
        [elements.header_icon_container(), elements.sharer_footer()].forEach((element) => {
            element.onclick = () => openWebsite();
        });
        setApplistInterface();
        setFooterInterface();
        resizeObserverAction();
        startResizeObserver();
        document.body.classList.add("sharer-opened");
    }

    document.head.appendChild(j2h.setAttribute(document.createElement("link"), {
        rel: "stylesheet",
        href: cdn.getPath(["bundle", "sharerByKP.css"]),
    }));
    var sharer = {
        setURL: function (url) {
            setSharerURL(url);
            return this;
        },
        setURLToDefault: function () {
            setSharerURLToDefault();
            return this;
        },
        setText: function (text) {
            setSharerText(text);
            return this;
        },
        setTextToDefault: function () {
            setSharerTextToDefault();
            return this;
        },
        open: openSharer,
        close: closeSharer,
    };

    return sharer;

})();
