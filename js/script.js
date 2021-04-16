// "use strict"; строка для использования актуальной реализации js
let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);
// пример того что константу можно переопределить:
const obj = {
    a:50
};
obj.a = 33;
console.log(obj);    

// console.log(number2); не можем обратится к переменной до ее инициализации:
let number2 = 11;

{
    let result = 20;
}
// console.log(result); можем обратиться только в скобочках (не определяет)
a = 19;