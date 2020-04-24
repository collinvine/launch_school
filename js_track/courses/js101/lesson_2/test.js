function addName(arr, name) {
  arr = arr.concat([name]);
}

let names = ['bob', 'kim'];
addName(names, 'jim');
console.log(names);
