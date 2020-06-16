let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let isPositive = num => num % 2 === 0;

let onlyPositives = arr.filter( obj => {
  return Object.values(obj).every( subArr => subArr.every(isPositive));
})

console.log(onlyPositives);
