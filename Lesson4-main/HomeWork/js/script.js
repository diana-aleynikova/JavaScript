//  -- 1 --
// Напишіть функцію `printUser`, яка приймає ім’я та місто
// і виводить у консоль повідомлення у форматі:
// "My name is NAME and I live in CITY".
// Викличте функцію двічі з різними даними.

function printUser(name, city) {
    console.log("My name is "+name+" and I live in "+city);
}
printUser("Nata", "Kyiv");

//  -- 2 --
// Створіть змінну `userAge`.
// Напишіть функціональний вираз, який використовує цю змінну
// і виводить у консоль повідомлення залежно від віку
// (наприклад: доступ дозволено або заборонено).
const input = prompt("Input age: ");
function userAge(age) {
    if (age > 18) {
        return console.log("Hello!");
    }
    return console.log("Buy!");
}
userAge(input);



//  -- 3 --
// Напишіть функцію `calculateSum`, яка приймає два числа
// і повертає їх суму.
// Збережіть результат у змінну та виведіть у консоль.
function calculateSum(num1, num2) {
    return Number(num1) + Number(num2);
}
const a = prompt("Input number 1: ");
const b = prompt("Input number 2: ");
    
const result = calculateSum(a, b);
console.log(result);


//  -- 4 --
// Створіть три функції:
// `firstFunc`, `secondFunc`, `mainFunc`.
// Функція `mainFunc` повинна:
// 1) виводити повідомлення в консоль
// 2) викликати `firstFunc`
// 3) викликати `secondFunc`.
// Викличте `mainFunc`.

const firstFunc = () => {
    console.log("firstFunc");
};
const secondFunc = () => {
    console.log("secondFunc");
};

const mainFunc = () => {
    firstFunc();
    secondFunc();
};
mainFunc();



//  -- 5 --
// Створіть кнопку та input для числа.
// Напишіть функцію, яка приймає число з input
// і додає до нього 5.
// При кліку на кнопку:
// 1) зчитати значення з input
// 2) передати його у функцію
// 3) вивести результат у консоль.

const addNumber = (number) => {
    let summ = Number(number) + 10;
    return console.log(summ);
};
const numberRef = document.querySelector('input[name ="number"]');
const buttonRef = document.querySelector("button");
buttonRef.addEventListener('click', () => {
    console.log(numberRef.value + " + 5 = "+ (Number(numberRef.value)+5));
});
