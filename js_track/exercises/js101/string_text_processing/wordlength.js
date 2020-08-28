let wordlength = words => {
    if (words && words.length > 0) {
        return words
            .split(' ')
            .map(word => `${word} ${word.length}`);
    } else {
        return [];
    }
}

console.log(wordlength('cow sheep chicken'));
console.log(wordlength('baseball hot dogs and apple pie'));
console.log(wordlength("It ain't easy, is it?"));
console.log(wordlength("Supercalifragilisticexpialidocious"));
console.log(wordlength(""));
console.log(wordlength());
