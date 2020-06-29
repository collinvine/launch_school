let negative = num => {
  let sign = Math.sign(num);

  if (sign === -1) {
    return num;
  } else {
    return num * -1;
  }
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));


/**

the solution gave this more efficient answer:

return Math.abs(number) * -1;

**/
