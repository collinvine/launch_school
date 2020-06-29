let sequnce = num => {
  let answer = [];
  for (let start = 1; start <= num; start += 1) {
    answer.push(start);
  }

  return answer;
}

console.log(sequnce(5));
console.log(sequnce(3));
console.log(sequnce(1));
