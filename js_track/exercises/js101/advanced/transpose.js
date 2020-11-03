let transpose = matrix => {
  let newMatrix = [];

  for (let idx = 0; idx < matrix[0].length; idx++) {
    newMatrix.push([]);
  }
  
  matrix.forEach(subarray => {
    subarray.forEach((num, index) => {
      newMatrix[index].push(num);
    })
  })

  return newMatrix;
};

let startingMatrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

console.log(transpose(startingMatrix));
console.log(startingMatrix);
console.log(transpose([[1, 2, 3, 4]]));
console.log(transpose([[1], [2], [3], [4]]));
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));