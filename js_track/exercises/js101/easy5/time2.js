let beforeMidnight = time => {
  let splitTime = time.split(':');
  let hrsToMin;
  let min;

  if (splitTime[0] === "24" || splitTime[0] === "00") {
    hrsToMin = 0;
  } else {
    hrsToMin = Number((24 - splitTime[0]) * 60);
  }

  if (splitTime[1] === "60" || splitTime[1] === "00") {
    min = 0;
  } else {
    min = Number(60 - splitTime[1]);
  }

  return hrsToMin + min;
}


let afterMidnight = time => {
  let splitTime = time.split(':');
  let hrsToMin;

  if (splitTime[0] === "24" || splitTime[0] === "00") {
    hrsToMin = 0;
  } else {
    hrsToMin = splitTime[0] * 60;
  }

  return Number(hrsToMin) + Number(splitTime[1]);
}

console.log(afterMidnight("00:00"));
console.log(beforeMidnight("00:00"));
console.log(afterMidnight("12:34"));
console.log(beforeMidnight("12:34"));
console.log(afterMidnight("24:00"));
console.log(beforeMidnight("24:00"));
