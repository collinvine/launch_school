let swapcase = words => {
    return words
            .split('')
            .map(letter => letter.toLowerCase() === letter ? letter.toUpperCase() : letter.toLowerCase())
            .join('');
}

console.log(swapcase('This is a Wonderful Sentence!')); 
console.log(swapcase('CamelCase'));
console.log(swapcase('Tonight on XYZ-TV'));
