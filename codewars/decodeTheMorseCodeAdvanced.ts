import { MORSE_CODE } from "./preloaded";

export function decodeBits(bits: string): string {
  const cleanedBits = removeLeadingAndTrailingZeros(bits);
  const rate = getTransmissionRate(cleanedBits);

  return cleanedBits
    .replaceAll("000000".repeat(rate), "   ")
    .replaceAll("111".repeat(rate), "-")
    .replaceAll("000".repeat(rate), " ")
    .replaceAll("1".repeat(rate), ".")
    .replaceAll("0".repeat(rate), "");
}

export function decodeMorse(morseCode: string): string {
  return morseCode
    .split("   ")
    .map((morseWord) =>
      morseWord
        .split(" ")
        .map((morseChar) => MORSE_CODE[morseChar])
        .join("")
    )
    .join(" ");
}

// helpers
export function removeLeadingAndTrailingZeros(bits: string): string {
  return bits.replace(/^0*|0*$/g, "");
}

export function getTransmissionRate(bits: string): number {
  const groups = createArrWithCharGroups(bits);
  const groupsLengths = groups.map((group) => group.length);
  return Math.min(...groupsLengths);
}

export function createArrWithCharGroups(str: string): string[] {
  return str.match(/(.)\1*/g) || [];
}
