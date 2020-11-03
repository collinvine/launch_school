let merge = (arr1, arr2) => {
  let newArr2 = arr1;

  arr2.forEach(el => {
    let last = newArr2.length - 1;
    if (!newArr2[0] || el > newArr2[last]) return newArr2.push(el);
    
    for (let idx = 0; idx < newArr2.length; idx += 1) {
      if (el < newArr2[idx]) {
        return newArr2.splice(idx, 0, el);
      }
    }
  })

  console.log(newArr2);
}

merge([1, 5, 9], [2, 6, 8]);
merge([1, 1, 3], [2, 2]);
merge([], [1, 4, 5]);
merge([1, 4, 5], []);