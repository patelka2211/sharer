const outFormats = ["iife", "esm"];

export default outFormats.map((format) => {
    return {
        input: "./dist/sharer.js",
        output: {
            file: `./bundle/sharer.${format}.js`,
            format: format,
            name: "sharer",
        },
    };
});
