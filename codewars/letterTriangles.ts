export function triangle(str: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let nextRow = str;

  while (nextRow.length > 1) {
    nextRow = nextRow
      .split("")
      .reduce((acc, currChar, i) => {
        const isLastChar = i === nextRow.length - 1;

        if (isLastChar) return acc;

        const nextChar = nextRow[i + 1];
        const currCharIndex = alphabet.indexOf(currChar);
        const nextCharIndex = alphabet.indexOf(nextChar);

        const newCharIndex = (currCharIndex + nextCharIndex + 1) % 26;

        return [...acc, alphabet[newCharIndex]];
      }, [] as string[])
      .join("");
  }

  return nextRow;
}
