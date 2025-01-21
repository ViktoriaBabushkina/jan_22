//1 задание
let str;
str = `abcde`;
console.log(str)
console.log(str[0])
console.log(str[1])
console.log(str[4])
//2 задание
let a = parseInt(prompt("Введите первое число:"));
let b = parseInt(prompt("Введите второе число:"));
console.log(a > 0 || b > 0);
//3 задание
let age = parseInt(prompt("Возраст пользовителя:"));
if (age >= 18) {
    console.log(`Совершеннолетний`)
} else {
    console.log(`Несовершеннолетний`)
}
//1 свое задание
let x = parseInt(prompt("Значение Х:"));
let y = parseInt(prompt("Значение Y:"));
let z = x+y;
console.log(z)
//2 свое задание
function linearEquation(v, k) {
    return -k/v;
}
let v = 10;
let k = 11;
let result = linearEquation(v, k)
console.log(`Результат ${result}`)