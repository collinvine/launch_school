let fibonacci = [0, 1, 1];

let fibIndexFinder = length => {

  while (fibonacci[fibonacci.length - 1].toString().length < length) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    // console.log(fibonacci);
  }

  return fibonacci.indexOf(fibonacci[fibonacci.length - 1]);
}

console.log(fibIndexFinder(6));
// console.log(fibIndexFinder(10));
// console.log(fibIndexFinder(16));
