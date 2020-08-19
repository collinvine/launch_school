  let allCombinations = substrings(string);
  function findPalindromes(string) {

  return allCombinations.filter(ele => {
    return ((ele.length > 1) && (ele === ele.split('').reverse().join('')));
  });
}

function substrings(string) {
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    let substring = string.substring(startIndex);
    substrings = substrings.concat(leadingSubstrings(substring));
  }

  return substrings;
}

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

console.log(findPalindromes('abcde'));
console.log(findPalindromes('madam'));
console.log(findPalindromes('hello-madam-did-madam-goodbye'));
console.log(findPalindromes('knitting cassettes'));
