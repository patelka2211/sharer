import cdn from "./cdn";
function importSharerScript() {
    let sharer_script = document.createElement("script");
    sharer_script.id = "sharer_iife_file";
    sharer_script.src = cdn.getPath(["bundle", "sharer.iife.min.js"]);
    document.head.appendChild(sharer_script);
    try {
        document.getElementById("sharer_latest_file_importer").remove();
    }
    catch (error) { }
}
window.addEventListener("load", importSharerScript);
