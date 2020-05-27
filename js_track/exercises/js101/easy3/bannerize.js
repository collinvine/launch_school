let bannerize = phrase => {
  let dashes = '-';
  let spaces = ' ';

  console.log(`+${dashes.repeat(phrase.length + 2)}+`);
  console.log(`|${spaces.repeat(phrase.length + 2)}|`);
  console.log(`| ${phrase} |`);
  console.log(`|${spaces.repeat(phrase.length + 2)}|`);
  console.log(`+${dashes.repeat(phrase.length + 2)}+`);
}


bannerize('To boldly go where no one has gone before.');
bannerize('');
