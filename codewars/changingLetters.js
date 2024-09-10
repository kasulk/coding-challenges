function swap(str) {
  return str
    .split("")
    .map((char) => ("aeiou".includes(char) ? char.toUpperCase() : char))
    .join("");
}
