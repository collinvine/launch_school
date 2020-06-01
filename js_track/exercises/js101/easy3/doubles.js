let checkForDoubles = num => {
  let string = num.toString();
  let half1 = string.slice(0, string.length / 2);
  let half2 = string.slice(string.length / 2);

  if (half1 === half2) {
    return true;
  } else {
    return false;
  }
}

let twice = num => {
  if (checkForDoubles(num)) {
    return num;
  } else {
    return num * 2;
  }
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));
