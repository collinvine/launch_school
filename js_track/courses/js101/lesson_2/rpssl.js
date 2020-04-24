const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 'sc', 'l', 'sp'];
let playerScore = 0;
let computerScore = 0;
let gameNumber = 1;

let prompt = (message) => console.log(`=> ${message}`);

// let incrementWinner = (winner) => {
//   winner += 1;
// }

let displayWinner = (choice, computerChoice) => {
  prompt(`You chose ${choice}, the computer chose ${computerChoice}`);

  if ((choice === 'r' && (computerChoice === 'sc' || computerChoice === 'l')) ||
      (choice === 'p' && (computerChoice === 'r' || computerChoice === 'sp')) ||
      (choice === 'sc' && (computerChoice === 'p' || computerChoice === 'l')) ||
      (choice === 'l' && (computerChoice === 'p' || computerChoice === 'sp')) ||
      (choice === 'sp' && (computerChoice === 'r' || computerChoice === 'sc'))) {
    prompt('You win!');
    return "you";
  } else if ((choice === 'r' && (computerChoice === 'p' || computerChoice === 'sp')) ||
      (choice === 'p' && (computerChoice === 'sc' || computerChoice === 'l')) ||
      (choice === 'sc' && (computerChoice === 'r' || computerChoice === 'sp')) ||
      (choice === 'l' && (computerChoice === 'r' || computerChoice === 'sc')) ||
      (choice === 'sp' && (computerChoice === 'p' || computerChoice === 'l'))) {
    prompt('Computer wins!');
    return "computer";
  } else {
    prompt("It's a tie");
  }
}

while (playerScore < 5 && computerScore < 5) {
  prompt(`This is game number ${gameNumber}. The score is: ${playerScore} for you and ${computerScore} for the computer.\n`);

  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  let winner = displayWinner(choice, computerChoice);
  if (winner === 'you') {
    playerScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }

  gameNumber += 1;
}
