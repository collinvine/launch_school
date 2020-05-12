const readline = require('readline-sync');

let num1 = readline.question("What's the first number?\n");
let num2 = readline.question("What's the second number?\n");

let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let quotient = (num1, num2) => num1 / num2;
let remainder = (num1, num2) => num1 % num2;
let power = (num1, num2) => num1 ** num2;

let mathWizard = (num1, num2) => {
  console.log(`==> ${num1} + ${num2} = ${add(num1, num2)}`);
  console.log(`==> ${num1} - ${num2} = ${subtract(num1, num2)}`);
  console.log(`==> ${num1} * ${num2} = ${multiply(num1, num2)}`);
  console.log(`==> ${num1} / ${num2} = ${quotient(num1, num2)}`);
  console.log(`==> ${num1} % ${num2} = ${remainder(num1, num2)}`);
  console.log(`==> ${num1} ** ${num2} = ${power(num1, num2)}`);
}

mathWizard(Number(num1), Number(num2));
