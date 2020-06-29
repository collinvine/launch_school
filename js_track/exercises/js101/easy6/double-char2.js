let doubler = string => {
  let regex = /[bcdfghjklmnpqrstvwxys]/gi;

  return string.split('')
            .map(char => {
              return char.match(regex) ? char + char : char;
            })
            .join('');
}

console.log(doubler('String'));
console.log(doubler('Hello-World!'));
console.log(doubler('July 4th'));
console.log(doubler(''));
