export function score(num: number): number {
  let result = 0;

  for (let i = 1; i <= num; i *= 2) {
    result = result | i;
  }

  return result;
}
