let shortLongShort = (word1, word2) => {
  let newWord = "";

  if (word1.length < word2.length) {
    newWord = word1 + word2 + word1;
  } else {
    newWord = word2 + word1 + word2;
  }

  return newWord;
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));
