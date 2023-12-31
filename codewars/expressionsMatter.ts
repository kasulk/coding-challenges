export function expressionsMatter(a: number, b: number, c: number): number {
  let max = 0;

  const possibilities = [
    a + b + c,
    a + b * c,
    a * b + c,
    a * b * c,
    (a + b) * c,
    a * (b + c),
  ];

  for (let possibility of possibilities) {
    if (possibility > max) max = possibility;
  }

  return max;
}
