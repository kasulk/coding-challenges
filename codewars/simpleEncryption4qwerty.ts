export function encrypt(text: string, key: number): string {
  const keyDigits = digitizeKey(key);

  return text
    .split("")
    .map((char) => encryptChar(char, regions, keyDigits) || char)
    .join("");
}

export function decrypt(text: string, key: number): string {
  const keyDigits = digitizeKey(key);

  return text
    .split("")
    .map((char) => decryptChar(char, regions, keyDigits) || char)
    .join("");
}

const regions = [
  "qwertyuiop",
  "asdfghjkl",
  "zxcvbnm,.",
  "QWERTYUIOP",
  "ASDFGHJKL",
  "ZXCVBNM<>",
];

function digitizeKey(key: number): number[] {
  return key.toString().padStart(3, "0").split("").map(Number);
}

function encryptChar(
  char: string,
  regions: string[],
  keyDigits: number[]
): string | undefined {
  for (let i = 0; i < regions.length; i++) {
    const region = regions[i];
    if (region.includes(char)) {
      const shift = keyDigits[i % 3];
      const charIndex = region.indexOf(char);
      const charIndexShifted = charIndex + shift;
      const charIndexFixed = charIndexShifted % region.length;
      return region[charIndexFixed];
    }
  }
}

function decryptChar(
  char: string,
  regions: string[],
  keyDigits: number[]
): string | undefined {
  for (let i = 0; i < regions.length; i++) {
    const region = regions[i];
    if (region.includes(char)) {
      const shift = keyDigits[i % 3];
      const charIndex = region.indexOf(char);
      const charIndexShifted = charIndex - shift;
      const charIndexFixed =
        charIndexShifted < 0
          ? charIndexShifted + region.length
          : charIndexShifted;
      return region[charIndexFixed];
    }
  }
}
