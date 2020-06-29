let reverser = string => {
  let wordArray = string.split(' ');

  let answer = wordArray.map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  })

  return answer.join(' ');
}

console.log(reverser('Professional'));
console.log(reverser('Walk around the block'));
console.log(reverser('Launch School'));
