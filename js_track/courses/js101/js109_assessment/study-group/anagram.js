let isAnagram = (str, arr) => {
  return arr.filter(word => word.split('').sort().join('') === str.split('').sort().join(''));
}

console.log(isAnagram('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(isAnagram('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(isAnagram('laser', ['lazing', 'lazy', 'lacer']));