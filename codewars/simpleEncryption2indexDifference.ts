const charRegion = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;-?! '()$%&"`;

export function encrypt(text: string): string {
  console.log("text:", text);

  if (text === null || text === "") return text;

  const caseSwitchedChars = text.split("").map((char, i) => {
    if (!charRegion.includes(char)) throw new Error("möp!");
    return i % 2 === 0 ? char : switchCase(char);
  });

  return caseSwitchedChars
    .map((char, i) => {
      if (!i) return getMirror(char);

      const charIndex = charRegion.indexOf(char);

      const prev = caseSwitchedChars[i - 1];
      const prevIndex = charRegion.indexOf(prev);

      const regionIndexDiff = prevIndex - charIndex;
      const differenceIndex =
        regionIndexDiff < 0
          ? charRegion.length + regionIndexDiff
          : regionIndexDiff;

      return charRegion[differenceIndex];
    })
    .join("");
}

export function decrypt(encryptedText: string): string {
  if (encryptedText === null || encryptedText === "") return encryptedText;

  const decryptedText = encryptedText
    .split("")
    .reduce((result, currChar, i) => {
      let decryptedChar = "";
      if (!charRegion.includes(currChar)) throw new Error("möp!");

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
