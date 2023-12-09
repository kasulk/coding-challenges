export function isNegativeZero(num: number): boolean {
  if (num) return false;

  return 1 / num === -Infinity;
}
