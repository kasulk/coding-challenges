export function abbreviate(str: string): string {
  const nonletters = str.match(/[^a-z]/gi) || [];
  const words = str.split(/[^a-z]/gi);

  return words
    .map((word, i) => {
      let newWord = "";

      const first = word[0];
      const middle = word.slice(1, word.length - 1).length;
      const last = word.slice(-1);

      if (word.length <= 3) newWord = word;
      else newWord = first + middle + last;

      newWord += nonletters[i] || "";

      return newWord;
    })
    .join("");
}
