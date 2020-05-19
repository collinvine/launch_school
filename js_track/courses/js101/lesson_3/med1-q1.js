let asciiArt = string => {
  let padding = 0;

  while (padding < 10) {
    console.log(string.padStart((padding + string.length), ' '));
    padding += 1;
  }
}

asciiArt("The Flintstones Rock!");
