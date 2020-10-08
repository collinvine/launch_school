let wordCap = words => {
  let wordsArray = words.split(" ");

  let capWords = wordsArray.map(word => word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase());

  console.log(capWords.join(" "));
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');