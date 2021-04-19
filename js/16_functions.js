'use strict';

function showMeMessage1() {
    console.log('Hello world!');
}
showMeMessage1();


function showMeMessage2(text) {
    console.log(text);
    let num = 20;
}
showMeMessage2('privet pedikii');
// console.log(num); - не можем достать локальную переменную num из функции

let numb = 25;
function showMeMessage3(text) {
    console.log(text);
    numb = 10;                  // изменили глобальную переменную внутри функции
}
showMeMessage3('pupsik');
console.log(numb);

let numbr = 25;
function showMeMessage4(text) {
    console.log(text);
    let numbr = 10;                  // добавляем локальную переменную
    console.log(numbr);
}
showMeMessage4('local var');
console.log(numbr);

function calc(a, b) {
    return (a + b);
}
console.log(calc(7, 3));

// функция не помещенная в переменную работает от начала до конца созданого кода!!!
function ret() {
    let num = 30;
    return num;     // возвращаем из-вне функции 
}
const anotherNum = ret();
console.log(anotherNum);

// функция помещенная в переменную, работает только после ее назначения!!!
const logger = function() {
    console.log('Hello everybody');
}; // в таком случае ставим семиколон
logger();

const calc2 = (a, b) => a + b; // стрелочная функция
console.log(calc2(5, 5));
