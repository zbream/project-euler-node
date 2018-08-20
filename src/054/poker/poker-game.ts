import { PokerHand } from './poker-hand';

export const enum PokerGameWinner {
  Tie = 0,
  Player1,
  Player2,
}

export class PokerGame {

  hand1: PokerHand;
  hand2: PokerHand;

  constructor(rawGame: string) {
    const rawHand1 = rawGame.substr(0, 14);
    const rawHand2 = rawGame.substr(15, 14);
    this.hand1 = new PokerHand(rawHand1);
    this.hand2 = new PokerHand(rawHand2);
  }

  getWinner(): PokerGameWinner {
    const value1 = this.hand1.getValue();
    const value2 = this.hand2.getValue();

    // compare ranks
    if (value1.rank > value2.rank) {
      return PokerGameWinner.Player1;
    } else if (value1.rank < value2.rank) {
      return PokerGameWinner.Player2;
    } else {
      // compare rank values
      if (value1.value > value2.value) {
        return PokerGameWinner.Player1;
      } else if (value1.value < value2.value) {
        return PokerGameWinner.Player2;
      } else {
        // compare high cards
        const cards1 = this.hand1.cards;
        const cards2 = this.hand2.cards;
        for (let i = 4; i >= 0; i--) {
          if (cards1[i].rank > cards2[i].rank) {
            return PokerGameWinner.Player1;
          } else if (cards1[i].rank < cards2[i].rank) {
            return PokerGameWinner.Player2;
          }
        }
        return PokerGameWinner.Tie;
      }
    }
  }

}
