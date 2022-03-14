let button = document.getElementById("scroll-to-top-button");

function onScrollOrResize() {
    if ((document.documentElement.scrollTop > 20)
        && (document.documentElement.clientWidth > 1290)) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}
window.addEventListener("scroll", () => onScrollOrResize());
window.addEventListener("scroll", () => onScrollOrResize());

button.onclick = function () {
    document.documentElement.scrollTop = 0;
};