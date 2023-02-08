const { log } = require("console");

const readline = require('readline-sync');

let prompt = message => log(`=> ${message}`);

let validateNumber = num => Number.NaN(Number(num));

prompt("Welcome to Calculator")

prompt("What's the first number?")
let first = readline.question();

while (validateNumber(first)) {
  prompt("That doesn't look like a number. Try again");
  first = readline.question();
}

prompt("What's the second number?")
let second = readline.question();

prompt("What operator do you want to use?\n1) Add 2) Subtract 3) Multiply 4) Divide ")
let operator = readline.question();
let answer;

switch (operator) {
  case "1":
    answer = parseInt(first) + parseInt(second);
    break;

  case "2":
    answer = parseInt(first) - parseInt(second);
    break;

  case "3":
    answer = parseInt(first) * parseInt(second);
    break;

  case "4":
    answer = parseInt(first) / parseInt(second);
    break;

  default:
    log("Invalid operator");
}

prompt(`The answer is ${answer}`);