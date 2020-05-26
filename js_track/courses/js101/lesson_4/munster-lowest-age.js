let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let allAges = Object.values(ages);
let lowestAge = 10000;

allAges.forEach(age => {
  if (age < lowestAge) {
    lowestAge = age;
  }
})

console.log(lowestAge);
