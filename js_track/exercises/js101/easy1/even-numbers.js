// const readline = require('readline-sync');

let startingNumber = 1;

while (startingNumber < 100) {
  if (startingNumber % 2 === 0) console.log(startingNumber);
  startingNumber++;
}

// while (startingNumber < 100) {
//   startingNumber % 2 === 0 ? console.log(startingNumber) : continue;
//   startingNumber += 1;
// }

// why doesn't that continue work?
