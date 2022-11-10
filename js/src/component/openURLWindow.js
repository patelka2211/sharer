function open_URL_window(url, width_percent = 0.84, height_percent = 0.84) {
    if (sessionStorage.hasOwnProperty("window_features")) {
        window.open(url, "_blank", sessionStorage.window_features);
        return;
    }

    let window_features = `resizable=yes,width=${
        screen.width * width_percent
    },height=${screen.height * height_percent},top=${
        (screen.height * (1 - height_percent)) / 2
    },left=${(screen.width * (1 - width_percent)) / 2}`;
    window.open(url, "_blank", window_features);

    sessionStorage.window_features = window_features;
}

export { open_URL_window };
