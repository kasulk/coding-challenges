export function saleHotdogs(n: number): number {
  if (n >= 10) return n * 90;
  if (n < 5) return n * 100;
  return n * 95;
}
