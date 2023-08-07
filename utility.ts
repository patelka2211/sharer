(function () {
    const SHARER_UTILITY_PROBLEM_FORMAT = function (problem: string) {
            return `Sharer utility script tag doesn't have ${problem}.`;
        },
        SHARER_NOT_DEFINED =
            "Sharer is not defined. Get it today from https://kpverse.in/sharer/.",
        SCRIPT_TAG_ID = "sharer-utility-js";

    if (!(window as any).Sharer) {
        console.warn(SHARER_NOT_DEFINED);
        return;
    }

    if (!document.body) {
        console.warn(SHARER_UTILITY_PROBLEM_FORMAT(`"defer" attribute`));
        return;
    }

    let script = document.getElementById(SCRIPT_TAG_ID);

    if (!script) {
        console.warn(SHARER_UTILITY_PROBLEM_FORMAT(`id="${SCRIPT_TAG_ID}"`));
        return;
    }

    let classesList = script.classList;

    classesList.forEach(function (className) {
        if (className === "activate-button") {
            try {
                (window as any).Sharer.button.activate();
            } catch (error) {
                console.warn(error);
            }
        } else if (className.indexOf("set-color-") === 0) {
            let color = className.replace("set-color-", "#");
            try {
                (window as any).Sharer.setColor(color);
            } catch (error) {
                console.warn(error);
            }
        }
    });
})();
