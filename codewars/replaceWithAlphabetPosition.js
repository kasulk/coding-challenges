function alphabetPosition(text) {
  return text
    .replace(/[^a-z]/gi, "")
    .toLowerCase()
    .split("")
    .map((letter) => "_abcdefghijklmnopqrstuvwxyz".indexOf(letter))
    .join(" ");
}
