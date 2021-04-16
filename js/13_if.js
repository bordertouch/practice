'use strict';

if (4 == 5) {
    console.log('ok!');
}

if (4 == 4) {
    console.log('ok!');
} 

if (4 == 5) {
    console.log('ok!');
} else {
    console.log('error');
}

const num = 50;
if (num < 49) {
    console.log('error');
} else if (num >100) {
    console.log('another error');
} else {
    console.log('num equals 50');
}

(num === 50) ? console.log('ok') : console.log('ne ok');

// +'4' - унарный оператор
// 4 + 4 - бинарный оператор
// () ? : - тернарный оператор

const n = 10;
// switch - оператор для строгого сравнения ( не < или >, а =), МОЖНО СРАВНИТЬ И СТРОКИ
// (1)
switch (n) {
    case 9:
        console.log('false');
        break;
    case 11:
        console.log('false');
        break;
    case 10:
        console.log('true');
        break;
}

// (2)
switch (n) {
    case 9:
        console.log('false');
        break;
    case 11:
        console.log('false');
        break;
    case 121212:
        console.log('true');
        break;
    default:                              // условие по умолчанию
        console.log('no coincidence');
}

const m = 'string';
switch (m) {
    case 'str':
        console.log('false');
        break;
    case 'strin':
        console.log('false');
        break;
    case 'string':
        console.log('true');
        break;
}