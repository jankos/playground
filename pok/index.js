import deckData from './js/data/deck.js';
import ranksData from './js/data/ranks.js';
import suitsData from './js/data/suits.js';
import cardsData from './js/data/cards.js';
import { twoPlayerGame } from "./js/helpers.js";
import { shuffleDeck } from './js/shuffleDeck.js';

let deck = shuffleDeck(deckData);

let ranks = new Set();
ranksData.forEach(rank => {
  ranks.add(rank);
});

let suits = new Map();
Object.entries(suitsData).forEach(suit => {
  const [key, value] = suit;
  suits.set(key, value);
});

let cards = new Map();
Object.entries(cardsData).forEach(card => {
  const [key, value] = card;
  cards.set(key, value);
});

console.log(deck);
// console.log(ranks);
// console.log(suits);
// console.log(cards);

twoPlayerGame(deck, cards, suits);
