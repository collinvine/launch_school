let randomAge = () => {
  return Math.floor(Math.random() * (120 - 20 + 1) + 20);
}

console.log(`Teddy is ${randomAge()} years old.`);
