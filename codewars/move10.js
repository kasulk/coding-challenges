function moveTen(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return str
    .split("")
    .map((char) => {
      const currIndex = alphabet.indexOf(char);
      const newIndex = (currIndex + 10) % 26;
      return alphabet[newIndex];
    })
    .join("");
}
