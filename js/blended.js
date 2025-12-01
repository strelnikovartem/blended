const user = [
  {
    name: 'Rob',
    age: 25,
  },
  {
    name: 'Hom',
    age: 30,
  },
  {
    name: 'Gom',
    age: 55,
  },
];

const addName = arr =>
  arr.map(item => item.name).toSorted((a, b) => a.localeCompare(b));

console.log(addName(user));
