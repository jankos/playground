import data from './data.json' assert { type: 'json' };

import logman from './scripts/logman.js';
import { shuffleDeck } from './scripts/helpers.js';

logman(data);
shuffleDeck(data.deck);
