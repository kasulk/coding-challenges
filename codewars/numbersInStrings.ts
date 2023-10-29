export function solve(str: string): number {
  return Math.max(...str.split(/[^\d]+/).map(Number));
}
