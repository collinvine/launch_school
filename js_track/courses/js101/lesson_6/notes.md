# Choose who goes first
Need to start off by asking the user who should go first, then save that to a variable. Options

* player or p
* computer or c

need to take that input, analyze just the lowercase first letter, and then set the initial variable to who goes first

Next, during game play, it should analyze who's turn it is from that variable and prompt that to go.

Next, before the next turn, it should switch who's the active player. I've already seen how to do this, so it seems easy using a ternary operator. 

prompt("Who should go first? (Player / p or Computer / c)")
let activePlayer = readline.question().toLowerCase()[0];




# Computer AI: Defense

Now: comp picks at random
Defense: if there's a threat, make intelligent mark

Threat === one more move and player wins

Need to checkForThreat (can easily define) but then choose the next square.

I could define threats using the winningLines. A threat is if players marks are on two of the three of any given array.

The trick is:

* check for two of three
* return the third  

Maybe there's a way to filter through a nested array. Filter out the marks within a nested array item. If there is a mark, don't include.

If the final result is equal to 1, then I know there's a threat because they other two are taken.

If it's more than 1, no threat.





# Improve join function
input:
output: string
rules:
  * write function named `joinOr`
  * takes three arguments
    * elements to join (in our case it'll be Board)
    * delimiter (`,`, `;`)
      * if not provided, default to `,`
    * word to insert before the last element
      * if not provided, default to "or"
  * if only two elements are passed in, don't seperate with delimiter and instead separate by "or"

**tests**
joinOr([1, 2]);                  // => "1 or 2"
joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"

**algo**
three main scenarios:

1. 1 element
2. 2 elements
3. more than 2 elements

To determine those, I could measure the length and then use a Switch statement to run the appropriate program.

I wonder if there's a more efficient way, though…











# tic tac toe

**problem decomposition**
1. Display the initial empty 3x3 board.
2. Ask the user to mark a square.
3. Computer marks a square.
4. Display the updated board state.
5. If it's a winning board, display the winner.
6. If the board is full, display tie.
7. If neither player won and the board is not full, go to #2
8. Play again?
9. If yes, go to #1
10. Goodbye!

Two loops:
* An inner loop between steps #2 and #7 that repeats as long as there is no winner and the board isn't full.
* An outer loop between steps #1 and #9 that repeats as long as the player wants to keep playing.
