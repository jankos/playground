import { displayCard } from "./displayCard.js";

export function twoPlayerGame(deck, cards, suits) {
  let trash = [];

  displayCard('#npc', cards, suits, deck.shift());
  displayCard('#player', cards, suits, deck.shift());

  displayCard('#npc', cards, suits, deck.shift());
  displayCard('#player', cards, suits, deck.shift());

  trash.push(deck.shift());

  displayCard('#table', cards, suits, deck.shift());
  displayCard('#table', cards, suits, deck.shift());
  displayCard('#table', cards, suits, deck.shift());

  trash.push(deck.shift());

  displayCard('#table', cards, suits, deck.shift());

  trash.push(deck.shift());

  displayCard('#table', cards, suits, deck.shift());


  // let playerOne = [];
  // let playerTwo = [];
  // let trash = [];
  // let table = [];

  // playerOne.push(deck.shift());
  // playerTwo.push(deck.shift());

  // playerOne.push(deck.shift());
  // playerTwo.push(deck.shift());

  // trash.push(deck.shift());

  // table.push(deck.shift());
  // table.push(deck.shift());
  // table.push(deck.shift());

  // trash.push(deck.shift());

  // table.push(deck.shift());

  // trash.push(deck.shift());

  // table.push(deck.shift());

  // console.log(playerOne, playerTwo, table);
}
