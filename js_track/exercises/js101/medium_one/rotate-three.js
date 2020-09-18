let maxRotation = num => {
  let index = 0;
  let numArr = String(num).split('');

  while (index < numArr.length) {
    numArr = rotateDigits(numArr, index);
    index += 1;    
  }

  console.log(Number(numArr.flat().join('')));
}


let rotateDigits = (num, count) => {
  let rotatedArray = [];
  let selectedDigit = num.splice(count, 1);

  rotatedArray.push(num, selectedDigit);
  return rotatedArray.flat();
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15
maxRotation(8703529146);      // 7321609845