let fibRefObj = {
  num1: 1,
  num2: 1
};


let fibonacci = num => {
  if (num <= 2) return 1;
  
  if (fibRefObj[`num${num}`]) {
    return fibRefObj[`num${num}`];
  } else {
    fibRefObj[`num${num}`] = fibonacci(num - 1) + fibonacci(num - 2);
    return fibRefObj[`num${num}`]
  }
}

// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(20));
console.log(fibonacci(50));