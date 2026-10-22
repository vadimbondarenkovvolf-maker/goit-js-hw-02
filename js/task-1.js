//Задачf 1: замовлення дроїдів.
/*
-У файлі task-1.js оголоси функцію makeTransaction(quantity, pricePerDroid). Вона має обчислити вартість усіх дроїдів і повернути повідомлення з цим значенням.
-Оголоси функцію з двома параметрами у порядку:
    quantity — число, кількість замовлених дроїдів
    pricePerDroid — число, вартість одного дроїда
-У тілі функції помнож quantity на pricePerDroid і збережи результат.
-Створи повідомлення шаблонним рядком, підставивши quantity і загальну вартість.
-Поверни рядок оператором return.
-Додай після функції три виклики console.log з ТЗ і звір текст у консолі.
-Додатково перевір функцію з іншими валідними числами.
*/
'use strict';

function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = pricePerDroid * quantity;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
//перевірка валідними числами.
console.log(makeTransaction(7, 5600)); // "You ordered 7 droids worth 39200 credits!"
console.log(makeTransaction(2, 1500)); // "You ordered 2 droids worth 3000 credits!"