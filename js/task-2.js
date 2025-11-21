function calc(a, b, callback) {
  const str = 'lol';
  console.log(str);
  return callback(a, b);
}

// function fnA(d, f) {
//   return d + f;
// }

console.log(
  calc(1, 2, function (q, w) {
    return q + w;
  })
);

console.log(
  calc(10, 2, function (q, w) {
    return q - w;
  })
);
