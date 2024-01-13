export function numberOfRectangles(m: number, n: number): number {
  return (m * (m + 1) * n * (n + 1)) / 4;
}
