window.addEventListener("load", () => {
    document.getElementById(`${"iife"}-copy-btn`).onclick = function () {
        (async (element) => {
            element.select();
            try {
                await navigator.clipboard.writeText(element.value);
                this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" style="width: 64%; aspect-ratio: 1;"> <path d="M378 798q-6 0-11-2t-10-7L176 608q-9-9-9-22t9-22q9-9 21-9t21 9l160 160 363-363q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5L399 789q-5 5-10 7t-11 2Z" fill="#5900ff" /> </svg>`;
                setTimeout(() => {
                    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" style="width: 64%; aspect-ratio: 1;"> <path d="M300 855q-24.75 0-42.375-17.625T240 795V235q0-24.75 17.625-42.375T300 175h440q24.75 0 42.375 17.625T800 235v560q0 24.75-17.625 42.375T740 855H300Zm0-60h440V235H300v560ZM180 975q-24.75 0-42.375-17.625T120 915V342q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T180 342v573h444q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T624 975H180Zm120-740v560-560Z" fill="#5900ff" /> </svg>`;
                }, 1600);
            } catch (error) {
                alert(`Failed to copy: ${error}`);
            }
        })(document.getElementById(`${"iife"}-url-input`));
    };
    ((element) => {
        element.addEventListener(
            "keyup",
            ((temporary_function) => {
                temporary_function();
                return temporary_function;
            })(function () {
                element.value = `<script id="sharer_iife_script" src="https://patelka2211.github.io/sharer/bundle/sharer.iife.min.js"></script><script id="sharer_button_script" src="https://patelka2211.github.io/sharer/bundle/sharer_button.min.js" type="text/javascript"></script>`;
            })
        );
    })(document.getElementById(`${"iife"}-url-input`));
});
