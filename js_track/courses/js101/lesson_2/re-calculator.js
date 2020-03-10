const readline = require('readline-sync');

let prompt = (message) => console.log(`=> ${message}`);
let invalidNumber = (number) => Number.isNaN(Number(number));

prompt('Welcome to Calculator!');

prompt("What's the first number?");
let firstNumber = parseInt(readline.question());

while (invalidNumber(firstNumber)) {
  prompt("That isn't a valid number. Try again.");
  firstNumber = parseInt(readline.question());
}

prompt("What's the second number?");
let secondNumber = parseInt(readline.question());

while (invalidNumber(secondNumber)) {
  prompt("That isn't a valid number. Try again.");
  secondNumber = parseInt(readline.question());
}

prompt("What operation would you like to perform?\nAdd, Subtract, Multiply, Divide");
let operation = readline.question();

while (!['add', 'subtract', 'multiply', 'divide'].includes(operation)) {
  prompt("You must select one of the four choices.");
  operation = readline.question();
}

let answer;

switch (operation.toLowerCase()) {
  case "add":
    answer = firstNumber + secondNumber;
    break;
  case "subtract":
    answer = firstNumber - secondNumber;
    break;
  case "multiply":
    answer = firstNumber * secondNumber;
    break;
  case "divide":
    answer = firstNumber / secondNumber;
    break;
  }

prompt(`The result is ${answer}`);
