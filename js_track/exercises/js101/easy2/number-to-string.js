const NUMBERS = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9'
}

let calcLength = num => Math.ceil(Math.log10(num + 1));

let numToArray = num => {
  let numberArray = [];
  let len = calcLength(num);

  while (len > 0) {
    numberArray.push(Math.floor(num / (10 ** (len - 1))));
    num %= 10 ** (len - 1);
    len -= 1;
  }

  let newArray = numberArray.map(num => NUMBERS[num]);
  let string = newArray.join('');

  return string;
}

console.log(numToArray(123576091));
