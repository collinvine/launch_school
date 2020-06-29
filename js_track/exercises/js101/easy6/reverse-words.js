let reverser = string => {
  return string.split(' ').reverse().join(' ');
}

console.log(reverser(''));
console.log(reverser('Hello World'));
console.log(reverser('Reverse these words'));
