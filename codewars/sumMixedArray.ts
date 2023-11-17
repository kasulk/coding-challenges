export function sumMix(array: (number | string)[]): number {
  return array.map(Number).reduce((sum, num) => sum + num, 0);
}
