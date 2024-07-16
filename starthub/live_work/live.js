/*declaring navbar and menu icon variables*/
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

/*check if menu icon is clicked or not */
if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}
/*click the x to close the navbar*/
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}