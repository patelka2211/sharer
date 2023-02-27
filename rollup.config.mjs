const outFormats = ["iife", "esm", "sharer_button", "import"],
    time = new Date(),
    banner = `/**
* "Sharer by KP"
* - Sharer is a user-friendly JavaScript library that seamlessly enhances website sharing across various applications and social media platforms. Boost engagement and increase website reach with Sharer - the top-rated JavaScript library for seamless URL sharing!
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
    if (format === "sharer_button")
        return {
            input: `./dist/${format}/${format}.js`,
            output: {
                file: `./bundle/${format}.js`,
                format: "iife",
                // name: "sharer",
                banner: banner,
            },
        };
    else if (format === "import")
        return {
            input: `./dist/sharer_${format}.js`,
            output: {
                file: `./bundle/sharer.iife.${format}.js`,
                format: "iife",
                // name: "sharer",
                banner: banner,
            },
        };
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
