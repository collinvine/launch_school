let isLeapYear = year => {
  if (year % 4 === 0) {
    if (year % 100 !== 0) {
      return true;
    } else if (year % 100 === 0 && year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

isLeapYear(2016);
isLeapYear(2015);
isLeapYear(2100);
isLeapYear(2400);
isLeapYear(240000);
isLeapYear(240001);
isLeapYear(2000);
isLeapYear(1900);
isLeapYear(1752);
isLeapYear(1700);
isLeapYear(1);
isLeapYear(100);
isLeapYear(400);
