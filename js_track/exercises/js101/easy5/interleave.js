let interleave = (arr1, arr2) => {
  let weaved = [];

  for (let idx = 0; idx < arr1.length; idx += 1) {
    weaved.push(arr1[idx], arr2[idx]);
  }

  return weaved;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));
