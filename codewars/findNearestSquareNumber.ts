export function nearestSq(n: number): number {
  const squareRoot = Math.sqrt(n);

  return squareRoot % 1 === 0 ? squareRoot : Math.round(squareRoot) ** 2;
}
