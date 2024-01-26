export function hexWordSum(words: string): number {
  const charValues: { [key: string]: number } = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    S: 5,
    O: 0,
  };

  return words
    .split(" ")
    .map((word) => {
      if (!/[ABCDEFSO]/g.test(word)) return 0;

      const charsReversed = word.split("").reverse();
      let sum = 0;

      for (let i = 0; i < charsReversed.length; i++) {
        const char = charsReversed[i];
        const hexValue = charValues[char];

        if (hexValue === undefined) return 0;

        sum += hexValue * 16 ** i;
      }

      return sum;
    })
    .reduce((sum, num) => sum + num, 0);
}
