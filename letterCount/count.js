textArea = document.querySelector("#textarea");
totalTyped = document.querySelector("#total");
remainingTyped = document.querySelector("#remaining");



textArea.addEventListener("keydown", () => {
    Counter();
});
Counter();

function Counter() {
    totalCount = textArea.value.length;
    totalTyped.innerText = totalCount;
    remainingTyped.innerText = textArea.getAttribute("maxLength") - totalCount;
}