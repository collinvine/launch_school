let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let regex = /t/g;

let countOne = [...statement1.matchAll(regex)].length;
let countTwo = [...statement2.matchAll(regex)].length;

console.log(countOne);
console.log(countTwo);
