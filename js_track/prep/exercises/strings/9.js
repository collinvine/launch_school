let string = 'launch school tech & talk';

let capitalize = (sentence) => {
  let splitSentence = sentence.split(" ");
  let capitalizedSentence = '';

  for (let i = 0; i < splitSentence.length; i++) {
    let capWord = splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].slice(1);

    if (i === (splitSentence.length - 1)) {
      capitalizedSentence = capitalizedSentence.concat(capWord, ".");
    } else {
      capitalizedSentence = capitalizedSentence.concat(capWord, " ");
    };
  }

  return capitalizedSentence;
}

console.log(capitalize(string));
