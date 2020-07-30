# Twentyone.js

## Psuedocode
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.

## Data Structure for Deck, Player, and Dealer hands

I need to store both keys (cards) and values (how many are left in the deck);

The only prob. it seems about an object is that the probability of choosing a card doesn't match reality, unless my random index first takes … no, that doesn't work.

{
  2: 4,
  3: 4,
  4: 4,
  5: 4,
  6: 4,
  7: 4,
  8: 4,
  9: 4,
  10: 4,
  jack: 4,
  queen: 4,
  king: 4,
  ace: 4
}

[
  2, 2, 2, 2,
  3, 3, 3, 3,
  4, 4, 4, 4,
  5, 5, 5, 5,
  6, 6, 6, 6,
  7, 7, 7, 7,
  8, 8, 8, 8,
  9, 9, 9, 9,
  10, 10, 10, 10,
  'jack', 'jack', 'jack', jack,
  'queen', 'queen', 'queen', 'queen',
  'king', 'king', 'king', 'king',
  'ace', 'ace', 'ace', ace
]


## Calculating aces

**Logic**

If one ace in hand:
  * if sum of non-ace cards is < 11, ace = 11;
  * if sum of non-ace cards is >= 11, ace = 1;

If two ace in hand:
  * if sum of non-ace cards is >= 10
    * ace1 = 1;
    * ace2 = 1;
  * if sum of non-ace cards is <= 9
    * ace1 = 11;
    * ace2 = 1;

Other problems:
  * how to filter out aces from non-aces?
    * need to sum non-aces
    * need to assign value to aces
  * how to assign values?

start
run checkForAces function and pass in hand
if aces, run calculateAces function
  split non-aces and aces
  check how many aces
    if one ace
      sum non-aces and assign value to ace
        11 if sum is >= 11
        1 if sum is < 11
    if two aces
      sum non-aces and assign value to aces
        if sum is >= 10
          aceOne = 1
          aceTwo = 1
        if sum is <= 9
          aceOne = 11
          aceTwo = 1

## next:

* implement the busted check ✅
* implement the aces logic ✅
* implement dealer logic ✅
* run checks each turn ✅
* show winner


## busted
need to sum the cards
hmm, also need to know the value of cards. I see.

input: nested array
output: boolean (true or false)
rules:
  * pass in player hand
  * sum value of cards in hand
    * check value
    * know what number value it is
    * how to do that?
  * if aces present, run ace logic
  * calculate total
  * if total is > 21, true
  * else false

values {
  J: 10,
  Q: 10,
  K: 10
}

wait, that's not needed, they all the same. Maybe I can have a face card constant and check if the value is included in facecard constant

They are also all strings, so need to convert to numbers.

## dealer logic

input: dealer hand as nested array
output: /
rules
  * if dealer total is less than 17, hit
  * else stay
  * if over 21, busted

need to loop
  count dealer hand
  if hand is less than 17, hit



















---------------------------

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
