let doubler = string => {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    let cur = string[idx];
    result += cur + cur;
  }

  return result;
}

console.log(doubler('Hello'));
console.log(doubler('Good job!'));
console.log(doubler(''));
