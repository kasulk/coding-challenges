export function evensAndOdds(num: number): string {
  const radix = num % 2 === 0 ? 2 : 16;

  return num.toString(radix);
}
