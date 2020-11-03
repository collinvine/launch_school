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

console.log(allSubstrings('abcde'));