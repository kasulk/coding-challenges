function kebabize(str) {
  return (
    str[0] +
    str
      .slice(1)
      .replace(/\d/g, "")
      .split("")
      .map((char) => (char === char.toUpperCase() ? `-${char}` : char))
      .join("")
  ).toLowerCase();
}
