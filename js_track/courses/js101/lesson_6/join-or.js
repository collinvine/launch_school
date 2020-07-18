let joinOr = (elements, delimiter = ", ", grammar = "or") => {
  let choices = '';

  if (elements.length === 1) {
    choices = elements.join();
  } else if (elements.length === 2) {
    choices = elements[0] + ' ' + grammar + ' ' + elements[1];
  } else {
    let lastElement = elements.pop();
    let remainingElements = elements.join(delimiter);

    choices = `${remainingElements}${delimiter}${grammar} ${lastElement}`;
  }

  return choices;
}

console.log(joinOr([1]));
console.log(joinOr([1], '! '));
console.log(joinOr([1, 2]));
console.log(joinOr([1, 2, 3]));
console.log(joinOr([1, 2, 3], '; '));
console.log(joinOr([1, 2, 3], '! '));
console.log(joinOr([1, 2, 3], ', ', 'and'));
