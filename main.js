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
let value = true;
value = String(value);
alert(typeof value);
// 2. Численное преобразование
alert("6" / "2");
let str = "123";
alert(typeof str);
let num = Number(str);
alert(typeof num);
// 3. Логическое преобразование
alert(Boolean(1)); // true
alert(Boolean(0)); // false
alert(Boolean("Привет!")); // true
alert(Boolean("")); // false
