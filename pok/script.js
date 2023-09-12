import data from "./data.json" assert { type: "json" };

import logman from "./scripts/logman.js";
import { shuffleDeck } from "./scripts/helpers.js";

import PlaygroundCard from "./components/card/card.js";

logman(data);
shuffleDeck(data.deck);

customElements.define("pg-card", PlaygroundCard);
