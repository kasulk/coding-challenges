export function mirror(text: string): string {
  const words = text.split(" ");
  const maxWordLen = Math.max(...words.map((word) => word.length));
  const horizontalEdge = "*".repeat(maxWordLen + 4);

  const center = words.map((word) => {
    const revWord = [...word].reverse().join("");
    const whitespace = " ".repeat(maxWordLen - word.length);
    return `* ${revWord + whitespace} *`;
  });

  return [horizontalEdge, ...center, horizontalEdge].join("\n");
}
