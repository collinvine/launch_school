let leadingSubstrings = str => {
  let substrings = [];

  for (let idx = 2; idx <= str.length; idx += 1) {
    let substr = str.slice(0, idx);
    substrings.push(substr.toLowerCase());
  }

  return substrings;
}

let allSubstrings = str => {
  let allSubstr = [];

  for (let idx = 0; idx < str.length - 1; idx += 1) {
    let result = leadingSubstrings(str.slice(idx));

    allSubstr.push(result);
  }

  return allSubstr.flat();
}

let substringTest = (str1, str2) => {
  if (str1.length <= 1 || str2.length <= 1) return false;

  let str1Subs = allSubstrings(str1);

  let substringMatch = false;

  str1Subs.forEach(str => {
    let re = new RegExp(str, 'i');
    // console.log(re);
    if (str2.match(re)) substringMatch = true;
  })

  return substringMatch;
}

console.log(substringTest('Something', 'Fun'));
console.log(substringTest('Something', 'Home'));
console.log(substringTest('Something', 'Fun'));
console.log(substringTest('Something', ''));
console.log(substringTest('', 'Something'));
console.log(substringTest('BANANA', 'banana'));
console.log(substringTest('test', 'lllt'));
console.log(substringTest('', ''));
console.log(substringTest('1234567', '541265'));
console.log(substringTest('supercalifragilisticexpialidocioius', 'SoundOfItIsAtrociou'));


