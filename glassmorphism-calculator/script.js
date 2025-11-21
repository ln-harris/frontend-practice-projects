const display = document.querySelector(".display");
let currentExpression = "0";

function updateDisplay() {
  display.textContent = currentExpression || "0";
}

function appendToDisplay(value) {
  if (currentExpression === "0" && value !== ".") {
    currentExpression = "";
  }
  currentExpression += value;
  updateDisplay();
}

function clearDisplay() {
  currentExpression = "0";
  updateDisplay();
}

function calculate() {
  try {
    currentExpression = eval(currentExpression.replace(/x/g, "*")).toString();
    updateDisplay();
    // Converts every "x" into "*" for multiplication
  } catch (error) {
    currentExpression = "Error";
    updateDisplay();
    // Displays error on screen for invalid expressions like 5++2
    setTimeout(() => {
      currentExpression = "";
      updateDisplay();
    }, 1000);
    // Clears screen after 1 second = 1000 milliseconds
  }
}
