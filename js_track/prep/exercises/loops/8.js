// Write a while loop that logs all odd natural numbers between 1 and 40.

let i = 0;

while (i < 40) {
  i++;

  if (i % 2 === 0) {
    continue
  }

  console.log(i);
};
