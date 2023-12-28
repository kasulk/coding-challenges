export function hexHash(str: string): number {
  return [...str]
    .map((char) => char.charCodeAt(0).toString(16).split(""))
    .flat()
    .filter((char) => /[\d]/gi.test(char))
    .reduce((sum, num) => sum + Number(num), 0);
}
