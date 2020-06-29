let sequence = (count, start) => {
  let results = [];

  for (let multiple = 1; results.length < count; multiple += 1) {
    results.push(start * multiple);
  }

  return results;
}

console.log(sequence(5, 1));
console.log(sequence(4, -7));
console.log(sequence(3, 0));
console.log(sequence(0, 1000000));
