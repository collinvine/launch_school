let statement = "The Flintstones Rock";
let joinedStatement = statement.split(' ');

// console.log(joinedStatement);

let letterCount = {};

joinedStatement.forEach(word => {
  let letters = word.split('');
  letters.forEach(letter => {
    letterCount[letter] = letterCount[letter] || 0;
    letterCount[letter] += 1;
  });
});

console.log(letterCount);
