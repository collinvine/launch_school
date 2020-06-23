// combine using Set

let makeUnique = (arr1, arr2) => {
  let joiner = arr1.concat(arr2)
  let uniqueArr = new Set(joiner);

  return uniqueArr;
}

console.log(makeUnique([1, 3, 5], [3, 6, 9]));
