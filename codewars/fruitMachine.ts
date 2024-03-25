export function fruit(reels: string[][], spins: number[]): number {
  const items = "_,Jack,Queen,King,Bar,Cherry,Seven,Shell,Bell,Star,Wild".split(
    ","
  );

  const sortedResults = spins.map((spin, i) => reels[i][spin]).sort();
  const middle = sortedResults[1];
  const points = items.indexOf(middle);
  const differentItems = [...new Set(sortedResults)];

  if (differentItems.length === 1) return points * 10;
  if (differentItems.length === 2) {
    if (sortedResults.filter((result) => result === "Wild").length === 1) {
      return points * 2;
    }

    return points;
  }

  return 0;
}
