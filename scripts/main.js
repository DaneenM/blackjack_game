
const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const deck = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
const makeDeck = (rank, suit) => {
  const card = {
    rank: rank,
    suit: suit,
    pointValue: rank > 10 ? 10 : rank,
  };
  deck.push(card);
};

for (let suit of suits) {
  for (const rank of ranks) {
    makeDeck(rank, suit);
  }
}

window.addEventListener("DOMContentLoaded", () => {

})

// for (s in suits) {
//   for (r in ranks) {
//     // dealer-hand.innerHTML += "&" + suits[s] + ";" + ranks[r] + " ";
//     // console.log(suits[s]+rank[r]);
//   }
// }
function shuffleDeck() {
  let randonNum = Math.floor((math.random() * 52));
  console.log(deck[randonNum])
}

shuffleDeck ();

// dealButton.addEventListener("click", event => dealCards())

// function shuffleDeck() {
//   for (let i = 0; i < deck.length; i++)
//     let j = Math.floor(Math.random() * deck.length);
//   let temp = deck[i];
//   deck[i] = deck[j];
//   deck[j] = temp;
// }
// console.log(deck);

// function makeDeck(card) {
//   let data = card.split()
// }


// function buildDeck() {
//   let values = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
//   let types = ["hearts", "spades", "clubs", "diamonds"];
//     deck = [];

//     for (let i = 0; i < types.length; i++) {
//       for (let j = 0; j < values.length; j++) {
//         deck.push(values[j] + "_" + types[i]);
//       }
//     }
//     console.log(deck);
// })
