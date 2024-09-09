//Local storage

//Store items
localStorage.setItem("Timz", "This user searched for Nike Shoe");

//Get an item
const data =  localStorage.getItem("Timz");

console.log(data);


// localStorage.removeItem("Timz");

//Storing an array

const product = ["Yeezy", "Nike", "Adidas", "Zanotti", "Prada"];

localStorage.setItem("product", JSON.stringify(product));

//Session storage: stores data only for that browsing session
sessionStorage.setItem('temp', JSON.stringify(data));

//Cookies: Gets sent along to the backend

