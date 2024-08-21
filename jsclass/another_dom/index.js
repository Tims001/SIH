const box = document.querySelector("#contain");

const container = document.createElement("p");
container.textContent = "The greatest stories ever told are written in the stars";

container.style.fontStyle = "italics";
box.style.display = "flex";
box.style.alignItems = "center";
box.style.justifyContent = "center";
box.appendChild(container);


const pack = document.querySelector("#another");
pack.style.display = "flex";
pack.style.alignItems = "center";
pack.style.justifyContent = "center";
pack.style.flexDirection = "column";
pack.innerHTML = `<p style="color: black; font-size: 20px;"> The Odeseey</p>`;
pack.innerHTML = `<img src = "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/challenger/vlp/desktop/MY23Challenger_VLP_Desktop_Exterior3.jpg" alt = " ">`

const bd = document.querySelector("body");
const bt = document.querySelector(".btn");

bt.addEventListener("click", (event) => {
    bt.style.background = "blue";
});
