export function countRedBeads(n: number): number {
  // add the distance from n to 2 to n

  return n < 2 ? 0 : n + n - 2;
}
