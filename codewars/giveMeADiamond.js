function diamond(n) {
  if (n % 2 === 0 || n <= 0) return null;

  const roughDiamond = [];

  for (let i = 1; i <= n - 2; i += 2) {
    const spaces = " ".repeat((n - i) / 2);
    const asterisks = "*".repeat(i);
    roughDiamond.push(spaces + asterisks);
  }

  const middleLayer = "*".repeat(n);
  roughDiamond.push(middleLayer);

  for (let i = n - 2; i >= 1; i -= 2) {
    const spaces = " ".repeat((n - i) / 2);
    const asterisks = "*".repeat(i);
    roughDiamond.push(spaces + asterisks);
  }

  return roughDiamond.join("\n") + "\n";
}
