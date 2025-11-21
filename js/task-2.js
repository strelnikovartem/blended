function each(array, callback) {
  for (const item of array) {
    console.log(item);
  }
}

console.log(
  each([24, 61, 13, 33], function (value) {
    return value * 2;
  })
);
