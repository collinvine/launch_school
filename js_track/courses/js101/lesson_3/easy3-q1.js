let numbers = [1, 2, 3, 4];

numbers.length = 0;
numbers.splice(0);
numbers.forEach((number, i) => {numbers.splice(i)});
while (numbers.length > 0) {
  numbers.shift();
}
