function vowelOne(str) {
  return str
    .toLowerCase()
    .split("")
    .map((char) => ("aeiou".includes(char) ? 1 : 0))
    .join("");
}
