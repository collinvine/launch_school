let utf16Value = string => {
  let letters = string.split('');

  let sum = 0;

  letters.forEach(char => sum = sum + char.charCodeAt());

  return sum;
}

console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));

const OMEGA = "\u03A9";
console.log(utf16Value(OMEGA));
console.log(utf16Value(OMEGA + OMEGA + OMEGA));