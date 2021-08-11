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
// alert(5 % 2); // 1, остаток от деления 5 на 2
// alert(8 % 3); // 2, остаток от деления 8 на 3
// alert(2 ** 2); // 4  (2 умножено на себя 2 раза)
// alert(2 ** 3); // 8  (2 * 2 * 2, 3 раза)
// alert(2 ** 4); // 16 (2 * 2 * 2 * 2, 4 раза)
// let s = "моя" + "строка";
// alert(s); // моястрока
// let x = 1;
// alert(+x); // 1
// // Не влияет на числа
// let x = 1;
// alert(+x); // 1
// let y = -2;
// alert(+y); // -2
// // Преобразует не числа в числа
// alert(+true); // 1
// alert(+""); // 0
// let apples = "2";
// let oranges = "3";
// // оба операнда предварительно преобразованы в числа
// alert(+apples + +oranges); // 5
// более длинный вариант
// alert( Number(apples) + Number(oranges) ); // 5

//ЗАДАЧИ
// "" + 1 + 0; //"10"
// "" - 1 + 0; //-1
// true + false; //1
// 6 / "3"; //2
// "2" * "3"; //6
// 4 + 5 + "px"; //"9px"
// "$" + 4 + 5; //"$45"
// "4" - 2; //2
// "4px" - 2; //NaN
// 7 / 0; //Infinity
// "  -9  " + 5; //" -9 5"
// "  -9  " - 5; //-14
// null + 1; //1
// undefined + 1; //NaN
// " \t \n" - 2; //-2

// WHILE FOR
// let i = 0;
// while (i < 3) {
// 	alert(i);
// 	i++;
// }

// let i = 0;
// do {
// 	alert(i);
// 	i++;
// } while (i < 3);

// for (let i = 0; i < 3; i++) {
// 	alert(i);
// }

// SWITCH
// let a = 2 + 2;

// switch (a) {
// 	case 3:
// 		alert("Маловато");
// 		break;
// 	case 4:
// 		alert("В точку!");
// 		break;
// 	case 5:
// 		alert("Перебор");
// 		break;
// 	default:
// 		alert("Нет таких значений");
// }

