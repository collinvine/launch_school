const NUMBERS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4, 
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
}

function wordToDigit(sentence) {
  let words = sentence.split(/\b/);
  console.log(words);
  let newSentence = words.map(word => {
    if (Object.keys(NUMBERS).includes(word)) {
      return NUMBERS[word];
    } else {
      return word;
    }
  })

  console.log(newSentence.join(''));
} 

wordToDigit('Please call me at five five five one two three four. Thanks.');
