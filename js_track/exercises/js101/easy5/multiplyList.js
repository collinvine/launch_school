let multiplyList = (arr1, arr2) => {
  return arr1.map((item, idx) => {
    return item * arr2[idx];
  })
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));
