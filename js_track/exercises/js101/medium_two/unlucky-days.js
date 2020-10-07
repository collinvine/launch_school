let fridayThe13ths = year => {
  let total = 0;
  const DAY = 13;

  for (let month = 0; month <= 11; month += 1) {
    let date = new Date(year, month, DAY);
    if (date.getDay() === 5) {
      total += 1;
    }
  }

  return total;
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2