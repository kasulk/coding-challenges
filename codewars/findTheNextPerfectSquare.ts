export function findNextSquare(square: number): number {
  const root = Math.sqrt(square);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}
