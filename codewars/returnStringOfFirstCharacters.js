function makeString(str) {
  return str
    .split(" ")
    .map((word) => word[0])
    .join("");
}
