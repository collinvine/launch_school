let sumOfSums = arr => {
  let lastNum = 0;

  return arr.reduce((acc, cur) => {
    lastNum += cur;
    return acc + lastNum;
  }, 0);
};

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));