//!task-1

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];

// styles.push('rock-n-roll');

// const idx = styles.indexOf('blues');

// styles[idx] = 'classic';

// console.log(idx);

// console.log(styles);

//!task-2

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// function checkLogin(array) {
//   const userName = prompt("Введіть ваше ім'я:");

//   if (userName === null || userName.trim() === '') {
//     alert('Скасовано');
//     return;
//   }

//   // Робимо порівняння нечутливим до регістру:
//   const normalizedName = userName.toLowerCase();
//   const normalizedArray = array.map(name => name.toLowerCase());

//   if (normalizedArray.includes(normalizedName)) {
//     // Знаходимо оригінальне ім’я, щоб вивести з великої букви
//     const originalName = array.find(
//       name => name.toLowerCase() === normalizedName
//     );
//     alert(`Welcome, ${originalName}!`);
//   } else {
//     alert('User not found');
//   }
// }

// const logins = ['Peter', 'John', 'Igor', 'Sasha'];

// checkLogin(logins);

//!task-3 ????????????

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

//!task-4

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sum(params) {
//   const res = [];

//   for (let i = 0; i < params.length - 1; i++) {
//     const total = params[i] + params[i + 1];
//     res.push(total);
//   }
//   return res;
// }

// console.log(sum(someArr));

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

//!task-5

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// function findSmallestNumber(numbers) {
//   let min = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (i === 0) {
//       min = numbers[i];
//     } else if (numbers[i] < min) {
//       min = numbers[i];
//     }
//   }
//   return min;
// }

// const numbers = [12, 5, 35, 56, 1, 24, 7, 80, 3];

// console.log(findSmallestNumber(numbers));
//!task-6

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

//!task-7

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

//!task-8

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

//!task-9

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

//!task-10

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];

//task - 11

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   balance: 0,

//   transactions: [],

//   createTransaction(amount, type) {
//     const obj1 = { id: amount, amount, type };
//     return obj1;
//   },

//   deposit(amount) {
//     this.balance += amount;

//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);

//     this.transactions.push(transaction);
//   },

//   withdraw(amount) {
//     if (this.balance < amount) {
//       console.log('NO');
//       return;
//     }

//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

//     this.transactions.push(transaction);
//   },

//   getBalance() {
//     return this.balance;
//   },

//   getTransactionDetails(id) {
//     for (const item of this.transactions) {
//       if (item.id === id) {
//         return item;
//       }
//     }
//     return 'Not found';
//   },

//   getTransactionTotal(type) {
//     let res = 0;

//     for (const item of this.transactions) {
//       if (item.type === type) {
//         res += item.amount;
//       }
//     }
//     return res;
//   },
// };

// account.deposit(300);
// account.deposit(500);

// console.log(account);

//! m-9

// const LS_KEY = 'array of names';

// const names = ['Alice', 'Bob', 'Jeck'];

// localStorage.setItem(LS_KEY, JSON.stringify(names));

// const arr = localStorage.getItem(LS_KEY);

// console.log(JSON.parse(arr));

//!form

//!call-back

// // Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// console.log(arrowAdd(1, 2, 3, 5));

//!Obj
