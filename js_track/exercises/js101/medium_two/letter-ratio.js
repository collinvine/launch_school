let letterPercentages = str => {
  let lwrCase = str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0;
  let upCase = str.match(/[A-Z]/g) ? str.match(/[A-Z]/g).length : 0;
  let neither = str.length - (lwrCase + upCase);

  return {
    lowercase: toPercentage(lwrCase, str),
    uppercase: toPercentage(upCase, str),
    neither: toPercentage(neither, str)
  }
}

let toPercentage = (num, str) => ((num / str.length) * 100).toFixed(2);

console.log(letterPercentages('abCdef 123')); 
console.log(letterPercentages('AbCd +Ef')); 
console.log(letterPercentages('123')); 