import { readAllLines } from '../../common/util';

export function getInputPokerGames(path: string): string[] {
  return readAllLines(path)
    .filter(line => line !== '');
}
