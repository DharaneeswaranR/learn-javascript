let passEl1 = document.getElementById("pass-el-1")
let passEl2 = document.getElementById("pass-el-2")
let passEl3 = document.getElementById("pass-el-3")
let passEl4 = document.getElementById("pass-el-4")


function getPassword() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~\\`|}{[]:;?><,./-="
    let password = ""

    for (let i = 0; i < 16; i++) {
        let char = chars[Math.floor(Math.random() * 92)]
        password += char
    }

    return password
}

function generatePassword() {
    passEl1.textContent = getPassword()
    passEl2.textContent = getPassword()
    passEl3.textContent = getPassword()
    passEl4.textContent = getPassword()
}
