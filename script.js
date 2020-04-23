import { subfactorial } from "./subfactorial.js";

const input = document.getElementById("input");
const calculateButton = document.getElementById("calculate");
const outputDiv = document.getElementById("output");

input.value = "";

calculateButton.addEventListener("click", (e) => {
    e.preventDefault();
    outputDiv.innerHTML = "";

    const inputValue = input.value;
    const resultText = document.createElement("p");

    if (isPositiveInteger(inputValue)) {
        const resultValue = subfactorial(inputValue);
        resultText.innerHTML = `The subfactorial of ${inputValue} is <span class="font-weight-bold">${resultValue}.</span>`;
        resultText.classList.add("alert", "alert-primary");
    } else {
        resultText.innerHTML = "Please enter a valid, nonnegative integer.";
        resultText.classList.add("alert", "alert-danger");
    }

    outputDiv.appendChild(resultText);
    input.value = "";
});

function isPositiveInteger(str) {
    return /^(0|[1-9]\d*)$/.test(str);
}
