let leadingSubstrings = string => {
  let substrings = [];

  for (let idx = 1; idx <= string.length; idx += 1) {
    let substring = string.slice(0, idx);
    substrings.push(substring);
  }

  return substrings;
}

// console.log(leadingSubstrings('abc'));
// console.log(leadingSubstrings('a'));
// console.log(leadingSubstrings('xyzzy'));


let reduceSub = str => {
  return str.split('')
            .reduce((substrs, char, idx) => {
              let substr = idx > 0 ? substrs[idx - 1] + char : char;
              substrs.push(substr);
              return substrs;
            }, []);
}

console.log(reduceSub('abc'));
console.log(reduceSub('a'));
console.log(reduceSub('xyzzy'));