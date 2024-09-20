function solve(a, b) {
  return (
    a
      .split("")
      .filter((char) => !b.includes(char))
      .join("") +
    b
      .split("")
      .filter((char) => !a.includes(char))
      .join("")
  );
}
