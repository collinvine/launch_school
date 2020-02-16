let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// let removeItems = () => {
//   groceryList.forEach( el => {
//     console.log(el);
//     groceryList.shift();
//   })
//
//   return groceryList;
// }
//
// console.log(removeItems());

// for (let i = 0; i < groceryList.length; i++) {
//   console.log(groceryList.shift());
// }

while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();

  console.log(checkedItem);
}


groceryList;
