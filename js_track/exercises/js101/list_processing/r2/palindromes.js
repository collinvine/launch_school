let substrings = str => {
  return str.split('')
    .reduce((substrs, char, idx) => {
      let substr = idx > 0 ? substrs[idx - 1] + char : char;
      substrs.push(substr);
      return substrs;
    }, []);
}

let allSubstrings = str => {
  let allSubstrs = [];

  for (let idx = 0; idx < str.length; idx += 1) {
    let result = substrings(str.slice(idx));
    allSubstrs.push(result);
  }

  return allSubstrs.flat();
}

let findPalindromes = str => {
  let allSubStr = allSubstrings(str);
  let allPalindromes = allSubStr.filter(el => {
    if (el.length > 1) {
      return el === el.split('').reverse().join('');
    }
  });

  return allPalindromes;
}

console.log(findPalindromes('abcd'));
console.log(findPalindromes('madam'));
console.log(findPalindromes('hello-madam-did-madam-goodbye'));
console.log(findPalindromes('knitting cassettes'));