const array = [5, 10, 15, 20, 25];

const res = array.filter((num, idx, arr) => {
  console.log(num);
  console.log(idx, arr);
});
