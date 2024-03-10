export function triangleType(a: number, b: number, c: number): number {
  const [short, middle, long] = [a, b, c].sort((a, b) => a - b);

  if (short + middle <= long) return 0;
  if (short ** 2 + middle ** 2 > long ** 2) return 1;
  if (short ** 2 + middle ** 2 === long ** 2) return 2;

  return 3;
}
