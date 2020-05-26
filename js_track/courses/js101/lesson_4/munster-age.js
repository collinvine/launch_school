let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let allAges = Object.values(ages);
let agesSum = 0;

allAges.forEach(age => agesSum += age);

console.log(agesSum);
