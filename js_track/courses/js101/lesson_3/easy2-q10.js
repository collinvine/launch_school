let title = "Flintstone Family Members";
const TABLEWIDTH = 40;

let centerText = title => {
  let padAmount = Math.round((TABLEWIDTH - title.length) / 2) + title.length;
  let centeredTitle = title.padStart(padAmount);
  return centeredTitle;
}

console.log(centerText(title));
