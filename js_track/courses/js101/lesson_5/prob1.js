let arr = ['10', '11', '9', '7', '8'];

let sortedArray = arr.sort((a, b) => b - a);

console.log(sortedArray);
// [ '11', '10', '9', '8', '7' ]

// note: there may have been an implicit coercion, but the solution recommended
// specifically calling Number(b) - Number(a)
