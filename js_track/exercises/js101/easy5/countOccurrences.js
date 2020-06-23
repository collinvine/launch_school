let countOccurrences = arr => {
  let counter = {};

  arr.forEach(elem => {
    counter[elem] ? counter[elem] += 1 : counter[elem] = 1;
  })

  for (let item in counter) {
    console.log(`${item} => ${counter[item]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
