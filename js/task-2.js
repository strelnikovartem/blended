function foo(a, b, c) {
  return a + b + c;
}

const arrowFoo = (a, b, c) => {
  return a + b + c;
};

console.log(foo(1, 2, 3));
console.log(arrowFoo(2, 3, 4));
