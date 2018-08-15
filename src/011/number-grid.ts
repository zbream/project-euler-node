import { readAllLines } from '../common/util';

export function getNumberGrid(path: string, gridWidth: number, gridHeight: number): number[][] {
  const rawRows = readAllLines(path);

  const rows: number[][] = [];
  for (let r = 0; r < gridHeight; r++) {
    const rawRow = rawRows[r];
    const rawColumns = rawRow.split(' ');

    const row: number[] = [];
    for (let c = 0; c < gridWidth; c++) {
      row.push(+rawColumns[c]);
    }

    rows.push(row);
  }

  return rows;
}
