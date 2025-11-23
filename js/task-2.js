const arr = (...args) => {
  let total = 0;
  args.forEach(item => {
    total += item;
  });

  return total;
};

console.log(arr(1, 2, 3, 4));
console.log(arr(10, 20, 30));
console.log(arr(12, 34, 45, 67, 89));
