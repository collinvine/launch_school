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
  let numberArray = string.split('');
  let value = 0;

  if (numberArray[0] === "-") {
    numberArray.shift();
    let newArray = numberArray.map(num => NUMBERS[num]);
    newArray.forEach(digit => (value = (10 * value) + digit));
    return value * -1;
  } else {
    let newArray = numberArray.map(num => NUMBERS[num]);
    newArray.forEach(digit => (value = (10 * value) + digit));
    return value;
  }
}

console.log(stringToNumber("4321"));
console.log(stringToNumber("-100"));
console.log(stringToNumber("-570"));
console.log(stringToNumber("12345"));
