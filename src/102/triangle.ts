export interface Point {
  readonly x: number;
  readonly y: number;
}

export interface Triangle {
  readonly a: Point;
  readonly b: Point;
  readonly c: Point;
}

export function triangleContains({ a, b, c }: Triangle, x: Point): boolean {
  const area = triangleArea({ a, b, c });

  const areaAB = triangleArea({ a, b, c: x });
  const areaBC = triangleArea({ b, c, a: x });
  const areaAC = triangleArea({ a, c, b: x });

  return (area === (areaAB + areaBC + areaAC));
}

export function triangleArea({ a, b, c }: Triangle): number {
  return Math.abs((a.x * (b.y - c.y) + b.x * (c.y - a.y) + c.x * (a.y - b.y)) / 2);
}
