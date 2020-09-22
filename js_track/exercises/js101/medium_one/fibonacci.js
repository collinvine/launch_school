function fibonacci(num) {
  if ( num <= 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}


console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(7));
// console.log(fibonacci(50));
// console.log(fibonacci(75));
