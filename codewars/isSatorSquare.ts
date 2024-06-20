export function isSatorSquare(tablet: string[][]): boolean {
  for (let i = 0; i < tablet.length; i++) {
    const leftToRight = tablet[i].join("");
    const topToBottom = tablet.map((row) => row[i]).join("");
    const bottomToTop = tablet
      .slice()
      .map((row) => row[row.length - 1 - i])
      .reverse()
      .join("");
    const rightToLeft = tablet[tablet.length - 1 - i]
      .slice()
      .reverse()
      .join("");

    if (leftToRight !== topToBottom) return false;
    if (topToBottom !== bottomToTop) return false;
    if (bottomToTop !== rightToLeft) return false;
  }

  return true;
}
