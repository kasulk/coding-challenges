export function change(str: string): string {
  return [..."abcdefghijklmnopqrstuvwxyz"]
    .map((letter) => (str.toLowerCase().includes(letter) ? 1 : 0))
    .join("");
}
