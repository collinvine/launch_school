let getSuffix = century => {
  let lastDigit = century.toString().slice(-1);
  let penultimateDigit = century.toString().slice(-2, -1);

  if (lastDigit === '1' && penultimateDigit !== '1') {
    return 'st';
  } else if (lastDigit === '2' && penultimateDigit !== '1') {
    return 'nd';
  } else if (lastDigit === '3' && penultimateDigit !== '1') {
    return 'rd';
  } else {
    return 'th';
  }
}

let getCentury = year => {
  let century = Math.ceil(year / 100);
  return century;
}

let whatCentury = year => {
  let century = getCentury(year);
  let suffix = getSuffix(century);

  return `${century}${suffix}`;
}

console.log(whatCentury(2000));
console.log(whatCentury(2001));
console.log(whatCentury(1965));
console.log(whatCentury(256));
console.log(whatCentury(5));
console.log(whatCentury(10103));
console.log(whatCentury(1052));
console.log(whatCentury(1127));
console.log(whatCentury(11201));
