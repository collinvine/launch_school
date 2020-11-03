// let difOfTwo = numArr => {
//   return numArr
//     .sort((a, b) => a - b)
//     .map((num, idx) => {
//       while (idx < numArr.length) {
//         if (Math.abs(num - numArr[idx]) === 2) {
//           return [num, numArr[idx]];
//         };
//         idx++;
//       };
//     });
// };


let diffOfTwo = numbers => {
  let returnArr = [];
  let sortedNum = numbers.sort((a, b) => a - b);


  for (let idx = 0; idx < sortedNum.length; idx += 1) {
    for (let idy = idx + 1; idy < sortedNum.length; idy += 1) {
      if (Math.abs(sortedNum[idx] - sortedNum[idy]) === 2) {
        returnArr.push([sortedNum[idx], sortedNum[idy]]);
      }
    }
  }

  return returnArr;
}


console.log(diffOfTwo([1, 2, 3, 4]));
console.log(diffOfTwo([4, 1, 2, 3]));
console.log(diffOfTwo([1, 23, 3, 4, 7]));
console.log(diffOfTwo([4, 3, 1, 5, 6]));
console.log(diffOfTwo([2, 4]));
console.log(diffOfTwo([1, 4, 7, 10, 13]));