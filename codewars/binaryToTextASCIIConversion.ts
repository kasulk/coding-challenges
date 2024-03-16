export function binaryToString(binary: string): string {
  let result = "";

  for (let i = 0; i < binary.length; i += 8) {
    const curr8Bits = binary.slice(i, i + 8);
    const currCharCode = parseInt(curr8Bits, 2);

    result += String.fromCharCode(currCharCode);
  }

  return result;
}
