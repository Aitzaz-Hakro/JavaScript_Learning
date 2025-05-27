var display = document.getElementById("display");
var operation;
var BeforeOp = ""; 
var afterOp = "";
var result = 0;

function appendNumber(digit) {
    afterOp += digit;     
    display.innerHTML += `${digit}`;
}

function appendDecimal() {
    if (!afterOp.includes(".")) {
        if (afterOp === "") {
            afterOp = "0.";
            display.innerHTML += "0.";
        } else {
            afterOp += ".";
            display.innerHTML += ".";
        }
    }
}

function clearAll() {
    display.innerHTML = "";
    BeforeOp = "";
    afterOp = "";
    operation = "";
}

function clearEntry() {
    display.innerHTML = "";
    afterOp = "";
}

function appendOperator(op) { 
    if (display.innerHTML === "") return;

    BeforeOp = display.innerHTML;
    operation = op;
    afterOp = "";
    display.innerHTML = ""; // clear to accept next number
}

function calculate() {
    if (BeforeOp === "" || afterOp === "" || !operation) return;

    const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => b !== 0 ? a / b : "Error"
    };

    const a = parseFloat(BeforeOp);
    const b = parseFloat(afterOp);

    result = operations[operation]?.(a, b);
    display.innerHTML = isNaN(result) ? "Error" : `${result.toFixed(2)}`;

    // Reset state for next operation
    BeforeOp = "";
    afterOp = "";
    operation = "";
}
