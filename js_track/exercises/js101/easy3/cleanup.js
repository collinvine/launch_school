let cleanup = string => {
  let allChars = string.split('');
  let cleanedString = '';

  allChars.forEach(char => {
    let charTest = /^[a-zA-Z]+$/.test(char);
    let spaceTest = cleanedString[cleanedString.length - 1] === ' ';

    if (charTest) {
      cleanedString += char;
    } else if (!charTest && !spaceTest) {
      cleanedString += ' ';
    }

  });

  return cleanedString;
}

console.log(cleanup("---what's my +*& line?"));
