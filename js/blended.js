const array = [1, 2, 3, 4, 5];

const newArr = arr => arr.reduce((acc, el) => acc + el, 0);

console.log(newArr(array));
