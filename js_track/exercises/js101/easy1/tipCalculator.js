const readline = require('readline-sync');

console.log("How much is the bill?");
let billAmount = parseFloat(readline.prompt());

console.log("What is the tip percentage?");
let tipPercentage = parseFloat(readline.prompt());

let tipAmount = billAmount * (tipPercentage / 100);
let totalBill = billAmount + tipAmount;

console.log(
  `The tip is $${tipAmount.toFixed(2)}\nThe total is $${totalBill.toFixed(2)}`
);
