let wordSizes = sentence => {
  let wordCounter = {};
  let words = sentence.split(' ');

  if (words[0].length === 0) {
    return wordCounter;
  }

  words.forEach(word => {
    if (wordCounter[word.length]) {
      wordCounter[word.length] += 1;
    } else {
      wordCounter[word.length] = 1;
    }
  })

  return wordCounter;
}

console.log(wordSizes("Hello there I am a camel"));
console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));
