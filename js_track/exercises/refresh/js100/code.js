let words = 'launch school tech & talk'.split(' ');

let capitalize = phrase => {
  let capitalized = [];
  let count = 0;

  for (let index = 0; index < phrase.length; index++) {
    capitalized.push(phrase[index][0].toUpperCase() + phrase[index].substring(1)); 
  }

  return capitalized.join(' ');
}

console.log(capitalize(words));

// arrays problem set next