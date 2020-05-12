let penultimate = string => {
  let array = string.split(" ");
  let secondToLast = array.splice(array.length - 2, 1);

  return secondToLast.toString();
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

console.log(penultimate("Launch School is great!") === "great"); // logs true
console.log(penultimate("Hi tommy my name is collin    and you are sparkly pie") === "sparkly"); // logs true

/**

Given answer which is much simpler

function penultimate(words) {
  let wordsArray = words.split(" ");
  return wordsArray[wordsArray.length - 2];
};

**/
