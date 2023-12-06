export function strCount(str: string, letter: string): number {
  return [...str].filter((char) => char === letter).length;
}
