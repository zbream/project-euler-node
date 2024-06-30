import { join } from 'path';
import { getInputAttempts } from './input/input-attempts';

export function main079() {
  const inputPath = join(__dirname, 'input/keylog.txt');
  const inputAttemps = getInputAttempts(inputPath);
  const result = deriveKey(inputAttemps);
  return result;
}

function deriveKey(attempts: string[]) {
  const map = new CharMap();
  for (const attempt of attempts) {
    for (let i = 0; i < attempt.length; i++) {
      const curr = attempt[i];
      const prev = attempt[i - 1]; // undefined if out-of-bounds
      map.addChar(curr, prev);
    }
  }
  return map.evaluate();
}

class CharMap {
  /** A map of each character to the set of values it may possibly follow. */
  private map = new Map<string, Set<string>>();

  addChar(char: string, prev?: string) {
    let set = this.map.get(char);
    if (!set) {
      set = new Set();
      this.map.set(char, set);
    }
    if (prev !== undefined) {
      set.add(prev);
    }
  }

  evaluate(): string | undefined {
    let result = '';
    while (this.map.size) {
      const char = this.findNextChar();
      if (char === undefined) {
        return undefined;
      }
      result += char;
      this.removeChar(char);
    }
    return result;
  }

  private findNextChar(): string | undefined {
    const candidates = [];
    for (const [char, set] of this.map.entries()) {
      if (set.size === 0) {
        candidates.push(char);
      }
    }
    return candidates.sort()[0];
  }

  private removeChar(char: string): void {
    this.map.delete(char);
    for (const set of this.map.values()) {
      set.delete(char);
    }
  }
}
