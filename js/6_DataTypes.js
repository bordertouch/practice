"use strict";
// ПРИМИТИВЫ:

let number = 4.6;
console.log(4/0);  // получим тип данных infinity - бесконечность


console.log('string'*9); // NaN - not a number

const persone = 'Alex';

const bool = true;

console.log(something); //получим тип данных null - ничего, т.к. нету такой переменой

let und;
console.log(und); // получим undefined т.к. не определена переменная

// ОБЪЕКТЫ:

const obj = {
    name: 'John',
    age: 25,
    isMarried: false
};
console.log(obj.name);
console.log(obj['name']); // устаревший метод

let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 5, {}, []]; // массив - частный случай объекта, четкая последовательность
console.log(arr[0]);