export function fruit(reels: string[][], spins: number[]): number {
  const itemsMap =
    "_,Jack,Queen,King,Bar,Cherry,Seven,Shell,Bell,Star,Wild".split(",");

  const spinResults = spins.map((spin, i) => reels[i][spin]);
  const sortedItems = spinResults.sort();
  const result = [...new Set(sortedItems)];
  const points = itemsMap.indexOf(sortedItems[1]);

  if (result.length === 1) return points * 10;
  if (result.length === 2) {
    if (sortedItems[2] === "Wild") return points * 2;
    return points;
  }

  return 0;
}
