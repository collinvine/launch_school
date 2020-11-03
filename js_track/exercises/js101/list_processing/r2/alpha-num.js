const ALPHA = [
  'zero', 'one', 'two', 'three',
  'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven',
  'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen',
  'eighteen', 'nineteen'
];

let alphaNumSort = numArr => {
  return numArr.sort((a, b) => {
    if (ALPHA[a] > ALPHA[b]) {
      return 1;
    } else if (ALPHA[a] < ALPHA[b]) {
      return -1;
    } else {
      return 0;
    }
  });
};

let digits = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19
];

console.log(alphaNumSort(digits));