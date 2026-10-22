//Задача 2: доставка товару.
/*
-У файлі task-2.js оголоси функцію getShippingMessage(country, price, deliveryFee). Функція має додати вартість доставки до ціни товару і повернути повідомлення про повну вартість.
-Оголоси функцію з трьома параметрами у порядку:
    country — рядок, країна доставки
    price — число, вартість товару
    deliveryFee — число, вартість доставки
-У тілі функції додай price і deliveryFee.
-Створи шаблонний рядок і підстав у нього country та повну вартість.
-Поверни рядок оператором return.
-Додай після функції три виклики console.log з ТЗ та звір отримані рядки.
*/
'use strict';

function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"