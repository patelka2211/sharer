const outFormats = ["iife", "esm"],
    time = new Date(),
    banner = `/**
* "Sharer by KP"
* - Sharer is a JavaScript library that offers sharing capability with smooth transitions to share a website's URL to other applications.
*
* @author Kartavya Patel <patelka2211@gmail.com>
*
* @license {@link https://github.com/patelka2211/sharer/blob/main/LICENSE MIT}
*
* @copyright Kartavya Patel ${time.getFullYear()}
*
* Includes {@link https://github.com/patelka2211/json2html JSON2HTML} and {@link https://github.com/datalog/qrcode-svg qrcode-svg}.
*
* Last updated at : ${time.toISOString()}
*/`;

export default outFormats.map((format) => {
    return {
        input: "./dist/sharer.js",
        output: {
            file: `./bundle/sharer.${format}.js`,
            format: format,
            name: "sharer",
            banner: banner,
        },
    };
});
