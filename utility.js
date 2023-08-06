!(function () {
    function e(e) {
        return "Sharer utility script tag doesn't have ".concat(e, ".");
    }
    if (window.Sharer)
        if (document.body) {
            var t = document.getElementById("sharer-utility-js");
            if (t)
                t.classList.forEach(function (e) {
                    if ("activate-button" === e)
                        try {
                            window.Sharer.button.activate();
                        } catch (e) {
                            console.log(e);
                        }
                    else if (0 === e.indexOf("set-color-")) {
                        var t = e.replace("set-color-", "#");
                        try {
                            window.Sharer.setColor(t);
                        } catch (e) {
                            console.log(e);
                        }
                    }
                });
            else console.warn(e('id="sharer-utility-js"'));
        } else console.warn(e('"defer" attribute'));
    else console.log("Sharer is not defined. Get it from kpverse.in/sharer/.");
})();
