let halvsies = arr => {
  let firstHalf = arr.slice(0, Math.ceil(arr.length / 2));
  let secondHalf = arr.slice(Math.ceil(arr.length / 2));

  return [firstHalf, secondHalf]
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));
