let swapCase = string => {
  let swappedString = "";

  for (let i = 0; i < string.length; i += 1) {
    let char = string[i];
    if (char === char.toUpperCase()) {
      swappedString = swappedString + char.toLowerCase();
    } else {
      swappedString = swappedString + char.toUpperCase();
    }
  }

  console.log(swappedString);
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV'); 