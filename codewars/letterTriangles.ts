export function triangle(row: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let nextRow = row;

  while (nextRow.length > 1) {
    nextRow = nextRow
      .split("")
      .reduce((acc, currChar, i) => {
        if (i === nextRow.length - 1) return acc;

        const nextChar = nextRow[i + 1];

        const currCharIndex = alphabet.indexOf(currChar) + 1;
        const nextCharIndex = alphabet.indexOf(nextChar);

        const newCharIndex = (currCharIndex + nextCharIndex) % 26;

        return [...acc, alphabet[newCharIndex]];
      }, [] as string[])
      .join("");
  }

  return nextRow;
}
