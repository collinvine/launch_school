let maxSequence = numbers => {
  let sum = 0;

  if (numbers.length === 0) return sum;
  if (numbers.every(num => num <= 0)) return sum;


  for (let idx = 0; idx <= numbers.length; idx += 1) {
    for (let idy = idx + 1; idy <= numbers.length; idy += 1) {
      let subarray = numbers.slice(idx, idy);
      let subarraySum = subarray.reduce((total, current) => total + current);
      if (subarraySum > sum) sum = subarraySum;
    }
  }

  return sum;
};

console.log(maxSequence([]));
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([11]));
console.log(maxSequence([-32]));
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]));
