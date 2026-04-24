const add = ((a, b) => a + b);
const substract = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const divide = ((a, b) => a / b);

let num1 = null;
let operator = null;
let num2 = null;

const operate = ((operator, a, b) => {
    switch (operator) {
        case '+': return add(a, b);
        case '-': return substract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: return null;
    }
});

const display = document.querySelector(".display");
const nums = document.querySelectorAll("#num");

let currentNum = "";
const addNum = ((num) => {
    currentNum += num;
    display.textContent = currentNum;
});

nums.forEach(button => {
    button.addEventListener("click", () => {
        addNum(button.textContent);
    });
});
