export function displayCard(container, cards, suits, card) {
  let template = document.querySelector('#card');
  template.textContent = card;

  let target = document.querySelector(container);
  let clone = template.content.cloneNode(true);
  let result = clone.querySelector('.card');

  let c = cards.get(card);
  console.log(c);
  console.log(suits);
  let suit = suits.get(c.suit);

  result.textContent = `${c.rank} ${suit.char}`;
  target.appendChild(result);
}
