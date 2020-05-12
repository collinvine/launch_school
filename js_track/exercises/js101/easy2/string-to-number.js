const NUMBERS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
}

let stringToNumber = string => {
  let numberArray = string.split('').map(num => NUMBERS[num]);

  let value = 0;
  numberArray.forEach(digit => (value = (10 * value) + digit));
  return value;
}

console.log(stringToNumber("4321"));
