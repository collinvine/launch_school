let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let selectFruit = produce => {
  let onlyFruit = produce;
  let produceKeys = Object.keys(onlyFruit);

  for (let idx = 0; idx < produceKeys.length; idx += 1) {
    let currentFruit = produceKeys[idx];
    let produceType = onlyFruit[currentFruit];

    if (produceType !== "Fruit") {
      delete onlyFruit[currentFruit];
    }
  }

  return onlyFruit;
}

console.log(selectFruit(produce));
