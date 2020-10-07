let triangle = (a, b, c) => {
  let tri = [a, b, c].sort((a, b) => a - b);

  if ((tri.reduce((acc, cur) => acc + cur) !== 180) || (!(tri[0] > 0))) {
    return "invalid";
  } else if (tri[2] > 90) {
    return "obtuse";
  } else if (tri[0] < 90 && tri[1] < 90 && tri[2] < 90) {
    return "acute";
  } else {
    return "right";
  }
}

console.log(triangle(60, 70, 50));
console.log(triangle(30, 90, 60));
console.log(triangle(120, 50, 10));
console.log(triangle(0, 90, 90));
console.log(triangle(50, 50, 50));