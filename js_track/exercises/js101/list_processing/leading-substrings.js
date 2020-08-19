function leadingSubstrings(string) {
  let arr = string.split('');
  let substringArr = [];

  arr.forEach((char, idx) => {
    if (idx === 0) {
      substringArr.push(char);
    } else {
      substringArr.push(substringArr[idx - 1] + char);
    }
  })

  console.log(substringArr);
}

function substringMap(string) {
  let result = '';
  return string.split('').map(char => result += char);
}

function substringReduce(str) {
  return str.split('').reduce((acc, char, idx) => 
  [...acc, str.slice(char, idx + 1)], []);
}


// leadingSubstrings('abdgasdf');
console.log(substringMap('abdgasdf'));
