let rotateDigits = (num, count) => {
  let numArray = num.toString().split('');
  let rotatedArray = [];

  let selectedDigit = numArray.splice(numArray.length - count, 1);

  rotatedArray.push(numArray, selectedDigit);

  return Number(rotatedArray.flat().join(''));
}


rotateDigits(735291, 1);
rotateDigits(735291, 2);
rotateDigits(735291, 3);
rotateDigits(735291, 4);
rotateDigits(735291, 5);
rotateDigits(735291, 6);