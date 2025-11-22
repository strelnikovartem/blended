function foo(a, b, c) {
  return a + b + c;
}

const arrowFoo = (...a) => {
  return a;
};

console.log(foo(1, 2, 3));
console.log(arrowFoo(2, 3, 4));
