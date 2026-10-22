//Задача 3: ширина елемента
/*
-У файлі task-3.js оголоси функцію getElementWidth(content, padding, border). Вона має врахувати горизонтальні padding і border зліва та справа, тому кожне з цих значень додається двічі.
-Оголоси функцію з трьома параметрами у порядку:
    content — число, ширина контенту
    padding — число, горизонтальний паддінг для кожної зі сторін
    border — число, товщина бордера для кожної зі сторін
-Обчисли загальну ширину за формулою content + padding * 2 + border * 2.
-Поверни результат оператором return.
-Додай після функції три виклики console.log з ТЗ.
-Перевір не лише значення, а й тип результату: функція має повертати число.
-Перевір випадки з дробовими значеннями та з нулями.
*/
'use strict';

function getElementWidth(content, padding, border) {
const overallWidth = content + padding * 2 + border * 2;
return overallWidth;
}

console.log(getElementWidth(50, 8, 4)); // 74
console.log(getElementWidth(60, 12, 8.5)); // 101
console.log(getElementWidth(200, 0, 0)); // 200