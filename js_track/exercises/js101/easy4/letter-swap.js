let swap = sentence => {

  let altered = sentence.split(' ').map( word => {
    if (word.length === 1) return word;

    return word[word.length - 1] + word.slice(1, -1) + word[0];
  })

  return altered.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));
