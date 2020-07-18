const HUMAN_MARKER = "X";


let winningLines = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],  // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9],  // columns
  [1, 5, 9], [3, 5, 7]              // diagonals
];

let checkForThreat = (board) => { // check if board is correctly passed in and used
  let defensiveMove;

  winningLines.forEach(subarray => {
    let findThreat = subarray.filter(square => board[square] !== HUMAN_MARKER); // is this correctly checking board?
    if (findThreat.length === 1) {
      defensiveMove = findThreat[0];
    }
  })

  return defensiveMove;
}
