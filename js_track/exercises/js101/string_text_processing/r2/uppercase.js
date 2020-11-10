let uppercaseCheck = str => {
  let regex = /[a-z]/g;
  let matches = str.match(regex);

  return !matches;
}

console.log(uppercaseCheck('t'));
console.log(uppercaseCheck('T'));
console.log(uppercaseCheck('Four Score'));
console.log(uppercaseCheck('FOUR SCORE'));
console.log(uppercaseCheck('4SCORE!'));
console.log(uppercaseCheck(''))