let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let sortedArr = arr.map(subArr => {
  if (typeof subArr[0] === 'number') {
    return subArr.sort((a, b) => a - b);
  } else {
    return subArr.sort();
  }
})

// note, should use slice to not alter original array 

console.log(sortedArr, arr);
