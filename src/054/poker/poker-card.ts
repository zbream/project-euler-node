export const enum PokerSuit {
  Clubs = 1,
  Diamonds,
  Hearts,
  Spades,
}

export class PokerCard {

  rank: number;
  suit: PokerSuit;

  constructor(rawCard: string) {
    this.rank = this.parseRank(rawCard[0]);
    this.suit = this.parseSuit(rawCard[1]);
  }

  private parseRank(rawRank: string): number {
    switch (rawRank) {
      case 'T':
        return 10;
      case 'J':
        return 11;
      case 'Q':
        return 12;
      case 'K':
        return 13;
      case 'A':
        return 14;
      default: {
        const rank = +rawRank;
        if (rank >= 2 && rank <= 9) {
          return rank;
        } else {
          throw new Error(`Invalid Rank: "${rawRank}"`);
        }
      }
    }
  }

  private parseSuit(rawSuit: string): PokerSuit {
    switch (rawSuit) {
      case 'C':
        return PokerSuit.Clubs;
      case 'D':
        return PokerSuit.Diamonds;
      case 'H':
        return PokerSuit.Hearts;
      case 'S':
        return PokerSuit.Spades;
      default: {
        throw new Error(`Invalid Suit: "${rawSuit}"`);
      }
    }
  }

}
