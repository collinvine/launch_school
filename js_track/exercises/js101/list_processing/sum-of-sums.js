let sumOfSums = numbers => {
  let total = 0;
  let index = 0;

  while (index < numbers.length) {
    total += sum(numbers.slice(0, index + 1));
    index += 1;
  }

  console.log(total);
}

let sum = numbers => {
  return numbers.reduce((acc, cur) => acc + cur);
}


sumOfSums([3, 5, 2]);
sumOfSums([1, 5, 7, 3]);
sumOfSums([4]);
sumOfSums([1, 2, 3, 4, 5]);
