let isNumberPalindrome = number => number.toString() === number.toString().split('').reverse().join('');

console.log(isNumberPalindrome(0345430));
console.log(isNumberPalindrome(123210));
console.log(isNumberPalindrome(22));
console.log(isNumberPalindrome(5));
console.log(isNumberPalindrome(223322));
