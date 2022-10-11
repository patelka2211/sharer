class sharer {
    constructor() {
        this.sharer_by_KP = document.getElementById("sharer-by-KP");
        if (this.sharer_by_KP == null) {
            this.create_sharer();
        }
    }

    create_sharer() {
        this.sharer_by_KP = document.createElement("div");
        this.sharer_by_KP.setAttribute("id", "sharer-by-KP");
        this.sharer_by_KP.innerHTML = `<div class="content">
        <button onclick="sharer_by_KP.close();">Close</button>
        </div>`;

        document.body.prepend(this.sharer_by_KP);
    }

    show() {
        if (this.sharer_by_KP == null) {
            this.create_sharer();
        }
        this.sharer_by_KP.classList.add("show");
    }

    close() {
        if (this.sharer_by_KP == null) {
            this.create_sharer();
        }
        this.sharer_by_KP.classList.remove("show");
    }
}

// let sharer_by_KP = new sharer();
