let arrAvg = arr => {
  let avg = (arr.reduce((acc, cur) => acc + cur)) / arr.length;

  return Math.floor(avg);
}

console.log(arrAvg([1, 5, 87, 45, 8, 8]));
console.log(arrAvg([9, 47, 23, 95, 16, 52]));
