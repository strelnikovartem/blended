function each(array, callback) {
  const res = [];

  for (const item of array) {
    res.push(callback(item));
  }
  return res;
}

console.log(
  each([24, 61, 13, 33], function (value) {
    return value * 2;
  })
);
console.log(
  each([24, 61, 13, 33], function (value) {
    return value - 10;
  })
);
