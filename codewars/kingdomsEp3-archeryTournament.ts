const alphabet = [..."abcdefghijklmnopqrstuvwxyz"] as const;
type Letter = (typeof alphabet)[number];
type Arrow = { char: string; score: number; num: number };
type ArrowDict = { [key: Letter]: Arrow };

export function countAndSort(target: string[]): string[] {
  const scoreDict = createScoreDict(target.length);
  const arrowDict = createArrowDict(target, scoreDict);
  const sortedArrows = sortArrowsByScoreOrQuantityOrLetters(arrowDict);
  return sortedArrows.map(({ char }) => char);
}

function createScoreDict(width: number): number[][] {
  const halfWidth = width / 2;
  const halfWidthRoundUp = Math.ceil(halfWidth);
  const firstHalfOfCenterRow = Array(halfWidthRoundUp)
    .fill(0)
    .map((_, i) => ++i);
  const bottomHalfRowsFirstHalfs: number[][] = [firstHalfOfCenterRow];

  for (let i = 0; i < halfWidth - 1; i++) {
    const last = bottomHalfRowsFirstHalfs[i];
    const next = [...last];

    for (let j = 0; j < i + 1; j++) {
      const currDigitIndex = last.length - 1 - j;
      next[currDigitIndex] = next[currDigitIndex] - 1;
    }

    bottomHalfRowsFirstHalfs.push(next);
  }

  const bottomHalfRows = bottomHalfRowsFirstHalfs.map((row) => [
    ...row,
    ...row.slice(0, -1).reverse(),
  ]);

  return [...bottomHalfRows.slice(1).reverse(), ...bottomHalfRows];
}

function createArrowDict(target: string[], scoreDict: number[][]): ArrowDict {
  const arrowDict: ArrowDict = {};

  target.forEach((row, i) => {
    row.split("").forEach((curr, j) => {
      let multiplier = 1;

      if (isArrow(curr)) {
        if (isUpperCase(curr)) {
          multiplier = 2;
          curr = curr.toLowerCase();
        }

        const score = scoreDict[i][j];

        if (!arrowDict[curr]) {
          arrowDict[curr] = { char: curr, score: 0, num: 0 };
        }
        arrowDict[curr].score += score * multiplier;
        arrowDict[curr].num += 1 * multiplier;
      }
    });
  });

  return arrowDict;
}

function sortArrowsByScoreOrQuantityOrLetters(arrowDict: ArrowDict): Arrow[] {
  return Object.values(arrowDict).sort((a, b) => {
    if (a.score === b.score) {
      if (a.num === b.num) return a.char.localeCompare(b.char);
      return b.num - a.num;
    }
    return a.score - b.score;
  });
}

function isUpperCase(char: string): boolean {
  return char === char.toUpperCase();
}

function isArrow(char: string): boolean {
  return char !== "*";
}
