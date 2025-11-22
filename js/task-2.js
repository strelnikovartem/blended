function each(array, callback) {
  const res = [];

  for (const item of array) {
    res.push(callback(item));
  }
  return res;
}

console.log(
  each([64, 49, 36, 24], function (value) {
    return value * 2;
  })
);

console.log(
  each([64, 49, 36, 24], function (value) {
    return value - 10;
  })
);

console.log(
  each([64, 49, 36, 25], function (value) {
    return Math.sqrt(value);
  })
);
