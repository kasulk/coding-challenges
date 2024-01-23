export function asciiEncrypt(plaintext: string): string {
  return [...plaintext]
    .map((char, i) => {
      const charCode = char.charCodeAt(0);
      return String.fromCharCode(charCode + i);
    })
    .join("");
}

export function asciiDecrypt(ciphertext: string): string {
  return [...ciphertext]
    .map((char, i) => {
      const charCode = char.charCodeAt(0);
      return String.fromCharCode(charCode - i);
    })
    .join("");
}
