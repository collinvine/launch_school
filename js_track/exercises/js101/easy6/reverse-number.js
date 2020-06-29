let numberReverser = num => {
  return Number(num.toString().split('').reverse().join(''));
}

console.log(numberReverser(12345));
console.log(numberReverser(12213));
console.log(numberReverser(456));
console.log(numberReverser(12000));
console.log(numberReverser(1));
