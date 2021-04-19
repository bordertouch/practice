'use strict';

const str = 'string';
console.log(str.length);
console.log(str[2]);
const STR = str.toUpperCase();
console.log(STR);

const arr = [1, 3, 64]
console.log(arr.length);

// ПОИСК ПОДСТРОКИ
let fruits = 'I have some fruits';
console.log(fruits.indexOf('some'));
console.log(fruits.indexOf('jerme'));

const logg = 'Hello world';
console.log(logg.slice(6, 11)); // первый и последний элемент
console.log(logg.slice(6)); // можно указать только первый элемент
console.log(logg);
console.log(logg.substr(6, 5)); // с какого элемента + сколько символов
 
console.log(Math.sqrt(4));

const num = 12.2;
console.log(Math.round(num));

const testNum = '12.2px';
console.log(parseInt(testNum));
console.log(parseFloat(testNum));
console.log(testNum);