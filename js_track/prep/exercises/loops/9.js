// Loop over the elements of the array fish, logging each one, and terminate the loop as soon as you encounter the string 'Nemo'.

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
let i;

for (i = 0; i < fish.length; i += 1) {
  if (fish[i] === "Nemo") {
    break;
  }

  console.log(fish[i]);
}
