let returnMiddle = string => {
  let middle = Math.floor(string.length / 2);

  if (string.length % 2 === 0) {
    return string[middle - 1] + string[middle];
  } else {
    return string[middle];
  }
}

console.log(returnMiddle('I Love JavaScript'));
console.log(returnMiddle('Launch School'));
console.log(returnMiddle('Launch'));
console.log(returnMiddle('Launchschool'));
console.log(returnMiddle('x'));
