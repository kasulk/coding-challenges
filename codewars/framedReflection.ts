export function mirror(text: string): string {
  const words = text.split(" ");
  const longestWordLen = Math.max(...words.map((word) => word.length));
  const horizontalEdge = "*".repeat(longestWordLen + 4);

  return [
    horizontalEdge,
    words
      .map((word) => {
        const revWord = [...word].reverse().join("");
        const numSpaces = longestWordLen - word.length;
        const spaces = " ".repeat(numSpaces);

        return `* ${revWord + spaces} *`;
      })
      .join("\n"),
    horizontalEdge,
  ].join("\n");
}
