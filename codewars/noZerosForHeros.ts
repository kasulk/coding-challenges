export function noBoringZeros(num: number): number {
  return Number(num.toString().replace(/0+$/, ""));
}
