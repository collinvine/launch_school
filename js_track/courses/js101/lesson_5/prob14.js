let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arr = Object.entries(obj);
let newArr = [];


let capitalizer = input => {
  let capitalized = [];

  input.forEach( item => {
    capitalized.push(item.slice(0, 1).toUpperCase() + item.slice(1));
  })

  return capitalized;
}

arr.forEach( entry => {
  if (entry[1].type === 'fruit') {
    newArr.push(capitalizer(entry[1].colors));
  } else if (entry[1].type === 'vegetable') {
    newArr.push(entry[1].size.toUpperCase());
  }
})


console.log(newArr);
