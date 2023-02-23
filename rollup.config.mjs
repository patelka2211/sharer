const outFormats = ["iife", "esm"];

export default outFormats.map((format) => {
    return {
        input: "./dist/index.js",
        output: {
            file: `./bundle/sharer.${format}.js`,
            format: format,
            name: "sharer",
        },
    };
});
