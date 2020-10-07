let checkForFeatured = num => {
  let isDivisibleBy7 = num % 7 === 0;
  let isOdd = num % 2 !== 0;
  let isUnique = num.toString().length === new Set(num.toString()).size;

  return isDivisibleBy7 && isOdd && isUnique;
// eslint-disable-next-line semi
}

let featured = num => {
  debugger;

  if (num > 9876543200) {
    let msg = "There is no possible number that fulfills those requirements.";
    console.log(msg);
    return msg;
  }

  while (true) {
    num += 1;
    if (checkForFeatured(num)) {
      console.log(num);
      return num;
    }
  }
// eslint-disable-next-line semi
}

featured(12);
featured(20);
featured(21);
featured(997);
featured(1029);
featured(999999);
featured(999999987);
featured(9876543200);
featured(9876543201);