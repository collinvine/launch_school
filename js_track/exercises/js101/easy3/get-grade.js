let getGrade = (grade1, grade2, grade3) => {
  let average = (grade1 + grade2 + grade3) / 3;
  console.log(average);

  if ((average >= 90) && (average <= 100)) {
    return "A";
  } else if ((average >= 80) && (average <= 90)) {
    return "B";
  } else if ((average >= 70) && (average <= 80)) {
    return "C";
  } else if ((average >= 60) && (average <= 70)) {
    return "D";
  } else if ((average >= 0) && (average <= 60)) {
    return "F";
  } else {
    return "Unknown grade";
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));
