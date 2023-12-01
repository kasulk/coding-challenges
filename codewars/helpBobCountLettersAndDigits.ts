export function countLettersAndDigits(str: string): number {
  return [...str.matchAll(/[a-z0-9]/gi)].length;
}
