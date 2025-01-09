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
  console.log("encryptedText:", encryptedText);

  if (encryptedText === null || encryptedText === "") return encryptedText;

  const encryptedChars = encryptedText.split("");
  let result = "";

  for (let i = 0; i < encryptedChars.length; i++) {
    const char = encryptedChars[i];
    if (!charRegion.includes(char)) throw new Error("möp!");

    if (!i) {
      result += getMirror(char);
      continue;
    }

    const prev = result[i - 1];
    const prevIndex = charRegion.indexOf(prev);

    const charIndex = charRegion.indexOf(char);
    const regionIndexDiff = charIndex - charRegion.length;

    const decryptedCharIndex =
      (prevIndex - regionIndexDiff) % charRegion.length;
    const decryptedChar = charRegion[decryptedCharIndex];

    result += decryptedChar;
  }

  return switchCaseEverySecondChar(result);
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
