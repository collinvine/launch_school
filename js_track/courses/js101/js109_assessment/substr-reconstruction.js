let reconstruct = str => {
  if (badLength(str)) return false;

  let isPossible = false;
  let halfStrLen = Math.floor(str.length / 2);

  for (let idx = 2; idx <= halfStrLen; idx += 1) {
    let substr = str.slice(0, idx);

    if ((str.length / substr.length) % 2 !== 0) continue;

    let substrRepeated = substr.repeat(str.length / substr.length);

    isPossible = substrRepeated === str;
  }

  return isPossible;
}

function badLength(str) {
  let badLengths = [1, 3, 5, 7, 11, 13, 17, 19, 23, 31, 37, 41,
    47, 53, 59, 61, 71, 73, 79, 83, 89, 97];

  return badLengths.includes(str.length);
}

console.log(reconstruct('abab'));
console.log(reconstruct('aba'));
console.log(reconstruct('aabaaba'));
console.log(reconstruct('abaababaab'));
console.log(reconstruct('abcabcabcabc'));