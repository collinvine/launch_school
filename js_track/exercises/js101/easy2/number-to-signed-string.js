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

let numberSign = num => {
  let sign = Math.sign(num);

  if (sign < 0) {
    num *= -1;
    let string = "-" + numToArray(num);
    return string;
  } else if (sign > 0) {
    let string = "+" + numToArray(num);
    return string;
  } else if (num === 0) {
    let string = "0";
    return string;
  }
}

console.log(numberSign(0));
console.log(numberSign(-13));
console.log(numberSign(145));
