let value = 0

let valueEl = document.getElementById("value-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

valueEl.value = value

function getFeet(meter) {
    return (meter * 3.2808).toFixed(3)
}

function getMeter(feet) {
    return (feet / 3.2808).toFixed(3)
}

function getGallon(liter) {
    return (liter * 0.26417).toFixed(3)
}

function getLiter(gallon) {
    return (gallon / 0.26417).toFixed(3)
}

function getPounds(kg) {
    return (kg * 2.2046).toFixed(3)
}

function getKg(pounds) {
    return (pounds / 2.2046).toFixed(3)
}

function convert(params) {
    value = valueEl.value
    console.log(parseInt(value))

    lengthEl.textContent = value + " meters = " + getFeet(value) + " feet | " + value + " feet = " + getMeter(value) + " meters"
    volumeEl.textContent = value + " liters = " + getGallon(value) + " gallons | " + value + " gallons = " + getLiter(value) + " liters"
    massEl.textContent = value + " kilograms = " + getPounds(value) + " pounds | " + value + " pounds = " + getKg(value) + " kilograms"
}