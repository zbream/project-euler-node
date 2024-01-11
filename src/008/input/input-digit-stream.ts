import * as fs from 'fs';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export function getInputDigitStream$(path: string): Observable<number> {
  return getInputFileCharStream$(path).pipe(
    filter(char => char !== '\r' && char !== '\n'),
    map(char => +char),
  );
}

function getInputFileCharStream$(path: string): Observable<string> {
  return new Observable(subscriber => {
    const stream = fs.createReadStream(path, { encoding: 'utf8' });
    stream.on('readable', () => {
      let chunk: string | null;
      while ((chunk = stream.read(1)) !== null) {
        subscriber.next(chunk);
      }
    });
    stream.on('error', err => {
      subscriber.error(err);
    });
    stream.on('close', () => {
      subscriber.complete();
    });
    return () => {
      stream.close();
    };
  });
}
