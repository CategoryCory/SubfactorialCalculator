import { subfactorial } from "./subfactorial.js";

const input = document.getElementById("input");
const calculateButton = document.getElementById("calculate");
const outputDiv = document.getElementById("output");

calculateButton.addEventListener("click", (e) => {
    e.preventDefault();
    outputDiv.innerHTML = "";

    const inputValue = input.value;
    const resultText = document.createElement("p");

    if (isPositiveInteger(inputValue)) {
        const resultValue = subfactorial(inputValue);
        resultText.innerHTML = `<h5>The subfactorial of ${inputValue} is <span class="font-weight-bold">${resultValue}.</span></h5>`;
    } else {
        resultText.innerHTML =
            '<p class="text-danger">Please enter a valid, nonnegative number.</p>';
    }

    outputDiv.appendChild(resultText);
});

function isPositiveInteger(str) {
    return /^(0|[1-9]\d*)$/.test(str);
}
