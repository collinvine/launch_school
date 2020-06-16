let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// (Name) is a (age)-year-old (male or female).

let keys = Object.keys(munsters);

keys.forEach(person => {
  console.log(`${person.slice(0, 1).toUpperCase() + person.slice(1)} is a ${munsters[person]['age']}-year-old ${munsters[person]['gender']}`);
});
