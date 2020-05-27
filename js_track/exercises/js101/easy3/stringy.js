let stringy = num => {
  let binaryString = '';

  for (let iter = 1; iter <= num; iter += 1) {
    if (iter % 2 !== 0) {
      binaryString += "1";
    } else {
      binaryString += "0";
    }
  }

  return binaryString;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));
