let rotate = (num, dig) => {
  let targetIndex = String(num).length - dig;
  let numToStr = String(num);
  let newStr = "";

  for (let i = 0; i < numToStr.length; i++) {
    if (i === targetIndex) continue;

    newStr += numToStr[i];
  }

  newStr += numToStr[targetIndex];
  return Number(newStr);
}

console.log(rotate(735291, 1));
console.log(rotate(735291, 2));
console.log(rotate(735291, 3));
console.log(rotate(735291, 4));
console.log(rotate(735291, 5));
console.log(rotate(735291, 6));
