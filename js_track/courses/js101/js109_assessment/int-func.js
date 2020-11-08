let checkForEdgeCases = num => {
  let numLengthIs1 = String(num).length === 1;
  let reverseNum = Number(String(num).split('').sort((a, b) => b - a).join(''));
  let uniqueValues = new Set(String(num).split('')).size;

  if (numLengthIs1 || reverseNum === num || uniqueValues === 1) {
    return true;
  } else {
    return false;
  }
};

let nextLargest = num => {
  let nextNum = num;

  if (checkForEdgeCases(num)) return -1;

  while (true) {
    nextNum += 1;

    if (String(nextNum).split('').sort().join('') === String(num).split('').sort().join('')) break;
  }

  return nextNum;
};

console.log(nextLargest(9));
console.log(nextLargest(12));
console.log(nextLargest(513));
console.log(nextLargest(2017));
console.log(nextLargest(111));
console.log(nextLargest(531));
console.log(nextLargest(123456789));