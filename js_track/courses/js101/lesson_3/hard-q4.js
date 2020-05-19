function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split("."); //array split by dot
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}

/**

not returning a false condition
not handling when input string has more or less than 4 components:
  * 4.5.5
  * 1.2.3.4.5
both those values should be invalid."

**/

let isIpAddress = string => {
  let dotSeparatedArray = string.split('.');
  if (dotSeparatedArray.length !== 4) {
    return false;
  }

  while (dotSeparatedArray.length > 0) {
    let word = dotSeparatedArray.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}
