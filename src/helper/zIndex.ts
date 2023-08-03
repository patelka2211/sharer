export function getZIndex() {
    return Math.min(
        Math.max(
            ...Array.from(document.querySelectorAll("body *"), (el) =>
                parseFloat(window.getComputedStyle(el).zIndex)
            ).filter((zIndex) => !Number.isNaN(zIndex)),
            0
        ) + 50,
        2147483647
    );
}
