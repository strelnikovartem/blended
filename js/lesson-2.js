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

function checkLogin(array) {
  for (const item of array) {
    const name = prompt('Enter your name');
    if (item === name) {
      console.log(item);
    }
  }
}

const logins = ['Peter', 'John', 'Igor', 'Sasha'];

checkLogin(logins);

//!task-3

const add = function () {
  const args = Array.from(arguments);
  let total = 0;

  for (const item of args) {
    total += item;
  }
  return total;
};

console.log(add(1, 2, 3));
add(10, 20, 30, 40);
add(100, 200, 300, 400, 500);
