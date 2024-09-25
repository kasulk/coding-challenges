export function watchPyramidFromTheSide(chars: string | null): string | null {
  if (!chars) return chars;

  const bottomLen = chars.length * 2 - 1;

  return chars
    .split("")
    .map((char, i) => {
      const currLayerLen = bottomLen - 2 * i;
      const numSpaces = (bottomLen - currLayerLen) / 2;
      const spaces = " ".repeat(numSpaces);

      return spaces + char.repeat(currLayerLen) + spaces;
    })
    .reverse()
    .join("\n");
}

export function watchPyramidFromAbove(chars: string | null): string | null {
  if (!chars) return chars;

  const bottomLen = chars.length * 2 - 1;

  const topToMiddleRows = chars.split("").map((char, i) => {
    const rowCenterLen = bottomLen - 2 * i;

    const rowStart = chars.slice(0, i);
    const rowCenter = char.repeat(rowCenterLen);
    const rowEnd = reverseStr(rowStart);

    return rowStart + rowCenter + rowEnd;
  });

  const middleToBottomRows = [...topToMiddleRows].reverse();

  return [...topToMiddleRows, ...middleToBottomRows.slice(1)].join("\n");
}

export function countVisibleCharactersOfThePyramid(
  chars: string | null
): number {
  if (!chars) return -1;

  const bottomLen = chars.length * 2 - 1;

  return bottomLen ** 2;
}

export function countAllCharactersOfThePyramid(chars: string | null): number {
  if (!chars) return -1;

  const bottomLen = chars.length * 2 - 1;

  return Array(chars.length)
    .fill(0)
    .reduce((acc, _, i) => acc + (bottomLen - i * 2) ** 2, 0);
}

function reverseStr(str: string): string {
  return str.split("").reverse().join("");
}
