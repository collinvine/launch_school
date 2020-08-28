const VOWELS = ['a', 'e', 'i', 'o', 'u'];

let removeVowels = words => {
    return words.map(word => {
        return word.split('')
            .filter(letter => {
                return !VOWELS.includes(letter.toLowerCase());
                debugger;
            });
    })
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));