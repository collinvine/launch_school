function objectHasProperty(object, property) {
  return object.hasOwnProperty(property) ? 1 : 2;
}

let obj = {
  something: 3,
  enabled: false,
  result: undefined,
};

console.log(objectHasProperty(obj, 'something')); // returns true
console.log(objectHasProperty(obj, 'active'));    // returns false