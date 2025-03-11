function solve(str, a, b) {
  const start = str.slice(0, a);
  const middle = str
    .slice(a, b + 1)
    .split("")
    .reverse()
    .join("");
  const end = str.slice(b + 1);

  return start + middle + end;
}
