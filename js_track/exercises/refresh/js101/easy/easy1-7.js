function shortLongShort(str1, str2) {
  let concatString = ((str1.length < str2.length) ? str1.concat(str2, str1) : str2.concat(str1, str2));

  console.log(concatString);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"