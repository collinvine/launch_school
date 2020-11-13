let rotate = arr => {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  let newArr = arr.slice(1);
  newArr.push(arr[0]);

  return newArr;
}

console.log(rotate([7, 3, 5, 2, 9, 1]));
console.log(rotate(['a', 'b', 'c']));
console.log(rotate(['a']));
console.log(rotate([1, 'a', 3, 'c']));
console.log(rotate([{ a: 2 }, [1, 2], 3]));
console.log(rotate([]));
console.log(rotate());
console.log(rotate(1));

let array = [1, 2, 3, 4];
console.log(rotate(array));
console.log(array);
