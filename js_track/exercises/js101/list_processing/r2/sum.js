let sum = num => {
  return num.toString().split('').reduce((sum, digit) => Number(sum) + Number(digit));
}

console.log(sum(18));
console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));