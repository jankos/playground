export default class PlaygroundCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "card");

    const value = wrapper.appendChild(document.createElement("span"));
    value.setAttribute("class", "value");
    value.textContent = this.getAttribute("data-value");

    const suit = wrapper.appendChild(document.createElement("span"));
    suit.setAttribute("class", "suit");
    suit.textContent = this.getAttribute("data-suit");

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "./components/card/card.css");
    this.shadowRoot.appendChild(linkElem);

    this.shadowRoot.append(wrapper);
  }
}
