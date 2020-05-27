let double = string => {
  let doublesRemoved = '';
  let currentChar = '';

  for (let char = 0; char < string.length; char += 1) {
      if (string[char] !== currentChar) {
        doublesRemoved += string[char];
        currentChar = string[char];
      }
  }

  return doublesRemoved;
}

console.log(double('ddaaiillyy ddoouubbllee'));
console.log(double('4444abcabccba'));
console.log(double('ggggggggggggggg'));
console.log(double('a'));
console.log(double(''));
