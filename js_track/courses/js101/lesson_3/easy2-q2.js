// let numbers = [1, 2, 3, 4, 5];
// let reverseArray = array => {
//   return array.reverse();
// }
//
// console.log(reverseArray(numbers));
// console.log(numbers);
//
// numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// let sortArray = array => {
//   return array.sort((num1, num2) => num2 - num1);
// }
//
// console.log(sortArray(numbers));
// console.log(numbers);

//  reverse array using .forEach()

// let letters = ['a', 'b', 'c'];
//
// let reverse = array => {
//   let reversedArray = [];
//   array.forEach((letter) => reversedArray.unshift(letter));
//   return reversedArray;
// };
//
// console.log(reverse(letters));
// console.log(letters);


// reverse array using .reduce()
let someArray = ['a', 'b', 'c'];

let reverseReducer = someArray.reduce((acc, cur) => ([cur, ...acc]), []);

console.log(reverseReducer);
console.log(someArray);
