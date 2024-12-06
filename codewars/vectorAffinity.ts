export function vectorAffinity(
  xs: Array<number | null>,
  ys: Array<number | null>
): number {
  const maxLen = xs.length > ys.length ? xs.length : ys.length;

  if (!maxLen) return 1;

  const sameValueCount = xs.reduce<number>((acc, currX, i) => {
    const currY = ys[i];
    return currX === currY ? acc + 1 : acc;
  }, 0);

  return sameValueCount / maxLen;
}
