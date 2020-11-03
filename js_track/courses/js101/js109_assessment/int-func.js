/* eslint-disable no-unused-vars */
let nextBiggestNum = num => {
  let str = num.toString();
  let allCombos = [];

  for (let i = 0; i < str.length; i += 1) {
    allCombos.push(allCombinations(str.slice(i)));
    debugger;
  }

  console.log(allCombos);
}

let allCombinations = string => {
  let combos = [];

  for (let i = 1; i <= string.length; i += 1) {
    let newStr = string.slice(0, i);
    combos.push(newStr);
    debugger;
  }

  console.log(combos);

  return combos;
}


nextBiggestNum(125);
