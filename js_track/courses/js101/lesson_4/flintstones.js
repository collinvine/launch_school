let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Pebbles', 'Bambam'];
let object = {};

flintstones.forEach((elem, index) => {
  object[elem] = index;
})

console.log(object);
