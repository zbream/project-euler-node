import * as path from 'path';

import { getInputBytes } from './input/input-bytes';
import { KeyGenerator } from './key-generator';

const FILE = 'input/input.txt';
const UNREASONABLE = '#$%^&*{}`~';

const inputPath = path.join(__dirname, FILE);
const inputBytes = getInputBytes(inputPath);

const unreasonableChars = UNREASONABLE.split('').map(char => char.charCodeAt(0));

showReasonableDecryptions(inputBytes);

function showReasonableDecryptions(encrypted: number[]): void {
  for (const key of KeyGenerator()) {
    const decrypted = decrypt(encrypted, key);
    // attempt to trim the result of messier texts
    if (!isReasonable(decrypted)) {
      continue;
    }
    const strKey = convertBytesToString(key);
    const strDecrypted = convertBytesToString(decrypted);
    console.log(`${strKey}: ${strDecrypted}\n`);
  }
}

function isReasonable(decrypted: number[]): boolean {
  for (const unreasonableChar of unreasonableChars) {
    if (decrypted.indexOf(unreasonableChar) > -1) {
      return false;
    }
  }
  return true;
}

function decrypt(encrypted: number[], key: number[]): number[] {
  const decrypted = new Array<number>(encrypted.length);

  for (let i = 0; i < encrypted.length; i++) {
    const keyPosition = i % key.length;
    // tslint:disable-next-line no-bitwise
    decrypted[i] = encrypted[i] ^ key[keyPosition];
  }

  return decrypted;
}

function convertBytesToString(bytes: number[]) {
  return String.fromCodePoint(...bytes);
}
