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
                        element.innerText = value[1];
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

const setSharerRoot = () => {
    const Sharer_By_KP = document.createElement("div");
    j2h.setAttribute(Sharer_By_KP, { id: "sharer-by-KP", class: "hide" });
    const sharer_root = j2h.setRoot(Sharer_By_KP);
    // sharer_root.append(
    //     j2h.element("div", { id: "sharer-window" }, [
    //         j2h.element("div", { class: "sharer-header" }, [
    //             j2h.element(
    //                 "div",
    //                 { id: "header-icon-container" },
    //                 j2h.element("div", { id: "header-icon" })
    //             ),
    //             j2h.element("div", { id: "header-title" }, "Sharer by KP"),
    //             j2h.element("div", { id: "header-close-icon" }),
    //         ]),
    //         j2h.element("div", { id: "sharer-content" }),
    //         j2h.element("div", { id: "sharer-footer" }),
    //     ])
    // );
    sharer_root.append(j2h.element("div", { id: "sharer-container", class: "hide" }, j2h.element("div", { id: "sharer-window" })));
    document.body.prepend(Sharer_By_KP);
    sharer_root.render();
    setTimeout(() => {
        Sharer_By_KP.classList.remove("hide");
        setTimeout(() => {
            var _a;
            (_a = document
                .getElementById("sharer-container")) === null || _a === void 0 ? void 0 : _a.classList.remove("hide");
        }, 300);
    }, 10);
    document.getElementById("sharer-window").onclick = () => {
    };
    document.getElementById("sharer-container").onclick =
        () => {
        };
    // Sharer_By_KP.classList.add("hide");
};

document.getElementById("share-this").onclick = setSharerRoot;
// setSharerRoot();
