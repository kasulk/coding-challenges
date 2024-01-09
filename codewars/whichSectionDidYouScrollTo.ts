export function getSectionId(scroll: number, sizes: number[]) {
  // loop through sizes
  // add them up
  // until greater than scroll (or end of array)

  let sizesSum = 0;

  for (let i = 0; i < sizes.length; i++) {
    sizesSum += sizes[i];

    if (sizesSum > scroll) return i;
  }

  return -1;
}
