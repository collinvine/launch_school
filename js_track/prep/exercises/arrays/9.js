let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

let contains = (word, arr) => {
  let i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      return true;
    }
  }

  return false;
}


console.log(contains('Barcelona', destinations));

console.log(contains('Nashville', destinations));
