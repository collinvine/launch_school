let fooA = { bar: 1};
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

function assignProperty(obj, property, value) {
  while (obj !== null) {
    if (obj.hasOwnProperty(property)) {
      obj[property] = value;
      break;
    }

    obj = Object.getPrototypeOf(obj);
  }
}

assignProperty(fooC, 'bar', 2);
console.log(fooA.bar);
console.log(fooC.bar);

