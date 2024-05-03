export function encode(str: string): string {
  return [...str].map((char) => "aeiou".indexOf(char) + 1 || char).join("");
}

export function decode(str: string): string {
  return [...str].map((char) => "aeiou"[Number(char) - 1] || char).join("");
}
