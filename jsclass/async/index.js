//fetching data from api

const data = fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});

const product = document.querySelector(".product")

//asynchronous function
async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        product.innerHTML = data.map((obj) => {
            return `<div>${obj.title}</div>`
        });
    } catch (error){
        console.log(error);
    }
}
fetchProducts();
