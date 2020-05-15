function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

//

function simpleColor(color) {
  return (color === "blue" || color === "green");
}


function ternaryColor(color) {
  return (color === "blue" || color === "green" ? true : false);
}
