/* eslint-disable max-lines-per-function */
const readline = require('readline-sync');

// factory function for the common move property for computer and human objects
function createPlayer() {
  return {
    move: null,
  };
}

// factory function for the computer player object
function createComputer() {
  let playerObject = createPlayer();
  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
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
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice');
      }

      this.move = choice;
    }
  };

  return Object.assign(playerObject, humanObject);
}

function score(match = 5) {
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
    console.log('Welcome to Rock, Paper, Scissors!');
    while (true) {
      let answer = readline.question('How many games do you want to play to determine an overall winner? ');
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
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
          this.score.humanScore += 1;
          console.log(`You win! Your score is ${this.score.humanScore} and the computer's score is ${this.score.computerScore}\n`);
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
              (humanMove === 'paper' && computerMove === 'scissors') ||
              (humanMove === 'scissors' && computerMove === 'rock')) {
                this.score.computerScore += 1;
                console.log(`The computer wins! Your score is ${this.score.humanScore} and the computer's score is ${this.score.computerScore}\n`);
    } else {
      console.log("It's a tie");
    }

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
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
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