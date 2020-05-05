const readline = require('readline-sync');
let prompt = (message) => console.log(`=> ${message}`);
let invalidNumber = (number) => Number(number) <= 0 || Number.isNaN(number);

prompt("Please enter an integer greater than 0:");
let number = parseInt(readline.question(), 10);

while (invalidNumber(number)) {
  prompt("That's not a valid number. Try again.");
  number = parseInt(readline.question(), 10);
}

prompt(`Enter "sum" to compute the sum, or "product" to compute the product.`);
let operation = readline.question().toLowerCase();

while (operation !== "sum" && operation !== "product") {
  prompt("That's not a valid input. Write either 'sum' or 'product'.");
  operation = readline.question().toLowerCase();
}

let calculateResult = () => {
  let result = 1;
  if (operation === "sum") {
    for (let i = 2; i <= number; i++) {
      result += i;
    }
  } else if (operation === "product") {
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
  }
  return result;
}

console.log(`The ${operation} of the integers between 1 and ${number} is ${calculateResult()}`);
