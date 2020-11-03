let transpose = matrix => {
  let newMatrix = [];

  for (let idx = 0; idx < matrix[0].length; idx++) {
    newMatrix.push([]);
  }

  const lastIdx = matrix.length - 1;

  matrix.forEach((subarray, outerIdx) => {
    subarray.forEach((num, innerIdx) => {
      newMatrix[innerIdx][lastIdx - outerIdx] = num;
    })
  })

  return newMatrix;
};

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];
let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix3 = transpose(transpose(transpose(transpose(matrix2))));


console.log(transpose(matrix1));
console.log(transpose(matrix2));
console.log(newMatrix3);