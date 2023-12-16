export function powersOfTwo(n: number): number[] {
  return Array(n + 1)
    .fill(0)
    .map((_, i) => 2 ** i);
}
