let triangle = lines => {
  let spaces = ' ';
  let spacesRepeat = lines - 1;
  let stars = '*';
  let starsRepeat = 1;

  while (spacesRepeat >= 0) {
    console.log(`${spaces.repeat(spacesRepeat)}${stars.repeat(starsRepeat)}`);
    spacesRepeat -= 1;
    starsRepeat += 1;
  }
}

triangle(9);
