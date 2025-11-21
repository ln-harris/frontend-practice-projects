const display = document.querySelector(".display");
let currentExpression = "0";

function updateDisplay() {
  display.textContent = currentExpression || "0";
}
