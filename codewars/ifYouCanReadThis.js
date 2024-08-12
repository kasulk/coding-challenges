function toNato(str) {
  return str
    .replace(/ /g, "")
    .toUpperCase()
    .split("")
    .map((char) => (/[,.!?]/.test(char) ? char : NATO[char]))
    .join(" ");
}
