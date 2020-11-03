let words = {
  adjectives: ['quick', 'lazy', 'sleepy', 'noise', 'hungry'],
  nouns: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverbs: ['easily', 'lazily', 'noisily', 'excitedly']
}

let template1 = `The adjectives brown nouns adverbs verbs the adjectives yellow nouns, who adverbs verbs his nouns and looks around.`;
let template2 = `The nouns verbs the nouns's nouns.`;

function madlibs(template) {
  let allWords = template.split(/\b/);
  let wordKey = Object.keys(words);

  let newWordArr = allWords.map(word => {
    if (wordKey.includes(word)) {
      let index = wordKey.indexOf(word);
      let randNum = getRandomInt(words[wordKey[index]].length);
      return word.replace(word, words[wordKey[index]][randNum]);
    } else {
      return word;
    }
  });

  console.log(newWordArr.join(''));
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

madlibs(template1);
madlibs(template2);