const readline = require('readline-sync');
const { log } = require("console");

log("What is the bill?");
let bill = readline.prompt();
bill = parseInt(bill, 10);

log("What is the tip percentage?")
let tip = readline.prompt();
tip = parseInt(tip, 10) / 100;

let totalTip = bill * tip;
let totalBill = bill + totalTip;

log(`
  The tip is $${totalTip.toFixed(2)}
  The total is $${totalBill.toFixed(2)}
`);