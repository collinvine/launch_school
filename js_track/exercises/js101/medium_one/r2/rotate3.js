let rotate = number => {
  let numStr = String(number);
  let rotatedString = moveToBack(numStr);

  for (let idx = 1; idx < numStr.length - 1; idx += 1) {
    rotatedString = rotatedString.slice(0, idx) + moveToBack(rotatedString.slice(idx));
  }

  return Number(rotatedString);
}

let moveToBack = str => {
  return str.slice(1) + str.slice(0, 1);
}

console.log(rotate(735291));
console.log(rotate(3));
console.log(rotate(35));
console.log(rotate(105));
console.log(rotate(8703529146));