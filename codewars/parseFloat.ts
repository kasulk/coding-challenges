export function parseF(str: string): number | null {
  return parseFloat(str) === 0 ? 0 : parseFloat(str) || null;
}
