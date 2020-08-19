const NUMBERS = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
}

function alphaSort(numArr) {
  return numArr.sort((a, b) => {
    let spelledA = NUMBERS[a];
    let spelledB = NUMBERS[b];

    if (spelledA < spelledB) {
      return -1;
    }

    if (spelledA > spelledB) {
      return 1;
    }

    return 0;
  })
}

console.log(alphaSort([1, 2, 3, 4, 5, 6]));
console.log(alphaSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
