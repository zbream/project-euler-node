import { PokerCard } from './poker-card';

// tslint:disable no-conditional-assignment

export const enum PokerHandRank {
  HighCard = 1,
  OnePair,
  TwoPairs,
  ThreeOfAKind,
  Straight,
  Flush,
  FullHouse,
  FourOfAKind,
  StraightFlush,
  RoyalFlush,
}

export interface PokerHandValue {
  rank: PokerHandRank;
  value: number;
}

export class PokerHand {

  cards: PokerCard[];

  constructor(rawHand: string) {
    this.cards = this.parseCards(rawHand);
  }

  getValue(): PokerHandValue {
    let value;
    if ((value = this.isRoyalFlush()) !== undefined) {
      return { rank: PokerHandRank.RoyalFlush, value };
    } else if ((value = this.isStraightFlush()) !== undefined) {
      return { rank: PokerHandRank.StraightFlush, value };
    } else if ((value = this.isFourOfAKind()) !== undefined) {
      return { rank: PokerHandRank.FourOfAKind, value };
    } else if ((value = this.isFullHouse()) !== undefined) {
      return { rank: PokerHandRank.FullHouse, value };
    } else if ((value = this.isFlush()) !== undefined) {
      return { rank: PokerHandRank.Flush, value };
    } else if ((value = this.isStraight()) !== undefined) {
      return { rank: PokerHandRank.Straight, value };
    } else if ((value = this.isThreeOfAKind()) !== undefined) {
      return { rank: PokerHandRank.ThreeOfAKind, value };
    } else if ((value = this.isTwoPairs()) !== undefined) {
      return { rank: PokerHandRank.TwoPairs, value };
    } else if ((value = this.isOnePair()) !== undefined) {
      return { rank: PokerHandRank.OnePair, value };
    } else {
      return { rank: PokerHandRank.HighCard, value: this.cards[4].rank };
    }
  }

  private isRoyalFlush(): number | undefined {
    // RankValue can be ignored, automatic tie
    return (this.isStraightFlush() === 14) ? 0 : undefined;
  }

  private isStraightFlush(): number | undefined {
    if (this.isFlush() && this.isStraight()) {
      // RankValue is the highest card
      return this.cards[4].rank;
    }
  }

  private isFourOfAKind(): number | undefined {
    for (let i = 0; i < 2; i++) {
      if (this.isRangeEqual(i, 4)) {
        // RankValue is one of the 4
        return this.cards[i].rank;
      }
    }
  }

  private isFullHouse(): number | undefined {
    if (this.isRangeEqual(0, 3) && this.isRangeEqual(3, 2)) {
      // AAABB, RankValue is A
      return this.cards[0].rank;
    } else if (this.isRangeEqual(0, 2) && this.isRangeEqual(2, 3)) {
      // AABBB, RankValue is B
      return this.cards[2].rank;
    } else {
      return undefined;
    }
  }

  private isFlush(): number | undefined {
    for (let i = 0; i < 4; i++) {
      if (this.cards[i].suit !== this.cards[i + 1].suit) {
        return undefined;
      }
    }
    // RankValue is the highest card
    return this.cards[4].rank;
  }

  private isStraight(): number | undefined {
    for (let i = 0; i < 4; i++) {
      if (this.cards[i + 1].rank !== this.cards[i].rank + 1) {
        return undefined;
      }
    }
    // RankValue is the highest card
    return this.cards[4].rank;
  }

  private isThreeOfAKind(): number | undefined {
    for (let i = 0; i < 3; i++) {
      if (this.isRangeEqual(i, 3)) {
        // RankValue is the rank of the 3 cards
        return this.cards[i].rank;
      }
    }
    return undefined;
  }

  private isTwoPairs(): number | undefined {
    let pairs = 0;
    let maxPair = 0;

    for (let i = 0; i < 4; i++) {
      if (this.isRangeEqual(i, 2)) {
        pairs++;
        maxPair = Math.max(maxPair, this.cards[i].rank);
      }
    }

    // RankValue is the rank of the highest pair
    return (pairs === 2 ? maxPair : undefined);
  }

  private isOnePair(): number | undefined {
    let pairs = 0;
    let maxPair = 0;

    for (let i = 0; i < 4; i++) {
      if (this.isRangeEqual(i, 2)) {
        pairs++;
        maxPair = Math.max(maxPair, this.cards[i].rank);
      }
    }

    // RankValue is the rank of the highest pair
    return (pairs === 1 ? maxPair : undefined);
  }

  private isRangeEqual(start: number, length: number): boolean {
    for (let i = 0; i < length - 1; i++) {
      const j = start + i;
      if (this.cards[j].rank !== this.cards[j + 1].rank) {
        return false;
      }
    }
    return true;
  }

  private parseCards(rawHand: string): PokerCard[] {
    return rawHand
      .split(' ')
      .slice(0, 5)
      .map(rawCard => new PokerCard(rawCard))
      .sort((a, b) => a.rank - b.rank);
  }

}
