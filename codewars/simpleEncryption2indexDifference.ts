const charRegion = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;-?! '()$%&"`;

export function encrypt(text: string): string {
  if (text === null || text === "") return text;

  const caseSwitchedText = switchCaseEverySecondChar(text);

  const encryptedText = caseSwitchedText
    .split("")
    .reduce((result, currChar, i) => {
      if (!charRegion.includes(currChar)) throwNotIncludedError(currChar);

      let encryptedChar = "";

      if (!i) encryptedChar = getMirror(currChar);
      else {
        const prevChar = caseSwitchedText[i - 1];
        const prevCharIndex = charRegion.indexOf(prevChar);
        const currCharIndex = charRegion.indexOf(currChar);

        const regionIndexDiff = prevCharIndex - currCharIndex;
        const encryptedCharIndex =
          regionIndexDiff < 0
            ? charRegion.length + regionIndexDiff
            : regionIndexDiff;

        encryptedChar = charRegion[encryptedCharIndex];
      }

      return [...result, encryptedChar];
    }, [] as string[])
    .join("");

  return encryptedText;
}

export function decrypt(encryptedText: string): string {
  if (encryptedText === null || encryptedText === "") return encryptedText;

  const decryptedText = encryptedText
    .split("")
    .reduce((result, currChar, i) => {
      if (!charRegion.includes(currChar)) throwNotIncludedError(currChar);

      let decryptedChar = "";

      if (!i) decryptedChar = getMirror(currChar);
      else {
        const prevChar = result[i - 1];
        const prevCharIndex = charRegion.indexOf(prevChar);
        const currCharIndex = charRegion.indexOf(currChar);

        const regionIndexDiff = currCharIndex - charRegion.length;
        const decryptedCharIndex =
          (prevCharIndex - regionIndexDiff) % charRegion.length;

        decryptedChar = charRegion[decryptedCharIndex];
      }

      return [...result, decryptedChar];
    }, [] as string[])
    .join("");

  return switchCaseEverySecondChar(decryptedText);
}

function switchCase(char: string): string {
  return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}

function switchCaseEverySecondChar(str: string): string {
  return str
    .split("")
    .map((char, i) => (i % 2 === 0 ? char : switchCase(char)))
    .join("");
}

function getMirror(char: string): string {
  const charIndex = charRegion.indexOf(char);
  const mirrorIndex = charRegion.length - 1 - charIndex;
  return charRegion[mirrorIndex];
}

function throwNotIncludedError(char: string): never {
  throw new Error(`"${char}" not included in the region!`);
}
