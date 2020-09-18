let rotateArray = array => {
  if (!Array.isArray(array)) {
    console.log("Not an array");
    return undefined;
  } else if (array.length === 0) {
    console.log("That's an empty array");
    return [];
  }

  let resultArray = [];
  let firstElement = array[0];
  let remainingElements = array.slice(1);

  resultArray.push(remainingElements, firstElement);
  console.log(resultArray.flat());
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);      