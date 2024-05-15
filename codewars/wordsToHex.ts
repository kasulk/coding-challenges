export function wordsToHex(str: string): string[] {
  const charWithCharCode0 = String.fromCharCode(0);

  return str.split(" ").map(
    (word) =>
      "#" +
      word
        .slice(0, 3)
        .padEnd(3, charWithCharCode0)
        .split("")
        .map((char) =>
          char.charCodeAt(0) ? char.charCodeAt(0).toString(16) : "00"
        )
        .join("")
  );
}
