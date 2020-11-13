function wordToDigit(sentence) {
  const numberedWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  numberedWords.forEach((word, idx) => {
    let re = new RegExp(word, "gi");
    sentence = sentence.replace(re, idx);
  })

  return sentence;
}

console.log(wordToDigit("Please call me at five five five one two three four. Thanks."));