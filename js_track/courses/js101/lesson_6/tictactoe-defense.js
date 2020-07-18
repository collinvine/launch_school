const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],  // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9],  // columns
  [1, 5, 9], [3, 5, 7]              // diagonals
];


let prompt = (message) => console.log(`=> ${message}`);

function displayBoard(board) {
  // console.clear();

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

// checks for empty squares. If none, game is over and it's a tie
function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

// looks for a smart offensive or defensive move for the computer to make
function findSmartMove(board, marker) {
  let smartMove;

  WINNING_LINES.forEach(subarray => {
    let findSmartMove = subarray.filter(square => board[square] !== marker);
    if (
      findSmartMove.length === 1 &&
      board[findSmartMove[0]] === INITIAL_MARKER
    ) {
      smartMove = findSmartMove[0];
    }
  });

  return smartMove;
}

function isMiddleEmpty(board) {
  return board[5] === INITIAL_MARKER;
}

function switchPlayer(activePlayer) {
  activePlayer = activePlayer === 'p' ? "c" : "p";
  return activePlayer;
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
  let defensiveMove = findSmartMove(board, HUMAN_MARKER);
  let offensiveMove = findSmartMove(board, COMPUTER_MARKER);

  // checks whether there is a good offensive or defensive move, else random
  if (offensiveMove) {
    board[offensiveMove] = COMPUTER_MARKER;
    console.log(`Computer is on the offence! ${offensiveMove}`);
  } else if (defensiveMove) {
    board[defensiveMove] = COMPUTER_MARKER;
    console.log(`Computer is on the defence! ${defensiveMove}`);
  } else if (isMiddleEmpty(board)) {
      board[5] = COMPUTER_MARKER;
      console.log("Computer chooses middle!");
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

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
  return !!detectWinner(board);
}

while (true) {
  let board = initializeBoard();

  prompt("Who should go first? ['Player' or 'Computer']");
  let activePlayer = readline.question().toLowerCase()[0];

  while (true) {
    displayBoard(board);

    if (activePlayer === 'p') {
      playerChoosesSquare(board);
    } else {
      computerChoosesSquare(board);
    }

    activePlayer = switchPlayer(activePlayer);

    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt(`It's a tie!`);
  }

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');
