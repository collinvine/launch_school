let munstersDescription = "The Munsters are creepy and spooky.";

let caseFlipper = string => {
  let array = string.split("");

  array.forEach((char, i) => {
    if (char === char.toUpperCase()) {
      array[i] = char.toLowerCase();
    } else {
      array[i] = char.toUpperCase();
    }
  })

  return array.join("");
}

console.log(caseFlipper(munstersDescription));
