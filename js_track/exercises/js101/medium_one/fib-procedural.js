let fibProcedural = num => {
  let fibArr = [1, 1];

  while (num > fibArr.length) {
    let fibn = fibArr.slice(-2, -1)[0] + fibArr.slice(-1)[0];
    fibArr.push(fibn);
  }

  return fibArr.splice(-1)[0];

}


console.log(fibProcedural(1));
console.log(fibProcedural(2));
console.log(fibProcedural(3));
console.log(fibProcedural(4));
console.log(fibProcedural(5));
console.log(fibProcedural(6));
console.log(fibProcedural(20));
console.log(fibProcedural(50));
console.log(fibProcedural(77));
console.log(fibProcedural(100));
console.log(fibProcedural(10000));
