const readline = require('readline-sync');
const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['scissors', 'rock'],
  lizard: ['paper', 'spock']
};

// factory function for the common `move` property for computer and human objects
function createPlayer() {
  return {
    move: null,
    moveHistory: [],
  };
}

// factory function for the computer player object
function createComputer() {
  let playerObject = createPlayer();
  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
      this.moveHistory.push(this.move);
    }
  };

  return Object.assign(playerObject, computerObject);
}

// factory function for the human player object
function createHuman() {
  let playerObject = createPlayer();
  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, scissors, lizard, or spock:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors', 'lizard', 'spock'].includes(choice)) break;
        console.log('Sorry, invalid choice');
      }

      this.move = choice;
      this.moveHistory.push(this.move);
    }
  };

  return Object.assign(playerObject, humanObject);
}

function score(match) {
  return {
    match,
    humanScore: 0,
    computerScore: 0,
    games: 0
  };
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  score,

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors, Lizard, Spock!');
    while (true) {
      let answer = readline.question('How many games do you want to play in this match? ');
      if (Number(answer) && answer > 0) {
        this.score = score(Number(answer));
        console.log(`\nThe winner will be determined by a best of ${Number(answer)} match. Let's play!\n`);
        break;
      }
      console.log('Pick a number greater than zero');
    }
  },

  displayWinner() {
    let humanMove = this.human.move;
    let humanMoveHistory = this.human.moveHistory;
    let computerMove = this.computer.move;
    let computerMoveHistory = this.computer.moveHistory;

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if (humanMove === computerMove) {
      console.log("It's a tie\n");
    } else if (WINNING_COMBOS[humanMove].includes(computerMove)) {
      this.score.humanScore += 1;
      console.log(`You win! Your score is ${this.score.humanScore} and the computer's score is ${this.score.computerScore}\n`);
    } else {
      this.score.computerScore += 1;
      console.log(`The computer wins! Your score is ${this.score.humanScore} and the computer's score is ${this.score.computerScore}\n`);
    }

    console.log(`Your move history: ${humanMoveHistory.join(', ')}`);
    console.log(`Computer's move history: ${computerMoveHistory.join(', ')}`);

    this.score.games += 1;
  },

  displayMatchWinner() {
    let humanScore = this.score.humanScore;
    let computerScore = this.score.computerScore;

    if (this.score.match === 1) {
      let winner = humanScore > computerScore ? "You" : "Computer";
      console.log(`${winner} won the match 1–0!`);
    } else if (humanScore > computerScore) {
      console.log(`You won the match ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
      console.log(`The computer won the match ${computerScore} to ${humanScore}`);
    }
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors, Lizard, Spock. Goodbye!');
  },

  play() {
    while (true) {
      this.displayWelcomeMessage();

      while (this.score.computerScore < this.score.match && this.score.humanScore < this.score.match) {
        this.human.choose();
        this.computer.choose();
        this.displayWinner();
      }
      this.displayMatchWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();