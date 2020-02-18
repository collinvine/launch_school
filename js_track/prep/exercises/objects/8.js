let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

let array = [];

for (var item in person) {
  array.push([item, person[item]]);
}

console.log(array);
