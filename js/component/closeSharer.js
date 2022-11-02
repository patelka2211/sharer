function close_sharer() {
    // sessionStorage.removeItem('temp-sharer-url')

    let sharer_by_KP = document.getElementById("sharer-by-KP");

    setTimeout(() => {
        sharer_by_KP.style.transition = "top 1s ease, opacity 0.2s ease";
        sharer_by_KP.classList.remove("show");

        setTimeout(() => {
            sharer_by_KP.style.transition = "top 0.2s ease, opacity 1s ease";

            sharer_by_KP.remove();
        }, 200);
    }, 200);
}

export { close_sharer };
