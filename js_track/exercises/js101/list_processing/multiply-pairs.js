let multiplyForLoop = (listOne, listTwo) => {
  let resultArray = [];

  for (let l1Idx = 0; l1Idx < listOne.length; l1Idx += 1) {
    for (let l2Idx = 0; l2Idx < listTwo.length; l2Idx += 1) {
      resultArray.push(listOne[l1Idx] * listTwo[l2Idx]);
    }
  }

  debugger;

  return resultArray.sort((a, b) => a - b);
}


function multiplyMap(listOne, listTwo) {
  let multiples = listOne.map(l1Val => {
    return listTwo.map(l2Val => {
      return l2Val * l1Val
    });
  })

  return multiples.flat().sort((a, b) => a - b);
}


console.log(multiplyForLoop([2, 4], [4, 3, 1, 2]));
console.log(multiplyMap([2, 4], [4, 3, 1, 2]));
