export function findNextSquare(square: number): number {
  const root = Math.sqrt(square);
  return Number.isInteger(root) ? Math.pow(root + 1, 2) : -1;
}
