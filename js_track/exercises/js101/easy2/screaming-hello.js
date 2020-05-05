const readline = require('readline-sync');

console.log("Hi, what's your name?");
let name = readline.question();

let response = name => {
  return name.includes("!") ? `HI ${name.toUpperCase()} WHY ARE WE SCREAMING` : `Hi ${name}`;
}


console.log(response(name));
