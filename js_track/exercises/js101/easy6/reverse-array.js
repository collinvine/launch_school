let reverse = array => {
  let length = array.length;
  let idx = 1;

  while (idx < length) {
    let ele = array.splice(idx, 1).join('');

    array.unshift(ele);

    idx += 1;
  }

  return array;
}

let array1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(array1);
console.log(result1);
console.log(array1 === result1);

let array2 = [1, 2, 3, 4];
let result2 = reverse(array2);
console.log(result2);
console.log(array2 === result2);

let array3 = ["abc"];
let result3 = reverse(array3);
console.log(result3);
console.log(array3 === result3);

let array4 = [];
let result4 = reverse(array4);
console.log(result4);
console.log(array4 === result4);
