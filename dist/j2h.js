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
export default j2h;
