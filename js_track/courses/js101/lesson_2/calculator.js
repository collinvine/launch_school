// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Print the result to the terminal

const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let firstNumber = parseInt(readline.question());

console.log("What's the second number?");
let secondNumber = parseInt(readline.question());

console.log("What operation would you like to perform?\nAdd, Subtract, Multiply, Divide");
let operation = readline.question();

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

console.log(`The result is ${answer}`);
