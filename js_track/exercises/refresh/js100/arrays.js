let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

for(let el = 0; el < groceryList.length; el++) {
  console.log(groceryList.splice(0,1));
}

console.log(groceryList);