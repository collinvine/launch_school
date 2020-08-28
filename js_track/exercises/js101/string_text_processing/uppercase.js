let isUppercase = word => {
  let regex = /[a-z]/g;
  let anyLowercase = word.match(regex);

  if (anyLowercase) {
    return false;
  } else {
    return true;
  }
}

console.log(isUppercase('t'));
console.log(isUppercase('T'));
console.log(isUppercase('Four Score'));
console.log(isUppercase('FOUR SCORE'));
console.log(isUppercase('4SCORE!'));
console.log(isUppercase(''));
