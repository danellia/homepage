function task1() {
    let name1 = prompt(`1. Как вас зовут?`, ``);
    let name2 = prompt(`2. А ваше имя?`, ``);

    min = Math.ceil(0);
    max = Math.floor(100);
    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(`${name1} подходит к ${name2} на ${result} процентов!`);
}

function task2() {
    let names = ['Дима', 'Катя', 'Петр', 'Лена']
    let result = names[Math.floor(Math.random() * names.length)];
    alert(`${result} оплачивает ужин!`);
}

function task3() {
    let weight = parseInt(prompt(`Ваш вес?`, ``))
    let height = parseInt(prompt(`Ваш рост?`, ``))

    let result = 10000 * weight / Math.pow(height, 2)

    if (result <= 18.5) {
        alert('Недостаточный вес!')
    }
    else if (result <= 25) {
        alert('Норма!')
    } else if (result <= 30) {
        alert('У вас излишек веса!')
    } else if (result > 30) {
        alert('Ожирение!')
    }
}

function task4() {
    let year = parseInt(prompt(`Введите год`, ``))

    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
        alert('Високосный год')
    } else {
        alert('Не является високосным')
    }
}