let repeat = (word, number) => {
  let a = word;
  let i = 1;
  while (i < number) {
    a += word;
    i += 1;
  }

  return a;
}

console.log(repeat("ha", 3));
