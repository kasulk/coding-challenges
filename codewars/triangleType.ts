export function triangleType(a: number, b: number, c: number): number {
  // if a^2+b^2 = c^2 => 90
  //
  // 2, 4, 6 => 0
  // 5, 7, 8 => 1
  // 3, 4, 5 => 2 (90)
  // 7, 8, 12 => 3
  const [short, middle, long] = [a, b, c].sort((a, b) => a - b);

  //   if ([a, b, c].includes(0)) return 0;
  if (long === short + middle) return 0;
  if (short + middle < long) return 0;
  if (short ** 2 + middle ** 2 > long ** 2) return 1;
  if (short ** 2 + middle ** 2 === long ** 2) return 2;

  return 3;
}
