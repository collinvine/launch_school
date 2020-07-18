const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 5;

let prompt = (message) => console.log(`=> ${message}`);

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function joinOr(elements, delimiter = ", ", grammar = "or") {
  let choices = '';

  if (elements.length === 1) {
    choices = elements.join();
  } else if (elements.length === 2) {
    choices = elements[0] + ' ' + grammar + ' ' + elements[1];
  } else {
    let lastElement = elements.pop();
    let remainingElements = elements.join(delimiter);
    choices = `${remainingElements}${delimiter}${grammar} ${lastElement}`;
  }

  return choices;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}:`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) {
      break;
    } else {
      prompt("Sorry, that's not a valid choice");
    }
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],  // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9],  // columns
    [1, 5, 9], [3, 5, 7]              // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board); // returns a boolean on a non-boolean value
}

while (true) {
  let playerScore = 0;
  let compScore = 0;
  let winner;

  while (true) {
    let board = initializeBoard();

    while (true) {
      displayBoard(board);

      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      let winner = detectWinner(board);

      if (winner === 'Player') {
        playerScore += 1;
      } else if (winner === "Computer") {
        compScore += 1;
      }
      prompt(`${winner} won!`);
    } else {
      prompt(`It's a tie!`);
    }

    if (playerScore === GAMES_TO_WIN) {
      winner = "Player";
      break;
    } else if (compScore === GAMES_TO_WIN) {
      winner = "Computer";
      break;
    }

    prompt(`Player's score is ${playerScore}. Computer's score is ${compScore}. First player to 5 wins the match.`);
    readline.question('Press any key to play the next game.')
  }

  prompt(`Player's score is ${playerScore}. Computer's score is ${compScore}. ${winner} won the match!`)
  prompt('Play another match? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');
