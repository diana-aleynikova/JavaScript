// --1--
function showMessage(name, city) {
    console.log("Hello, my name is "+name+" I am from "+city);
}
showMessage("Nata", "Kyiv");
showMessage("Olga", "Lviv");

// --2--
let userName = "Ann"
const sayHi = function () {
    let message = "Hello, my name Ivan"
    console.log(message + userName)
}
sayHi();

// --3--
function sum(a, b) {
    return a + b;
}
let result = sum(7, 8);
console.log(result);

// --4--
const testFunk = function (a, b) {
    console.log("a :", a);
    console.log("b :", b);

    return;
};
testFunk(5, 8);

// --5--
const a = function () {
    c();
    console.log("function a");
    b();
};
const b = function () {
    console.log("function b");
};
const c = function () {
    console.log("function c");
};

a();

// --6--
const addName = function () {
    const arg = Array.from(arguments);
    console.log(arguments);
    console.log(arg);
};
addName(1, 3, 5);
addName(1, 3, 5, 67, 55);

// --7--
const addName1 = function (...arg1) {
    console.log(arg1);
}
addName1(1, 3, 5);
addName1(1, 3, 5, 85, 67);

// --8--
function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    }
    else {
        no();
    }
}
function showOk() {
    console.log("You say ok");
}
function showCancel() {
    console.log("You say No");
}
ask("Yes or No?", showOk, showCancel);

// --9--

const hello = function (name) {
    console.log(`Hello, ${name}`)
};
const searcName = function (callback) {
    const name = "Ivan";
    callback(name);
};
searcName("Hello");

// --10--
function checkAge(age) {
    if (age > 18) {
        return console.log("Hello");
    }
    return console.log("Good Bye");
}
checkAge(12);

// --11--
function showMovie(age) {
    if (age < 21) {
        return
    }
    return console.log("Go to movie");
}
showMovie(21);

// --12--
const test = (arg) => {
    console.log(arg);
};
test("hello");

// --13--
const showMovie1 = (age) => {
    if (age < 21) {
        return console.log("Hello!");
    }
    return console.log("Buy!");
};
showMovie1(12);

// --14--
const a1 = () => {
    console.log("a");
};
const b1 = () => {
    console.log("b");
};
const c1 = () => {
    console.log("c");
    a1();
    b1();
};
c1();

// --15--
const addNumber = (number) => {
    let summ = Number(number) + 10;
    return console.log(summ);
};
const numberRef = document.querySelector('input[name ="number"]');
const buttonRef = document.querySelector("button");
buttonRef.addEventListener('click', () => {
    console.log(numberRef.value);
});
