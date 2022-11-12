var div = document.getElementById('text')

console.log("brianstorm")

let a = 3
let b = 10

w(`a = ${a}, b = ${b}`)
w(`a + b = ${a + b}`)
w('')

let boba = "Your Text Here"
w(boba)
w(boba.toLowerCase())
w(boba.toUpperCase())
w('')

w(`a - b = ` + (a - b))
w(`a * b = ` + (a * b))
w(`a / b = ` + (a / b))
w(`a ^ b = ` + (Math.pow(a, b)))
w(`a % b = ` + (a % b))
w('')

//задание: сложить 2 строки
let x = 'Даша любит '
let y = 'шоколадные пряники'
w(x + y)

function w(s) {
    div.innerHTML += `<br>` + s
}

//задание: диалог по кнопке
function show() {
    let age = prompt(`What is your name?`, ``);
    alert(`Nice to meet you ${age}!`);
}

//kdocument.getElementById("btn").onclick = show();