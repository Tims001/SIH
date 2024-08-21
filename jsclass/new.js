const btEl = document.querySelector(".link");

btEl.addEventListener("mouseover", (event) => {
    const x = (event.pageX - btEl.offsetLeft);
    const y = (event.pageY - btEl.offsetTop);

    btEl.style.setProperty("--xPos", x + "px");
    btEl.style.setProperty("--yPos", y + "px");
});