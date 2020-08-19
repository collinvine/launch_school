function substrings(string) {
  let chars = string.split('');
  let allSubstrings = [];

  chars.map((char, idx) => {
    let result = '';
    for (idx; idx < chars.length; idx++) {
      allSubstrings.push(result += chars[idx]);
    }
  })

  return allSubstrings;
}

console.log(substrings('abcdef'));
