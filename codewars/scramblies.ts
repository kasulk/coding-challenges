export function scramble(str1: string, str2: string): boolean {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let letter of alphabet) {
    const numLetterInStr1 = countCharInStr(letter, str1);
    const numLetterInStr2 = countCharInStr(letter, str2);
    if (numLetterInStr1 < numLetterInStr2) return false;
  }

  return true;
}

function countCharInStr(char: string, str: string): number {
  return str.split(char).length - 1;
}
