let staggered = str => {
  return str
    .split('')
    .map((char, idx) => {
      if (idx % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join('');
}

console.log(staggered('I Love Launch School!'));
console.log(staggered('ALL_CAPS'));
console.log(staggered('ignore 77 the 4444 numbers'));