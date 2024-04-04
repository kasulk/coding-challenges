export function hammingDistance(a: string, b: string): number {
  return [...a].reduce((sum, curr, i) => (curr !== b[i] ? sum + 1 : sum), 0);
}
