let letterPercentages = str => {
  let total = str.length;
  let lowercase = (str.match(/[a-z]/g) || []).length;
  let uppercase = (str.match(/[A-Z]/g) || []).length;
  let neither = (str.match(/[^a-z]/gi) || []).length;

  return {
    lowercase: ((lowercase / total) * 100).toFixed(2),
    uppercase: ((uppercase / total) * 100).toFixed(2),
    neither: ((neither / total) * 100).toFixed(2)
  }
}

console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));