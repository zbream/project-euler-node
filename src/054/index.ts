import { join } from 'path';

import { getInputPokerGames } from './input/input-poker-games';
import { PokerGame, PokerGameWinner } from './poker/poker-game';

export function main054() {
  const inputPath = join(__dirname, 'input/input.txt');
  const inputPokerGames = getInputPokerGames(inputPath);
  return numPlayer1Wins(inputPokerGames);
}

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
