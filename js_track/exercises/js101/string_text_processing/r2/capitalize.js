let capitalize = string => {
  return string
    .split(' ')
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(capitalize('four score and seven'));
console.log(capitalize('the javaScript language'));
console.log(capitalize('this is a "quoted" word'));