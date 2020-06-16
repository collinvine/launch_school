let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let sortedArr = arr.sort((a, b) => {
  let aSum = a.filter(num => num % 2 === 1)
              .reduce((sum, next) => sum + next);
  let bSum = b.filter(num => num % 2 === 1)
              .reduce((sum, next) => sum + next);

  return aSum - bSum;
})

console.log(sortedArr);
