const readline = require('readline-sync');
const MESSAGES = require('/Users/collinvine/Projects/launch_school/js_track/courses/js101/lesson_2/bonus_calc_messages.json');

let prompt = (message) => console.log(`=> ${message}`);
let invalidNumber = (number) => Number.isNaN(Number(number));

let calculator = () => {
  prompt(MESSAGES['welcome']);

  prompt(MESSAGES['firstNum']);
  let firstNumber = parseInt(readline.question());

  while (invalidNumber(firstNumber)) {
    prompt(MESSAGES['invalidNum']);
    firstNumber = parseInt(readline.question());
  }

  prompt(MESSAGES['secondNum']);
  let secondNumber = parseInt(readline.question());

  while (invalidNumber(secondNumber)) {
    prompt(MESSAGES['invalidNum']);
    secondNumber = parseInt(readline.question());
  }

  prompt(MESSAGES['operation']);
  let operation = readline.question();

  while (!['add', 'subtract', 'multiply', 'divide'].includes(operation)) {
    prompt(MESSAGES['operationValidation']);
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
}

calculator();

prompt(MESSAGES['more'])
let more = readline.question();

if (more === "Y" || more === "y") {
  calculator();
}