//FUNCTION EXPRESSION
// let sayHi = function() {
//     alert( "Привет" );
//   };

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   function showOk() {
//     alert( "Вы согласны." );
//   }

//   function showCancel() {
//     alert( "Вы отменили выполнение." );
//   }

//   // использование: функции showOk, showCancel передаются в качестве аргументов ask
//   ask("Вы согласны?", showOk, showCancel);

// Анонимные функции
//   function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

//   let age = 16; // присвоим для примера 16

// if (age < 18) {
//   welcome();               // \   (выполнится)
//                            //  |
//   function welcome() {     //  |
//     alert("Привет!");      //  |  Function Declaration доступно
//   }                        //  |  во всём блоке кода, в котором объявлено
//                            //  |
//   welcome();               // /   (выполнится)

// } else {

//   function welcome() {
//     alert("Здравствуйте!");
//   }
// }

// // здесь фигурная скобка закрывается,
// // поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.

// welcome(); // Ошибка: welcome is not defined

// Что можно сделать, чтобы welcome была видима снаружи if?
// let age = prompt("Сколько Вам лет?", 18);

// let welcome;

// if (age < 18) {
// 	welcome = function () {
// 		alert("Привет!");
// 	};
// } else {
// 	welcome = function () {
// 		alert("Здравствуйте!");
// 	};
// }

// welcome(); // теперь всё в порядке

// ARROW FUNCTIONS BASICS
// let sum = (a, b) => a + b;

// /* Более короткая форма для:

// let sum = function(a, b) {
//   return a + b;
// };
// */

// alert(sum(1, 2)); // 3

// Объекты
// let user = new Object(); // синтаксис "конструктор объекта"
// let user = {}; // синтаксис "литерал объекта"

// let user = {
// 	name: "John",
// 	age: 30,
// };
// // получаем свойства объекта:
// alert(user.name); // John
// alert(user.age); // 30
// user.isAdmin = true;
// delete user.age;

// //Объект, объявленный через const, может быть изменён
// const user = {
// 	name: "John",
// };

// user.name = "Pete";

// alert(user.name); // Pete

// //Вычисляемые свойства
// let fruit = prompt("Какой фрукт купить?", "apple");

// let bag = {
// 	[fruit]: 5, // имя свойства будет взято из переменной fruit
// };

// alert(bag.apple); // 5, если fruit="apple"

// //Проверка существования свойства, оператор «in»
// let user = { name: "John", age: 30 };

// alert("age" in user); // true, user.age существует
// alert("blabla" in user); // false, user.blabla не существует

// let key = "age";
// alert(key in user); // true, имя свойства было взято из переменной key

// //Цикл «for…in»
// let user = {
// 	name: "John",
// 	age: 30,
// 	isAdmin: true,
// };

// for (let key in user) {
// 	// ключи
// 	alert(key); // name, age, isAdmin
// 	// значения ключей
// 	alert(user[key]); // John, 30, true
// }

// КОПИРОВАНИЕ ОБЪЕКТОВ И ССЫЛКИ
//Переменная хранит не сам объект, а его «адрес в памяти», другими словами «ссылку» на него:
let user = {
	name: "Иван",
};
//Сам объект хранится где-то в памяти. А в переменной user лежит «ссылка» на эту область памяти.
//Когда переменная объекта копируется – копируется ссылка, сам же объект не дублируется
let user = { name: "Иван" };
let admin = user; // копируется ссылка

//Сравнение по ссылке
//Операторы равенства == и строгого равенства === для объектов работают одинаково.
let a = {};
let b = a; // копирование по ссылке

alert(a == b); // true, т.к. обе переменные ссылаются на один и тот же объект
alert(a === b); // true

//В другом примере два разных объекта не равны, хотя оба пусты:
let a = {};
let b = {}; // два независимых объекта

alert(a == b); // false

//Клонирование и объединение объектов, Object.assign
let user = {
	name: "Иван",
	age: 30,
};

let clone = {}; // новый пустой объект

// скопируем все свойства user в него
for (let key in user) {
	clone[key] = user[key];
}

// теперь в переменной clone находится абсолютно независимый клон объекта
clone.name = "Пётр"; // изменим в нём данные

alert(user.name); // в оригинальном объекте значение свойства `name` осталось прежним – Иван.

//Object.assign
let user = { name: "Иван" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);

// теперь user = { name: "Иван", canView: true, canEdit: true }
//Если принимающий объект (user) уже имеет свойство с таким именем, оно будет перезаписано:
let user = { name: "Иван" };

Object.assign(user, { name: "Пётр" });

alert(user.name); // теперь user = { name: "Пётр" }

//Мы также можем использовать Object.assign для замены for..in на простое клонирование:
let user = {
	name: "Иван",
	age: 30,
};

let clone = Object.assign({}, user);

//Вложенное клонирование
let user = {
	name: "Иван",
	sizes: {
		height: 182,
		width: 50,
	},
};

alert(user.sizes.height); // 182

// Теперь при клонировании недостаточно просто скопировать clone.sizes = user.sizes, поскольку user.sizes – это объект, он будет скопирован по ссылке. А значит объекты clone и user в своих свойствах sizes будут ссылаться на один и тот же объект:
let user = {
	name: "Иван",
	sizes: {
		height: 182,
		width: 50,
	},
};

let clone = Object.assign({}, user);

alert(user.sizes === clone.sizes); // true, один и тот же объект

// user и clone обращаются к одному sizes
user.sizes.width++; // меняем свойство в одном объекте
alert(clone.sizes.width); // 51, видим результат в другом объекте

// Чтобы исправить это, мы должны в цикле клонирования делать проверку, не является ли значение user[key] объектом, и если это так – скопировать и его структуру тоже. Это называется «глубокое клонирование».

// Мы можем реализовать глубокое клонирование, используя рекурсию. Или, чтобы не изобретать велосипед, использовать готовую реализацию — метод _.cloneDeep(obj) из JavaScript-библиотеки lodash.
