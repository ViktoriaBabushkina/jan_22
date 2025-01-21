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