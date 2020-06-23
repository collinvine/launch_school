let multiplyAvg = arr => {
  let productAvg = (arr.reduce((acc, cur) => acc * cur)) / arr.length;
  return productAvg.toFixed(3);
}

console.log(multiplyAvg([3, 5]));
console.log(multiplyAvg([2, 5, 7, 11, 13, 17]));
