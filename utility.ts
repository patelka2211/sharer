(function () {
    const SHARER_NOT_DEFINED =
            "Sharer is not defined. Get it from kpverse.in/sharer/.",
        SHARER_UTILITY_PROBLEM_FORMAT = function (problem: string) {
            return `Sharer utility script tag doesn't have ${problem}.`;
        };

    if (!(window as any).Sharer) {
        console.log(SHARER_NOT_DEFINED);
        return;
    }

    if (!document.body) {
        console.warn(SHARER_UTILITY_PROBLEM_FORMAT(`"defer" attribute`));
        return;
    }

    let script = document.getElementById("sharer-utility-js");

    if (!script) {
        console.warn(SHARER_UTILITY_PROBLEM_FORMAT(`id="sharer-utility-js"`));
        return;
    }

    let classesList = script.classList;

    classesList.forEach(function (className) {
        if (className === "activate-button") {
            try {
                (window as any).Sharer.button.activate();
            } catch (error) {
                console.log(SHARER_NOT_DEFINED);
            }
        } else if (className.indexOf("set-color-") === 0) {
            let color = className.replace("set-color-", "#");
            try {
                (window as any).Sharer.setColor(color);
            } catch (error) {
                console.log(SHARER_NOT_DEFINED);
            }
        }
    });
})();
