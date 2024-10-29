function makeBackronym(str) {
  return str
    .toUpperCase()
    .split("")
    .map((char) => dict[char])
    .join(" ");
}
