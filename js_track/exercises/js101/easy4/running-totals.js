let runningTotal = nums => {

  let runTot = [];

  nums.map((num, idx) => {
    return (idx === 0 ? runTot.push(num) : runTot.push(num + runTot[idx - 1]));
  });

  return runTot;
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));
