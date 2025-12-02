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
