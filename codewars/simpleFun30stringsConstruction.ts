export function stringsConstruction(A: string, B: string): number {
  const charNumsA: { [key: string]: number } = {};
  const charNumsB: { [key: string]: number } = {};

  for (let char of A) {
    if (!charNumsA[char]) charNumsA[char] = 0;
    charNumsA[char]++;
  }

  for (let char of B) {
    if (!charNumsB[char]) charNumsB[char] = 0;
    charNumsB[char]++;
  }

  const numCharsAinB = Object.keys(charNumsA).map((char) => {
    if (charNumsB[char] && charNumsA[char] > 1) {
      return Math.trunc(charNumsB[char] / charNumsA[char]);
    }
    return charNumsB[char] || 0;
  });

  return Math.min(...numCharsAinB);
}
