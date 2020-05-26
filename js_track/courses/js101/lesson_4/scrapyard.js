
let string = 'Hi my name is collin and I am not that tall';
let array = string.split(' ');

let filteredWords = array.filter(word => word.includes('m'));

let upperCaseWords = filteredWords.map(word => word.toUpperCase());

console.log(filteredWords);
// [ 'my', 'name', 'am' ]

console.log(upperCaseWords);
