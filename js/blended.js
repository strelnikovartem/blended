const array = [1, 2, 3, 4, 5];

const newArr = arr => arr.map(num => Math.pow(num, 2));

console.log(newArr(array));
