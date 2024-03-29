function Ninja() {
  this.swung = false;
}

Ninja.prototype.swing = function() {
  if (this.swung) {
    this.swung = false;
  } else {
    this.swung = true;
  }

  return this;
};

let ninjaA = new Ninja();
let ninjaB = new Ninja();

console.log(ninjaA.swing().swung);      // logs `true`
console.log(ninjaB.swing().swung);      // logs `true`