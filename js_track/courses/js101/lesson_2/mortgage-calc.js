const readline = require('readline-sync');

let prompt = (message) => console.log(`=> ${message}`);
let invalidNumber = (number) => Number.isNaN(Number(number));

prompt("How much would you like to borrow?");
let loanAmount = parseInt(readline.question());

while (invalidNumber(loanAmount)) {
  prompt("That isn't a valid number. Try again.");
  loanAmount = parseInt(readline.question());
}

prompt("What is the annual percentage rate? __%");
let interestYear = parseInt(readline.question());

while (invalidNumber(interestYear)) {
  prompt("That isn't a valid number. Try again.");
  interestYear = parseInt(readline.question());
}

prompt("How many years will you be borrowing the money for?");
let loanYears = parseInt(readline.question());

while (invalidNumber(loanYears)) {
  prompt("That isn't a valid number. Try again.");
  loanYears = parseInt(readline.question());
}

let interestMonth = (interestYear / 100) / 12;
let loanMonths = loanYears * 12;

let paymentMonthly =
  loanAmount *
  (interestMonth / (1 - Math.pow((1 + interestMonth), (-loanMonths))));

console.log(`Your monthly payment will be $${paymentMonthly.toFixed(2)}.`);
