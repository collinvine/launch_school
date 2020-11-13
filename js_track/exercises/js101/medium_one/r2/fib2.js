let fibonacci = nth => {
  if (nth <= 2) return 1;
  
  let fib = [1, 1];

  while (fib.length < nth) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }

  return fib[fib.length - 1];
}

console.log(fibonacci(20));
console.log(fibonacci(50));
console.log(fibonacci(2));
console.log(fibonacci(75));
console.log(fibonacci(1500));