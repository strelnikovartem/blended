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

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

function sum(params) {
  let res = [];

  for (const item of params) {
    console.log(item);
    const two = item + item;
    res.push(two);
  }
  return res;
}

console.log(sum(someArr));

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
