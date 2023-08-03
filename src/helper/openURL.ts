export function openURL(url: string) {
    window.open(
        url,
        "_blank",
        `resizable=yes,width=${screen.width * 0.84},height=${
            screen.height * 0.84
        },top=${screen.height * 0.08},left=${screen.width * 0.08}`
    );
}
