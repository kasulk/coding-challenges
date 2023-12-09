export function areaLargestSquare(r: number): number {
  const diameter = 2 * r;
  const a = diameter / Math.sqrt(2);

  return Math.round(a * a);
}
