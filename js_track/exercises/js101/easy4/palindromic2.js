let alphaNumOnly = phrase => phrase.split('').filter(char => /^[a-zA-Z0-9]+$/.test(char)).join('').toLowerCase();

let isPalindrome = phrase => {
  let filteredPhrase = alphaNumOnly(phrase);
  return filteredPhrase === filteredPhrase.split('').reverse().join('');
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("Madam, I'm Adam"));
console.log(isPalindrome('356653'));
console.log(isPalindrome('356a653'));
console.log(isPalindrome('123ab321'));
