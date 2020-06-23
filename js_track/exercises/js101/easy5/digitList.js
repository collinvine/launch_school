let digitList = num => {
  return String(num).split('').map(digit => {
    return Number(digit);
  });
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));
