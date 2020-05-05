const readline = require('readline-sync');

let startingNumber = parseInt(readline.question());
let endingNumber = parseInt(readline.question());

let i = startingNumber;

while (i <= endingNumber) {
  if (i % 2 !== 0) {
    console.log(i);
    i += 1;
  } else {
    i += 1;
  }
}
