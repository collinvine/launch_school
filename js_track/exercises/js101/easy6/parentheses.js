let parentheses = string => {
  let chars = string.split('');

  let open = 0;
  let close = 0;

  chars.forEach( char => {
    if (close > open) {
      return false;
    }

    if (char === "(") {
      open += 1;
    } else if (char === ")") {
      close += 1;
    }
  })

  return (open === close);
}

console.log(parentheses("What (is) this?") === true);
console.log(parentheses("What is) this?") === false);
console.log(parentheses("What (is this?") === false);
console.log(parentheses("((What) (is this))?") === true);
console.log(parentheses("((What)) (is this))?") === false);
console.log(parentheses("Hey!") === true);
console.log(parentheses(")Hey!(") === false);
console.log(parentheses("What ((is))) up(") === false);
