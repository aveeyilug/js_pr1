/* 1.	Написать функцию, которая принимает два числа и возвращает результат их умножения(использовать prompt и alert) */
function multiplyNumbers() {
    const num = prompt("Введите первое число: ")
    const num2 = prompt("Введите второе число: ")
    const result = +num * +num2
    alert("Результат: " + result)
}
multiplyNumbers();

/* 2.	Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет"(использовать prompt и alert) */
function getUser() {
    const name = prompt("Введите Ваше имя: ")
    const surname = prompt("Введите Вашу фамилию: ")
    const age = prompt("Введите Ваш возраст: ")
    alert("Привет " + name + " " + surname + " с возрастом " + age + " лет")
}
getUser();

/* 3.	Написать функцию, которая принимает пол человека ('M','F') в виде строки, результат функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не определен" */
function determineGender() {
    let gender = prompt("Введите Ваш пол в формате M/F")
    switch (gender) {
        case 'M': return "Ваш пол мужской";
        case 'F': return "Ваш пол женский";
        default: return "Ваш пол не определен";
    }
}
alert(determineGender())

/* 4.	Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. (использовать switch) */
function getDayOfWeek() {
    let dayOfWeek = prompt("Введите число от 1 до 7")
    switch (dayOfWeek) {
        case '1': return "Понедельник";
        case '2': return "Вторник";
        case '3': return "Среда";
        case '4': return "Четверг";
        case '5': return "Пятница";
        case '6': return "Суббота";
        case '7': return "Воскресенье";
        default: return "День недели не определен";
    }
}
alert(getDayOfWeek())

/* 5.	Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 – зрелый (использовать for, для вывода использовать document.write) */
for (let i = 1; i <= 100; i++) {
    let ageStatus;
    if (i < 18) {
        ageStatus = "Ребенок";
    } else if (i < 31) {
        ageStatus = "Молодой";
    } else if (i < 56) {
        ageStatus = "Зрелый";
    } else {
        ageStatus = "Старый";
    }
    console.log(i + " — " + ageStatus);
}

function getAgeStatus(age) {
    if (age < 18) {
        ageStatus = "Ребенок";
    } else if (age < 31) {
        ageStatus = "Молодой";
    } else if (age < 56) {
        ageStatus = "Зрелый";
    } else {
        ageStatus = "Старый";
    }
    return ageStatus;
}

/* 6.	 Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение (Иван имеет возраст 44 и он зрелый). А также вызвать внутри своей функции, функцию из прошлого задания */
function userInfo() {
    const name = prompt("Введите имя: ")
    const age = prompt("Введите возраст: ")
    const ageStatus = getAgeStatus(age);
    alert(name + " имеет возраст " + age + " и он " + ageStatus);
}
userInfo()

/* 7.	Вывести кнопку с текстом "Привет", при нажатии на неё выводим alert c текстом "Привет Мир!" */

/* 8.	Выводим кнопку с текстом "Заполнить" и незаполненный инпут, при клике на кнопку, заполняем инпут текстом test@email.ru */

/* 9.	Выводим кнопку и инпут, в инпуте можно ввести любой и текст и при нажатии на кнопку, выводится алерт с текстом "Вы ввели 'текст инпута'" или "Вы ничего не ввели в поле". */
function showAlert() {
    const inputText = document.getElementById('userInput').value;
    if (inputText) {
        alert("Вы ввели: " + inputText);
    } else {
        alert("Вы ничего не ввели в поле");
    }
}

/* 10.	Выводим две кнопки "заблокировать" и "разблокировать" и инпут. Одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует */

/* 11.	Вывести любой квадрат и кнопку "скрыть квадрат". Когда мы нажимаем на скрыть, квадрат исчезает и текст кнопки меняется на "показать квадрат" и так можно кликать сколько угодно раз. */
function toggleSquare() {
    const square = document.getElementById('square');
    const button = document.getElementById('toggleButton');
    if(square.style.display === 'none') {
        square.style.display = 'block';
        button.innerText = 'Скрыть квадрат';
    } else {
        square.style.display = 'none';
        button.innerText = 'Показать квадрат';
    }
}

/* 12.	Выводим красный квадрат, при наведении на него он становиться зеленым, а когда уводим курсор от него, обратно красным. */
const colorSquare = document.getElementById('colorSquare');
colorSquare.addEventListener('mouseover', function() {
    colorSquare.style.backgroundColor = 'green';
});
colorSquare.addEventListener('mouseout', function() {
    colorSquare.style.backgroundColor = 'red';
});