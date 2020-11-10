let wordlength = words => {
  if (!words) return [];

  return words
    .split(' ')
    .map(word => word + ' ' + word.length);
}

console.log(wordlength('cow sheep chicken'));
console.log(wordlength('baseball hot dogs and apple pie'));
console.log(wordlength("It ain't easy, is it?"));
console.log(wordlength('Supercalifragilisticexpialidocious'));
console.log(wordlength(''));
console.log(wordlength());