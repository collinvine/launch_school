let staggeredCaps = word => {
    return word
            .split('')
            .map((char, idx) => {
                if (idx % 2 === 0) {
                    return char.toUpperCase();
                } else if (idx % 2 !== 0) {
                    return char.toLowerCase();
                }
            })
            .join('');
}

console.log(staggeredCaps('I Love Launch School!'));
console.log(staggeredCaps('ALL_CAPS'));
console.log(staggeredCaps('ignore 77 the 444 numbers'));