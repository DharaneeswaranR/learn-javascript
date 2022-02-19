let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function add() {
    let res = num1 + num2
    sumEl.textContent = "Sum: " + res
}

function subtract() {
    let res = num1 - num2
    sumEl.textContent = "Sum: " + res
}

function divide() {
    let res = num1 / num2
    sumEl.textContent = "Sum: " + res
}

function multiply() {
    let res = num1 * num2
    sumEl.textContent = "Sum: " + res
}

