let deleteVowels = arr => {
  let regex = /[aeiou]/ig;

  return arr.map(str => str.replace(regex, ''));
}

console.log(deleteVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(deleteVowels(['green', 'YELLOW', 'black', 'white']));
console.log(deleteVowels(['ABC', 'AEIOU', 'XYZ']));