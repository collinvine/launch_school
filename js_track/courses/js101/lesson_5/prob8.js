let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

let objValues = Object.values(obj);

objValues.join().split('').forEach( char => {
  if (VOWELS.includes(char)) console.log(char);
})
