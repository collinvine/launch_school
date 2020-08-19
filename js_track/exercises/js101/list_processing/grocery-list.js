let buyFruit = list => {
  let fruits = [];

  list.forEach(fruit => {
    let amount = fruit[1];
    while (amount > 0) {
      fruits.push(fruit[0]);
      amount -= 1;
    }
  })

  return fruits;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
