function alternateCase(str) {
  return [...str]
    .map((letter) =>
      letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase()
    )
    .join("");
}
