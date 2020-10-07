function bubbleSort(arr) {
  let sorted = true;

  while (sorted) {
    sorted = false;

    for (let index = 0; (index + 1) < arr.length; index += 1) {
      let el1 = arr[index];
      let el2 = arr[index + 1];

      if (el1 > el2) {
        arr.splice(index, 2, el2, el1);
        sorted = true;
      }
    }
  }

  return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);