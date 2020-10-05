const readline = require('readline-sync');
const FACECARDS = ['J', 'Q', 'K'];

let deck = [
  ['H', '2'], ['D', '2'], ['S', '2'], ['C', '2'],
  ['H', '3'], ['D', '3'], ['S', '3'], ['C', '3'],
  ['H', '4'], ['D', '4'], ['S', '4'], ['C', '4'],
  ['H', '5'], ['D', '5'], ['S', '5'], ['C', '5'],
  ['H', '6'], ['D', '6'], ['S', '6'], ['C', '6'],
  ['H', '7'], ['D', '7'], ['S', '7'], ['C', '7'],
  ['H', '8'], ['D', '8'], ['S', '8'], ['C', '8'],
  ['H', '9'], ['D', '9'], ['S', '9'], ['C', '9'],
  ['H', '10'], ['D', '10'], ['S', '10'], ['C', '10'],
  ['H', 'J'], ['D', 'J'], ['S', 'J'], ['C', 'J'],
  ['H', 'Q'], ['D', 'Q'], ['S', 'Q'], ['C', 'Q'],
  ['H', 'K'], ['D', 'K'], ['S', 'K'], ['C', 'K'],
  ['H', 'A'], ['D', 'A'], ['S', 'A'], ['C', 'A'],
];

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }
}

function dealHand(deck) {
  let [card1, card2] = deck.splice(-2);
  return [card1, card2];
}

function displayHand(cards, player = "Your", hide = "no") {
  if (hide === "no") {
    let hand = cards.map(card => card[1]);
    let lastCard = hand.pop();
    console.log(`${player} hand: ${hand.join(', ')} and ${lastCard}`);
  } else if (hide === "hide hand") {
    let hand = cards.map(card => card[1]);
    console.log(`Dealer hand: ${hand[0]} and unknown`);
  }
}

function playerTurn(deck, dealerHand, playerHand) {

  while (true) {
    displayHand(dealerHand, "Dealer", "hide hand");
    displayHand(playerHand);

    if (busted(playerHand)) {
      console.log("\nOh no! You've gone over 21 and busted. Dealer wins.");
      break;
    }

    if (hitOrStay()) {
      console.log(`\nPlayer stays with a total of ${countHand(playerHand)}.`);
      break;
    }

    playerHit(deck, playerHand);
  }
}

function playerHit(deck, hand) {
  let [newCard] = deck.splice(-1);
  return hand.push(newCard);
}

function hitOrStay() {
  console.log("\n>> Do you want to hit or stay?");

  let answer = readline.question();
  return answer.toLowerCase()[0] === "s";
}

function dealerTurn(deck, dealerHand) {
  let dealerSum = countHand(dealerHand);

  while (dealerSum < 17) {
    playerHit(deck, dealerHand);
    dealerSum = countHand(dealerHand);
  }

  if (busted(dealerHand)) {
    console.log(`Dealer busted with ${countHand(dealerHand)}. You win!`);
  }

  return dealerHand;
}

function busted(hand) {
  return countHand(hand) > 21;
}

function countHand(hand) {
  let values = hand.map(card => card[1]);

  let total = 0;

  for (let index = 0; index < values.length; index += 1) {
    if (FACECARDS.includes(values[index])) {
      total += 10;
    } else if (values[index] === "A") {
      total += 11;
    } else {
      total += Number(values[index]);
    }
  }

  values.filter(value => value === "A").forEach(_ => {
    if (total > 21) total -= 10;
  });

  return total;
}

function findWinner(playerHand, dealerHand) {
  let playerTotal = countHand(playerHand);
  let dealerTotal = countHand(dealerHand);

  if (playerTotal > dealerTotal) {
    return "player";
  } else if (playerTotal < dealerTotal) {
    return "dealer";
  } else {
    return "tie";
  }
}

function displayWinner(winner, playerHand, dealerHand) {
  if (winner === "player") {
    console.log(`Player has ${countHand(playerHand)} and dealer has ${countHand(dealerHand)}. Player wins!`);
  } else if (winner === "dealer") {
    console.log(`Player has ${countHand(playerHand)} and dealer has ${countHand(dealerHand)}. Dealer wins!`);
  } else {
    console.log(`Player has ${countHand(playerHand)} and dealer has ${countHand(dealerHand)}. It's a tie!`);
  }
}

function playAgain() {
  console.log("\nDo you want to play again? 'yes' or 'no'");
  let answer = readline.question();

  return answer.toLowerCase()[0] === "n";
}

function playGame() {
  while (true) {
    shuffle(deck);

    let playerHand = dealHand(deck);
    let dealerHand = dealHand(deck);

    playerTurn(deck, dealerHand, playerHand);

    if (busted(playerHand)) break;

    dealerTurn(deck, dealerHand);

    if (busted(dealerHand)) break;

    displayHand(dealerHand, "Dealer");

    let winner = findWinner(playerHand, dealerHand);
    displayWinner(winner, playerHand, dealerHand);

    break;
  }
}

while (true) {
  playGame();

  if (playAgain()) break;
}
