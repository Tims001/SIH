const form = document.querySelector(".form");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const daySmall = document.querySelector("#dayError");
const monthSmall = document.querySelector("#monthError");
const yearSmall = document.querySelector("#yearError");
const button = document.querySelector(".submit");
const label1 = document.querySelector("#dayLabel");
const label2 = document.querySelector("#monthLabel");
const label3 = document.querySelector("#yearLabel");
const date = new Date();
const cYear = date.getFullYear();




button.addEventListener("click", () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        checkInputs();
    })
});

//function to validate inputs
function checkInputs(){
    const dayValue = day.value.trim();
    const monthValue = month.value.trim();
    const yearValue = year.value.trim();

    if(dayValue === ""){
        daySmall.innerHTML = "This field is required";
        day.style.setProperty("--new", "#ff5757");
        label1.style.color = "#ff5757";
    };
     if(dayValue > 31 ){
        daySmall.innerHTML = "Must be a valid day";
        day.style.setProperty("--new", "#ff5757");
        label1.style.color = "#ff5757";
    };
     if(monthValue === ""){
        monthSmall.innerHTML = "This field is required";
        month.style.setProperty("--new", "#ff5757");
        label2.style.color = "#ff5757";
    };
    if (monthValue == 2 && dayValue > 29){
        daySmall.innerHTML = "Must be a valid day";
        day.style.setProperty("--new", "#ff5757");
        label1.style.color = "#ff5757";
    };
    if (monthValue == 4  && dayValue > 30 ){
        daySmall.innerHTML = "Must be a valid day";
        day.style.setProperty("--new", "#ff5757");
        label1.style.color = "#ff5757";
    };
    if (monthValue == 6  && dayValue > 30 ){
        daySmall.innerHTML = "Must be a valid day";
        day.style.setProperty("--new", "#ff5757");
        label1.style.color = "#ff5757";
    };
    if (monthValue == 9  && dayValue > 30 ){
        daySmall.innerHTML = "Must be a valid day";
        day.style.setProperty("--new", "#ff5757");
        label1.style.color = "#ff5757";
    };
    if (monthValue == 11  && dayValue > 30 ){
        daySmall.innerHTML = "Must be a valid day";
        day.style.setProperty("--new", "#ff5757");
        label1.style.color = "#ff5757";
    };
     if(monthValue > 12 ){
        monthSmall.innerHTML = "Must be a valid month";
        month.style.setProperty("--new", "#ff5757");
        label2.style.color = "#ff5757";
    };
     if (yearValue === ""){
        yearSmall.innerHTML = "This field is required";
        year.style.setProperty("--new", "#ff5757");
        label3.style.color = "#ff5757";
    };
    if (yearValue > cYear){
        yearSmall.innerHTML = "Must be a valid year";
        year.style.setProperty("--new", "#ff5757");
        label3.style.color = "#ff5757";
    };
};


