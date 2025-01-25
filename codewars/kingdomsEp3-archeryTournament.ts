const alphabet = [..."abcdefghijklmnopqrstuvwxyz"] as const;
type Letter = (typeof alphabet)[number];
type Arrow = { char: string; score: number; num: number };
type ArrowDict = { [key: Letter]: Arrow };

export function countAndSort(target: string[]): string[] {
  const scoreDict = createTargetScoreDict(target.length);
  const arrowDict: ArrowDict = {};

  // loop through target
  target.forEach((row, i) => {
    row.split("").forEach((curr, j) => {
      let multiplier = 1;
      // lookup score for each arrow in the dict
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

  // console.log("arrowDict:", arrowDict);

  const sortedArrows = sortArrowLettersByScoreOrQuantityOrLetters(arrowDict);

  console.log("sortedArrows:", sortedArrows);

  return sortedArrows.map(({ char }) => char);
}

function createTargetScoreDict(width: number): number[][] {
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

function sortArrowLettersByScoreOrQuantityOrLetters(
  arrowDict: ArrowDict
): Arrow[] {
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

countAndSort(["z**", "a**", "**z"]); //, ["a", "z"]);

// countAndSort(["z**", "*a*", "***"]); //, ["z", "a"]);

// countAndSort(["z*B", "*a*", "**z"]); //, ["b", "z", "a"]);

// countAndSort(["a****", "*****", "**z**", "a*k**", "****z"]); //, ["a", "k", "z"]);

// countAndSort([ "a*****S", "*******", "**z****", "a*kOA**", "***L**z", "*****gG", "******z", ]);
//, ['s', 'k', 'g', 'z', 'l', 'a', 'o']);

// countAndSort(["*a*", "***", "*b*"]); //, ["a", "b"]);

// countAndSort(["*A*", "*b*", "***"]); //, ["a", "b"]);

// countAndSort(["A"]); //, ["a"]);

// countAndSort(["*"]); //, []);

// countAndSort([ "**f*c*f**", "*Yf*yAF**", "Z*D***e**", "*dy**d*d*", "**Ze***Dd", "**Z*e*Y*A", "Da*yfC***", "F***Y*z**", "zez***f**", ]);
//, [ "c", "a", "e", "f", "z", "d", "y"]);

// 11 1 11 // 0
// 12 2 21 // 1
// 12 3 21 // 2
// 12 2 21 // 3
// 11 1 11 // 4

// 111 1 111 // 0
// 122 2 221 // 1
// 123 3 321 // 2
// 123 4 321 // 3
// 123 3 321 // 4
// 122 2 221 // 5
// 111 1 111 // 6
