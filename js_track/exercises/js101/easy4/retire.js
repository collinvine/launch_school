const readline = require('readline-sync');

let age = readline.question('What is your age? ');
let retire = readline.question('At what age would you like to retire? ');

let currentYear = new Date().getUTCFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + (retire.toString() - age)}.`);
console.log(`You have only ${(currentYear + (retire.toString() - age)) - currentYear} years of work to go!`);
