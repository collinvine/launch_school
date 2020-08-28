let caseCounter = word => {
    let chars = word.split('');
    let counter = {lowercase: 0, uppercase: 0, other: 0};

    chars.forEach(letter => {
        if (letter.match(/[a-z]/)) {
            counter.lowercase += 1;
        } else if (letter.match(/[A-Z]/)) {
            counter.uppercase += 1;
        } else {
            counter.other += 1;
        }
    })

    return counter;
}

console.log(caseCounter('abCDe12'));
console.log(caseCounter('abCdef 123'));
console.log(caseCounter('AbCd +Ef'));
console.log(caseCounter('123'));
console.log(caseCounter(''));
