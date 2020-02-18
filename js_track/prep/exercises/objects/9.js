let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let person = {};

for (variable of nestedArray) {
  person[variable[0]] = variable[1];
}

console.log(person);
