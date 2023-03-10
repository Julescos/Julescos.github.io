/* Inject text content, no markup & DOM manipulation (alternative DOMPurify)*/
const source = document.getElementById('year');
const year = new Date().getFullYear();
source.textContent = year;

/* Mobile - onclick icon change style */
function toggle(x) {
    x.classList.toggle("change");
    let y = document.getElementById("list");
    if (y.style.visibility === "visible" & y.style.opacity === "1") {
        y.style.visibility = "hidden"; y.style.opacity = "0";
    } else {
        y.style.visibility = "visible"; y.style.opacity = "1";
    }
}
