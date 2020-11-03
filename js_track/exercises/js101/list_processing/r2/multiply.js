let multiply = (arr1, arr2) => {
  let productArr = arr1.map(num => {
    return arr2.map(num2 => num * num2);
  });

  console.log(productArr.flat().sort((a, b) => a - b));
}

multiply([2, 4], [4, 3, 1, 2]);