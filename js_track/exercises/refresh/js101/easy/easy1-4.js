const readline = require('readline-sync');
const sqmToSqft = 10.7639;

console.log("Enter the length of the room in meters:");
let length = Number(readline.prompt());

console.log("Enter the width of the room in meters:");
let width = Number(readline.prompt());

let sqm = width * length;
let sqft = sqm * sqmToSqft;

console.log(`The area of the room is ${sqm.toFixed(2)} (${sqft.toFixed(2)} square feet)`);