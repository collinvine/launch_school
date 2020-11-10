let caseCounter = str => {
  let counts = {upper: 0, lower: 0, neither: 0};
  let chars = str.split('');

  chars.forEach(char => {
    if (!(char.match(/[a-z]/i))) {
      counts.neither += 1;
    } else if (char.toUpperCase() === char) {
      counts.upper += 1;
    } else {
      counts.lower += 1;
    }
  })

  return counts;
}

console.log(caseCounter('abCdef 123'));
console.log(caseCounter('AbCd +Ef'));
console.log(caseCounter('123'));
console.log(caseCounter(''));