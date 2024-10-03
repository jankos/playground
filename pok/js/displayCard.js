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

  result.innerHTML = `${c.rank} <span style="color: ${suit.color}">${suit.char}</span>`;
  target.appendChild(result);
}
