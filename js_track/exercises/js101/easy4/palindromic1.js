let isPalindrome = word => {
  let reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));
