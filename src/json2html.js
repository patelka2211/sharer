/**
 * MIT License
 * Copyright (c) 2022 Kartavya Patel
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * Helps to create HTML in JavaScript. Uses JSON to store attributes and elements.
 */
export default class j2h {
    constructor() {
        this.list = [];
    }

    /**
     * Creates string of attributes from attributes object.
     */
    #get_attrs(attrs_obj) {
        let output = "";

        let handle_object = (attrs_object) => {
            let attrs_array = Object.entries(attrs_object);

            for (let index = 0; index < attrs_array.length; index++)
                output += `${attrs_array[index][0]}="${attrs_array[index][1]}" `;
        };

        if (typeof attrs_obj == "object" && attrs_obj.length == undefined) {
            handle_object(attrs_obj);
        } else if (
            typeof attrs_obj == "object" &&
            attrs_obj.length != undefined
        ) {
            for (let index = 0; index < attrs_obj.length; index++) {
                const element = attrs_obj[index];

                if (typeof element == "object" && element.length == undefined)
                    handle_object(element);
                else output += `${element} `;
            }
        }

        return output;
    }

    /**
     * Takes element and appends to root element.
     * @param element Takes object (e.g. this.list)
     * @returns Object itself.
     */
    append(element = null) {
        if (element == null) return;
        this.list.push(element);
        return this;
    }

    /**
     * Converts JSON to HTML.
     * @param input Takes object (e.g. this.list) (Default)
     * @returns HTML string.
     */
    render(input = this.list) {
        let output = "";

        if (typeof input == "object") {
            if (input.length == undefined) {
                let array = Object.entries(input);
                for (let index = 0; index < array.length; index++) {
                    const element = array[index];
                    if (element[1].length == 2) {
                        if (typeof element[1][1] == "object") {
                            output += `<${element[0]} ${this.#get_attrs(
                                element[1][0]
                            )}>${this.render(element[1][1])}</${element[0]}>`;
                        } else
                            output += `<${element[0]} ${this.#get_attrs(
                                element[1][0]
                            )}>${element[1][1]}</${element[0]}>`;
                    } else
                        output += `<${element[0]} ${this.#get_attrs(
                            element[1][0]
                        )}/>`;
                }
            } else {
                for (let index = 0; index < input.length; index++) {
                    output += this.render(input[index]);
                }
            }
            return output;
        } else output += String(input);

        return output;
    }

    /**
     * Repeats given input.
     * @param what_to_repeat Specify what to repeat.
     * @param how_many_times Specity how many times to repeat.
     * @returns List of given input.
     */
    repeater(what_to_repeat, how_many_times) {
        let output = [];
        for (let index = 0; index < how_many_times; index++) {
            output.push(what_to_repeat);
        }
        return output;
    }

    /**
     * \<div\> tag.
     * @param attributes Object
     * @param innerHTML Object or String
     * @returns \<div\> tag.
     */
    div(attributes = {}, innerHTML = "") {
        return { div: [attributes, innerHTML] };
    }

    /**
     * \<a\> tag
     * @param href String
     * @param innerHTML Object or string
     * @param attributes Object
     * @returns \<a\> tag
     */
    a(href = "#", innerHTML = "", attributes = {}) {
        attributes.href = href;
        return { a: [attributes, innerHTML] };
    }

    /**
     * \<img\> tag
     * @param src String
     * @param alt String
     * @param attributes Object
     * @returns \<img\> tag
     */
    img(src = "", alt = "", attributes = {}) {
        attributes.src = src;
        attributes.alt = alt;
        return { img: [attributes] };
    }

    /**
     * \<input\> tag
     * @param attributes Object
     * @returns \<input\> tag
     */
    input(attributes = {}) {
        return { input: [attributes] };
    }

    /**
     * \<p\> tag
     * @param attributes Object
     * @param innerHTML Object or string
     * @returns \<p\> tag
     */
    p(innerHTML = "", attributes = {}) {
        return {
            p: [attributes, innerHTML],
        };
    }

    /**
     * \<label\> tag
     * @param attributes Object
     * @param innerHTML Object or string
     * @returns \<label\> tag
     */
    label(attributes = {}, innerHTML = "") {
        return { label: [attributes, innerHTML] };
    }

    /**
     * \<iframe\> tag
     * @param src String
     * @param attributes Object
     * @returns \<iframe\> tag
     */
    iframe(src = "", attributes = {}) {
        attributes.src = src;
        return { iframe: [attributes] };
    }

    /**
     * \<lottie-player\> tag
     * @param src String
     * @param attributes Object
     * @returns \<lottie-player\> tag
     */
    LottiePlayer(src = "", attributes = {}) {
        attributes.src = src;
        return { "lottie-player": [attributes] };
    }
}
