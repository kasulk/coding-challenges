export function wordValue(words: string[]): number[] {
  const alphabet = "_abcdefghijklmnopqrstuvwxyz";

  return words.map(
    (word, i) =>
      (i + 1) *
      word
        .split("")
        .reduce(
          (sum, letter) =>
            alphabet.includes(letter) ? sum + alphabet.indexOf(letter) : sum,
          0
        )
  );
}
