let staggeredCaps = word => {
    let chars = word.split('');
    let modifiedWords = [];
    
    chars.forEach((char, idx) => {
        if (idx === 0) {
            modifiedWords.push(char.toUpperCase());
        } else if (modifiedWords[idx - 1].toUpperCase() === modifiedWords[idx - 1]){
            modifiedWords.push(char.toLowerCase());
        } else {
            modifiedWords.push(char.toUpperCase());
        }
    });
    
    return modifiedWords.join('');
}

console.log(staggeredCaps('I Love Launch School!'));
console.log(staggeredCaps('ALL_CAPS'));
console.log(staggeredCaps('ignore 77 the 444 numbers'));

/*

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

*/