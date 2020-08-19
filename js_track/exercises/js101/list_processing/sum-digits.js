let sumOfDigits = (number) => {
  return number.toString()
    .split('')
    .reduce((acc, cur) => Number(acc) + Number(cur));
}

console.log(sumOfDigits(23));
console.log(sumOfDigits(123456789));
console.log(sumOfDigits(496));
