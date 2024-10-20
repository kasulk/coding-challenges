export function trailingZeros(num: number): number {
  return num.toString(2).split("1").slice(-1)[0].length;
}
