const container = document.querySelector("#img_container");
const btEl = document.querySelector(".link");


btEl.addEventListener("mouseover", (event) => {
    const x = (event.pageX - btEl.offsetLeft);
    const y = (event.pageY - btEl.offsetTop);

    btEl.style.setProperty("--xPos", x + "px");
    btEl.style.setProperty("--yPos", y + "px");
});
btEl.addEventListener("click", () =>{
    const imgEl = document.querySelector(".image");
    const imgArray = ["img/pic1.jpg","img/pic2.jpg","img/pic3.jpg","img/pic4.jpg","img/pic5.jpg","img/pic6.jpg","img/pic7.jpg","img/pic8.jpg","img/pic9.jpg","img/pic10.jpg"];

    imgEl.src = imgArray[Math.floor(Math.random() * imgArray.length)] ;
    container.appendChild(imgEl);
});
