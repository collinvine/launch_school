let makeUnique = (arr1, arr2) => {
  let concatArr = arr1.concat(arr2)
  let uniqueArr = concatArr.filter((item, index) => {
    if (concatArr.indexOf(item) === index) {
      return item;
    }
  })

  return uniqueArr;
}


console.log(makeUnique([1, 3, 5], [3, 6, 9]));
