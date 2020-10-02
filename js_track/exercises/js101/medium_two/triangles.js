let triangle = (a, b, c) => {
  let tri = [a, b, c].sort((a, b) => a - b);

  if ((!(tri[0] > 0)) || (tri[2] > (tri[0] + tri[1]))) {
    return "invalid";
  } else if (tri[0] === tri[1] && tri[0] === tri[2]) {
    return "equilateral";
  } else if (tri[0] !== tri[1] && tri[0] !== tri[2] && tri[1] !== tri[2]) {
    return "scalene";
  } else {
    return "isosceles";
  }
}



console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));