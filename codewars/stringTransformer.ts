export function stringTransformer(str: string) {
  return str
    .split(" ")
    .reverse()
    .map((word) =>
      word
        .split("")
        .map((char) =>
          char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}
