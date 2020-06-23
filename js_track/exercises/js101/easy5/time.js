let bigHours = minutes => {
  let hours = Math.floor(minutes / 60);

  if (Math.abs(hours) > 24) {
    return hours % 24;
  } else {
    return hours;
  }
}

let padZero = num => {
  let string = String(Math.abs(num));
  if (string.length === 1) {
    return string.padStart(2, '0');
  } else {
    return string;
  }
}

let timeOfDay = num => {
  let sign = Math.sign(num);
  let hrs = bigHours(num);
  let min = num % 60;

  if (sign === 1) {
    return `${padZero(hrs)}:${padZero(min)}`;
  } else if (sign === -1) {
    return `${padZero(24 + hrs)}:${padZero(60 + min)}`;
  } else {
    return `00:00`;
  }
}

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));
