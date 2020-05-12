let multiplier = (num1, num2) => num1 * num2;

let squarer = (num) => multiplier(num, num);

console.log(squarer(5) === 25);
console.log(squarer(-8) == 64);
