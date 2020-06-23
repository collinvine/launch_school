let dms = num => {
  let deg = Math.floor(num).toString();
  let min = Math.floor((num - deg) * 60).toString();
  let sec = Math.floor((((num - deg) * 60) - Math.floor(min)) * 60).toString();

  if (min.length < 2) {
    min = min.padStart(2, '0');
  }

  if (sec.length < 2) {
    sec = sec.padStart(2, '0');
  }

  console.log(`${deg}º${min}'${sec}"`);
}

dms(30);
dms(76.73);
dms(254.6);
dms(93.034773);
dms(0);
dms(360);
