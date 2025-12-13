//!task-1

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.map(num => num ** 2));

//?task-2

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const values = arr => arr.flatMap(item => item.values);

// console.log(values(data));

//*task-3

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const findMan = arr => arr.some(item => item.age < 20);

// console.log(findMan(people));

//!task-4

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const allNumbers = arr => arr.every(num => num % 2 === 0);

// console.log(allNumbers(numbers));

//!task-gpt

// Дано масив людей.
// Треба повернути імена всіх людей, яким від 20 до 30 років включно,
// відсортувати їх за віком зростанням і повернути масив імен.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
//   { name: 'Ann', age: 25 },
//   { name: 'Nick', age: 30 },
// ];

// const namePeople = arr =>
//   arr
//     .filter(obj => obj.age >= 20 && obj.age <= 30)
//     .toSorted((a, b) => a.age - b.age)
//     .map(obj => obj.name);

// console.log(namePeople(people));

//!task-5

// Знайдіть перше непарне число

// const numbers = [2, 13, 6, 8, 9, 10, 12];

// const notNum = arr => arr.find(num => num % 2 !== 0);

// console.log(notNum(numbers));

//!task-6

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const sortedArray = arr => arr.toSorted((a, b) => a - b);

// console.log(sortedArray(numbersArray));

//!task-7

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const stringSort = arr => arr.toSorted((a, b) => a.localeCompare(b));

// console.log(stringSort(stringArray));

//!task-8

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const sortObj = arr => arr.toSorted((a, b) => a.age - b.age);

// console.log(sortObj(users));

//!task-9

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const newArrUsers = arr => arr.filter(obj => obj.age > 20);

// console.log(newArrUsers(user));

//!task-10

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sum = arr => arr.reduce((acc, num) => acc + num, 0);

// console.log(sum(numbers));

//!task-11

// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:
// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

//!lesson

// class Car {
//   #price;
//   constructor(obj) {
//     this.brend = obj.brend;
//     this.model = obj.model;
//     this.#price = obj.price;
//   }

//   getPrice() {
//     return this.#price;
//   }

//   setPrice(newPrice) {
//     if (typeof newPrice !== 'number') {
//       console.log('Invalid data');
//       return;
//     }
//     this.#price = newPrice;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (typeof newPrice !== 'number') {
//     }
//     this.#price = newPrice;
//   }
// }

// const audi = new Car({ brend: 'Audi', model: 'Q7', price: 70000 });

// audi.price = 90;

// console.log(audi);

//!task next

// const products = [
//   { name: 'Laptop', price: 20000, amount: 4 },
//   { name: 'Phone', price: 8000, amount: 10 },
//   { name: 'Tablet', price: 12000, amount: 3 },
//   { name: 'TV', price: 15000, amount: 2 },
// ];

// const newArray = arr =>
//   arr
//     .map(obj => {
//       return {
//         name: obj.name,
//         total: obj.price * obj.amount,
//       };
//     })
//     .toSorted((a, b) => a.total - b.total);
// console.log(newArray(products));

//!task - ??

// const products = [
//   { name: 'Laptop', price: 20000, amount: 4 },
//   { name: 'Phone', price: 8000, amount: 10 },
//   { name: 'Tablet', price: 12000, amount: 3 },
//   { name: 'TV', price: 15000, amount: 2 },
// ];

// const newArray = arr =>
//   arr
//     .filter(obj => obj.amount > 3)
//     .map(obj => ({
//       name: obj.name,
//       priceWithTax: obj.price * 1.2,
//     }))
//     .toSorted((a, b) => b.priceWithTax - a.priceWithTax);

// console.log(newArray(products));

// Є масив товарів. Потрібно:

// Знайти товари, у яких amount > 3.

// Для кожного такого товару створити новий обєкт:

// { name, priceWithTax }

// priceWithTax = price * 1.2 (додай 20% податку)

// Відсортувати результат за priceWithTax від більшого до меншого.

// Повернути масив назв товарів у такому порядку.

//? next

// const user = {
//   name: 'Olena',
//   showThis() {
//     console.log('this', this);
//   },
// };

// user.showThis;
