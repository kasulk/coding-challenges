export function position(letter: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letterPos = alphabet.indexOf(letter) + 1;

  return `Position of alphabet: ${letterPos}`;
}
