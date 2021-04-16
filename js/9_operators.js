'use strict';

console.log('arr' + '- object'); // конкотенация строк
console.log(4 + '5');
console.log(4 + +'5');

// (1)
let incr = 10,
    decr = 10;

incr++; // инкремент увеличивает на 1, постфиксная форма записси
decr--; // дикремент уменьшает на 1, постфиксная форма записи
++incr; // префиксная форма
--decr; // префиксная форма

console.log(incr);
console.log(decr);

// (2)
let incr = 10,
    decr = 10;

console.log(incr++); // запишет в память (КАК БЫ НА БУДУЩЕЕ) - постфикс
console.log(decr--); // запишет в память (КАК БЫ НА БУДУЩЕЕ) - постфикс
console.log(incr);
console.log(decr);

// (3)
let incr = 10,
    decr = 10;

console.log(++incr); // значение изменится сразу - префикс
console.log(--decr); // значение изменится сразу - префикс

 
console.log(5%2);
console.log(2*4 == 8);
console.log(2*4 == '8');
console.log(2*4 === '8'); // строгое сравнение, с учетом типа данных
console.log(2 + 2 * 2 == 8);
console.log(2 + 2 * 2 !== 8);

// && - and
// || - or

const isCheked = true,
      isClosed = false;

console.log(isCheked && isClosed);
console.log(isCheked || isClosed);
console.log(!isCheked || isClosed); // ! - оператор отрицания