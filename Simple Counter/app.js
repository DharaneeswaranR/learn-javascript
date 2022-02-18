let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count++
    countEl.innerText = count
    console.log("count = " + count)
}

function save() {
    let saveCount = count + " - "
    saveEl.innerText += saveCount
    console.log("Saved")
}