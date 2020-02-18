let catAge = humanYears => {
  let age = 0;
  let i;

  for (i = 1; i <= humanYears; i++) {
    if (i === 1) {
      age = age + 15;
    } else if (i === 2) {
      age = age + 9;
    } else {
      age = age + 4;
    }
  }

  // return age;

  console.log(age);
}

catAge(1);
catAge(2);
catAge(3);
catAge(4);

// take in a number
// for the first year, add 15 to a variable
// for the next year, add 9 to that variable
// for every year after, add 4 to that variable
// return the sum value
