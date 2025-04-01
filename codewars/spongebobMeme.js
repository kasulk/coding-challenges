function spongeMeme(sentence) {
  return sentence
    .split("")
    .map((char, i) => (i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
    .join("");
}
