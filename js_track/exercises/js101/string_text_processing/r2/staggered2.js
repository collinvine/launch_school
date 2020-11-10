let staggered = str => {
  let caseToggle = true;
  let charArr = str.split('');
  let re = /[^a-z]/i;

  let modArr = charArr.map(char => {
    if (char.match(re)) {
      return char;
    } else if (caseToggle === true) {
      caseToggle = false;
      return char.toUpperCase();
    } else {
      caseToggle = true;
      return char.toLowerCase();
    }
  })

  return modArr.join('');
}

console.log(staggered("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggered("ALL CAPS") === "AlL cApS");
console.log(staggered("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");