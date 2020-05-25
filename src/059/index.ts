import { join } from 'path';

import { getInputBytes } from './input/input-bytes';
import { KeyGenerator } from './key-generator';

const UNREASONABLE = '#$%^&*{}`~'
  .split('')
  .map(char => char.charCodeAt(0));

export function main059() {
  const inputPath = join(__dirname, 'input/input.txt');
  const inputBytes = getInputBytes(inputPath);
  const decryptions = findReasonableDecryptions(inputBytes);
  for (const [key, decryption] of decryptions) {
    const strKey = convertBytesToString(key);
    const strDecryption = convertBytesToString(decryption);
    console.log(`${strKey}: ${strDecryption}`);
    console.log(decryption[1]);
  }
  if (decryptions.length !== 1) {
    throw new Error('Only one decryption should have been found.');
  }
  return decryptions[0][1].reduce((sum, curr) => sum + curr, 0);
}

function findReasonableDecryptions(encrypted: number[]) {
  const reasonableDecryptions: Array<[number[], number[]]> = [];
  for (const key of KeyGenerator()) {
    const decrypted = decrypt(encrypted, key);
    // attempt to trim the result of messier texts
    if (!isReasonable(decrypted)) {
      continue;
    }
    reasonableDecryptions.push([key, decrypted]);
  }
  return reasonableDecryptions;
}

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
  for (const unreasonableChar of UNREASONABLE) {
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
