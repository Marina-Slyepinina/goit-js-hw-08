const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

input.addEventListener("input", handleInput);

function handleInput(event) {
    const userInput = event.target.value.trim();
    if (userInput !== "") {
        output.textContent = userInput;
    } else output.textContent = "Anonymous";
}