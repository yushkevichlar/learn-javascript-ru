"use strict";
// VARIABLES
// let admin;
// let name;
// name = "Джон";
// admin = name;
// alert(admin);

// TYPES
// let name = "Ilya";
// alert(`hello ${1}`);
// alert(`hello ${"name"}`);
// alert(`hello ${name}`);

// ALERT, PROMPT, CONFIRM
// let age = prompt("Сколько тебе лет?", 100);
// alert(`Тебе ${age} лет!`);

// let isBoss = confirm("Ты здесь главный?");
// alert(isBoss);

// let userName = prompt("Как тебя зовут?", "");
// alert(`Тебя зовут ${userName}`);

// TYPE CONVERSIONS
// 1. Строковое преобразование
// let value = true;
// value = String(value);
// alert(typeof value);
// 2. Численное преобразование
// alert("6" / "2");
// let str = "123";
// alert(typeof str);
// let num = Number(str);
// alert(typeof num);
// 3. Логическое преобразование
// alert(Boolean(1)); // true
// alert(Boolean(0)); // false
// alert(Boolean("Привет!")); // true
// alert(Boolean("")); // false

// OPERATORS
alert(5 % 2); // 1, остаток от деления 5 на 2
alert(8 % 3); // 2, остаток от деления 8 на 3
alert(2 ** 2); // 4  (2 умножено на себя 2 раза)
alert(2 ** 3); // 8  (2 * 2 * 2, 3 раза)
alert(2 ** 4); // 16 (2 * 2 * 2 * 2, 4 раза)
let s = "моя" + "строка";
alert(s); // моястрока
let x = 1;
alert(+x); // 1
// Не влияет на числа
let x = 1;
alert(+x); // 1
let y = -2;
alert(+y); // -2
// Преобразует не числа в числа
alert(+true); // 1
alert(+""); // 0
let apples = "2";
let oranges = "3";
// оба операнда предварительно преобразованы в числа
alert(+apples + +oranges); // 5
// более длинный вариант
// alert( Number(apples) + Number(oranges) ); // 5

//ЗАДАЧИ
"" + 1 + 0; //"10"
"" - 1 + 0; //-1
true + false; //1
6 / "3"; //2
"2" * "3"; //6
4 + 5 + "px"; //"9px"
"$" + 4 + 5; //"$45"
"4" - 2; //2
"4px" - 2; //NaN
7 / 0; //Infinity
"  -9  " + 5; //" -9 5"
"  -9  " - 5; //-14
null + 1; //1
undefined + 1; //NaN
" \t \n" - 2; //-2
