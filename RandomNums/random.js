const min = 100;
const max = 1000;

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
document.getElementById("random-number").textContent = randomNumber;
document.getElementById("generate-button").addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("random-number").textContent = randomNumber;
});
