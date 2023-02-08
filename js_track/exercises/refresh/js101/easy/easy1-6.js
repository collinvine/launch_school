const readline = require('readline-sync');
const { log } = require("console");

let number = readline.question(
  `Enter an integer greater than 0
  > `
);

let choice = readline.question(
  `Enter "s" to compute the sum, or "p" to compute the product.
  > `
);

let total = 1;

for (let i = 2; i <= number; i += 1) {
  if (choice === "s") {
    total = total + i;
  } else {
    total = total * i;
  }
}

log(total)