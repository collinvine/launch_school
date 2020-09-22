let fibLookup = {};

let fibonacci = num => {
  if (fibLookup[num]) {
    return fibLookup[num];
  } else if (num <= 2) {
    fibLookup[num] = 1;
    return 1;
  }

  debugger;
  fibLookup[num] = fibonacci(num - 1) + fibonacci(num - 2);
  debugger;

  return fibLookup[num];
}

console.log(fibonacci(5));
console.log(fibLookup);

console.log(fibonacci(35));
console.log(fibLookup);
