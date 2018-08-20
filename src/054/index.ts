import * as path from 'path';

import { getInputPokerGames } from './input/input-poker-games';
import { PokerGame, PokerGameWinner } from './poker/poker-game';

const FILE = 'input/input.txt';

const inputPath = path.join(__dirname, FILE);
const inputPokerGames = getInputPokerGames(inputPath);

const result = numPlayer1Wins(inputPokerGames);
console.log(result);

function numPlayer1Wins(rawPokerGames: string[]): number {
  let count = 0;
  for (const rawPokerGame of rawPokerGames) {
    const pokerGame = new PokerGame(rawPokerGame);
    if (pokerGame.getWinner() === PokerGameWinner.Player1) {
      count++;
    }
  }
  return count;
}
