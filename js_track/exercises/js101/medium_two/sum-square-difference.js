let sumSquareDifference = num => {
  let arr = getArr(num);

  let getSquareSum = (arr.reduce((acc, cur) => acc + cur)) ** 2;
  let getSumSquares = arr.reduce((acc, cur) => acc + (cur ** 2), 0);

  return getSquareSum - getSumSquares;
}

function getArr(num) {
  let arr = [];

  while (num > 0) {
    arr.push(num);
    num -= 1;
  }

  return arr;
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));