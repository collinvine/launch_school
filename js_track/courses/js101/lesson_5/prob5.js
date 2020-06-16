let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let munstersArray = Object.keys(munsters);

let totalAge = 0;
munstersArray.forEach( item => {
  totalAge += munsters[item]['age'];
});

console.log(totalAge);

let totalAge2 = munstersArray.reduce((acc, cur) => {
  return acc + munsters[cur]['age'];
}, 0)

console.log(totalAge2);

// oops, it was supposed to be just males, not all. I f'd that up.
