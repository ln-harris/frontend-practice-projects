const display = document.querySelector(".display");

let currentExpression = "0";
let justCalculated = false;

// Updates the calculator display
function updateDisplay() {
  display.textContent = currentExpression || "0";
}

// Checks if a value is an operator
function isOperator(value) {
  return ["+", "-", "x", "*", "/"].includes(value);
}

// Appends numbers or operators to the display
function appendToDisplay(value) {
  // If "=" was just pressed
  if (justCalculated) {
    if (!isOperator(value)) {
      // Start a new calculation if user types a number
      currentExpression = "";
    }
    // If operator, continue calculation with result
    justCalculated = false;
  }

  // Prevent leading zero issues
  if (currentExpression === "0" && value !== ".") {
    currentExpression = "";
  }

  currentExpression += value;
  updateDisplay();
}

// Clears the calculator
function clearDisplay() {
  currentExpression = "0";
  justCalculated = false;
  updateDisplay();
}

// Calculates the result
function calculate() {
  try {
    // Replace "x" with "*" before evaluation
    currentExpression = eval(currentExpression.replace(/x/g, "*")).toString();

    justCalculated = true;
    updateDisplay();
  } catch (error) {
    currentExpression = "Error";
    updateDisplay();
    // Displays error on screen for invalid expressions like 5++2

    setTimeout(() => {
      currentExpression = "0";
      justCalculated = false;
      updateDisplay();
    }, 1000);
    // Clears screen after 1 second = 1000 milliseconds
  }
}
