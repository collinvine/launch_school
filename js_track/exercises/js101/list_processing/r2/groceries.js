let groceries = nested => {
  let list = [];

  nested.forEach(subarr => {
    for (let amt = subarr[1]; amt > 0; amt -= 1) {
      list.push(subarr[0]);
    }
  })

  return list;
}

console.log(groceries([['apple', 3], ['orange', 1], ['banana', 2]]));