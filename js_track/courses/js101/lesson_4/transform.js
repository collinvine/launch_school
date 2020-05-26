let doubleOddIndexes = (numbers, multiplier) => {
  let doubledNums = [];

  for (let idx = 0; idx < numbers.length; idx += 1) {
    let currentNum = numbers[idx];

    if (idx % 2 === 1) {
      doubledNums.push(currentNum * multiplier);
    } else {
      doubledNums.push(currentNum);
    }
  }

  return doubledNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddIndexes(myNumbers, 4));
console.log(myNumbers);
