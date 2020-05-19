let factors = num => {
  let divisor = num;
  let factors = [];

  while (divisor > 0) {
    if (num % divisor === 0) {
      factors.push(num / divisor);
    }
    divisor -= 1;
  }

  return factors;
}

console.log(factors(0));
