function calc(a, b, callback) {
  const str = 'lol';
  console.log(str);
  return callback(a, b);
}

function fnA(d, f) {
  return d + f;
}

function fnB(s, w) {
  return s - w;
}

console.log(calc(1, 2, fnB));
