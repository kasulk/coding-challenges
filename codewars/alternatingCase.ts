export function toAlternatingCase(str: string): string {
  return str
    .split("")
    .map((char) =>
      char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
}
