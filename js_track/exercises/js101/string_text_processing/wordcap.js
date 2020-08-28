let wordcap = sentence => {
    let words = sentence.split(' ');

    let capWords = words.map(word => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })

    return capWords.join(' ');
}

console.log(wordcap('four score and seven'));
console.log(wordcap('the javaScript language'));
console.log(wordcap('this is a "quoted" word'));