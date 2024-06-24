function diamond(n) {
  if (n % 2 === 0 || n <= 0) return null;
  if (n === 1) return "*\n";
  const roughDiamond = [];

  for (let i = 1; i <= n - 2; i += 2) {
    const spaces = " ".repeat((n - i) / 2);
    const asterisks = "*".repeat(i);
    const layer = spaces + asterisks;
    roughDiamond.push(layer);
  }

  roughDiamond.push("*".repeat(n));

  for (let i = n - 2; i >= 1; i -= 2) {
    const spaces = " ".repeat((n - i) / 2);
    const asterisks = "*".repeat(i);
    const layer = spaces + asterisks;
    roughDiamond.push(layer);
  }

  return roughDiamond.join("\n").replace(/\s*$/, "\n");
}
