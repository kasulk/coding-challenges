export function setTable(theDead: string[]): string[] {
  const freeSeat = "_____";
  const table = Array(12).fill(freeSeat);

  theDead.slice(0, 12).forEach((ghost) => {
    const favoriteSeatNum = getFavoriteSeatNum(ghost);
    const favoriteSeat = table[favoriteSeatNum - 1];

    if (favoriteSeat === freeSeat) table[favoriteSeatNum - 1] = ghost;
    else {
      for (let i = 1; i <= table.length / 2; i++) {
        const seatBeforeNum = (favoriteSeatNum - i + 12) % 12 || 12;
        const seatBefore = table[seatBeforeNum - 1];
        if (seatBefore === freeSeat) {
          table[seatBeforeNum - 1] = ghost;
          break;
        }

        const seatAfterNum = (favoriteSeatNum + i) % 12 || 12;
        const seatAfter = table[seatAfterNum - 1];
        if (seatAfter === freeSeat) {
          table[seatAfterNum - 1] = ghost;
          break;
        }
      }
    }
  });

  return table;
}

function getFavoriteSeatNum(name: string): number {
  const cornersDict: [string, number][] = [
    ["QUTHCRDMZ", 1],
    ["WEVOXING", 4],
    ["JFABKPLY", 7],
    ["SSSSSSSSS", 10],
  ];

  for (const corner of cornersDict) {
    const [featureName, cornerNum] = corner;
    if (featureName.includes(name[0])) return cornerNum;
  }

  throw new Error("Uh-Oh... First char of name is not an upper-case letter!");
}
