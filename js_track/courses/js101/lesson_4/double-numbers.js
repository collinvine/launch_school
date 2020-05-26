let doubleNumbers = numbers => {
  for (let idx = 0; idx < numbers.length; idx += 1) {
    numbers[idx] *= 2;
  }

  return numbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];

console.log(doubleNumbers(myNumbers));
console.log(myNumbers);
