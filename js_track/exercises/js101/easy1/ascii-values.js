let asciiValue = string => {
  let splitString = string.split('');
  let total = 0;

  splitString.forEach(char => {
    total += char.charCodeAt();
  });

  return total;
}

asciiValue('Four score');
asciiValue('Launch School');
asciiValue('a');
asciiValue('');
